import Vue from 'vue';
import UiGrid from '../grid/grid';
import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.js';

var script = Vue.extend({
  name: "UiAvatar",
  components: {
    UiGrid: UiGrid
  },
  props: {
    src: {
      type: String,
      required: false,
      default: null
    },
    alt: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: false,
      default: 64,
      validator: function validator(val) {
        return [16, 24, 32, 44, 48, 56, 64, 96, 128].includes(val);
      }
    }
  },
  computed: {
    firstNameSymbol: function firstNameSymbol() {
      return this.name.length ? this.name[0].toUpperCase() : "";
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
    staticClass: "ui-avatar",
    class: "ui-avatar-s" + _vm.size,
    attrs: {
      "align-items": "center",
      justify: "center",
      contained: false
    }
  }, [_vm.src ? _c("img", {
    staticClass: "ui-avatar__img",
    attrs: {
      src: _vm.src,
      alt: _vm.alt
    }
  }) : _c("div", {
    staticClass: "ui-avatar__badge"
  }, [_vm._v("\n    " + _vm._s(_vm.firstNameSymbol) + "\n  ")])]);
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
