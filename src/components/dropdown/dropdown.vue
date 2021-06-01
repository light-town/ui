<template>
  <ui-grid aligh-items="center" class="ui-dropdown">
    <slot name="anchor" :open="open" :opened="Boolean(root)">
      <ui-button variant="text" @click="open">{{ title }}</ui-button>
    </slot>
    <ui-portal v-if="Boolean(root)" :anchor="{ root }" position="left-bottom">
      <ui-menu ref="menu">
        <template v-if="loading">
          <slot name="loading">
            <ui-menu-loading></ui-menu-loading>
          </slot>
        </template>
        <template v-else>
          <slot name="dropdown-items" :close="close"> </slot>
        </template>
      </ui-menu>
    </ui-portal>
  </ui-grid>
</template>

<script lang="ts">
import Vue from "vue";
import UiGrid from "../grid/grid.vue";
import UiPortal from "../portal/portal.vue";
import UiButton from "../button/button.vue";
import UiMenu from "../menu/menu.vue";
import UiMenuLoading from "../menu/loading.vue";
import * as config from "../../config";

export default Vue.extend({
  name: "UiDropdown",
  components: {
    UiGrid,
    UiPortal,
    UiButton,
    UiMenu,
    UiMenuLoading
  },
  props: {
    title: {
      type: String,
      required: false,
      default: ""
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return { root: null };
  },
  methods: {
    open(e: any) {
      if (this.root) {
        this.close(e);
        this.$nextTick(() => {
          this.$nextTick(() => {
            this.open(e);
          });
        });
        return;
      }

      this.root = e.currentTarget;

      this.$emit("open");

      const root = document.getElementById(config.APP_CONTENT_LAYOUT_ID);

      if (!root) return;

      root.addEventListener("click", this.close, {
        once: true,
        capture: true
      });
      root.addEventListener("contextmenu", this.close, {
        once: true,
        capture: true
      });

      window.addEventListener("blur", this.close, { once: true });
    },
    close(e: any) {
      if (!this.$refs.menu || !this.root) return;

      (this.$refs.menu as any).close();
      this.$nextTick(() => {
        this.root = null;
        this.$emit("close", e);
      });
    }
  }
});
</script>
