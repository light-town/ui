import Vue from 'vue';
import UiGrid from '../grid/grid';
import UiPortal from '../portal/portal';
import UiMenu from '../menu/menu';
import * as config from '../../config';
import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.js';

var script = Vue.extend({
  name: "UiContextMenu",
  components: {
    UiGrid: UiGrid,
    UiPortal: UiPortal,
    UiMenu: UiMenu
  },
  props: {
    anchor: {
      type: Object,
      required: false,
      default: null
    }
  },
  data: function data() {
    return {
      x: 0,
      y: 0,
      root: null
    };
  },
  computed: {
    anchorRef: function anchorRef() {
      var _this$$slots$default;

      var slotElement = (_this$$slots$default = this.$slots.default) !== null && _this$$slots$default !== void 0 && _this$$slots$default.length ? this.$slots.default[0].componentInstance : null;
      return slotElement || this.anchor;
    }
  },
  mounted: function mounted() {
    if (this.anchorRef) this.anchorRef.$on("contextmenu", this.open);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.anchorRef) this.anchorRef.$off("contextmenu", this.open);
  },
  methods: {
    open: function open(e) {
      var _this = this;

      if (this.root) {
        this.close();
        this.$nextTick(function () {
          _this.$nextTick(function () {
            _this.open(e);
          });
        });
        return;
      }

      this.x = e.pageX;
      this.y = e.pageY;
      this.root = e.target;
      if (this.anchorRef) this.anchorRef._data.opened = true;
      var root = document.getElementById(config.APP_CONTENT_LAYOUT_ID);
      if (!root) return;
      root.addEventListener("click", this.close, {
        once: true,
        capture: true
      });
      root.addEventListener("contextmenu", this.close, {
        once: true,
        capture: true
      });
      window.addEventListener("blur", this.close, {
        once: true
      });
    },
    close: function close(e) {
      var _this2 = this;

      if (!this.$refs.menu) return;
      this.$refs.menu.close();
      this.$nextTick(function () {
        _this2.x = 0;
        _this2.y = 0;
        _this2.root = null;

        _this2.$emit("close", e);
      });
    },
    handleItemClick: function handleItemClick(e) {
      var _this3 = this;

      this.$nextTick(function () {
        _this3.$emit("menu-item-click", e);

        _this3.close(e);
      });
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
    staticClass: "ui-context-menu"
  }, [_vm._t("default"), _vm._v(" "), Boolean(_vm.root) ? _c("ui-portal", {
    attrs: {
      anchor: {
        root: _vm.root
      },
      x: _vm.x,
      y: _vm.y
    }
  }, [_c("ui-menu", {
    ref: "menu",
    on: {
      "menu-item-click": _vm.handleItemClick
    }
  }, [_vm._t("menu-items")], 2)], 1) : _vm._e()], 2);
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
