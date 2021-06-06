import UiContextMenu from "./context-menu.vue";
import UiGrid from "../grid/grid.vue";
import UiThemeProvider from "../theme-provider/theme-provider.vue";

const template = `
  <ui-theme-provider>
    <ui-context-menu>
      <ui-grid
        class="ui-flex ui-w-16 ui-h-16 ui-flex-fixed ui-flex-center ui-bg-gray-50 ui-rounded-2 ui-m-1"
        @contextmenu.native.prevent="$emit('contextmenu')"
      >
        Right Click Me
      </ui-grid>
    </ui-context-menu>
  </ui-theme-provider>
`;

const Template = (args, { argTypes }) => ({
  components: { UiThemeProvider, UiGrid, UiContextMenu },
  props: Object.keys(argTypes),
  template
});

export const Default = Template.bind({});
Default.args = {};

export default {
  component: UiContextMenu,
  title: "Components/ContextMenu"
};
