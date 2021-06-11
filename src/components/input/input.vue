<template>
  <input
    class="ui-input"
    :type="type"
    :placeholder="placeholder"
    :value="value"
    @input.prevent="handleInput"
  />
</template>

<script>
export default {
  name: "UiInput",
  props: {
    type: {
      type: String,
      required: false,
      default: "text",
      validator(val) {
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
    handleInput(e) {
      this.$emit("input", e.target?.value);
    }
  }
};
</script>

<style lang="scss" src="./input.scss"></style>
