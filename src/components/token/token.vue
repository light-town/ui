<template>
  <span
    class="ui-token"
    @click.stop="$emit('click')"
    @keydown="$emit('keydown', $event)"
  >
    <slot>
      <p class="ui-token__text">
        {{ title }}
      </p>
    </slot>
    <close-icon
      v-if="!viewOnly"
      class="ui-token__close-btn"
      @click.stop="$emit('close')"
    />
  </span>
</template>

<script>
import CloseIcon from "../../assets/close.svg";

export default {
  name: "UiToken",
  components: {
    CloseIcon
  },
  props: {
    title: {
      type: String,
      required: false,
      default: ""
    },
    viewOnly: {
      type: Boolean,
      required: false,
      default: true
    }
  }
};
</script>

<style lang="scss" src="./token.scss"></style>
