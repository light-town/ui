<template>
  <ui-grid component="form" direction="column" @submit.native="onSubmit">
    <slot></slot>
  </ui-grid>
</template>

<script lang="ts">
import Vue from "vue";
import UiGrid from "../grid/grid.vue";

export default Vue.extend({
  name: "UiForm",
  components: {
    UiGrid
  },
  methods: {
    onSubmit(e: any) {
      this.$emit("submit", e);
    }
  }
});
</script>
