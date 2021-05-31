const webpack = require("./webpack.config.js");

module.exports = {
  core: {
    builder: "webpack5"
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y"
  ],
  webpackFinal: async config => {
    return {
      ...config,
      module: { ...config.module, rules: webpack.module.rules }
    };
  }
};
