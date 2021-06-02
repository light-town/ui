import Vue from 'vue';
import PortalVue from 'portal-vue';
import UiGrid from '../grid/grid';
import * as config from '../../config';
import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.js';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

Vue.use(PortalVue);
var script = Vue.extend({
  name: "ThemeProvider",
  components: {
    UiGrid: UiGrid
  },
  props: {
    mode: {
      type: String,
      required: false,
      default: "light",
      validator: function validator(val) {
        return ["light", "dark"].includes(val);
      }
    },
    contentClass: {
      type: String,
      required: false,
      default: ""
    }
  },
  data: function data() {
    return _objectSpread2({}, config);
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
    class: "ui-theme_" + _vm.mode,
    attrs: {
      contained: true
    }
  }, [_c("ui-grid", {
    staticClass: "ui-h-full",
    class: _vm.contentClass,
    attrs: {
      id: _vm.APP_CONTENT_LAYOUT_ID,
      contained: true
    }
  }, [_vm._t("default")], 2), _vm._v(" "), _c("portal-target", {
    attrs: {
      name: "modals-location",
      multiple: ""
    }
  })], 1);
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
