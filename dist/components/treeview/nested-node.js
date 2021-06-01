import UiGrid from '../grid/grid';
import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.js';

//
var script = {
  name: "NestedNode",
  components: {
    UiGrid: UiGrid
  },
  inject: ["tree-view-data"],
  props: {
    node: {
      type: Object,
      required: true
    },
    nestedNodeKey: {
      type: String,
      required: true
    },
    uniqueNodeKey: {
      type: String,
      required: true
    }
  },
  computed: {
    nodes: function nodes() {
      return this["tree-view-data"].nodes;
    }
  },
  methods: {
    nestedNodes: function nestedNodes(node) {
      var _this = this;

      return this.nodes.filter(function (n) {
        return n[_this.uniqueNodeKey] !== node[_this.uniqueNodeKey] && n[_this.nestedNodeKey] === node[_this.uniqueNodeKey];
      });
    }
  }
};

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("ui-grid", {
    attrs: {
      component: "li",
      direction: "column",
      contained: true
    }
  }, [_vm._t("default", null, {
    node: _vm.node,
    nestedNodes: _vm.nestedNodes(_vm.node),
    nestedNodeKey: _vm.nestedNodeKey,
    uniqueNodeKey: _vm.uniqueNodeKey
  }), _vm._v(" "), _vm.node.expanded ? _c("ui-grid", {
    staticClass: "ui-tree-view__nested-nodes",
    attrs: {
      component: "ul",
      direction: "column",
      contained: true
    }
  }, _vm._l(_vm.nestedNodes(_vm.node), function (node) {
    return _c("nested-node", {
      key: node[_vm.uniqueNodeKey],
      attrs: {
        node: node,
        "nested-node-key": _vm.nestedNodeKey,
        "unique-node-key": _vm.uniqueNodeKey
      },
      scopedSlots: _vm._u([{
        key: "default",
        fn: function fn(ref) {
          var node = ref.node;
          var nestedNodes = ref.nestedNodes;
          return [_vm._t("default", null, {
            node: node,
            nestedNodes: nestedNodes,
            nestedNodeKey: _vm.nestedNodeKey,
            uniqueNodeKey: _vm.uniqueNodeKey
          })];
        }
      }], null, true)
    });
  }), 1) : _vm._e()], 2);
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
