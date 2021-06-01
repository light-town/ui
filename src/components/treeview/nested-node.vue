<template>
  <ui-grid component="li" direction="column" :contained="true">
    <slot
      :node="node"
      :nestedNodes="nestedNodes(node)"
      :nested-node-key="nestedNodeKey"
      :unique-node-key="uniqueNodeKey"
    ></slot>
    <ui-grid
      v-if="node.expanded"
      component="ul"
      direction="column"
      class="ui-tree-view__nested-nodes"
      :contained="true"
    >
      <nested-node
        v-for="node in nestedNodes(node)"
        :key="node[uniqueNodeKey]"
        :node="node"
        :nested-node-key="nestedNodeKey"
        :unique-node-key="uniqueNodeKey"
      >
        <template #default="{ node, nestedNodes }">
          <slot
            :node="node"
            :nestedNodes="nestedNodes"
            :nested-node-key="nestedNodeKey"
            :unique-node-key="uniqueNodeKey"
          ></slot>
        </template>
      </nested-node>
    </ui-grid>
  </ui-grid>
</template>

<script>
import UiGrid from "../grid/grid.vue";

export default {
  name: "NestedNode",
  components: {
    UiGrid
  },
  inject: ["tree-view-data"],
  props: {
    node: {
      type: Object,
      required: true
    },
    nestedNodeKey: {
      type: String,
      required: true
    },
    uniqueNodeKey: {
      type: String,
      required: true
    }
  },
  computed: {
    nodes() {
      return this["tree-view-data"].nodes;
    }
  },
  methods: {
    nestedNodes(node) {
      return this.nodes.filter(
        n =>
          n[this.uniqueNodeKey] !== node[this.uniqueNodeKey] &&
          n[this.nestedNodeKey] === node[this.uniqueNodeKey]
      );
    }
  }
};
</script>
