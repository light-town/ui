import UiInput from "./input.vue";
import UiThemeProvider from "../theme-provider/theme-provider.vue";
import { AbstractTemplate, Story } from "../../tools/story";

const template = `
  <ui-theme-provider>
    <ui-input v-bind="$props" v-on="$props" />
  </ui-theme-provider>
`;

const Template: Story = (args, { argTypes }) => ({
  components: { UiThemeProvider, UiInput },
  props: Object.keys(argTypes),
  template
});

export const Default: AbstractTemplate = Template.bind({});
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
