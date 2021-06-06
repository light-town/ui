import UiSkeleton from "./skeleton.vue";
import UiThemeProvider from "../theme-provider/theme-provider.vue";

const template = `
  <ui-theme-provider>
    <ui-skeleton v-bind="$props" v-on="$props" />
  </ui-theme-provider>
`;

const Template = (args, { argTypes }) => ({
  components: { UiThemeProvider, UiSkeleton },
  props: Object.keys(argTypes),
  template
});

export const Default = Template.bind({});
Default.args = {
  width: "128px",
  height: "64px",
  radius: "4px"
};

export default {
  component: UiSkeleton,
  title: "Components/Skeleton"
};
