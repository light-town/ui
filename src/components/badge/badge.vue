<template>
  <span class="ui-badge" :class="[, `ui-badge_${color}`]">
    <slot>{{ title }}</slot>
  </span>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UiBadge",
  props: {
    variant: {
      type: String,
      required: false,
      default: "contained",
      validator(val: string): boolean {
        return ["contained", "outlined"].includes(val);
      }
    },
    color: {
      type: String,
      required: false,
      default: "green",
      validator(val: string): boolean {
        return ["black", "blue", "green"].includes(val);
      }
    },
    title: {
      type: String,
      required: false,
      default: ""
    }
  }
});
</script>
