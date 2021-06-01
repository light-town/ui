import Vue from 'vue';
import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.js';

var script = Vue.extend({
  name: "UiBadge",
  props: {
    variant: {
      type: String,
      required: false,
      default: "contained",
      validator: function validator(val) {
        return ["contained", "outlined"].includes(val);
      }
    },
    color: {
      type: String,
      required: false,
      default: "green",
      validator: function validator(val) {
        return ["black", "blue", "green"].includes(val);
      }
    },
    title: {
      type: String,
      required: false,
      default: ""
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

  return _c("span", {
    staticClass: "ui-badge",
    class: [, "ui-badge_" + _vm.color]
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.title))])], 2);
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
