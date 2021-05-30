<template>
  <ui-grid id="theme" :data-theme-mode="mode">
    <slot></slot>
  </ui-grid>
</template>

<script lang="ts">
import Vue from "vue";
import UiGrid from "../grid/index.vue";

export default Vue.extend({
  name: "ThemeProvider",
  components: {
    UiGrid
  },
  props: {
    mode: {
      type: String,
      required: false,
      default: "light",
      validator(val) {
        return ["light", "dark"].includes(val);
      }
    }
  }
});
</script>

<style lang="scss" src="./index.scss"></style>
