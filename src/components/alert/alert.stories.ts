import { VueConstructor } from "vue";
import UiAlert from "./alert.vue";
import UiThemeProvider from "../theme-provider/theme-provider.vue";

export type Story = (
  args: any[],
  options: { argTypes: any[] }
) => {
  components: Record<string, VueConstructor>;
  props: string[];
  template: string;
};

export type AbstractTemplate = {
  args?: Record<string, any>;
  [key: string]: any;
};

const template = `
  <ui-theme-provider>
    <ui-alert v-bind="$props" v-on="$props" />
  </ui-theme-provider>
`;

const Template: Story = (args, { argTypes }) => ({
  components: { UiThemeProvider, UiAlert },
  props: Object.keys(argTypes),
  template
});

export const Default: AbstractTemplate = Template.bind({});
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
