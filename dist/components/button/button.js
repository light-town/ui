import Vue from 'vue';
import UiLoading from '../loading/loading';
import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.js';

var script = Vue.extend({
  name: "UiButton",
  components: {
    UiLoading: UiLoading
  },
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
      validator: function validator(val) {
        return ["button", "submit", "reset"].includes(val);
      }
    },
    component: {
      type: String,
      required: false,
      default: "button",
      validator: function validator(val) {
        return ["button", "li", "input", "a"].includes(val);
      }
    },
    variant: {
      type: String,
      required: false,
      default: "contained",
      validator: function validator(val) {
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

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c(_vm.component, {
    tag: "component",
    class: ["ui-btn", "ui-btn--" + _vm.variant, {
      "ui-btn_loading": _vm.loading
    }],
    attrs: {
      type: _vm.type,
      disabled: _vm.loading
    },
    on: {
      click: function click($event) {
        return _vm.$emit("click", $event);
      }
    }
  }, [_vm.loading ? _c("ui-loading", {
    attrs: {
      size: 14
    }
  }) : _vm._t("default", [_vm._v("\n    " + _vm._s(_vm.title) + "\n  ")])], 2);
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
