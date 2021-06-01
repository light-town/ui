import Vue from 'vue';
import UiGrid from '../grid/grid';
import UiButton from '../button/button';
import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.js';

var script = Vue.extend({
  name: "UiModal",
  components: {
    UiGrid: UiGrid,
    UiButton: UiButton
  },
  props: {
    open: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: ""
    },
    contentClass: {
      type: String,
      required: false,
      default: ""
    }
  },
  methods: {
    handleBackgroundClick: function handleBackgroundClick(e) {
      this.$emit("close", e);
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
  }, [_vm.open ? _c("ui-grid", {
    staticClass: "ui-modal",
    attrs: {
      "align-items": "center",
      justify: "center"
    }
  }, [_c("ui-grid", {
    staticClass: "ui-modal__background",
    on: {
      click: _vm.handleBackgroundClick
    }
  }), _vm._v(" "), _c("ui-grid", {
    staticClass: "ui-modal__content",
    class: _vm.contentClass,
    attrs: {
      direction: "column"
    }
  }, [_c("ui-grid", {
    staticClass: "ui-modal__header"
  }, [_vm._t("header", [_c("p", {
    staticClass: "ui-modal__header-title"
  }, [_vm._v(_vm._s(_vm.title))])])], 2), _vm._v(" "), _c("ui-grid", {
    staticClass: "ui-modal__body"
  }, [_vm._t("default")], 2), _vm._v(" "), _c("ui-grid", {
    staticClass: "ui-modal__footer",
    attrs: {
      justify: "flex-end"
    }
  }, [_vm._t("footer", [_c("ui-button", {
    attrs: {
      variant: "outlined"
    },
    on: {
      click: function click($event) {
        return _vm.$emit("canceled", $event);
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Cancel")) + "\n          ")]), _vm._v(" "), _c("ui-button", {
    attrs: {
      variant: "contained"
    },
    on: {
      click: function click($event) {
        return _vm.$emit("granted", $event);
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Ok")) + "\n          ")])])], 2)], 1)], 1) : _vm._e()], 1);
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
