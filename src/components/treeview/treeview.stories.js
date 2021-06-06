import UiTreeView from "./treeview.vue";
import UiTreeViewNode from "./node.vue";
import UiThemeProvider from "../theme-provider/theme-provider.vue";

const template = `
  <ui-theme-provider>
    <ui-tree-view v-bind="$props" v-on="$props">
      <template #default="{ node }">
        <ui-tree-view-node
          :node="node"
          :expanded="node.expanded"
          :expandable="true"
          @expand="() => (node.expanded = !node.expanded)"
        >
          <template #text>
            <p>
              {{ node.name }}
            </p>
          </template>
        </ui-tree-view-node>
      </template>
    </ui-tree-view>
  </ui-theme-provider>
`;

const Template = (args, { argTypes }) => ({
  components: { UiThemeProvider, UiTreeView, UiTreeViewNode },
  props: Object.keys(argTypes),
  template
});

export const Default = Template.bind({});
Default.args = {
  nodes: [
    {
      uuid: "1",
      name: "First",
      expanded: true
    },
    {
      uuid: "2",
      name: "Second",
      expanded: false
    },
    {
      uuid: "3",
      name: "Third",
      parentUuid: "1",
      expanded: false
    }
  ],
  nestedNodeKey: "parentUuid",
  uniqueNodeKey: "uuid"
};

export default {
  component: UiTreeView,
  title: "Components/TreeView"
};
