<template>
  <ui-grid
    align-items="center"
    :class="['ui-alert', `ui-alert_${variant}`]"
    :contained="true"
  >
    <error-icon v-if="variant === 'error'" class="ui-alert__icon"></error-icon>
    <warning-icon
      v-if="variant === 'warning'"
      class="ui-alert__icon"
    ></warning-icon>
    <check-icon
      v-if="variant === 'success'"
      class="ui-alert__icon"
    ></check-icon>
    <info-icon v-if="variant === 'info'" class="ui-alert__icon"></info-icon>
    <p class="ui-alert__text">
      {{ message }}
    </p>
  </ui-grid>
</template>

<script>
import UiGrid from "../grid/grid.vue";
import ErrorIcon from "../../assets/cancel.svg";
import WarningIcon from "../../assets/warning.svg";
import CheckIcon from "../../assets/check.svg";
import InfoIcon from "../../assets/info.svg";

export default {
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
      required: true
    },
    variant: {
      type: String,
      required: false,
      default: "info",
      validator(val) {
        return ["info", "warning", "success", "error"].includes(val);
      }
    }
  }
};
</script>
