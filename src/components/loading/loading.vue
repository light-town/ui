<template>
  <span class="ui-loading">
    <span
      class="ui-loading__spinner"
      :style="{ width: `${size}px`, height: `${size}px` }"
    ></span>
  </span>
</template>

<script>
export default {
  name: "UiLoading",
  props: {
    size: {
      type: Number,
      required: false,
      default: 16
    }
  }
};
</script>
