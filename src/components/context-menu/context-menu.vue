<template>
  <ui-grid class="ui-context-menu">
    <slot> </slot>
    <ui-portal v-if="Boolean(root)" :anchor="{ root }" :x="x" :y="y">
      <ui-menu ref="menu" @menu-item-click="handleItemClick">
        <slot name="menu-items"></slot>
      </ui-menu>
    </ui-portal>
  </ui-grid>
</template>

<script lang="ts">
import Vue from "vue";
import UiGrid from "../grid/grid.vue";
import UiPortal from "../portal/portal.vue";
import UiMenu from "../menu/menu.vue";
import * as config from "../../config";

export default Vue.extend<any, any, any, any>({
  name: "UiContextMenu",
  components: {
    UiGrid,
    UiPortal,
    UiMenu
  },
  props: {
    anchor: {
      type: Object,
      required: false,
      default: null
    }
  },
  data() {
    return { x: 0, y: 0, root: null };
  },
  computed: {
    anchorRef() {
      const slotElement = this.$slots.default?.length
        ? this.$slots.default[0].componentInstance
        : null;
      return slotElement || this.anchor;
    }
  },
  mounted() {
    if (this.anchorRef) this.anchorRef.$on("contextmenu", this.open);
  },
  beforeDestroy() {
    if (this.anchorRef) this.anchorRef.$off("contextmenu", this.open);
  },
  methods: {
    open(e: any) {
      if (this.root) {
        this.close();
        this.$nextTick(() => {
          this.$nextTick(() => {
            this.open(e);
          });
        });
        return;
      }

      this.x = e.pageX;
      this.y = e.pageY;
      this.root = e.target;

      if (this.anchorRef) this.anchorRef._data.opened = true;

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
      if (!this.$refs.menu) return;

      this.$refs.menu.close();
      this.$nextTick(() => {
        this.x = 0;
        this.y = 0;
        this.root = null;
        this.$emit("close", e);
      });
    },
    handleItemClick(e: any) {
      this.$nextTick(() => {
        this.$emit("menu-item-click", e);
        this.close(e);
      });
    }
  }
});
</script>
