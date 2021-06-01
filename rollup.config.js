import path from "path";
import vue from "rollup-plugin-vue";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import svg from "rollup-plugin-vue-inline-svg";
import postcss from "rollup-plugin-postcss";
import { string } from "rollup-plugin-string";
import typescript from "@rollup/plugin-typescript";
import replace from "@rollup/plugin-replace";
import glob from "glob";

/**
 * Returns true if an import is not considered for inlining into the current file.
 */
const isExternalModule = moduleId => {
  if (
    /*
    SCSS files are considered to be included, because they will be extracted
    later with the help of rollup-plugin-postcss
     */
    moduleId.endsWith(".scss") ||
    /**
     * We want to inline markdown in our documentation, in order to be able to
     * use it directly in Pajamas
     */
    moduleId.endsWith(".md") ||
    /**
     * We want to inline the `<script>` portion of our Vue Single File components
     * Those are added as `modules` with an url like filename:
     * `component.js?rollup-plugin-vue=script.js`
     */
    moduleId.includes("?rollup-plugin-vue=")
  ) {
    return false;
  }

  /**
   * Everything else is an "external module", this means we do not roll up external
   * dependencies (bootstrap-vue / lodash / ...) or internal imports (e.g. ./button)
   *
   * This allows us to make @gitlab/ui treeshakeable.
   */
  return true;
};

/**
 * Fixes import files of compiled files
 *
 * @param {String} code Compiled code of the file
 */
const fixImports = code => {
  return (
    code
      /**
       * Replace the imports of our entries point with their correct relative
       * path that they will have in JS, e.g.
       * from './src/components/base/icon/icon.vue';
       * =>
       * from './components/base/icon/icon.vue';
       */
      .replace(/(from\s+(["']).\/)src\/(.+?\2)/g, "$1$3")
      /**
       * Remove `.vue` from imports, as we are compiling them to JS
       *
       * from './components/base/icon/icon.vue';
       * =>
       * from './components/base/icon/icon';
       */
      .replace(/(from\s+(["']).+?)\.vue(\2)/g, "$1$3")
  );
};

export default glob
  .sync("src/**/!(*.stories|*.spec|*.d).+(ts|vue)")
  .concat("src/index.ts")
  .map(input => {
    const outputFilename = input
      .replace(/^src\//, "")
      .replace(/\.(vue|ts)$/, "");

    return {
      external: isExternalModule,
      input,
      output: {
        format: "esm",
        file: `dist/${outputFilename}.js`
      },
      plugins: [
        replace({
          preventAssignment: true,
          delimiters: ["/* ", " */"],
          include: "index.ts",
          values: {
            "auto-inject-styles": "import './src/scss/main.scss';"
          }
        }),
        postcss({
          extract: true,
          minimize: true,
          sourceMap: true,
          use: [
            [
              "sass",
              { includePaths: [path.resolve(__dirname, "node_modules")] }
            ]
          ]
        }),
        string({
          include: "**/*.md"
        }),
        svg(),
        typescript({
          tsconfig: "./tsconfig.json",
          sourceMap: false
        }),
        vue({
          normalizer: "~vue-runtime-helpers/dist/normalize-component.js"
        }),
        babel({
          presets: ["@babel/preset-env", "@babel/preset-typescript"],
          plugins: [
            ["@babel/plugin-proposal-decorators", { legacy: true }],
            ["@babel/plugin-proposal-class-properties", { loose: true }],
            ["@babel/plugin-proposal-private-methods", { loose: true }],
            [
              "@babel/plugin-proposal-private-property-in-object",
              { loose: true }
            ]
          ],
          extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"],
          exclude: "node_modules/**",
          babelHelpers: "bundled"
        }),
        resolve(),
        commonjs(),
        {
          name: "fix-imports",
          generateBundle(options, bundle) {
            Object.keys(bundle).forEach(key => {
              if (bundle[key].code) {
                // eslint-disable-next-line no-param-reassign
                bundle[key].code = fixImports(bundle[key].code);
              }
            });
          }
        }
      ]
    };
  });
