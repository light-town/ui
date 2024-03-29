const stylesheetsRequireCtx = require.context(
  "../src/scss",
  true,
  /(storybook)\.scss$/
);

stylesheetsRequireCtx("./storybook.scss");

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
