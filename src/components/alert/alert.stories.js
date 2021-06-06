import UiAlert from "./alert.vue";
import UiThemeProvider from "../theme-provider/theme-provider.vue";

const template = `
  <ui-theme-provider>
    <ui-alert v-bind="$props" v-on="$props" />
  </ui-theme-provider>
`;

const Template = (args, { argTypes }) => ({
  components: { UiThemeProvider, UiAlert },
  props: Object.keys(argTypes),
  template
});

export const Default = Template.bind({});
Default.args = {
  message: "The some message",
  variant: "info"
};

export default {
  component: UiAlert,
  title: "Components/Alert",
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["info", "warning", "success", "error"]
      }
    }
  }
};
