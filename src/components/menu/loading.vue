<template>
  <ui-grid component="li" class="ui-menu-loading" justify="center">
    <ui-loading></ui-loading>
  </ui-grid>
</template>

<script>
import UiGrid from "../grid/grid.vue";
import UiLoading from "../loading/loading.vue";

export default {
  name: "UiMenuLoading",
  components: {
    UiGrid,
    UiLoading
  },
  props: {
    weight: {
      type: Number,
      required: false,
      default: 1
    }
  }
};
</script>
