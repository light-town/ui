import Vue from 'vue';
import UiButton from '../button/button';
import UiLoading from '../loading/loading';
import CheckIcon from '../../assets/check-2.svg';
import CrossIcon from '../../assets/cross.svg';
import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.js';

var script = Vue.extend({
  name: "UiToggle",
  components: {
    UiButton: UiButton,
    UiLoading: UiLoading,
    CheckIcon: CheckIcon,
    CrossIcon: CrossIcon
  },
  props: {
    value: {
      type: Boolean,
      required: false,
      default: false
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: function data() {
    return {
      state: false
    };
  },
  watch: {
    value: function value() {
      this.state = this.value;
    }
  },
  created: function created() {
    this.state = this.value;
  },
  methods: {
    toggle: function toggle() {
      if (this.loading || this.disabled) return;
      this.state = !this.state;
      this.$emit("input", this.state);
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

  return _c("ui-button", {
    staticClass: "ui-toggle",
    class: {
      "ui-toggle_checked": _vm.state
    },
    attrs: {
      role: "switch",
      variant: "text",
      disabled: _vm.disabled
    },
    on: {
      click: _vm.toggle
    }
  }, [!_vm.loading ? _c("span", {
    staticClass: "ui-toggle__icon"
  }, [_vm.state ? _c("check-icon") : _c("cross-icon")], 1) : _c("ui-loading")], 1);
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
