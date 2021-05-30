<template>
  <span :class="['ui-badge', `ui-badge_${color}`]"><slot></slot></span>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UiBadge",
  props: {
    variant: {
      type: String,
      required: true,
      validator(val: string): boolean {
        return ["contained", "outlined"].includes(val);
      }
    },
    color: {
      type: String,
      required: true,
      validator(val: string): boolean {
        return ["black", "blue", "green"].includes(val);
      }
    }
  }
});
</script>

<style lang="scss" src="./index.scss"></style>
