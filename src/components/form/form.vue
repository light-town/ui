<template>
  <ui-grid component="form" direction="column" @submit.native="onSubmit">
    <slot></slot>
  </ui-grid>
</template>

<script>
import UiGrid from "../grid/grid.vue";

export default {
  name: "UiForm",
  components: {
    UiGrid
  },
  methods: {
    onSubmit(e) {
      this.$emit("submit", e);
    }
  }
};
</script>
