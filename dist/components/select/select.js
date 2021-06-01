import Vue from 'vue';
import UiGrid from '../grid/grid';
import UiPortal from '../portal/portal';
import UiMenu from '../menu/menu';
import UiMenuItem from '../menu/item';
import UiMenuLoading from '../menu/loading';
import * as config from '../../config';
import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.js';

var script = Vue.extend({
  name: "UiSelect",
  components: {
    UiGrid: UiGrid,
    UiPortal: UiPortal,
    UiMenu: UiMenu,
    UiMenuLoading: UiMenuLoading,
    UiMenuItem: UiMenuItem
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    value: {
      type: Object,
      required: true
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: function data() {
    return {
      root: null,
      selected: null
    };
  },
  watch: {
    value: function value() {
      this.selected = this.value;
    }
  },
  created: function created() {
    this.selected = this.value;
  },
  mounted: function mounted() {
    window.addEventListener("blur", this.close);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener("blur", this.close);
  },
  methods: {
    handleItemClick: function handleItemClick(item) {
      this.selected = item;
      this.$emit("input", this.selected);
      this.close(null);
    },
    open: function open(e) {
      var _this = this;

      if (this.root) {
        this.close(e);
        this.$nextTick(function () {
          _this.$nextTick(function () {
            _this.open(e);
          });
        });
        return;
      }

      this.root = e.currentTarget;
      this.$emit("open");
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
      this.$nextTick(function () {
        _this.$nextTick(function () {
          var _this$selected;

          _this.$refs.menu.setActiveItem((_this$selected = _this.selected) === null || _this$selected === void 0 ? void 0 : _this$selected.name);
        });
      });
    },
    close: function close(e) {
      var _this2 = this;

      if (!this.$refs.menu || !this.root) return;
      this.$refs.menu.close(e);
      this.$nextTick(function () {
        _this2.root = null;

        _this2.$emit("close", e);
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

  return _c("ui-grid", [_vm._t("anchor", null, {
    selectedItem: _vm.selected,
    opened: Boolean(_vm.root),
    open: _vm.open
  }), _vm._v(" "), Boolean(_vm.root) ? _c("ui-portal", {
    attrs: {
      anchor: {
        root: _vm.root
      },
      position: "left-bottom"
    }
  }, [_c("ui-menu", {
    ref: "menu",
    staticClass: "ui-select__items"
  }, [_vm.items.length ? [_vm._l(_vm.items, function (item) {
    return [_vm._t("item-template", [_c("ui-menu-item", {
      attrs: {
        id: item.name
      },
      on: {
        click: function click($event) {
          return _vm.handleItemClick(item);
        }
      },
      scopedSlots: _vm._u([{
        key: "text",
        fn: function fn() {
          return [_vm._v("\n                " + _vm._s(item.name) + "\n              ")];
        },
        proxy: true
      }], null, true)
    })], {
      item: item,
      selectedItem: _vm.selected,
      select: _vm.handleItemClick.bind(this, item)
    })];
  })] : _vm.loading ? [_vm._t("loading-template", [_c("ui-menu-loading")])] : [_vm._t("empty-template")]], 2)], 1) : _vm._e()], 2);
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
