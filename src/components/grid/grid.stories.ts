import UiGrid from "./grid.vue";
import UiThemeProvider from "../theme-provider/theme-provider.vue";
import { AbstractTemplate, Story } from "../../tools/story";

const template = `
  <ui-theme-provider>
    <ui-grid v-bind="$props" v-on="$props">
      <span class="ui-flex ui-w-16 ui-h-16 ui-flex-fixed ui-flex-center ui-bg-gray-100 ui-rounded-2 ui-m-1">1</span>
      <span class="ui-flex ui-w-16 ui-h-16 ui-flex-fixed ui-flex-center ui-bg-gray-100 ui-rounded-2 ui-m-1">2</span>
      <span class="ui-flex ui-w-16 ui-h-16 ui-flex-fixed ui-flex-center ui-bg-gray-100 ui-rounded-2 ui-m-1">3</span>
      <span class="ui-flex ui-w-16 ui-h-16 ui-flex-fixed ui-flex-center ui-bg-gray-100 ui-rounded-2 ui-m-1">4</span>
      <span class="ui-flex ui-w-16 ui-h-16 ui-flex-fixed ui-flex-center ui-bg-gray-100 ui-rounded-2 ui-m-1">6</span>
      <span class="ui-flex ui-w-16 ui-h-16 ui-flex-fixed ui-flex-center ui-bg-gray-100 ui-rounded-2 ui-m-1">7</span>
    </ui-grid>
  </ui-theme-provider>
`;

const Template: Story = (args, { argTypes }) => ({
  components: { UiThemeProvider, UiGrid },
  props: Object.keys(argTypes),
  template
});

export const Default: AbstractTemplate = Template.bind({});
Default.args = {
  justify: "flex-start",
  alignItems: "flex-start",
  wrap: "nowrap",
  direction: "row",
  contained: true
};

export default {
  component: UiGrid,
  title: "Components/Grid",
  argTypes: {
    justify: {
      control: {
        type: "select",
        options: [
          "center",
          "start",
          "center",
          "end",
          "flex-start",
          "flex-end",
          "space-between",
          "space-around"
        ]
      }
    },
    alignItems: {
      control: {
        type: "select",
        options: [
          "center",
          "start",
          "center",
          "end",
          "flex-start",
          "flex-end",
          "space-between",
          "space-around"
        ]
      }
    },
    wrap: {
      control: {
        type: "select",
        options: ["nowrap", "wrap", "wrap-reverse"]
      }
    },
    direction: {
      control: {
        type: "select",
        options: ["row", "column", "row-reverse", "column-reverse"]
      }
    }
  }
};
