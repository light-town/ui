import Vue from 'vue';
import UiGrid from '../grid/grid';
import UiPortal from '../portal/portal';
import UiButton from '../button/button';
import UiMenu from '../menu/menu';
import UiMenuLoading from '../menu/loading';
import * as config from '../../config';
import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.js';

var script = Vue.extend({
  name: "UiDropdown",
  components: {
    UiGrid: UiGrid,
    UiPortal: UiPortal,
    UiButton: UiButton,
    UiMenu: UiMenu,
    UiMenuLoading: UiMenuLoading
  },
  props: {
    title: {
      type: String,
      required: false,
      default: ""
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: function data() {
    return {
      root: null
    };
  },
  methods: {
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
    },
    close: function close(e) {
      var _this2 = this;

      if (!this.$refs.menu || !this.root) return;
      this.$refs.menu.close();
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

  return _c("ui-grid", {
    staticClass: "ui-dropdown",
    attrs: {
      "aligh-items": "center"
    }
  }, [_vm._t("anchor", [_c("ui-button", {
    attrs: {
      variant: "text"
    },
    on: {
      click: _vm.open
    }
  }, [_vm._v(_vm._s(_vm.title))])], {
    open: _vm.open,
    opened: Boolean(_vm.root)
  }), _vm._v(" "), Boolean(_vm.root) ? _c("ui-portal", {
    attrs: {
      anchor: {
        root: _vm.root
      },
      position: "left-bottom"
    }
  }, [_c("ui-menu", {
    ref: "menu"
  }, [_vm.loading ? [_vm._t("loading", [_c("ui-menu-loading")])] : [_vm._t("dropdown-items", null, {
    close: _vm.close
  })]], 2)], 1) : _vm._e()], 2);
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
