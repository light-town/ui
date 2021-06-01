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

<script lang="ts">
import Vue from "vue";
import CloseIcon from "../../assets/close.svg";

export default Vue.extend({
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
});
</script>
