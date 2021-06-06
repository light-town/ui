<template>
  <ui-grid direction="column" class="ui-card">
    <ui-grid align-items="center" class="ui-card__header" :contained="true">
      <slot name="header"></slot>
    </ui-grid>
    <ui-grid align-items="center" class="ui-card__body" :contained="true">
      <slot name="body"></slot>
    </ui-grid>
    <ui-grid align-items="center" class="ui-card__footer" :contained="true">
      <slot name="footer"></slot>
    </ui-grid>
  </ui-grid>
</template>

<script>
import UiGrid from "../grid/grid.vue";

export default {
  name: "UiCard",
  components: {
    UiGrid
  }
};
</script>
