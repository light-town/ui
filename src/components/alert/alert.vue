<template>
  <ui-grid align-items="center" :class="['ui-alert', `ui-alert_${severity}`]">
    <error-icon v-if="severity === 'error'" class="ui-alert__icon"></error-icon>
    <warning-icon
      v-if="severity === 'warning'"
      class="ui-alert__icon"
    ></warning-icon>
    <check-icon
      v-if="severity === 'success'"
      class="ui-alert__icon"
    ></check-icon>
    <info-icon v-if="severity === 'info'" class="ui-alert__icon"></info-icon>
    <p class="ui-alert__text">
      {{ message }}
    </p>
  </ui-grid>
</template>

<script lang="ts">
import Vue from "vue";
import UiGrid from "../grid/index.vue";
import ErrorIcon from "../../assets/cancel.svg";
import WarningIcon from "../../assets/warning.svg";
import CheckIcon from "../../assets/check.svg";
import InfoIcon from "../../assets/info.svg";

export default Vue.extend({
  name: "UiAlert",
  components: {
    UiGrid,
    ErrorIcon,
    WarningIcon,
    CheckIcon,
    InfoIcon
  },
  props: {
    message: {
      type: String,
      required: false,
      default: ""
    },
    severity: {
      type: String,
      required: true,
      validator(val: string): boolean {
        return ["info", "warning", "success", "error"].includes(val);
      }
    }
  }
});
</script>
