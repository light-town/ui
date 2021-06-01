import Vue from 'vue';
import uuid from 'uuid';
import UiGrid from '../grid/grid';
import UiToken from '../token/token';
import UiPopup from '../portal/portal';
import UiMenu from '../menu/menu';
import UiMenuItem from '../menu/item';
import UiMenuLoading from '../menu/loading';
import * as config from '../../config';
import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.js';

var script = Vue.extend({
  name: "UiTokenSelector",
  components: {
    UiGrid: UiGrid,
    UiToken: UiToken,
    UiPopup: UiPopup,
    UiMenuLoading: UiMenuLoading,
    UiMenu: UiMenu,
    UiMenuItem: UiMenuItem
  },
  props: {
    placeholder: {
      type: String,
      required: false,
      default: ""
    },
    dropdownItems: {
      type: Array,
      required: true
    },
    hideDropdownWithNoItems: {
      type: Boolean,
      required: false,
      default: false
    },
    allowUserDefinedTokens: {
      type: Boolean,
      required: false,
      default: false
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    value: {
      type: Array,
      required: false,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      isFocus: false,
      inputText: "",
      root: null,
      tokens: []
    };
  },
  computed: {
    remainingDropdownItems: function remainingDropdownItems() {
      var _this = this;

      var re = new RegExp("^".concat(this.inputText.toLowerCase()));
      return this.dropdownItems.filter(function (i) {
        return !_this.tokens.find(function (t) {
          return t.id === i.id;
        }) && (!_this.inputText.length || re.test(i.name.trim().toLowerCase()));
      });
    }
  },
  watch: {
    value: function value() {
      this.tokens = this.value;
    }
  },
  created: function created() {
    this.tokens = this.value;
  },
  mounted: function mounted() {
    var _this$$refs;

    this.isFocus = document.activeElement === ((_this$$refs = this.$refs) === null || _this$$refs === void 0 ? void 0 : _this$$refs.input);
  },
  updated: function updated() {
    var _this$$refs2;

    this.isFocus = document.activeElement === ((_this$$refs2 = this.$refs) === null || _this$$refs2 === void 0 ? void 0 : _this$$refs2.input);
  },
  methods: {
    addToken: function addToken(token) {
      this.tokens.push(token);
      this.$emit("input", this.tokens);
      this.$emit("token-added", token);
    },
    removeToken: function removeToken(token) {
      this.tokens = this.tokens.filter(function (t) {
        return t !== token;
      });
      this.$emit("input", this.tokens);
      this.$emit("token-removed", token);
    },
    openDropdown: function openDropdown() {
      if (!this.remainingDropdownItems.length && this.hideDropdownWithNoItems) return;
      this.root = this.$refs.input;
      var root = document.getElementById(config.APP_CONTENT_LAYOUT_ID);
      if (!root) return;
      root.addEventListener("click", this.closeDropdown, {
        once: true,
        capture: true
      });
      root.addEventListener("contextmenu", this.closeDropdown, {
        once: true,
        capture: true
      });
      window.addEventListener("blur", this.close, {
        once: true
      });
    },
    closeDropdown: function closeDropdown(e) {
      var _this2 = this;

      if (!this.$refs.menu) return;
      this.$refs.menu.close();
      this.$nextTick(function () {
        _this2.root = null;

        _this2.$emit("close", e);
      });
    },
    clearTextInput: function clearTextInput() {
      this.inputText = "";
    },
    handleDropdownItemClick: function handleDropdownItemClick(dropdownItem) {
      this.closeDropdown();
      this.clearTextInput();
      this.addToken(dropdownItem);
    },
    handleEnterKeyPress: function handleEnterKeyPress() {
      var _this3 = this;

      var existsToken = this.dropdownItems.find(function (i) {
        return i.name === _this3.inputText;
      });

      if (existsToken) {
        this.addToken(existsToken);
      } else if (this.allowUserDefinedTokens) {
        this.addToken({
          id: uuid.v4(),
          name: this.inputText
        });
      } else return;

      this.setTextInputFocus();
      this.clearTextInput();
    },
    handleCloseBtnClick: function handleCloseBtnClick(token) {
      this.removeToken(token);
      this.closeDropdown();
    },
    handleGlobalClick: function handleGlobalClick() {
      this.setTextInputFocus();
      this.openDropdown();
    },
    handleGlobalKeyDown: function handleGlobalKeyDown(e) {
      var _this4 = this;

      if (!this.root || !["ArrowUp", "ArrowDown", "Enter"].includes(e.code)) return;

      if (e.code === "Enter" && this.allowUserDefinedTokens && this.inputText.length
      /* &&
      !this.remainingDropdownItems.length */
      ) {
          this.addToken({
            id: uuid.v4(),
            name: this.inputText
          });
          this.clearTextInput();
          this.setTextInputFocus();
          return;
        }

      e.preventDefault();

      if (e.code === "ArrowUp") {
        if (!this.$refs.menu.hasPreviousItem(this.$refs.menu.context.activeItemId)) {
          this.$refs.menu.setActiveItem(null);
        } else {
          this.$refs.menu.setActiveItem(this.$refs.menu.getPreviousItem(this.$refs.menu.context.activeItemId).id);
        }
      } else if (e.code === "ArrowDown") {
        if (!this.$refs.menu.context.activeItemId) this.$refs.menu.setActiveItem(this.$refs.menu.context.items[0].id);else if (this.$refs.menu.hasNextItem(this.$refs.menu.context.activeItemId)) this.$refs.menu.setActiveItem(this.$refs.menu.getNextItem(this.$refs.menu.context.activeItemId).id);
      } else if (e.code === "Enter") {
        var _this$$refs$menu$getA;

        var currentItemId = (_this$$refs$menu$getA = this.$refs.menu.getActiveItem()) === null || _this$$refs$menu$getA === void 0 ? void 0 : _this$$refs$menu$getA.id;
        var currentItem = this.remainingDropdownItems.find(function (i) {
          return i.id === currentItemId;
        });

        if (!currentItem) {
          if (!this.inputText.length) this.$emit("enter", e);
          return;
        }

        this.addToken(currentItem);
        this.clearTextInput();
        this.$nextTick(function () {
          var _this4$$refs$menu$con;

          _this4.$refs.menu.setActiveItem((_this4$$refs$menu$con = _this4.$refs.menu.context.items[0]) === null || _this4$$refs$menu$con === void 0 ? void 0 : _this4$$refs$menu$con.id);
        });
      }
    },
    handleInputKeyDown: function handleInputKeyDown(e) {
      if (e.code !== "Backspace" || this.inputText.length || !this.tokens.length) return;
      var removedToken = this.tokens[this.tokens.length - 1];
      this.inputText = removedToken.name;
      this.removeToken(removedToken);
    },
    setTextInputFocus: function setTextInputFocus() {
      this.$refs.input.focus();
    },
    handleBlurInput: function handleBlurInput() {
      if (!this.inputText.length || !this.allowUserDefinedTokens) return;
      this.addToken({
        id: uuid.v4(),
        name: this.inputText
      });
      this.clearTextInput();
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
    staticClass: "ui-token-selector",
    class: {
      "ui-token-selector_focus": _vm.isFocus
    },
    attrs: {
      "align-items": "center",
      tabindex: "0"
    },
    nativeOn: {
      click: function click($event) {
        return _vm.handleGlobalClick($event);
      },
      keydown: function keydown($event) {
        return _vm.handleGlobalKeyDown($event);
      }
    }
  }, [_vm._l(_vm.tokens, function (token) {
    return _c("ui-grid", {
      key: token.id,
      staticClass: "ui-token-selector__token",
      attrs: {
        tabindex: "-1"
      },
      nativeOn: {
        keydown: function keydown($event) {
          return _vm.handleGlobalKeyDown($event);
        }
      }
    }, [_vm._t("token-template", [_c("ui-token", {
      attrs: {
        title: token.name
      },
      on: {
        close: function close($event) {
          return _vm.handleCloseBtnClick(token);
        }
      }
    })], {
      token: token,
      handleCloseBtnClick: _vm.handleCloseBtnClick
    })], 2);
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inputText,
      expression: "inputText"
    }],
    ref: "input",
    staticClass: "ui-token-selector__input",
    attrs: {
      type: "text",
      placeholder: _vm.tokens.length ? "" : _vm.placeholder
    },
    domProps: {
      value: _vm.inputText
    },
    on: {
      keydown: _vm.handleInputKeyDown,
      blur: _vm.handleBlurInput,
      input: function input($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.inputText = $event.target.value;
      }
    }
  }), _vm._v(" "), Boolean(_vm.root) ? _c("ui-popup", {
    attrs: {
      anchor: {
        root: _vm.root
      },
      position: "left-bottom"
    }
  }, [_c("ui-menu", {
    ref: "menu",
    attrs: {
      focusable: false
    },
    nativeOn: {
      keydown: function keydown($event) {
        return _vm.handleGlobalKeyDown($event);
      }
    }
  }, [_vm.allowUserDefinedTokens && _vm.inputText.length && !_vm.loading ? [_vm._t("user-defined-token-template", [_c("ui-menu-item", {
    attrs: {
      id: "user-defined-token",
      tabindex: "-1"
    },
    on: {
      click: function click($event) {
        return _vm.handleDropdownItemClick(_vm.dropdownItem);
      }
    },
    scopedSlots: _vm._u([{
      key: "text",
      fn: function fn() {
        return [_vm._v(' Add "' + _vm._s(_vm.inputText) + '" ')];
      },
      proxy: true
    }], null, false, 1208469959)
  })], {
    inputText: _vm.inputText
  })] : _vm._e(), _vm._v(" "), _vm.remainingDropdownItems.length ? _vm._l(_vm.remainingDropdownItems, function (dropdownItem) {
    return _c("ui-menu-item", {
      key: dropdownItem.id,
      attrs: {
        id: dropdownItem.id,
        "data-index": dropdownItem.id
      },
      on: {
        click: function click($event) {
          return _vm.handleDropdownItemClick(dropdownItem);
        }
      },
      scopedSlots: _vm._u([{
        key: "icon",
        fn: function fn() {
          return [_vm._t("dropdown-item-icon-template", null, {
            dropdownItem: dropdownItem
          })];
        },
        proxy: true
      }, {
        key: "text",
        fn: function fn() {
          return [_vm._t("dropdown-item-text-template", [_vm._v("\n              " + _vm._s(dropdownItem.name) + "\n            ")], {
            dropdownItem: dropdownItem
          })];
        },
        proxy: true
      }, {
        key: "controls",
        fn: function fn() {
          return [_vm._t("dropdown-item-controls-template", null, {
            dropdownItem: dropdownItem
          })];
        },
        proxy: true
      }], null, true)
    });
  }) : _vm.loading ? [_vm._t("loading-template", [_c("ui-menu-loading")])] : !_vm.allowUserDefinedTokens ? [_vm._t("no-results-template", [_c("ui-menu-item", {
    attrs: {
      id: "no-matches-found"
    },
    scopedSlots: _vm._u([{
      key: "text",
      fn: function fn() {
        return [_vm._v(" No matches found ")];
      },
      proxy: true
    }], null, false, 2456302930)
  })])] : _vm._e()], 2)], 1) : _vm._e()], 2);
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
