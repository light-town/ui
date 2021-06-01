import Vue from 'vue';
import CloseIcon from '../../assets/close.svg';
import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.js';

var script = Vue.extend({
  name: "UiToken",
  components: {
    CloseIcon: CloseIcon
  },
  props: {
    title: {
      type: String,
      required: false,
      default: ""
    },
    viewOnly: {
      type: Boolean,
      required: false,
      default: true
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
    staticClass: "ui-token",
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.$emit("click");
      },
      keydown: function keydown($event) {
        return _vm.$emit("keydown", $event);
      }
    }
  }, [_vm._t("default", [_c("p", {
    staticClass: "ui-token__text"
  }, [_vm._v("\n      " + _vm._s(_vm.title) + "\n    ")])]), _vm._v(" "), !_vm.viewOnly ? _c("close-icon", {
    staticClass: "ui-token__close-btn",
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.$emit("close");
      }
    }
  }) : _vm._e()], 2);
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
