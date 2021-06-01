<template>
  <component
    :is="component"
    :type="type"
    :class="['ui-btn', `ui-btn--${variant}`, { 'ui-btn_loading': loading }]"
    :disabled="loading"
    @click="$emit('click', $event)"
  >
    <ui-loading v-if="loading" :size="14"></ui-loading>
    <slot v-else>
      {{ title }}
    </slot>
  </component>
</template>

<script lang="ts">
import Vue from "vue";
import UiLoading from "../loading/loading.vue";

export default Vue.extend({
  name: "UiButton",
  components: { UiLoading },
  props: {
    title: {
      type: String,
      required: false,
      default: ""
    },
    type: {
      type: String,
      required: false,
      default: "button",
      validator(val: string): boolean {
        return ["button", "submit", "reset"].includes(val);
      }
    },
    component: {
      type: String,
      required: false,
      default: "button",
      validator(val: string): boolean {
        return ["button", "li", "input", "a"].includes(val);
      }
    },
    variant: {
      type: String,
      required: false,
      default: "contained",
      validator(val: string): boolean {
        return ["contained", "outlined", "text"].includes(val);
      }
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  }
});
</script>
