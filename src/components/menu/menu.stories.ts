import UiMenu from "./menu.vue";
import UiMenuItem from "./item.vue";
import UiThemeProvider from "../theme-provider/theme-provider.vue";
import { AbstractTemplate, Story } from "../../tools/story";

const template = `
  <ui-theme-provider>
    <ui-menu>
      <ui-menu-item id="1">
        <template #text>Item 1</template>
      </ui-menu-item>
      <ui-menu-item id="2">
        <template #text>Item 2</template>
      </ui-menu-item>
    </ui-menu>
  </ui-theme-provider>
`;

const Template: Story = (args, { argTypes }) => ({
  components: { UiThemeProvider, UiMenu, UiMenuItem },
  props: Object.keys(argTypes),
  template
});

export const Default: AbstractTemplate = Template.bind({});
Default.args = {};

export default {
  component: UiMenu,
  title: "Components/Menu"
};
