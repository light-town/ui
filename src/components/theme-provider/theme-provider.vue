<template>
  <ui-grid :class="`ui-theme_${mode}`" :contained="true">
    <ui-grid :id="APP_CONTENT_LAYOUT_ID" :contained="true">
      <slot></slot>
    </ui-grid>
    <portal-target name="modals-location" multiple> </portal-target>
  </ui-grid>
</template>

<script lang="ts">
import Vue from "vue";
import PortalVue from "portal-vue";
import UiGrid from "../grid/grid.vue";
import * as config from "../../config";

Vue.use(PortalVue);

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
      validator(val: string): boolean {
        return ["light", "dark"].includes(val);
      }
    }
  },
  data() {
    return {
      ...config
    };
  }
});
</script>

<style lang="scss" src="./theme-provider.scss"></style>
