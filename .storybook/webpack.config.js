const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src")
    },
    extensions: ["js", "jsx", "ts", "tsx"]
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ["babel-loader", "vue-svg-loader"]
      },
      {
        test: /\.js$/,
        use: ["babel-loader"]
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
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              additionalData: `
                @import "src/scss/functions.scss";
                @import "src/scss/variables.scss";
                @import "src/scss/utilities.scss";
                @import "src/scss/mixins.scss";
              `
            }
          }
        ]
      },
      {
        test: /\.sass$/,
        use: ["vue-style-loader", "css-loader", "sass-loader?indentedSyntax"]
      }
    ]
  }
};
