import UiLoading from "./loading.vue";
import UiThemeProvider from "../theme-provider/theme-provider.vue";

const template = `
  <ui-theme-provider>
    <ui-loading v-bind="$props" v-on="$props" />
  </ui-theme-provider>
`;

const Template = (args, { argTypes }) => ({
  components: { UiThemeProvider, UiLoading },
  props: Object.keys(argTypes),
  template
});

export const Default = Template.bind({});
Default.args = {
  size: 16
};

export default {
  component: UiLoading,
  title: "Components/Loading"
};
