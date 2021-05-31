import UiAvatar from "./avatar.vue";
import UiThemeProvider from "../theme-provider/theme-provider.vue";
import { AbstractTemplate, Story } from "../../tools/story";

const template = `
  <ui-theme-provider>
    <ui-avatar v-bind="$props" v-on="$props" />
  </ui-theme-provider>
`;

const Template: Story = (args, { argTypes }) => ({
  components: { UiThemeProvider, UiAvatar },
  props: Object.keys(argTypes),
  template
});

export const Default: AbstractTemplate = Template.bind({});
Default.args = {
  size: 64,
  name: "Avatar",
  alt: "Avatar"
};

export default {
  component: UiAvatar,
  title: "Components/Avatar",
  argTypes: {
    size: {
      control: {
        type: "select",
        options: [16, 24, 32, 44, 48, 56, 64, 96, 128]
      }
    }
  }
};
