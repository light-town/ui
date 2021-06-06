import UiToggle from "./toggle.vue";
import UiThemeProvider from "../theme-provider/theme-provider.vue";

const template = `
  <ui-theme-provider>
    <ui-toggle v-bind="$props" v-on="$props" />
  </ui-theme-provider>
`;

const Template = (args, { argTypes }) => ({
  components: { UiThemeProvider, UiToggle },
  props: Object.keys(argTypes),
  template
});

export const Default = Template.bind({});
Default.args = {
  value: false,
  loading: false,
  disabled: false
};

export default {
  component: UiToggle,
  title: "Components/Toggle"
};
