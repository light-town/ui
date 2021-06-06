import UiTable from "./table.vue";
import UiThemeProvider from "../theme-provider/theme-provider.vue";

const template = `
  <ui-theme-provider>
    <ui-table v-bind="$props" v-on="$props" />
  </ui-theme-provider>
`;

const Template = (args, { argTypes }) => ({
  components: { UiThemeProvider, UiTable },
  props: Object.keys(argTypes),
  template
});

export const Default = Template.bind({});
Default.args = {
  fields: [
    {
      key: "uuid",
      label: "Uuid",
      bcClass: "",
      hcClass: ""
    },
    {
      key: "name",
      label: "Name",
      bcClass: "",
      hcClass: ""
    },
    {
      key: "timestamp",
      label: "Timestamp",
      bcClass: "",
      hcClass: ""
    }
  ],
  items: [
    {
      uuid: "1",
      name: "First",
      timestamp: Date.now()
    },
    {
      uuid: "2",
      name: "Second",
      timestamp: Date.now()
    },
    {
      uuid: "3",
      name: "Third",
      timestamp: Date.now()
    }
  ],
  hrClass: "",
  brClass: ""
};

export default {
  component: UiTable,
  title: "Components/Table"
};
