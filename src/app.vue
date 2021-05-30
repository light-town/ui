<template>
  <div class="app-page">
    <ui-theme-provider>
      <ui-toggle />
      <ui-toggle :value="true" />
      <ui-toggle :disabled="true" />
      <ui-toggle :value="true" :disabled="true" />
      <ui-toggle :loading="true" />
      <ui-toggle :value="true" :loading="true" />
    </ui-theme-provider>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import UiThemeProvider from "./components/theme-provider/index.vue";
import UiToggle from "./components/toggle/index.vue";

export default Vue.extend({
  name: "App",
  components: {
    UiToggle,
    UiThemeProvider
  }
});
</script>

<style lang="scss">
@import "./assets/scss/main.scss";

.app-page {
  width: 100%;
  height: 100vh;

  overflow: auto;

  padding: 1rem;
}
</style>
