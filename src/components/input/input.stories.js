import UiInput from "./input.vue";
import UiThemeProvider from "../theme-provider/theme-provider.vue";

const template = `
  <ui-theme-provider>
    <ui-input v-bind="$props" v-on="$props" />
  </ui-theme-provider>
`;

const Template = (args, { argTypes }) => ({
  components: { UiThemeProvider, UiInput },
  props: Object.keys(argTypes),
  template
});

export const Default = Template.bind({});
Default.args = {
  type: "text",
  placeholder: "Enter text"
};

export default {
  component: UiInput,
  title: "Components/Input",
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["text", "password", "email", "url", "tel"]
      }
    }
  }
};
