import Vue from 'vue';
import UiGrid from '../grid/grid';
import UiButton from '../button/button';
import UiDropdown from '../dropdown/dropdown';
import UiMenuItem from '../menu/item';
import ArrowIcon from '../../assets/right-arrow.svg';
import MoreIcon from '../../assets/more.svg';
import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.js';

var script = Vue.extend({
  name: "UiBreadcrumbs",
  components: {
    UiGrid: UiGrid,
    UiButton: UiButton,
    UiDropdown: UiDropdown,
    UiMenuItem: UiMenuItem,
    ArrowIcon: ArrowIcon,
    MoreIcon: MoreIcon
  },
  props: {
    items: {
      type: Array,
      required: false,
      default: function _default() {
        return [];
      }
    },
    uniqueKey: {
      type: String,
      required: false,
      default: "uuid"
    },
    labelKey: {
      type: String,
      required: false,
      default: "name"
    }
  },
  computed: {
    visibleItems: function visibleItems() {
      if (this.short) {
        return [this.items[0], {
          isDropdown: true
        }, this.items[this.items.length - 2], this.items[this.items.length - 1]];
      }

      return this.items;
    },
    hiddenItems: function hiddenItems() {
      if (this.short) {
        return this.items.slice(1, this.items.length - 2);
      }

      return [];
    },
    short: function short() {
      return this.items.length > 4;
    },
    lastItem: function lastItem() {
      return this.items.length ? this.items[this.items.length - 1] : null;
    }
  },
  methods: {
    handleItemClick: function handleItemClick(e, item, click) {
      if (item.isDropdown) return;
      click(e);
      this.$emit("item-click", item, e);
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
    staticClass: "ui-breadcrumbs",
    attrs: {
      component: "ul",
      "align-items": "center"
    }
  }, _vm._l(_vm.visibleItems, function (item) {
    return _c("ui-grid", {
      key: item[_vm.uniqueKey],
      staticClass: "ui-breadcrumbs__item",
      attrs: {
        component: "li",
        "align-items": "center",
        contained: false
      }
    }, [!item.isDropdown ? [_vm._t("item-tempalte", [_vm._t("item-tempalte(" + item[_vm.uniqueKey] + ")", [_c("ui-button", {
      staticClass: "ui-breadcrumbs__item__btn",
      attrs: {
        variant: "text"
      },
      on: {
        click: function click($event) {
          _vm.handleItemClick($event, item, function () {});
        }
      }
    }, [_vm._v("\n            " + _vm._s(item[_vm.labelKey]) + "\n          ")])], {
      item: item,
      click: function click(e) {
        return _vm.handleItemClick(e, item, function () {});
      }
    })], {
      item: item,
      click: function click(e) {
        return _vm.handleItemClick(e, item, function () {});
      }
    })] : [_c("ui-dropdown", {
      scopedSlots: _vm._u([{
        key: "anchor",
        fn: function fn(ref) {
          var open = ref.open;
          var opened = ref.opened;
          return [_c("ui-button", {
            staticClass: "ui-breadcrumbs__dotted-btn",
            class: {
              "ui-breadcrumbs__dotted-btn_active": opened
            },
            attrs: {
              variant: "text"
            },
            on: {
              click: open
            }
          }, [_c("more-icon", {
            staticClass: "ui-breadcrumbs__dotted-btn__icon"
          })], 1)];
        }
      }, {
        key: "dropdown-items",
        fn: function fn(ref) {
          var close = ref.close;
          return [_vm._l(_vm.hiddenItems, function (dropdownItem) {
            return [_vm._t("dropdown-item-template", [_c("ui-menu-item", {
              attrs: {
                id: dropdownItem[_vm.uniqueKey]
              },
              on: {
                click: function click(e) {
                  return _vm.handleItemClick(e, dropdownItem, close);
                }
              },
              scopedSlots: _vm._u([{
                key: "text",
                fn: function fn() {
                  return [_c("p", {
                    staticClass: "ui-breadcrumbs__dropdown-item__text"
                  }, [_vm._v("\n                    " + _vm._s(dropdownItem[_vm.labelKey]) + "\n                  ")])];
                },
                proxy: true
              }], null, true)
            })], {
              click: function click(e) {
                return _vm.handleItemClick(e, dropdownItem, close);
              },
              item: dropdownItem
            })];
          })];
        }
      }], null, true)
    })], _vm._v(" "), _vm.lastItem !== item ? _c("arrow-icon", {
      staticClass: "ui-breadcrumbs__separator"
    }) : _vm._e()], 2);
  }), 1);
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
