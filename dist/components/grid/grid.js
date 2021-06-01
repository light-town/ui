import Vue from 'vue';
import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.js';

//
var script = Vue.extend({
  name: "UiGrid",
  props: {
    justify: {
      type: String,
      required: false,
      default: "flex-start",
      validator: function validator(val) {
        return ["center", "start", "center", "end", "flex-start", "flex-end", "space-between", "space-around"].includes(val);
      }
    },
    alignItems: {
      type: String,
      required: false,
      default: "flex-start",
      validator: function validator(val) {
        return ["center", "start", "center", "end", "flex-start", "flex-end", "space-between", "space-around"].includes(val);
      }
    },
    wrap: {
      type: String,
      required: false,
      default: "nowrap",
      validator: function validator(val) {
        return ["nowrap", "wrap", "wrap-reverse"].includes(val);
      }
    },
    direction: {
      type: String,
      default: "row",
      required: false,
      validator: function validator(val) {
        return ["row", "column", "row-reverse", "column-reverse"].includes(val);
      }
    },
    component: {
      type: String,
      required: false,
      default: "div"
    },
    contained: {
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
  var _obj;

  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c(_vm.component, {
    tag: "component",
    class: (_obj = {
      "ui-grid": true
    }, _obj["ui-grid_dir-" + _vm.direction] = _vm.direction, _obj["ui-grid_justify-" + _vm.justify] = _vm.justify, _obj["ui-grid_align-" + _vm.alignItems] = _vm.alignItems, _obj["ui-grid_wrap-" + _vm.wrap] = _vm.wrap, _obj["ui-grid_contained"] = _vm.contained, _obj),
    on: {
      click: function click($event) {
        return _vm.$emit("click", $event);
      },
      contextmenu: function contextmenu($event) {
        return _vm.$emit("contextmenu", $event);
      }
    }
  }, [_vm._t("default")], 2);
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
