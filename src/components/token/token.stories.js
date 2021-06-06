import UiToken from "./token.vue";
import UiThemeProvider from "../theme-provider/theme-provider.vue";

const template = `
  <ui-theme-provider>
    <ui-token v-bind="$props" v-on="$props" />
  </ui-theme-provider>
`;

const Template = (args, { argTypes }) => ({
  components: { UiThemeProvider, UiToken },
  props: Object.keys(argTypes),
  template
});

export const Default = Template.bind({});
Default.args = {
  viewOnly: true,
  title: "Token"
};

export default {
  component: UiToken,
  title: "Components/Token"
};
