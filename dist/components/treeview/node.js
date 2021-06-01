import Vue from 'vue';
import UiGrid from '../grid/grid';
import UiButton from '../button/button';
import ArrowIcon from '../../assets/triangle.svg';
import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.js';

var script = Vue.extend({
  name: "UiTreeViewNode",
  components: {
    UiGrid: UiGrid,
    UiButton: UiButton,
    ArrowIcon: ArrowIcon
  },
  props: {
    node: {
      type: Object,
      required: true
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    },
    expanded: {
      type: Boolean,
      required: false,
      default: false
    },
    expandable: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: function data() {
    return {
      opened: false
    };
  }
});

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("ui-button", {
    class: ["ui-tree-view__node", {
      "ui-tree-view__node_active": _vm.active
    }, {
      "ui-tree-view__node_expanded": _vm.expanded
    }, {
      "ui-tree-view__node_hovered": _vm.opened
    }],
    attrs: {
      component: "li",
      variant: "text"
    },
    on: {
      click: function click($event) {
        return _vm.$emit("click", $event);
      }
    },
    nativeOn: {
      contextmenu: function contextmenu($event) {
        return _vm.$emit("contextmenu", $event);
      }
    }
  }, [_c("ui-grid", {
    staticClass: "ui-tree-view__node__left",
    attrs: {
      "align-items": "center"
    }
  }, [_c("ui-button", {
    staticClass: "ui-tree-view__node__btn",
    class: {
      "ui-tree-view__node__btn_hidden": !_vm.expandable
    },
    attrs: {
      variant: "text",
      disabled: !_vm.expandable
    },
    nativeOn: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.$emit("expand", $event);
      }
    }
  }, [_c("arrow-icon", {
    staticClass: "ui-tree-view__node__btn__icon"
  })], 1)], 1), _vm._v(" "), _c("ui-grid", {
    attrs: {
      "align-items": "center"
    }
  }, [_vm._t("icon", null, {
    node: _vm.node
  }), _vm._v(" "), _vm._t("text", null, {
    node: _vm.node
  })], 2)], 1);
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
