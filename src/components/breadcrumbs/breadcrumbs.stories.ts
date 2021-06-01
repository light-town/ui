import UiBreadcrumbs from "./breadcrumbs.vue";
import UiThemeProvider from "../theme-provider/theme-provider.vue";
import { AbstractTemplate, Story } from "../../tools/story";

const template = `
  <ui-theme-provider>
    <ui-breadcrumbs v-bind="$props" v-on="$props" />
  </ui-theme-provider>
`;

const Template: Story = (args, { argTypes }) => ({
  components: { UiThemeProvider, UiBreadcrumbs },
  props: Object.keys(argTypes),
  template
});

export const Default: AbstractTemplate = Template.bind({});
Default.args = {
  items: [
    {
      uuid: "1",
      name: "Folder 1"
    },
    {
      uuid: "2",
      name: "Folder 2"
    },
    {
      uuid: "3",
      name: "Folder 3"
    }
  ],
  uniqueKey: "uuid",
  labelKey: "name"
};

export default {
  component: UiBreadcrumbs,
  title: "Components/Breadcrumbs"
};
