<template>
  <ui-grid :class="`ui-theme_${mode}`" :contained="true">
    <ui-grid
      :id="APP_CONTENT_LAYOUT_ID"
      class="ui-h-full"
      :class="contentClass"
      :contained="true"
    >
      <slot></slot>
    </ui-grid>
    <portal-target name="modals-location" multiple> </portal-target>
  </ui-grid>
</template>

<script>
import Vue from "vue";
import PortalVue from "portal-vue";
import UiGrid from "../grid/grid.vue";
import * as config from "../../config";

Vue.use(PortalVue);

export default {
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
    },
    contentClass: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      ...config
    };
  }
};
</script>
