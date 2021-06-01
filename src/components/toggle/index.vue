<template>
  <ui-button
    role="switch"
    variant="text"
    class="ui-toggle"
    :class="{ 'ui-toggle_checked': state }"
    @click="toggle"
    :disabled="disabled"
  >
    <span v-if="!loading" class="ui-toggle__icon">
      <check-icon v-if="state" />
      <cross-icon v-else />
    </span>
    <ui-loading v-else />
  </ui-button>
</template>

<script lang="ts">
import Vue from "vue";
import UiButton from "../button/button.vue";
import UiLoading from "../loading/loading.vue";
import CheckIcon from "../../assets/check-2.svg";
import CrossIcon from "../../assets/cross.svg";

export default Vue.extend({
  name: "UiToggle",
  components: {
    UiButton,
    UiLoading,
    CheckIcon,
    CrossIcon
  },
  props: {
    value: {
      type: Boolean,
      required: false,
      default: false
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      state: false
    };
  },
  watch: {
    value(): void {
      this.state = this.value;
    }
  },
  created(): void {
    this.state = this.value;
  },
  methods: {
    toggle(): void {
      if (this.loading || this.disabled) return;

      this.state = !this.state;

      this.$emit("input", this.state);
    }
  }
});
</script>
