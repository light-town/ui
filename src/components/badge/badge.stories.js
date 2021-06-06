import UiBadge from "./badge.vue";
import UiThemeProvider from "../theme-provider/theme-provider.vue";

const template = `
  <ui-theme-provider>
    <ui-badge v-bind="$props" v-on="$props" />
  </ui-theme-provider>
`;

const Template = (args, { argTypes }) => ({
  components: { UiThemeProvider, UiBadge },
  props: Object.keys(argTypes),
  template
});

export const Default = Template.bind({});
Default.args = {
  variant: "contained",
  color: "green",
  title: "Badge"
};

export default {
  component: UiBadge,
  title: "Components/Badge",
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["contained", "outlined"]
      }
    },
    color: {
      control: {
        type: "select",
        options: ["black", "blue", "green"]
      }
    }
  }
};
