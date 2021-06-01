import Vue from 'vue';
import UiGrid from '../grid/grid';
import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.js';

var script = Vue.extend({
  name: "UiPopup",
  components: {
    UiGrid: UiGrid
  },
  props: {
    anchor: {
      type: Object,
      required: false,
      default: null
    },
    position: {
      type: String,
      required: false,
      default: "left-top",
      validator: function validator(val) {
        return ["left-top", "left-bottom", "right-top", "right-bottom"].includes(val);
      }
    },
    contentClass: {
      type: String,
      required: false,
      default: ""
    },
    x: {
      type: Number,
      required: false,
      default: null
    },
    y: {
      type: Number,
      required: false,
      default: null
    }
  },
  data: function data() {
    return {
      localX: "0",
      localY: "0",
      show: false
    };
  },
  computed: {
    root: function root() {
      var _this$anchor, _this$anchor$root;

      return (_this$anchor = this.anchor) === null || _this$anchor === void 0 ? void 0 : (_this$anchor$root = _this$anchor.root) === null || _this$anchor$root === void 0 ? void 0 : _this$anchor$root.getBoundingClientRect();
    }
  },
  mounted: function mounted() {
    this.updatePos();
  },
  updated: function updated() {
    this.updatePos();
  },
  methods: {
    updatePos: function updatePos() {
      var contentRect = this.$el.getBoundingClientRect();

      if (this.x !== null && this.y !== null) {
        var popupWidth = contentRect.width;
        var popupHeight = contentRect.height;
        var maxAvailableWidth = window.innerWidth;
        var maxAvailableHeight = window.innerHeight;

        var _x = this.x + popupWidth > maxAvailableWidth ? this.x - popupWidth : this.x;

        var _y = this.y + popupHeight > maxAvailableHeight ? this.y - popupHeight : this.y;

        this.localX = "".concat(_x, "px");
        this.localY = "".concat(_y, "px");
        this.show = true;
        return;
      }

      if (!this.root) return;
      var x = window.scrollX + (this.position === "left-top" || this.position === "left-bottom" ? this.root.left : this.root.left + this.root.width);
      var y = window.scrollY + (this.position === "left-top" || this.position === "right-top" ? this.root.top : this.root.top + this.root.height);
      var anchorWidth = this.root.width;
      var anchorHeight = this.root.height;
      var maxWidth = window.innerWidth + window.scrollX;
      var maxHeight = window.innerHeight + window.scrollY;
      var diffX = x + contentRect.width > maxWidth ? maxWidth - x - contentRect.width : 0;
      var diffY = y + contentRect.height > maxHeight ? maxHeight - y - contentRect.height : 0;
      if (diffX < 0) this.localX = "".concat(x - contentRect.width - anchorWidth, "px");else this.localX = "".concat(x, "px");
      if (diffY < 0) this.localY = "".concat(y - contentRect.height - anchorHeight, "px");else this.localY = "".concat(y, "px");
      this.show = true;
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
    staticClass: "ui-popup",
    class: {
      "ui-popup_visible": _vm.show
    },
    style: {
      left: _vm.localX,
      top: _vm.localY
    },
    attrs: {
      direction: "column"
    }
  }, [_vm._t("default")], 2);
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
