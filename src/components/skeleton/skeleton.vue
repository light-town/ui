<template>
  <span
    class="ui-skeleton ui-skeleton__pulse"
    :style="{ width, height, borderRadius: radius }"
  >
  </span>
</template>

<script>
export default {
  name: "UiSkeleton",
  props: {
    width: {
      type: String,
      required: true
    },
    height: {
      type: String,
      required: true
    },
    radius: {
      type: String,
      required: false,
      default: "0.25rem"
    }
  }
};
</script>

<style lang="scss" src="./skeleton.scss"></style>
