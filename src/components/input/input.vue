<template>
  <input
    class="ui-input"
    :type="type"
    :placeholder="placeholder"
    :value="value"
    @input.prevent="handleInput"
  />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UiInput",
  props: {
    type: {
      type: String,
      required: false,
      default: "text",
      validator(val: string): boolean {
        return ["text", "password", "email", "url", "tel"].includes(val);
      }
    },
    placeholder: {
      type: String,
      required: false,
      default: ""
    },
    value: {
      type: String,
      required: false,
      default: ""
    }
  },
  methods: {
    handleInput(e: InputEvent): void {
      this.$emit("input", (e.target as HTMLInputElement)?.value);
    }
  }
});
</script>
