<template>
  <ui-grid>
    <slot
      name="anchor"
      :selectedItem="selected"
      :opened="Boolean(root)"
      :open="open"
    >
    </slot>
    <ui-portal v-if="Boolean(root)" :anchor="{ root }" position="left-bottom">
      <ui-menu ref="menu" class="ui-select__items">
        <template v-if="items.length">
          <template v-for="item in items">
            <slot
              name="item-template"
              :item="item"
              :selectedItem="selected"
              :select="handleItemClick.bind(this, item)"
            >
              <ui-menu-item :id="item.name" @click="handleItemClick(item)">
                <template #text>
                  {{ item.name }}
                </template>
              </ui-menu-item>
            </slot>
          </template>
        </template>
        <template v-else-if="loading">
          <slot name="loading-template">
            <ui-menu-loading></ui-menu-loading>
          </slot>
        </template>
        <template v-else>
          <slot name="empty-template"></slot>
        </template>
      </ui-menu>
    </ui-portal>
  </ui-grid>
</template>

<script>
import UiGrid from "../grid/grid.vue";
import UiPortal from "../portal/portal.vue";
import UiMenu from "../menu/menu.vue";
import UiMenuItem from "../menu/item.vue";
import UiMenuLoading from "../menu/loading.vue";
import * as config from "../../config";

export default {
  name: "UiSelect",
  components: {
    UiGrid,
    UiPortal,
    UiMenu,
    UiMenuLoading,
    UiMenuItem
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    value: {
      type: Object,
      required: true
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return { root: null, selected: null };
  },
  watch: {
    value() {
      this.selected = this.value;
    }
  },
  created() {
    this.selected = this.value;
  },
  mounted() {
    window.addEventListener("blur", this.close);
  },
  beforeDestroy() {
    window.removeEventListener("blur", this.close);
  },
  methods: {
    handleItemClick(item) {
      this.selected = item;

      this.$emit("input", this.selected);
      this.close(null);
    },
    open(e) {
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

      this.$nextTick(() => {
        this.$nextTick(() => {
          this.$refs.menu.setActiveItem(this.selected?.name);
        });
      });
    },
    close(e) {
      if (!this.$refs.menu || !this.root) return;

      this.$refs.menu.close(e);
      this.$nextTick(() => {
        this.root = null;
        this.$emit("close", e);
      });
    }
  }
};
</script>
