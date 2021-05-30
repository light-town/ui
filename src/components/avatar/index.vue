<template>
  <ui-grid class="ui-avatar" :class="`ui-avatar-s${size}`">
    <img v-if="src" class="ui-avatar__img" :src="src" :alt="alt" />
    <div v-else class="ui-avatar__badge">
      {{ firstNameSymbol }}
    </div>
  </ui-grid>
</template>

<script lang="ts">
import Vue from "vue";
import UiGrid from "../grid/index.vue";

export default Vue.extend({
  name: "UiAvatar",
  components: {
    UiGrid
  },
  props: {
    src: {
      type: String,
      required: false,
      default: null
    },
    alt: {
      type: String,
      required: false,
      default: "avatar"
    },
    name: {
      type: String,
      required: false,
      default: ""
    },
    size: {
      type: Number,
      required: false,
      default: 64,
      validator(val: number): boolean {
        return [16, 24, 32, 44, 48, 56, 64, 96, 128].includes(val);
      }
    }
  },
  computed: {
    firstNameSymbol(): string {
      return this.name.length ? this.name[0] : "";
    }
  }
});
</script>

<style lang="scss" src="./index.scss"></style>
