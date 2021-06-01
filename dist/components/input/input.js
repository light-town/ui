import Vue from 'vue';
import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.js';

var script = Vue.extend({
  name: "UiInput",
  props: {
    type: {
      type: String,
      required: false,
      default: "text",
      validator: function validator(val) {
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
    handleInput: function handleInput(e) {
      var _e$target;

      this.$emit("input", (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value);
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

  return _c("input", {
    staticClass: "ui-input",
    attrs: {
      type: _vm.type,
      placeholder: _vm.placeholder
    },
    domProps: {
      value: _vm.value
    },
    on: {
      input: function input($event) {
        $event.preventDefault();
        return _vm.handleInput($event);
      }
    }
  });
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
