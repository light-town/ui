module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "src/scss/functions.scss";
          @import "src/scss/variables.scss";
          @import "src/scss/utilities.scss";
          @import "src/scss/mixins.scss";
        `
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader")
      .end();
  }
};
