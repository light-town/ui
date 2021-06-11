const webpack = require("./webpack.config.js");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/preset-scss"
  ],
  webpackFinal: async config => {
    return {
      ...config,
      module: { ...config.module, rules: webpack.module.rules }
    };
  }
};
