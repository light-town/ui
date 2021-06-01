<template>
  <ui-grid component="li" class="ui-menu-title">
    <p class="ui-menu-title__text">{{ text }}</p>
  </ui-grid>
</template>

<script>
import UiGrid from "../grid/grid.vue";

export default {
  name: "UiMenuTitle",
  components: {
    UiGrid
  },
  props: {
    text: {
      type: String,
      required: true,
      default: ""
    }
  }
};
</script>
