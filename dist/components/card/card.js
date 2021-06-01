import Vue from 'vue';
import UiGrid from '../grid/grid';
import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.js';

//
var script = Vue.extend({
  name: "UiCard",
  components: {
    UiGrid: UiGrid
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
    staticClass: "ui-card",
    attrs: {
      direction: "column"
    }
  }, [_c("ui-grid", {
    staticClass: "ui-card__header",
    attrs: {
      "align-items": "center",
      contained: true
    }
  }, [_vm._t("header")], 2), _vm._v(" "), _c("ui-grid", {
    staticClass: "ui-card__body",
    attrs: {
      "align-items": "center",
      contained: true
    }
  }, [_vm._t("body")], 2), _vm._v(" "), _c("ui-grid", {
    staticClass: "ui-card__footer",
    attrs: {
      "align-items": "center",
      contained: true
    }
  }, [_vm._t("footer")], 2)], 1);
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
