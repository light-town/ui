import Vue from 'vue';
import uuid from 'uuid';
import UiGrid from '../grid/grid';
import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.js';

var script = Vue.extend({
  name: "UiMenu",
  components: {
    UiGrid: UiGrid
  },
  provide: function provide() {
    return {
      _menuContext: this.context
    };
  },
  props: {
    rootMenuRef: {
      type: Object,
      required: false,
      default: null
    },
    focusable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data: function data() {
    return {
      context: {
        root: this,
        items: [],
        activeItemId: null,
        isAvailableShowing: false
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.context.items = (this.$slots.default || []).filter(function (i) {
      return i.componentInstance;
    }).map(function (_ref) {
      var _vm$id;

      var vm = _ref.componentInstance;
      if (!vm) return {};
      var id = (_vm$id = vm.id) !== null && _vm$id !== void 0 ? _vm$id : uuid.v4();

      var mouseEnterHandler = _this.handleItemEnter.bind(_this, vm);

      var mouseLeaveHandler = _this.handleItemLeave.bind(_this, vm);

      vm.$on("mouseenter", mouseEnterHandler);
      vm.$on("mouseleave", mouseLeaveHandler);
      vm.$on(vm.existsSubmenu ? "menu-item-click" : "click", vm.existsSubmenu ? _this.handleMenuItemClick : _this.handleItemClick);
      if (!vm.id) vm.id = id;
      return {
        id: id,
        vm: vm,
        mouseEnterHandler: mouseEnterHandler,
        mouseLeaveHandler: mouseLeaveHandler
      };
    });
    this.$nextTick(function () {
      _this.context.activeItemId = _this.context.items.length && !_this.context.items[0].vm.existsSubmenu && _this.context.items[0].id ? _this.context.items[0].id : null;
      if (!_this.rootMenuRef && _this.focusable) _this.$el.focus();
    });
  },
  updated: function updated() {
    var _this2 = this;

    this.context.items = (this.$slots.default || []).filter(function (i) {
      return i.componentInstance;
    }).map(function (_ref2) {
      var _vm$id2;

      var vm = _ref2.componentInstance;
      var id = (_vm$id2 = vm.id) !== null && _vm$id2 !== void 0 ? _vm$id2 : uuid.v4();

      var mouseEnterHandler = _this2.handleItemEnter.bind(_this2, vm);

      var mouseLeaveHandler = _this2.handleItemLeave.bind(_this2, vm);

      vm.$on("mouseenter", mouseEnterHandler);
      vm.$on("mouseleave", mouseLeaveHandler);
      vm.$on(vm.existsSubmenu ? "menu-item-click" : "click", vm.existsSubmenu ? _this2.handleMenuItemClick : _this2.handleItemClick);
      if (!vm.id) vm.id = id;
      return {
        id: id,
        vm: vm,
        mouseEnterHandler: mouseEnterHandler,
        mouseLeaveHandler: mouseLeaveHandler
      };
    });
    this.$nextTick(function () {
      _this2.context.activeItemId = _this2.context.items.length && !_this2.context.items[0].vm.existsSubmenu && _this2.context.items[0].id ? _this2.context.items[0].id : null;
      if (!_this2.rootMenuRef && _this2.focusable) _this2.$el.focus();
    });
  },
  methods: {
    handleItemEnter: function handleItemEnter(vm) {
      var _this3 = this;

      if (this.context.activeItemId === vm.id) return;
      this.closeSubmenus();
      this.context.activeItemId = vm.id;
      this.context.isAvailableShowing = true;
      this.$nextTick(function () {
        _this3.$nextTick(function () {
          var _currentItem$vm$$refs;

          var currentItem = _this3.context.items.find(function (i) {
            return i.id === _this3.context.activeItemId;
          });

          if (currentItem !== null && currentItem !== void 0 && currentItem.vm.$refs.submenu) (_currentItem$vm$$refs = currentItem.vm.$refs.submenu) === null || _currentItem$vm$$refs === void 0 ? void 0 : _currentItem$vm$$refs.$el.focus();else _this3.$el.focus();
        });
      });
    },
    handleItemLeave: function handleItemLeave(vm) {
      if (vm.existsSubmenu) {
        return;
      }

      this.context.activeItemId = null;
    },
    handleItemClick: function handleItemClick() {
      var _this$context$items$f,
          _this4 = this;

      var vm = (_this$context$items$f = this.context.items.find(function (i) {
        return i.id === _this4.context.activeItemId;
      })) === null || _this$context$items$f === void 0 ? void 0 : _this$context$items$f.vm;
      this.$emit("menu-item-click", vm);
    },
    handleMenuItemClick: function handleMenuItemClick(e) {
      this.$emit("menu-item-click", e);
    },
    hadnleKeyDown: function hadnleKeyDown(e) {
      var _this5 = this;

      this.context.isAvailableShowing = false;
      var currentIndex = this.context.items.findIndex(function (i) {
        return i.id === _this5.context.activeItemId;
      });

      switch (e.code) {
        case "ArrowDown":
          {
            do {
              ++currentIndex;
              if (currentIndex >= this.context.items.length) currentIndex = 0;
            } while (!this.context.items[currentIndex].vm.$options.activable);

            this.context.activeItemId = this.context.items[currentIndex].id;
            e.preventDefault();
            break;
          }

        case "ArrowUp":
          {
            do {
              --currentIndex;
              if (currentIndex < 0) currentIndex = this.context.items.length - 1;
            } while (!this.context.items[currentIndex].vm.$options.activable);

            this.context.activeItemId = this.context.items[currentIndex].id;
            e.preventDefault();
            break;
          }

        case "ArrowRight":
          {
            this.context.isAvailableShowing = true;
            this.$nextTick(function () {
              _this5.$nextTick(function () {
                var _this5$context$items$, _this5$context$items$2;

                (_this5$context$items$ = _this5.context.items[currentIndex]) === null || _this5$context$items$ === void 0 ? void 0 : (_this5$context$items$2 = _this5$context$items$.vm.$refs.submenu) === null || _this5$context$items$2 === void 0 ? void 0 : _this5$context$items$2.$el.focus();
              });
            });
            e.preventDefault();
            break;
          }

        case "ArrowLeft":
          {
            this.context.isAvailableShowing = false;
            this.context.activeItemId = null;
            this.$nextTick(function () {
              _this5.$nextTick(function () {
                if (!_this5.rootMenuRef) return;
                var rootMenu = _this5.rootMenuRef;
                rootMenu.$el.focus();
                rootMenu.context.isAvailableShowing = false;
              });
            });
            e.preventDefault();
            break;
          }

        case "Enter":
          {
            var _this$context$items$c;

            (_this$context$items$c = this.context.items[currentIndex]) === null || _this$context$items$c === void 0 ? void 0 : _this$context$items$c.vm.$el.click();
            e.preventDefault();
            break;
          }
      }
    },
    close: function close() {
      var _this6 = this;

      this.context.items.forEach(function (i) {
        i.vm.$off("mouseenter", i.mouseEnterHandler);
        i.vm.$off("mouseleave", i.mouseLeaveHandler);
        i.vm.$off(i.vm.existsSubmenu ? "menu-item-click" : "click", i.vm.existsSubmenu ? _this6.handleMenuItemClick : _this6.handleItemClick);

        if (i.vm.$refs.submenu) {
          i.vm.$refs.submenu.close();
          i.vm.$refs.submenu.$destroy();
          return;
        }

        i.vm.$destroy();
      });
    },
    closeSubmenus: function closeSubmenus() {
      this.context.items.forEach(function (i) {
        if (i.vm.$refs.submenu) {
          i.vm.$refs.submenu.close();
          i.vm.$refs.submenu.$destroy();
        }
      });
    },
    setActiveItem: function setActiveItem(id) {
      this.context.activeItemId = id;
    },
    getItem: function getItem(id) {
      return this.context.items.find(function (i) {
        return i.id === id;
      });
    },
    getActiveItem: function getActiveItem() {
      var _this7 = this;

      return this.context.items.find(function (i) {
        return i.id === _this7.context.activeItemId;
      });
    },
    hasNextItem: function hasNextItem(id) {
      var activableItems = this.context.items.filter(function (i) {
        return i.vm.$options.activable;
      });

      for (var i = 0; i < activableItems.length; ++i) {
        if (activableItems[i].id === id) {
          return i + 1 < activableItems.length;
        }
      }

      return false;
    },
    getNextItem: function getNextItem(id) {
      var activableItems = this.context.items.filter(function (i) {
        return i.vm.$options.activable;
      });

      for (var i = 0; i < activableItems.length; ++i) {
        if (activableItems[i].id === id && i + 1 < activableItems.length) {
          return activableItems[i + 1];
        }
      }
    },
    hasPreviousItem: function hasPreviousItem(id) {
      var activableItems = this.context.items.filter(function (i) {
        return i.vm.$options.activable;
      });

      for (var i = 0; i < activableItems.length; ++i) {
        if (activableItems[i].id === id) {
          return i - 1 >= 0;
        }
      }

      return false;
    },
    getPreviousItem: function getPreviousItem(id) {
      var activableItems = this.context.items.filter(function (i) {
        return i.vm.$options.activable;
      });

      for (var i = 0; i < activableItems.length; ++i) {
        if (activableItems[i].id === id && i - 1 >= 0) {
          return activableItems[i - 1];
        }
      }
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
    staticClass: "ui-menu",
    attrs: {
      component: "ul",
      direction: "column",
      tabindex: _vm.focusable ? 0 : -1
    },
    nativeOn: {
      keydown: function keydown($event) {
        return _vm.hadnleKeyDown($event);
      }
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
