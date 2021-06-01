import Vue from 'vue';
import UiGrid from '../grid/grid';
import ErrorIcon from '../../assets/cancel.svg';
import WarningIcon from '../../assets/warning.svg';
import CheckIcon from '../../assets/check.svg';
import InfoIcon from '../../assets/info.svg';
import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.js';

var script = Vue.extend({
  name: "UiAlert",
  components: {
    UiGrid: UiGrid,
    ErrorIcon: ErrorIcon,
    WarningIcon: WarningIcon,
    CheckIcon: CheckIcon,
    InfoIcon: InfoIcon
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
      validator: function validator(val) {
        return ["info", "warning", "success", "error"].includes(val);
      }
    }
  }
});

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("ui-grid", {
    class: ["ui-alert", "ui-alert_" + _vm.variant],
    attrs: {
      "align-items": "center",
      contained: true
    }
  }, [_vm.variant === "error" ? _c("error-icon", {
    staticClass: "ui-alert__icon"
  }) : _vm._e(), _vm._v(" "), _vm.variant === "warning" ? _c("warning-icon", {
    staticClass: "ui-alert__icon"
  }) : _vm._e(), _vm._v(" "), _vm.variant === "success" ? _c("check-icon", {
    staticClass: "ui-alert__icon"
  }) : _vm._e(), _vm._v(" "), _vm.variant === "info" ? _c("info-icon", {
    staticClass: "ui-alert__icon"
  }) : _vm._e(), _vm._v(" "), _c("p", {
    staticClass: "ui-alert__text"
  }, [_vm._v("\n    " + _vm._s(_vm.message) + "\n  ")])], 1);
};

var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/__vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

export default __vue_component__;
