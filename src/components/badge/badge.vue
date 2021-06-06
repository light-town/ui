<template>
  <span class="ui-badge" :class="[, `ui-badge_${color}`]">
    <slot>{{ title }}</slot>
  </span>
</template>

<script>
export default {
  name: "UiBadge",
  props: {
    variant: {
      type: String,
      required: false,
      default: "contained",
      validator(val) {
        return ["contained", "outlined"].includes(val);
      }
    },
    color: {
      type: String,
      required: false,
      default: "green",
      validator(val) {
        return ["black", "blue", "green"].includes(val);
      }
    },
    title: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>
