import UiButton from "./button.vue";
import UiThemeProvider from "../theme-provider/theme-provider.vue";

const template = `
  <ui-theme-provider>
    <ui-button v-bind="$props" v-on="$props" />
  </ui-theme-provider>
`;

const Template = (args, { argTypes }) => ({
  components: { UiThemeProvider, UiButton },
  props: Object.keys(argTypes),
  template
});

export const Default = Template.bind({});
Default.args = {
  title: "Text",
  type: "button",
  component: "button",
  variant: "contained",
  loading: false
};

export default {
  component: UiButton,
  title: "Components/Button",
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["button", "submit", "reset"]
      }
    },
    component: {
      control: {
        type: "select",
        options: ["button", "li", "input", "a"]
      }
    },
    variant: {
      control: {
        type: "select",
        options: ["contained", "outlined", "text"]
      }
    }
  }
};
