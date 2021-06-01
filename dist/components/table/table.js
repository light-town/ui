import Vue from 'vue';
import UiGrid from '../grid/grid';
import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.js';

var script = Vue.extend({
  name: "UiTable",
  components: {
    UiGrid: UiGrid
  },
  props: {
    fields: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    hrClass: {
      type: String,
      required: false,
      default: ""
    },
    brClass: {
      type: String,
      required: false,
      default: ""
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
    staticClass: "ui-table",
    attrs: {
      component: "table",
      role: "table",
      direction: "column",
      contained: true
    }
  }, [_vm.items.length ? _c("ui-grid", {
    staticClass: "ui-table__header",
    attrs: {
      component: "thead",
      role: "rowgroup",
      contained: true
    }
  }, [_c("ui-grid", {
    staticClass: "ui-table__row",
    class: _vm.hrClass,
    attrs: {
      component: "tr",
      role: "row",
      contained: true
    },
    on: {
      click: function click($event) {
        return _vm.$emit("header-row-click", $event);
      }
    }
  }, _vm._l(_vm.fields, function (field) {
    return _c("ui-grid", {
      key: field.key,
      staticClass: "ui-table__cell ui-table__cell-header",
      class: field.hcClass,
      attrs: {
        component: "th",
        role: "columnheader",
        "align-items": "center",
        contained: true
      },
      on: {
        click: function click($event) {
          return _vm.$emit("header-cell-click", $event, field);
        }
      }
    }, [_vm._t("head", [_vm._t("head(" + field.key + ")", [_vm._v("\n            " + _vm._s(field.label) + "\n          ")], {
      label: field.label,
      item: field
    })])], 2);
  }), 1)], 1) : _vm._e(), _vm._v(" "), _c("ui-grid", {
    attrs: {
      component: "tbody",
      role: "rowgroup",
      direction: "column",
      contained: true
    }
  }, [_vm.items.length ? _vm._l(_vm.items.length, function (i) {
    return _c("ui-grid", {
      key: i,
      staticClass: "ui-table__row",
      class: [_vm.brClass, _vm.items[i - 1].brClass],
      attrs: {
        component: "tr",
        role: "row",
        contained: true
      },
      nativeOn: {
        click: function click($event) {
          return _vm.$emit("body-row-click", $event, _vm.items[i - 1]);
        },
        dblclick: function dblclick($event) {
          return _vm.$emit("body-row-dbl-click", $event, _vm.items[i - 1]);
        },
        contextmenu: function contextmenu($event) {
          return function (e) {
            _vm.$emit("body-row-context-menu", e, _vm.items[i - 1]);

            _vm.$emit("contextmenu", e, _vm.items[i - 1]);
          }($event);
        }
      }
    }, _vm._l(_vm.fields, function (field) {
      return _c("ui-grid", {
        key: field.key,
        staticClass: "ui-table__cell ui-table__cell-body",
        class: field.bcClass,
        attrs: {
          component: "td",
          role: "cell",
          "align-items": "center",
          contained: true
        },
        on: {
          click: function click($event) {
            return _vm.$emit("body-cell-click", $event, field, _vm.items);
          }
        }
      }, [_vm._t("cell", [_vm._t("cell(" + field.key + ")", [_vm._v("\n              " + _vm._s(_vm.items[i - 1][field.key]) + "\n            ")], {
        value: _vm.items[i - 1][field.key],
        item: _vm.items[i - 1]
      })])], 2);
    }), 1);
  }) : [_vm._t("table-empty-template", [_vm._v("Table is empty")])]], 2)], 1);
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
