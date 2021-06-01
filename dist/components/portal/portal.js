import Vue from 'vue';
import PortalContent from './content';
import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.js';

var script = Vue.extend({
  name: "UiPortal",
  components: {
    PortalContent: PortalContent
  },
  props: {
    anchor: {
      type: Object,
      required: false,
      default: null
    },
    position: {
      type: String,
      required: false,
      default: "left-top",
      validator: function validator(val) {
        return ["left-top", "left-bottom", "right-top", "right-bottom"].includes(val);
      }
    },
    contentClass: {
      type: String,
      required: false,
      default: ""
    },
    x: {
      type: Number,
      required: false,
      default: null
    },
    y: {
      type: Number,
      required: false,
      default: null
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

  return _c("portal", {
    attrs: {
      to: "modals-location"
    }
  }, [_c("portal-content", {
    attrs: {
      anchor: _vm.anchor,
      position: _vm.position,
      x: _vm.x,
      y: _vm.y
    },
    nativeOn: {
      keydown: function keydown($event) {
        return _vm.$emit("keydown", $event);
      }
    }
  }, [_vm._t("default")], 2)], 1);
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
