const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    index: [
      path.resolve(__dirname, "src", "index.ts"),
      path.resolve(__dirname, "src/scss", "index.scss")
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist")
  },
  mode: "development",
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].min.css"
    })
  ],
  optimization: {
    minimize: process.env.PRO,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()]
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@/": path.resolve(__dirname, "src"),
      "~/": path.resolve(__dirname, "src")
    },
    extensions: ["*", ".js", ".vue", ".json", ".ts"]
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ["babel-loader", "vue-svg-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.ts$/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: { appendTsSuffixTo: [/\.vue$/] }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            scss: ["vue-style-loader", "css-loader", "sass-loader"],
            sass: [
              "vue-style-loader",
              "css-loader",
              "sass-loader?indentedSyntax"
            ],
            ts: "babel-loader!ts-loader"
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader?indentedSyntax"
        ]
      }
    ]
  }
};
