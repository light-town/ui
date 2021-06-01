import UiGrid from '../grid/grid';
import UiButton from '../button/button';
import UiPortal from '../portal/portal';
import UiMenu from './menu';
import ArrowIcon from '../../assets/right-arrow.svg';
import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.js';

//
var script = {
  name: "UiMenuItem",
  components: {
    UiGrid: UiGrid,
    UiButton: UiButton,
    UiPortal: UiPortal,
    UiMenu: UiMenu,
    ArrowIcon: ArrowIcon
  },
  activable: true,
  inject: ["_menuContext"],
  props: {
    id: {
      type: String,
      required: true,
      default: null
    }
  },
  data: function data() {
    return {
      anchor: {
        root: null
      }
    };
  },
  computed: {
    existsSubmenu: function existsSubmenu() {
      var _this$$slots$submenu;

      return ((_this$$slots$submenu = this.$slots["submenu:items"]) === null || _this$$slots$submenu === void 0 ? void 0 : _this$$slots$submenu.length) > 0;
    },
    active: function active() {
      return this._menuContext.activeItemId === this.id;
    },
    showSubmenus: function showSubmenus() {
      return this.existsSubmenu && this._menuContext.isAvailableShowing && this.anchor.root && this.active;
    }
  },
  mounted: function mounted() {
    this.anchor = {
      root: this.$el
    };
  }
};

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("ui-button", {
    staticClass: "ui-menu-item",
    class: {
      "ui-menu-item_active": _vm.active
    },
    attrs: {
      component: "li",
      variant: "text"
    },
    nativeOn: {
      click: function click($event) {
        return _vm.$emit("click", $event);
      },
      mouseover: function mouseover($event) {
        return _vm.$emit("mouseover", $event);
      },
      mouseenter: function mouseenter($event) {
        return _vm.$emit("mouseenter", $event);
      },
      mouseleave: function mouseleave($event) {
        return _vm.$emit("mouseleave", $event);
      }
    }
  }, [_c("ui-grid", {
    staticClass: "ui-menu-item__left",
    attrs: {
      "align-items": "center"
    }
  }, [_vm._t("icon"), _vm._v(" "), _vm._t("text")], 2), _vm._v(" "), _c("ui-grid", {
    staticClass: "ui-menu-item__right",
    attrs: {
      "align-items": "center",
      justify: "flex-end"
    }
  }, [_vm._t("controls", [_vm.existsSubmenu ? _c("arrow-icon", {
    staticClass: "ui-menu-item__submenu-expand-icon"
  }) : _vm._e()])], 2), _vm._v(" "), _vm.showSubmenus ? _c("ui-portal", {
    staticClass: "ui-menu-popup",
    attrs: {
      anchor: _vm.anchor,
      position: "right-top"
    }
  }, [_c("ui-menu", {
    ref: "submenu",
    attrs: {
      "root-menu-ref": _vm._menuContext.root
    },
    on: {
      "menu-item-click": function menuItemClick(e) {
        return _vm.$emit("menu-item-click", e);
      }
    }
  }, [_vm._t("submenu:items")], 2)], 1) : _vm._e()], 1);
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
