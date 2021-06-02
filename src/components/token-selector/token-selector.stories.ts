import UiTokenSelector from "./token-selector.vue";
import UiThemeProvider from "../theme-provider/theme-provider.vue";
import { AbstractTemplate, Story } from "../../tools/story";

const template = `
  <ui-theme-provider>
    <ui-token-selector v-bind="$props" v-on="$props">
    </ui-token-selector>
  </ui-theme-provider>
`;

const Template: Story = (args, { argTypes }) => ({
  components: { UiThemeProvider, UiTokenSelector },
  props: Object.keys(argTypes),
  template
});

export const Default: AbstractTemplate = Template.bind({});
Default.args = {
  placeholder: "New Token",
  dropdownItems: [
    {
      id: "1",
      name: "First"
    },
    {
      id: "2",
      name: "Second"
    },
    {
      id: "3",
      name: "Third"
    }
  ],
  hideDropdownWithNoItems: false,
  allowUserDefinedTokens: true,
  loading: false,
  value: [
    {
      id: "1",
      name: "First"
    }
  ]
};

export default {
  component: UiTokenSelector,
  title: "Components/TokenSelector"
};
