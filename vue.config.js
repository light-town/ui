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
  }
};
