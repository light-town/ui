module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "07e6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/info.5670e18b.svg";

/***/ }),

/***/ "11c1":
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__("c437");
var v4 = __webpack_require__("c64e");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "2366":
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "25d8":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/triangle.457a9cde.svg";

/***/ }),

/***/ "2b88":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

 /*! 
  * portal-vue © Thorsten Lünborg, 2019 
  * 
  * Version: 2.1.7
  * 
  * LICENCE: MIT 
  * 
  * https://github.com/linusborg/portal-vue
  * 
 */



Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(__webpack_require__("8bbf"));

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var inBrowser = typeof window !== 'undefined';
function freeze(item) {
  if (Array.isArray(item) || _typeof(item) === 'object') {
    return Object.freeze(item);
  }

  return item;
}
function combinePassengers(transports) {
  var slotProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return transports.reduce(function (passengers, transport) {
    var temp = transport.passengers[0];
    var newPassengers = typeof temp === 'function' ? temp(slotProps) : transport.passengers;
    return passengers.concat(newPassengers);
  }, []);
}
function stableSort(array, compareFn) {
  return array.map(function (v, idx) {
    return [idx, v];
  }).sort(function (a, b) {
    return compareFn(a[1], b[1]) || a[0] - b[0];
  }).map(function (c) {
    return c[1];
  });
}
function pick(obj, keys) {
  return keys.reduce(function (acc, key) {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}

var transports = {};
var targets = {};
var sources = {};
var Wormhole = Vue.extend({
  data: function data() {
    return {
      transports: transports,
      targets: targets,
      sources: sources,
      trackInstances: inBrowser
    };
  },
  methods: {
    open: function open(transport) {
      if (!inBrowser) return;
      var to = transport.to,
          from = transport.from,
          passengers = transport.passengers,
          _transport$order = transport.order,
          order = _transport$order === void 0 ? Infinity : _transport$order;
      if (!to || !from || !passengers) return;
      var newTransport = {
        to: to,
        from: from,
        passengers: freeze(passengers),
        order: order
      };
      var keys = Object.keys(this.transports);

      if (keys.indexOf(to) === -1) {
        Vue.set(this.transports, to, []);
      }

      var currentIndex = this.$_getTransportIndex(newTransport); // Copying the array here so that the PortalTarget change event will actually contain two distinct arrays

      var newTransports = this.transports[to].slice(0);

      if (currentIndex === -1) {
        newTransports.push(newTransport);
      } else {
        newTransports[currentIndex] = newTransport;
      }

      this.transports[to] = stableSort(newTransports, function (a, b) {
        return a.order - b.order;
      });
    },
    close: function close(transport) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var to = transport.to,
          from = transport.from;
      if (!to || !from && force === false) return;

      if (!this.transports[to]) {
        return;
      }

      if (force) {
        this.transports[to] = [];
      } else {
        var index = this.$_getTransportIndex(transport);

        if (index >= 0) {
          // Copying the array here so that the PortalTarget change event will actually contain two distinct arrays
          var newTransports = this.transports[to].slice(0);
          newTransports.splice(index, 1);
          this.transports[to] = newTransports;
        }
      }
    },
    registerTarget: function registerTarget(target, vm, force) {
      if (!inBrowser) return;

      if (this.trackInstances && !force && this.targets[target]) {
        console.warn("[portal-vue]: Target ".concat(target, " already exists"));
      }

      this.$set(this.targets, target, Object.freeze([vm]));
    },
    unregisterTarget: function unregisterTarget(target) {
      this.$delete(this.targets, target);
    },
    registerSource: function registerSource(source, vm, force) {
      if (!inBrowser) return;

      if (this.trackInstances && !force && this.sources[source]) {
        console.warn("[portal-vue]: source ".concat(source, " already exists"));
      }

      this.$set(this.sources, source, Object.freeze([vm]));
    },
    unregisterSource: function unregisterSource(source) {
      this.$delete(this.sources, source);
    },
    hasTarget: function hasTarget(to) {
      return !!(this.targets[to] && this.targets[to][0]);
    },
    hasSource: function hasSource(to) {
      return !!(this.sources[to] && this.sources[to][0]);
    },
    hasContentFor: function hasContentFor(to) {
      return !!this.transports[to] && !!this.transports[to].length;
    },
    // Internal
    $_getTransportIndex: function $_getTransportIndex(_ref) {
      var to = _ref.to,
          from = _ref.from;

      for (var i in this.transports[to]) {
        if (this.transports[to][i].from === from) {
          return +i;
        }
      }

      return -1;
    }
  }
});
var wormhole = new Wormhole(transports);

var _id = 1;
var Portal = Vue.extend({
  name: 'portal',
  props: {
    disabled: {
      type: Boolean
    },
    name: {
      type: String,
      default: function _default() {
        return String(_id++);
      }
    },
    order: {
      type: Number,
      default: 0
    },
    slim: {
      type: Boolean
    },
    slotProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    tag: {
      type: String,
      default: 'DIV'
    },
    to: {
      type: String,
      default: function _default() {
        return String(Math.round(Math.random() * 10000000));
      }
    }
  },
  created: function created() {
    var _this = this;

    this.$nextTick(function () {
      wormhole.registerSource(_this.name, _this);
    });
  },
  mounted: function mounted() {
    if (!this.disabled) {
      this.sendUpdate();
    }
  },
  updated: function updated() {
    if (this.disabled) {
      this.clear();
    } else {
      this.sendUpdate();
    }
  },
  beforeDestroy: function beforeDestroy() {
    wormhole.unregisterSource(this.name);
    this.clear();
  },
  watch: {
    to: function to(newValue, oldValue) {
      oldValue && oldValue !== newValue && this.clear(oldValue);
      this.sendUpdate();
    }
  },
  methods: {
    clear: function clear(target) {
      var closer = {
        from: this.name,
        to: target || this.to
      };
      wormhole.close(closer);
    },
    normalizeSlots: function normalizeSlots() {
      return this.$scopedSlots.default ? [this.$scopedSlots.default] : this.$slots.default;
    },
    normalizeOwnChildren: function normalizeOwnChildren(children) {
      return typeof children === 'function' ? children(this.slotProps) : children;
    },
    sendUpdate: function sendUpdate() {
      var slotContent = this.normalizeSlots();

      if (slotContent) {
        var transport = {
          from: this.name,
          to: this.to,
          passengers: _toConsumableArray(slotContent),
          order: this.order
        };
        wormhole.open(transport);
      } else {
        this.clear();
      }
    }
  },
  render: function render(h) {
    var children = this.$slots.default || this.$scopedSlots.default || [];
    var Tag = this.tag;

    if (children && this.disabled) {
      return children.length <= 1 && this.slim ? this.normalizeOwnChildren(children)[0] : h(Tag, [this.normalizeOwnChildren(children)]);
    } else {
      return this.slim ? h() : h(Tag, {
        class: {
          'v-portal': true
        },
        style: {
          display: 'none'
        },
        key: 'v-portal-placeholder'
      });
    }
  }
});

var PortalTarget = Vue.extend({
  name: 'portalTarget',
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    },
    slim: {
      type: Boolean,
      default: false
    },
    slotProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    tag: {
      type: String,
      default: 'div'
    },
    transition: {
      type: [String, Object, Function]
    }
  },
  data: function data() {
    return {
      transports: wormhole.transports,
      firstRender: true
    };
  },
  created: function created() {
    var _this = this;

    this.$nextTick(function () {
      wormhole.registerTarget(_this.name, _this);
    });
  },
  watch: {
    ownTransports: function ownTransports() {
      this.$emit('change', this.children().length > 0);
    },
    name: function name(newVal, oldVal) {
      /**
       * TODO
       * This should warn as well ...
       */
      wormhole.unregisterTarget(oldVal);
      wormhole.registerTarget(newVal, this);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    if (this.transition) {
      this.$nextTick(function () {
        // only when we have a transition, because it causes a re-render
        _this2.firstRender = false;
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    wormhole.unregisterTarget(this.name);
  },
  computed: {
    ownTransports: function ownTransports() {
      var transports = this.transports[this.name] || [];

      if (this.multiple) {
        return transports;
      }

      return transports.length === 0 ? [] : [transports[transports.length - 1]];
    },
    passengers: function passengers() {
      return combinePassengers(this.ownTransports, this.slotProps);
    }
  },
  methods: {
    // can't be a computed prop because it has to "react" to $slot changes.
    children: function children() {
      return this.passengers.length !== 0 ? this.passengers : this.$scopedSlots.default ? this.$scopedSlots.default(this.slotProps) : this.$slots.default || [];
    },
    // can't be a computed prop because it has to "react" to this.children().
    noWrapper: function noWrapper() {
      var noWrapper = this.slim && !this.transition;

      if (noWrapper && this.children().length > 1) {
        console.warn('[portal-vue]: PortalTarget with `slim` option received more than one child element.');
      }

      return noWrapper;
    }
  },
  render: function render(h) {
    var noWrapper = this.noWrapper();
    var children = this.children();
    var Tag = this.transition || this.tag;
    return noWrapper ? children[0] : this.slim && !Tag ? h() : h(Tag, {
      props: {
        // if we have a transition component, pass the tag if it exists
        tag: this.transition && this.tag ? this.tag : undefined
      },
      class: {
        'vue-portal-target': true
      }
    }, children);
  }
});

var _id$1 = 0;
var portalProps = ['disabled', 'name', 'order', 'slim', 'slotProps', 'tag', 'to'];
var targetProps = ['multiple', 'transition'];
var MountingPortal = Vue.extend({
  name: 'MountingPortal',
  inheritAttrs: false,
  props: {
    append: {
      type: [Boolean, String]
    },
    bail: {
      type: Boolean
    },
    mountTo: {
      type: String,
      required: true
    },
    // Portal
    disabled: {
      type: Boolean
    },
    // name for the portal
    name: {
      type: String,
      default: function _default() {
        return 'mounted_' + String(_id$1++);
      }
    },
    order: {
      type: Number,
      default: 0
    },
    slim: {
      type: Boolean
    },
    slotProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    tag: {
      type: String,
      default: 'DIV'
    },
    // name for the target
    to: {
      type: String,
      default: function _default() {
        return String(Math.round(Math.random() * 10000000));
      }
    },
    // Target
    multiple: {
      type: Boolean,
      default: false
    },
    targetSlim: {
      type: Boolean
    },
    targetSlotProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    targetTag: {
      type: String,
      default: 'div'
    },
    transition: {
      type: [String, Object, Function]
    }
  },
  created: function created() {
    if (typeof document === 'undefined') return;
    var el = document.querySelector(this.mountTo);

    if (!el) {
      console.error("[portal-vue]: Mount Point '".concat(this.mountTo, "' not found in document"));
      return;
    }

    var props = this.$props; // Target already exists

    if (wormhole.targets[props.name]) {
      if (props.bail) {
        console.warn("[portal-vue]: Target ".concat(props.name, " is already mounted.\n        Aborting because 'bail: true' is set"));
      } else {
        this.portalTarget = wormhole.targets[props.name];
      }

      return;
    }

    var append = props.append;

    if (append) {
      var type = typeof append === 'string' ? append : 'DIV';
      var mountEl = document.createElement(type);
      el.appendChild(mountEl);
      el = mountEl;
    } // get props for target from $props
    // we have to rename a few of them


    var _props = pick(this.$props, targetProps);

    _props.slim = this.targetSlim;
    _props.tag = this.targetTag;
    _props.slotProps = this.targetSlotProps;
    _props.name = this.to;
    this.portalTarget = new PortalTarget({
      el: el,
      parent: this.$parent || this,
      propsData: _props
    });
  },
  beforeDestroy: function beforeDestroy() {
    var target = this.portalTarget;

    if (this.append) {
      var el = target.$el;
      el.parentNode.removeChild(el);
    }

    target.$destroy();
  },
  render: function render(h) {
    if (!this.portalTarget) {
      console.warn("[portal-vue] Target wasn't mounted");
      return h();
    } // if there's no "manual" scoped slot, so we create a <Portal> ourselves


    if (!this.$scopedSlots.manual) {
      var props = pick(this.$props, portalProps);
      return h(Portal, {
        props: props,
        attrs: this.$attrs,
        on: this.$listeners,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    } // else, we render the scoped slot


    var content = this.$scopedSlots.manual({
      to: this.to
    }); // if user used <template> for the scoped slot
    // content will be an array

    if (Array.isArray(content)) {
      content = content[0];
    }

    if (!content) return h();
    return content;
  }
});

function install(Vue$$1) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Vue$$1.component(options.portalName || 'Portal', Portal);
  Vue$$1.component(options.portalTargetName || 'PortalTarget', PortalTarget);
  Vue$$1.component(options.MountingPortalName || 'MountingPortal', MountingPortal);
}

var index = {
  install: install
};

exports.default = index;
exports.Portal = Portal;
exports.PortalTarget = PortalTarget;
exports.MountingPortal = MountingPortal;
exports.Wormhole = wormhole;
//# sourceMappingURL=portal-vue.common.js.map


/***/ }),

/***/ "7af6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/check-2.5924203a.svg";

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "89fe":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cross.b3ad63c9.svg";

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "afb7":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/warning.a0c31fac.svg";

/***/ }),

/***/ "bf37":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/close.bbfe38db.svg";

/***/ }),

/***/ "c437":
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__("e1f4");
var bytesToUuid = __webpack_require__("2366");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "c64e":
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__("e1f4");
var bytesToUuid = __webpack_require__("2366");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "e1f4":
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "f222":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/check.a71abf15.svg";

/***/ }),

/***/ "f51c":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/more.783f512b.svg";

/***/ }),

/***/ "f590":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/right-arrow.eaa5dc48.svg";

/***/ }),

/***/ "f687":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cancel.21a5e9ac.svg";

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "UiAlert", function() { return /* reexport */ alert_alert; });
__webpack_require__.d(__webpack_exports__, "UiAvatar", function() { return /* reexport */ avatar; });
__webpack_require__.d(__webpack_exports__, "UiBadge", function() { return /* reexport */ badge; });
__webpack_require__.d(__webpack_exports__, "UiBreadcrumbs", function() { return /* reexport */ breadcrumbs; });
__webpack_require__.d(__webpack_exports__, "UiButton", function() { return /* reexport */ button_button; });
__webpack_require__.d(__webpack_exports__, "UiCard", function() { return /* reexport */ card; });
__webpack_require__.d(__webpack_exports__, "UiContextMenu", function() { return /* reexport */ context_menu; });
__webpack_require__.d(__webpack_exports__, "UiDropdown", function() { return /* reexport */ dropdown; });
__webpack_require__.d(__webpack_exports__, "UiForm", function() { return /* reexport */ form_form; });
__webpack_require__.d(__webpack_exports__, "UiGrid", function() { return /* reexport */ grid; });
__webpack_require__.d(__webpack_exports__, "UiInput", function() { return /* reexport */ input; });
__webpack_require__.d(__webpack_exports__, "UiLoading", function() { return /* reexport */ loading; });
__webpack_require__.d(__webpack_exports__, "UiMenu", function() { return /* reexport */ menu; });
__webpack_require__.d(__webpack_exports__, "UiMenuItem", function() { return /* reexport */ item; });
__webpack_require__.d(__webpack_exports__, "UiMenuLoading", function() { return /* reexport */ menu_loading; });
__webpack_require__.d(__webpack_exports__, "UiMenuSeparator", function() { return /* reexport */ separator; });
__webpack_require__.d(__webpack_exports__, "UiMenuTitle", function() { return /* reexport */ title; });
__webpack_require__.d(__webpack_exports__, "UiModal", function() { return /* reexport */ modal; });
__webpack_require__.d(__webpack_exports__, "UiPortal", function() { return /* reexport */ portal; });
__webpack_require__.d(__webpack_exports__, "UiSelect", function() { return /* reexport */ select_select; });
__webpack_require__.d(__webpack_exports__, "UiSkeleton", function() { return /* reexport */ skeleton; });
__webpack_require__.d(__webpack_exports__, "UiTable", function() { return /* reexport */ table; });
__webpack_require__.d(__webpack_exports__, "UiThemeProvider", function() { return /* reexport */ theme_provider; });
__webpack_require__.d(__webpack_exports__, "UiToggle", function() { return /* reexport */ toggle; });
__webpack_require__.d(__webpack_exports__, "UiToken", function() { return /* reexport */ token; });
__webpack_require__.d(__webpack_exports__, "UiTokenSelector", function() { return /* reexport */ token_selector; });
__webpack_require__.d(__webpack_exports__, "UiTreeView", function() { return /* reexport */ treeview; });
__webpack_require__.d(__webpack_exports__, "UiTreeViewNode", function() { return /* reexport */ node; });

// NAMESPACE OBJECT: ./src/config.js
var config_namespaceObject = {};
__webpack_require__.r(config_namespaceObject);
__webpack_require__.d(config_namespaceObject, "APP_CONTENT_LAYOUT_ID", function() { return APP_CONTENT_LAYOUT_ID; });
__webpack_require__.d(config_namespaceObject, "APP_THEME_ID", function() { return APP_THEME_ID; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/alert/alert.vue?vue&type=template&id=23f04651&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ui-grid',{class:['ui-alert', ("ui-alert_" + _vm.variant)],attrs:{"align-items":"center","contained":true}},[(_vm.variant === 'error')?_c('error-icon',{staticClass:"ui-alert__icon"}):_vm._e(),(_vm.variant === 'warning')?_c('warning-icon',{staticClass:"ui-alert__icon"}):_vm._e(),(_vm.variant === 'success')?_c('check-icon',{staticClass:"ui-alert__icon"}):_vm._e(),(_vm.variant === 'info')?_c('info-icon',{staticClass:"ui-alert__icon"}):_vm._e(),_c('p',{staticClass:"ui-alert__text"},[_vm._v(" "+_vm._s(_vm.message)+" ")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/alert/alert.vue?vue&type=template&id=23f04651&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/grid/grid.vue?vue&type=template&id=12d49267&
var gridvue_type_template_id_12d49267_render = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.component,{tag:"component",class:( _obj = {
    'ui-grid': true
  }, _obj[("ui-grid_dir-" + _vm.direction)] = _vm.direction, _obj[("ui-grid_justify-" + _vm.justify)] = _vm.justify, _obj[("ui-grid_align-" + _vm.alignItems)] = _vm.alignItems, _obj[("ui-grid_wrap-" + _vm.wrap)] = _vm.wrap, _obj["ui-grid_contained"] = _vm.contained, _obj ),on:{"click":function($event){return _vm.$emit('click', $event)},"contextmenu":function($event){return _vm.$emit('contextmenu', $event)}}},[_vm._t("default")],2)}
var gridvue_type_template_id_12d49267_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/grid/grid.vue?vue&type=template&id=12d49267&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/grid/grid.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var gridvue_type_script_lang_js_ = ({
  name: "UiGrid",
  props: {
    justify: {
      type: String,
      required: false,
      default: "flex-start",
      validator: function validator(val) {
        return ["center", "start", "center", "end", "flex-start", "flex-end", "space-between", "space-around"].includes(val);
      }
    },
    alignItems: {
      type: String,
      required: false,
      default: "flex-start",
      validator: function validator(val) {
        return ["center", "start", "center", "end", "flex-start", "flex-end", "space-between", "space-around"].includes(val);
      }
    },
    wrap: {
      type: String,
      required: false,
      default: "nowrap",
      validator: function validator(val) {
        return ["nowrap", "wrap", "wrap-reverse"].includes(val);
      }
    },
    direction: {
      type: String,
      default: "row",
      required: false,
      validator: function validator(val) {
        return ["row", "column", "row-reverse", "column-reverse"].includes(val);
      }
    },
    component: {
      type: String,
      required: false,
      default: "div"
    },
    contained: {
      type: Boolean,
      required: false,
      default: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/grid/grid.vue?vue&type=script&lang=js&
 /* harmony default export */ var grid_gridvue_type_script_lang_js_ = (gridvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/grid/grid.vue





/* normalize component */

var component = normalizeComponent(
  grid_gridvue_type_script_lang_js_,
  gridvue_type_template_id_12d49267_render,
  gridvue_type_template_id_12d49267_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var grid = (component.exports);
// EXTERNAL MODULE: ./src/assets/cancel.svg
var cancel = __webpack_require__("f687");
var cancel_default = /*#__PURE__*/__webpack_require__.n(cancel);

// EXTERNAL MODULE: ./src/assets/warning.svg
var warning = __webpack_require__("afb7");
var warning_default = /*#__PURE__*/__webpack_require__.n(warning);

// EXTERNAL MODULE: ./src/assets/check.svg
var check = __webpack_require__("f222");
var check_default = /*#__PURE__*/__webpack_require__.n(check);

// EXTERNAL MODULE: ./src/assets/info.svg
var info = __webpack_require__("07e6");
var info_default = /*#__PURE__*/__webpack_require__.n(info);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/alert/alert.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var alertvue_type_script_lang_js_ = ({
  name: "UiAlert",
  components: {
    UiGrid: grid,
    ErrorIcon: cancel_default.a,
    WarningIcon: warning_default.a,
    CheckIcon: check_default.a,
    InfoIcon: info_default.a
  },
  props: {
    message: {
      type: String,
      required: true
    },
    variant: {
      type: String,
      required: false,
      default: "info",
      validator: function validator(val) {
        return ["info", "warning", "success", "error"].includes(val);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/alert/alert.vue?vue&type=script&lang=js&
 /* harmony default export */ var alert_alertvue_type_script_lang_js_ = (alertvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/alert/alert.vue





/* normalize component */

var alert_component = normalizeComponent(
  alert_alertvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var alert_alert = (alert_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/avatar/avatar.vue?vue&type=template&id=340434b5&
var avatarvue_type_template_id_340434b5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ui-grid',{staticClass:"ui-avatar",class:("ui-avatar-s" + _vm.size),attrs:{"align-items":"center","justify":"center","contained":false}},[(_vm.src)?_c('img',{staticClass:"ui-avatar__img",attrs:{"src":_vm.src,"alt":_vm.alt}}):_c('div',{staticClass:"ui-avatar__badge"},[_vm._v(" "+_vm._s(_vm.firstNameSymbol)+" ")])])}
var avatarvue_type_template_id_340434b5_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/avatar/avatar.vue?vue&type=template&id=340434b5&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/avatar/avatar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var avatarvue_type_script_lang_js_ = ({
  name: "UiAvatar",
  components: {
    UiGrid: grid
  },
  props: {
    src: {
      type: String,
      required: false,
      default: null
    },
    alt: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: false,
      default: 64,
      validator: function validator(val) {
        return [16, 24, 32, 44, 48, 56, 64, 96, 128].includes(val);
      }
    }
  },
  computed: {
    firstNameSymbol: function firstNameSymbol() {
      return this.name.length ? this.name[0].toUpperCase() : "";
    }
  }
});
// CONCATENATED MODULE: ./src/components/avatar/avatar.vue?vue&type=script&lang=js&
 /* harmony default export */ var avatar_avatarvue_type_script_lang_js_ = (avatarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/avatar/avatar.vue





/* normalize component */

var avatar_component = normalizeComponent(
  avatar_avatarvue_type_script_lang_js_,
  avatarvue_type_template_id_340434b5_render,
  avatarvue_type_template_id_340434b5_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var avatar = (avatar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/badge/badge.vue?vue&type=template&id=4da9820a&
var badgevue_type_template_id_4da9820a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"ui-badge",class:[, ("ui-badge_" + _vm.color)]},[_vm._t("default",[_vm._v(_vm._s(_vm.title))])],2)}
var badgevue_type_template_id_4da9820a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/badge/badge.vue?vue&type=template&id=4da9820a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/badge/badge.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var badgevue_type_script_lang_js_ = ({
  name: "UiBadge",
  props: {
    variant: {
      type: String,
      required: false,
      default: "contained",
      validator: function validator(val) {
        return ["contained", "outlined"].includes(val);
      }
    },
    color: {
      type: String,
      required: false,
      default: "green",
      validator: function validator(val) {
        return ["black", "blue", "green"].includes(val);
      }
    },
    title: {
      type: String,
      required: false,
      default: ""
    }
  }
});
// CONCATENATED MODULE: ./src/components/badge/badge.vue?vue&type=script&lang=js&
 /* harmony default export */ var badge_badgevue_type_script_lang_js_ = (badgevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/badge/badge.vue





/* normalize component */

var badge_component = normalizeComponent(
  badge_badgevue_type_script_lang_js_,
  badgevue_type_template_id_4da9820a_render,
  badgevue_type_template_id_4da9820a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var badge = (badge_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/breadcrumbs/breadcrumbs.vue?vue&type=template&id=696f679c&
var breadcrumbsvue_type_template_id_696f679c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ui-grid',{staticClass:"ui-breadcrumbs",attrs:{"component":"ul","align-items":"center"}},_vm._l((_vm.visibleItems),function(item){return _c('ui-grid',{key:item[_vm.uniqueKey],staticClass:"ui-breadcrumbs__item",attrs:{"component":"li","align-items":"center","contained":false}},[(!item.isDropdown)?[_vm._t("item-tempalte",[_vm._t(("item-tempalte(" + (item[_vm.uniqueKey]) + ")"),[_c('ui-button',{staticClass:"ui-breadcrumbs__item__btn",attrs:{"variant":"text"},on:{"click":function($event){_vm.handleItemClick($event, item, function () {})}}},[_vm._v(" "+_vm._s(item[_vm.labelKey])+" ")])],{"item":item,"click":function (e) { return _vm.handleItemClick(e, item, function () {}); }})],{"item":item,"click":function (e) { return _vm.handleItemClick(e, item, function () {}); }})]:[_c('ui-dropdown',{scopedSlots:_vm._u([{key:"anchor",fn:function(ref){
var open = ref.open;
var opened = ref.opened;
return [_c('ui-button',{staticClass:"ui-breadcrumbs__dotted-btn",class:{ 'ui-breadcrumbs__dotted-btn_active': opened },attrs:{"variant":"text"},on:{"click":open}},[_c('more-icon',{staticClass:"ui-breadcrumbs__dotted-btn__icon"})],1)]}},{key:"dropdown-items",fn:function(ref){
var close = ref.close;
return [_vm._l((_vm.hiddenItems),function(dropdownItem){return [_vm._t("dropdown-item-template",[_c('ui-menu-item',{attrs:{"id":dropdownItem[_vm.uniqueKey]},on:{"click":function (e) { return _vm.handleItemClick(e, dropdownItem, close); }},scopedSlots:_vm._u([{key:"text",fn:function(){return [_c('p',{staticClass:"ui-breadcrumbs__dropdown-item__text"},[_vm._v(" "+_vm._s(dropdownItem[_vm.labelKey])+" ")])]},proxy:true}],null,true)})],{"click":function (e) { return _vm.handleItemClick(e, dropdownItem, close); },"item":dropdownItem})]})]}}],null,true)})],(_vm.lastItem !== item)?_c('arrow-icon',{staticClass:"ui-breadcrumbs__separator"}):_vm._e()],2)}),1)}
var breadcrumbsvue_type_template_id_696f679c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/breadcrumbs/breadcrumbs.vue?vue&type=template&id=696f679c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/button/button.vue?vue&type=template&id=6f8e9f2c&
var buttonvue_type_template_id_6f8e9f2c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.component,{tag:"component",class:['ui-btn', ("ui-btn--" + _vm.variant), { 'ui-btn_loading': _vm.loading }],attrs:{"type":_vm.type,"disabled":_vm.loading},on:{"click":function($event){return _vm.$emit('click', $event)}}},[(_vm.loading)?_c('ui-loading',{attrs:{"size":14}}):_vm._t("default",[_vm._v(" "+_vm._s(_vm.title)+" ")])],2)}
var buttonvue_type_template_id_6f8e9f2c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/button/button.vue?vue&type=template&id=6f8e9f2c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/loading/loading.vue?vue&type=template&id=5b6e8ca4&
var loadingvue_type_template_id_5b6e8ca4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"ui-loading"},[_c('span',{staticClass:"ui-loading__spinner",style:({ width: (_vm.size + "px"), height: (_vm.size + "px") })})])}
var loadingvue_type_template_id_5b6e8ca4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/loading/loading.vue?vue&type=template&id=5b6e8ca4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/loading/loading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var loadingvue_type_script_lang_js_ = ({
  name: "UiLoading",
  props: {
    size: {
      type: Number,
      required: false,
      default: 16
    }
  }
});
// CONCATENATED MODULE: ./src/components/loading/loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var loading_loadingvue_type_script_lang_js_ = (loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/loading/loading.vue





/* normalize component */

var loading_component = normalizeComponent(
  loading_loadingvue_type_script_lang_js_,
  loadingvue_type_template_id_5b6e8ca4_render,
  loadingvue_type_template_id_5b6e8ca4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var loading = (loading_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/button/button.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
  name: "UiButton",
  components: {
    UiLoading: loading
  },
  props: {
    title: {
      type: String,
      required: false,
      default: ""
    },
    type: {
      type: String,
      required: false,
      default: "button",
      validator: function validator(val) {
        return ["button", "submit", "reset"].includes(val);
      }
    },
    component: {
      type: String,
      required: false,
      default: "button",
      validator: function validator(val) {
        return ["button", "li", "input", "a"].includes(val);
      }
    },
    variant: {
      type: String,
      required: false,
      default: "contained",
      validator: function validator(val) {
        return ["contained", "outlined", "text"].includes(val);
      }
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./src/components/button/button.vue?vue&type=script&lang=js&
 /* harmony default export */ var button_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/button/button.vue





/* normalize component */

var button_component = normalizeComponent(
  button_buttonvue_type_script_lang_js_,
  buttonvue_type_template_id_6f8e9f2c_render,
  buttonvue_type_template_id_6f8e9f2c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var button_button = (button_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/dropdown/dropdown.vue?vue&type=template&id=3e4fd2bc&
var dropdownvue_type_template_id_3e4fd2bc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ui-grid',{staticClass:"ui-dropdown",attrs:{"aligh-items":"center"}},[_vm._t("anchor",[_c('ui-button',{attrs:{"variant":"text"},on:{"click":_vm.open}},[_vm._v(_vm._s(_vm.title))])],{"open":_vm.open,"opened":Boolean(_vm.root)}),(Boolean(_vm.root))?_c('ui-portal',{attrs:{"anchor":{ root: _vm.root },"position":"left-bottom"}},[_c('ui-menu',{ref:"menu"},[(_vm.loading)?[_vm._t("loading",[_c('ui-menu-loading')])]:[_vm._t("dropdown-items",null,{"close":_vm.close})]],2)],1):_vm._e()],2)}
var dropdownvue_type_template_id_3e4fd2bc_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/dropdown/dropdown.vue?vue&type=template&id=3e4fd2bc&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/portal/portal.vue?vue&type=template&id=151402e1&
var portalvue_type_template_id_151402e1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('portal',{attrs:{"to":"modals-location"}},[_c('portal-content',{attrs:{"anchor":_vm.anchor,"position":_vm.position,"x":_vm.x,"y":_vm.y},nativeOn:{"keydown":function($event){return _vm.$emit('keydown', $event)}}},[_vm._t("default")],2)],1)}
var portalvue_type_template_id_151402e1_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/portal/portal.vue?vue&type=template&id=151402e1&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/portal/content.vue?vue&type=template&id=16922d8b&
var contentvue_type_template_id_16922d8b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ui-grid',{staticClass:"ui-popup",class:{ 'ui-popup_visible': _vm.show },style:({ left: _vm.localX, top: _vm.localY }),attrs:{"direction":"column"}},[_vm._t("default")],2)}
var contentvue_type_template_id_16922d8b_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/portal/content.vue?vue&type=template&id=16922d8b&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/portal/content.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var contentvue_type_script_lang_js_ = ({
  name: "UiPopup",
  components: {
    UiGrid: grid
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
// CONCATENATED MODULE: ./src/components/portal/content.vue?vue&type=script&lang=js&
 /* harmony default export */ var portal_contentvue_type_script_lang_js_ = (contentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/portal/content.vue





/* normalize component */

var content_component = normalizeComponent(
  portal_contentvue_type_script_lang_js_,
  contentvue_type_template_id_16922d8b_render,
  contentvue_type_template_id_16922d8b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var content = (content_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/portal/portal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var portalvue_type_script_lang_js_ = ({
  name: "UiPortal",
  components: {
    PortalContent: content
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
  }
});
// CONCATENATED MODULE: ./src/components/portal/portal.vue?vue&type=script&lang=js&
 /* harmony default export */ var portal_portalvue_type_script_lang_js_ = (portalvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/portal/portal.vue





/* normalize component */

var portal_component = normalizeComponent(
  portal_portalvue_type_script_lang_js_,
  portalvue_type_template_id_151402e1_render,
  portalvue_type_template_id_151402e1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var portal = (portal_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/menu/menu.vue?vue&type=template&id=99474a6a&
var menuvue_type_template_id_99474a6a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ui-grid',{staticClass:"ui-menu",attrs:{"component":"ul","direction":"column","tabindex":_vm.focusable ? 0 : -1,"contained":false},nativeOn:{"keydown":function($event){return _vm.hadnleKeyDown($event)}}},[_vm._t("default")],2)}
var menuvue_type_template_id_99474a6a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/menu/menu.vue?vue&type=template&id=99474a6a&

// EXTERNAL MODULE: ./node_modules/uuid/index.js
var uuid = __webpack_require__("11c1");
var uuid_default = /*#__PURE__*/__webpack_require__.n(uuid);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/menu/menu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var menuvue_type_script_lang_js_ = ({
  name: "UiMenu",
  components: {
    UiGrid: grid
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
      var id = (_vm$id = vm.id) !== null && _vm$id !== void 0 ? _vm$id : uuid_default.a.v4();

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
      var id = (_vm$id2 = vm.id) !== null && _vm$id2 !== void 0 ? _vm$id2 : uuid_default.a.v4();

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
// CONCATENATED MODULE: ./src/components/menu/menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var menu_menuvue_type_script_lang_js_ = (menuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/menu/menu.vue





/* normalize component */

var menu_component = normalizeComponent(
  menu_menuvue_type_script_lang_js_,
  menuvue_type_template_id_99474a6a_render,
  menuvue_type_template_id_99474a6a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var menu = (menu_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/menu/loading.vue?vue&type=template&id=2f8bc974&
var loadingvue_type_template_id_2f8bc974_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ui-grid',{staticClass:"ui-menu-loading",attrs:{"component":"li","justify":"center"}},[_c('ui-loading')],1)}
var loadingvue_type_template_id_2f8bc974_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/menu/loading.vue?vue&type=template&id=2f8bc974&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/menu/loading.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var menu_loadingvue_type_script_lang_js_ = ({
  name: "UiMenuLoading",
  components: {
    UiGrid: grid,
    UiLoading: loading
  },
  props: {
    weight: {
      type: Number,
      required: false,
      default: 1
    }
  }
});
// CONCATENATED MODULE: ./src/components/menu/loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_menu_loadingvue_type_script_lang_js_ = (menu_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/menu/loading.vue





/* normalize component */

var menu_loading_component = normalizeComponent(
  components_menu_loadingvue_type_script_lang_js_,
  loadingvue_type_template_id_2f8bc974_render,
  loadingvue_type_template_id_2f8bc974_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var menu_loading = (menu_loading_component.exports);
// CONCATENATED MODULE: ./src/config.js
var APP_CONTENT_LAYOUT_ID = "app-content-layout";
var APP_THEME_ID = "app-theme";
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/dropdown/dropdown.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var dropdownvue_type_script_lang_js_ = ({
  name: "UiDropdown",
  components: {
    UiGrid: grid,
    UiPortal: portal,
    UiButton: button_button,
    UiMenu: menu,
    UiMenuLoading: menu_loading
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
      var root = document.getElementById(APP_CONTENT_LAYOUT_ID);
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
// CONCATENATED MODULE: ./src/components/dropdown/dropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var dropdown_dropdownvue_type_script_lang_js_ = (dropdownvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/dropdown/dropdown.vue





/* normalize component */

var dropdown_component = normalizeComponent(
  dropdown_dropdownvue_type_script_lang_js_,
  dropdownvue_type_template_id_3e4fd2bc_render,
  dropdownvue_type_template_id_3e4fd2bc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var dropdown = (dropdown_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/menu/item.vue?vue&type=template&id=68453fb7&
var itemvue_type_template_id_68453fb7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ui-button',{staticClass:"ui-menu-item",class:{ 'ui-menu-item_active': _vm.active },attrs:{"component":"li","variant":"text"},nativeOn:{"click":function($event){return _vm.$emit('click', $event)},"mouseover":function($event){return _vm.$emit('mouseover', $event)},"mouseenter":function($event){return _vm.$emit('mouseenter', $event)},"mouseleave":function($event){return _vm.$emit('mouseleave', $event)}}},[_c('ui-grid',{staticClass:"ui-menu-item__left",attrs:{"align-items":"center"}},[_vm._t("icon"),_vm._t("text")],2),_c('ui-grid',{staticClass:"ui-menu-item__right",attrs:{"align-items":"center","justify":"flex-end"}},[_vm._t("controls",[(_vm.existsSubmenu)?_c('arrow-icon',{staticClass:"ui-menu-item__submenu-expand-icon"}):_vm._e()])],2),(_vm.showSubmenus)?_c('ui-portal',{staticClass:"ui-menu-popup",attrs:{"anchor":_vm.anchor,"position":"right-top"}},[_c('ui-menu',{ref:"submenu",attrs:{"root-menu-ref":_vm._menuContext.root},on:{"menu-item-click":function (e) { return _vm.$emit('menu-item-click', e); }}},[_vm._t("submenu:items")],2)],1):_vm._e()],1)}
var itemvue_type_template_id_68453fb7_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/menu/item.vue?vue&type=template&id=68453fb7&

// EXTERNAL MODULE: ./src/assets/right-arrow.svg
var right_arrow = __webpack_require__("f590");
var right_arrow_default = /*#__PURE__*/__webpack_require__.n(right_arrow);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/menu/item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var itemvue_type_script_lang_js_ = ({
  name: "UiMenuItem",
  components: {
    UiGrid: grid,
    UiButton: button_button,
    UiPortal: portal,
    UiMenu: menu,
    ArrowIcon: right_arrow_default.a
  },
  activable: true,
  inject: ["_menuContext"],
  props: {
    id: {
      type: String,
      required: true,
      default: null
    }
  },
  data: function data() {
    return {
      anchor: {
        root: null
      }
    };
  },
  computed: {
    existsSubmenu: function existsSubmenu() {
      var _this$$slots$submenu;

      return ((_this$$slots$submenu = this.$slots["submenu:items"]) === null || _this$$slots$submenu === void 0 ? void 0 : _this$$slots$submenu.length) > 0;
    },
    active: function active() {
      return this._menuContext.activeItemId === this.id;
    },
    showSubmenus: function showSubmenus() {
      return this.existsSubmenu && this._menuContext.isAvailableShowing && this.anchor.root && this.active;
    }
  },
  mounted: function mounted() {
    this.anchor = {
      root: this.$el
    };
  }
});
// CONCATENATED MODULE: ./src/components/menu/item.vue?vue&type=script&lang=js&
 /* harmony default export */ var menu_itemvue_type_script_lang_js_ = (itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/menu/item.vue





/* normalize component */

var item_component = normalizeComponent(
  menu_itemvue_type_script_lang_js_,
  itemvue_type_template_id_68453fb7_render,
  itemvue_type_template_id_68453fb7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var item = (item_component.exports);
// EXTERNAL MODULE: ./src/assets/more.svg
var more = __webpack_require__("f51c");
var more_default = /*#__PURE__*/__webpack_require__.n(more);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/breadcrumbs/breadcrumbs.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var breadcrumbsvue_type_script_lang_js_ = ({
  name: "UiBreadcrumbs",
  components: {
    UiGrid: grid,
    UiButton: button_button,
    UiDropdown: dropdown,
    UiMenuItem: item,
    ArrowIcon: right_arrow_default.a,
    MoreIcon: more_default.a
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
// CONCATENATED MODULE: ./src/components/breadcrumbs/breadcrumbs.vue?vue&type=script&lang=js&
 /* harmony default export */ var breadcrumbs_breadcrumbsvue_type_script_lang_js_ = (breadcrumbsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/breadcrumbs/breadcrumbs.vue





/* normalize component */

var breadcrumbs_component = normalizeComponent(
  breadcrumbs_breadcrumbsvue_type_script_lang_js_,
  breadcrumbsvue_type_template_id_696f679c_render,
  breadcrumbsvue_type_template_id_696f679c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var breadcrumbs = (breadcrumbs_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/card/card.vue?vue&type=template&id=0f37b013&
var cardvue_type_template_id_0f37b013_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ui-grid',{staticClass:"ui-card",attrs:{"direction":"column"}},[_c('ui-grid',{staticClass:"ui-card__header",attrs:{"align-items":"center","contained":true}},[_vm._t("header")],2),_c('ui-grid',{staticClass:"ui-card__body",attrs:{"align-items":"center","contained":true}},[_vm._t("body")],2),_c('ui-grid',{staticClass:"ui-card__footer",attrs:{"align-items":"center","contained":true}},[_vm._t("footer")],2)],1)}
var cardvue_type_template_id_0f37b013_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/card/card.vue?vue&type=template&id=0f37b013&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/card/card.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var cardvue_type_script_lang_js_ = ({
  name: "UiCard",
  components: {
    UiGrid: grid
  }
});
// CONCATENATED MODULE: ./src/components/card/card.vue?vue&type=script&lang=js&
 /* harmony default export */ var card_cardvue_type_script_lang_js_ = (cardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/card/card.vue





/* normalize component */

var card_component = normalizeComponent(
  card_cardvue_type_script_lang_js_,
  cardvue_type_template_id_0f37b013_render,
  cardvue_type_template_id_0f37b013_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var card = (card_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/context-menu/context-menu.vue?vue&type=template&id=dd3d789c&
var context_menuvue_type_template_id_dd3d789c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ui-grid',{staticClass:"ui-context-menu"},[_vm._t("default"),(Boolean(_vm.root))?_c('ui-portal',{attrs:{"anchor":{ root: _vm.root },"x":_vm.x,"y":_vm.y}},[_c('ui-menu',{ref:"menu",on:{"menu-item-click":_vm.handleItemClick}},[_vm._t("menu-items")],2)],1):_vm._e()],2)}
var context_menuvue_type_template_id_dd3d789c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/context-menu/context-menu.vue?vue&type=template&id=dd3d789c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/context-menu/context-menu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var context_menuvue_type_script_lang_js_ = ({
  name: "UiContextMenu",
  components: {
    UiGrid: grid,
    UiPortal: portal,
    UiMenu: menu
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
      var root = document.getElementById(APP_CONTENT_LAYOUT_ID);
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
// CONCATENATED MODULE: ./src/components/context-menu/context-menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var context_menu_context_menuvue_type_script_lang_js_ = (context_menuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/context-menu/context-menu.vue





/* normalize component */

var context_menu_component = normalizeComponent(
  context_menu_context_menuvue_type_script_lang_js_,
  context_menuvue_type_template_id_dd3d789c_render,
  context_menuvue_type_template_id_dd3d789c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var context_menu = (context_menu_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/form/form.vue?vue&type=template&id=f4fecb68&
var formvue_type_template_id_f4fecb68_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ui-grid',{attrs:{"component":"form","direction":"column"},nativeOn:{"submit":function($event){return _vm.onSubmit($event)}}},[_vm._t("default")],2)}
var formvue_type_template_id_f4fecb68_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/form/form.vue?vue&type=template&id=f4fecb68&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/form/form.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var formvue_type_script_lang_js_ = ({
  name: "UiForm",
  components: {
    UiGrid: grid
  },
  methods: {
    onSubmit: function onSubmit(e) {
      this.$emit("submit", e);
    }
  }
});
// CONCATENATED MODULE: ./src/components/form/form.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_formvue_type_script_lang_js_ = (formvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/form/form.vue





/* normalize component */

var form_component = normalizeComponent(
  form_formvue_type_script_lang_js_,
  formvue_type_template_id_f4fecb68_render,
  formvue_type_template_id_f4fecb68_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var form_form = (form_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/input/input.vue?vue&type=template&id=a3aae212&
var inputvue_type_template_id_a3aae212_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{staticClass:"ui-input",attrs:{"type":_vm.type,"placeholder":_vm.placeholder},domProps:{"value":_vm.value},on:{"input":function($event){$event.preventDefault();return _vm.handleInput($event)}}})}
var inputvue_type_template_id_a3aae212_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/input/input.vue?vue&type=template&id=a3aae212&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/input/input.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var inputvue_type_script_lang_js_ = ({
  name: "UiInput",
  props: {
    type: {
      type: String,
      required: false,
      default: "text",
      validator: function validator(val) {
        return ["text", "password", "email", "url", "tel"].includes(val);
      }
    },
    placeholder: {
      type: String,
      required: false,
      default: ""
    },
    value: {
      type: String,
      required: false,
      default: ""
    }
  },
  methods: {
    handleInput: function handleInput(e) {
      var _e$target;

      this.$emit("input", (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value);
    }
  }
});
// CONCATENATED MODULE: ./src/components/input/input.vue?vue&type=script&lang=js&
 /* harmony default export */ var input_inputvue_type_script_lang_js_ = (inputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/input/input.vue





/* normalize component */

var input_component = normalizeComponent(
  input_inputvue_type_script_lang_js_,
  inputvue_type_template_id_a3aae212_render,
  inputvue_type_template_id_a3aae212_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var input = (input_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/menu/separator.vue?vue&type=template&id=89136eea&
var separatorvue_type_template_id_89136eea_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ui-grid',{staticClass:"ui-menu-separator",attrs:{"component":"li"}},[_c('span',{staticClass:"ui-menu-separator__marker",style:({
      height: (_vm.weight + "px")
    })})])}
var separatorvue_type_template_id_89136eea_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/menu/separator.vue?vue&type=template&id=89136eea&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/menu/separator.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var separatorvue_type_script_lang_js_ = ({
  name: "UiMenuSeparator",
  components: {
    UiGrid: grid
  },
  props: {
    weight: {
      type: Number,
      required: false,
      default: 1
    }
  }
});
// CONCATENATED MODULE: ./src/components/menu/separator.vue?vue&type=script&lang=js&
 /* harmony default export */ var menu_separatorvue_type_script_lang_js_ = (separatorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/menu/separator.vue





/* normalize component */

var separator_component = normalizeComponent(
  menu_separatorvue_type_script_lang_js_,
  separatorvue_type_template_id_89136eea_render,
  separatorvue_type_template_id_89136eea_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var separator = (separator_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/menu/title.vue?vue&type=template&id=0f5ac2a9&
var titlevue_type_template_id_0f5ac2a9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ui-grid',{staticClass:"ui-menu-title",attrs:{"component":"li"}},[_c('p',{staticClass:"ui-menu-title__text"},[_vm._v(_vm._s(_vm.text))])])}
var titlevue_type_template_id_0f5ac2a9_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/menu/title.vue?vue&type=template&id=0f5ac2a9&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/menu/title.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var titlevue_type_script_lang_js_ = ({
  name: "UiMenuTitle",
  components: {
    UiGrid: grid
  },
  props: {
    text: {
      type: String,
      required: true,
      default: ""
    }
  }
});
// CONCATENATED MODULE: ./src/components/menu/title.vue?vue&type=script&lang=js&
 /* harmony default export */ var menu_titlevue_type_script_lang_js_ = (titlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/menu/title.vue





/* normalize component */

var title_component = normalizeComponent(
  menu_titlevue_type_script_lang_js_,
  titlevue_type_template_id_0f5ac2a9_render,
  titlevue_type_template_id_0f5ac2a9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var title = (title_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/modal/modal.vue?vue&type=template&id=767a5a55&
var modalvue_type_template_id_767a5a55_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('portal',{attrs:{"to":"modals-location"}},[(_vm.open)?_c('ui-grid',{staticClass:"ui-modal",attrs:{"align-items":"center","justify":"center"}},[_c('ui-grid',{staticClass:"ui-modal__background",on:{"click":_vm.handleBackgroundClick}}),_c('ui-grid',{staticClass:"ui-modal__content",class:_vm.contentClass,attrs:{"direction":"column"}},[_c('ui-grid',{staticClass:"ui-modal__header"},[_vm._t("header",[_c('p',{staticClass:"ui-modal__header-title"},[_vm._v(_vm._s(_vm.title))])])],2),_c('ui-grid',{staticClass:"ui-modal__body"},[_vm._t("default")],2),_c('ui-grid',{staticClass:"ui-modal__footer",attrs:{"justify":"flex-end"}},[_vm._t("footer",[_c('ui-button',{attrs:{"variant":"outlined"},on:{"click":function($event){return _vm.$emit('canceled', $event)}}},[_vm._v(" "+_vm._s(_vm.$t("Cancel"))+" ")]),_c('ui-button',{attrs:{"variant":"contained"},on:{"click":function($event){return _vm.$emit('granted', $event)}}},[_vm._v(" "+_vm._s(_vm.$t("Ok"))+" ")])])],2)],1)],1):_vm._e()],1)}
var modalvue_type_template_id_767a5a55_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/modal/modal.vue?vue&type=template&id=767a5a55&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/modal/modal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var modalvue_type_script_lang_js_ = ({
  name: "UiModal",
  components: {
    UiGrid: grid,
    UiButton: button_button
  },
  props: {
    open: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: ""
    },
    contentClass: {
      type: String,
      required: false,
      default: ""
    }
  },
  methods: {
    handleBackgroundClick: function handleBackgroundClick(e) {
      this.$emit("close", e);
    }
  }
});
// CONCATENATED MODULE: ./src/components/modal/modal.vue?vue&type=script&lang=js&
 /* harmony default export */ var modal_modalvue_type_script_lang_js_ = (modalvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/modal/modal.vue





/* normalize component */

var modal_component = normalizeComponent(
  modal_modalvue_type_script_lang_js_,
  modalvue_type_template_id_767a5a55_render,
  modalvue_type_template_id_767a5a55_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var modal = (modal_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/select/select.vue?vue&type=template&id=7300babd&
var selectvue_type_template_id_7300babd_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ui-grid',[_vm._t("anchor",null,{"selectedItem":_vm.selected,"opened":Boolean(_vm.root),"open":_vm.open}),(Boolean(_vm.root))?_c('ui-portal',{attrs:{"anchor":{ root: _vm.root },"position":"left-bottom"}},[_c('ui-menu',{ref:"menu",staticClass:"ui-select__items"},[(_vm.items.length)?[_vm._l((_vm.items),function(item){return [_vm._t("item-template",[_c('ui-menu-item',{attrs:{"id":item.name},on:{"click":function($event){return _vm.handleItemClick(item)}},scopedSlots:_vm._u([{key:"text",fn:function(){return [_vm._v(" "+_vm._s(item.name)+" ")]},proxy:true}],null,true)})],{"item":item,"selectedItem":_vm.selected,"select":_vm.handleItemClick.bind(this, item)})]})]:(_vm.loading)?[_vm._t("loading-template",[_c('ui-menu-loading')])]:[_vm._t("empty-template")]],2)],1):_vm._e()],2)}
var selectvue_type_template_id_7300babd_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/select/select.vue?vue&type=template&id=7300babd&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/select/select.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var selectvue_type_script_lang_js_ = ({
  name: "UiSelect",
  components: {
    UiGrid: grid,
    UiPortal: portal,
    UiMenu: menu,
    UiMenuLoading: menu_loading,
    UiMenuItem: item
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
      var root = document.getElementById(APP_CONTENT_LAYOUT_ID);
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
// CONCATENATED MODULE: ./src/components/select/select.vue?vue&type=script&lang=js&
 /* harmony default export */ var select_selectvue_type_script_lang_js_ = (selectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/select/select.vue





/* normalize component */

var select_component = normalizeComponent(
  select_selectvue_type_script_lang_js_,
  selectvue_type_template_id_7300babd_render,
  selectvue_type_template_id_7300babd_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var select_select = (select_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/skeleton/skeleton.vue?vue&type=template&id=515bfc9b&
var skeletonvue_type_template_id_515bfc9b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"ui-skeleton ui-skeleton__pulse",style:({ width: _vm.width, height: _vm.height, borderRadius: _vm.radius })})}
var skeletonvue_type_template_id_515bfc9b_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/skeleton/skeleton.vue?vue&type=template&id=515bfc9b&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/skeleton/skeleton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var skeletonvue_type_script_lang_js_ = ({
  name: "UiSkeleton",
  props: {
    width: {
      type: String,
      required: true
    },
    height: {
      type: String,
      required: true
    },
    radius: {
      type: String,
      required: false,
      default: "0.25rem"
    }
  }
});
// CONCATENATED MODULE: ./src/components/skeleton/skeleton.vue?vue&type=script&lang=js&
 /* harmony default export */ var skeleton_skeletonvue_type_script_lang_js_ = (skeletonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/skeleton/skeleton.vue





/* normalize component */

var skeleton_component = normalizeComponent(
  skeleton_skeletonvue_type_script_lang_js_,
  skeletonvue_type_template_id_515bfc9b_render,
  skeletonvue_type_template_id_515bfc9b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var skeleton = (skeleton_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/table/table.vue?vue&type=template&id=8f8c749e&
var tablevue_type_template_id_8f8c749e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ui-grid',{staticClass:"ui-table",attrs:{"component":"table","role":"table","direction":"column","contained":true}},[(_vm.items.length)?_c('ui-grid',{staticClass:"ui-table__header",attrs:{"component":"thead","role":"rowgroup","contained":true}},[_c('ui-grid',{staticClass:"ui-table__row",class:_vm.hrClass,attrs:{"component":"tr","role":"row","contained":true},on:{"click":function($event){return _vm.$emit('header-row-click', $event)}}},_vm._l((_vm.fields),function(field){return _c('ui-grid',{key:field.key,staticClass:"ui-table__cell ui-table__cell-header",class:field.hcClass,attrs:{"component":"th","role":"columnheader","align-items":"center","contained":true},on:{"click":function($event){return _vm.$emit('header-cell-click', $event, field)}}},[_vm._t("head",[_vm._t(("head(" + (field.key) + ")"),[_vm._v(" "+_vm._s(field.label)+" ")],{"label":field.label,"item":field})])],2)}),1)],1):_vm._e(),_c('ui-grid',{attrs:{"component":"tbody","role":"rowgroup","direction":"column","contained":true}},[(_vm.items.length)?_vm._l((_vm.items.length),function(i){return _c('ui-grid',{key:i,staticClass:"ui-table__row",class:[_vm.brClass, _vm.items[i - 1].brClass],attrs:{"component":"tr","role":"row","contained":true},nativeOn:{"click":function($event){return _vm.$emit('body-row-click', $event, _vm.items[i - 1])},"dblclick":function($event){return _vm.$emit('body-row-dbl-click', $event, _vm.items[i - 1])},"contextmenu":function($event){return (function (e) {
            _vm.$emit('body-row-context-menu', e, _vm.items[i - 1]);
            _vm.$emit('contextmenu', e, _vm.items[i - 1]);
          })($event)}}},_vm._l((_vm.fields),function(field){return _c('ui-grid',{key:field.key,staticClass:"ui-table__cell ui-table__cell-body",class:field.bcClass,attrs:{"component":"td","role":"cell","align-items":"center","contained":true},on:{"click":function($event){return _vm.$emit('body-cell-click', $event, field, _vm.items)}}},[_vm._t("cell",[_vm._t(("cell(" + (field.key) + ")"),[_vm._v(" "+_vm._s(_vm.items[i - 1][field.key])+" ")],{"value":_vm.items[i - 1][field.key],"item":_vm.items[i - 1]})])],2)}),1)}):[_vm._t("table-empty-template",[_vm._v("Table is empty")])]],2)],1)}
var tablevue_type_template_id_8f8c749e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/table/table.vue?vue&type=template&id=8f8c749e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/table/table.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var tablevue_type_script_lang_js_ = ({
  name: "UiTable",
  components: {
    UiGrid: grid
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
// CONCATENATED MODULE: ./src/components/table/table.vue?vue&type=script&lang=js&
 /* harmony default export */ var table_tablevue_type_script_lang_js_ = (tablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/table/table.vue





/* normalize component */

var table_component = normalizeComponent(
  table_tablevue_type_script_lang_js_,
  tablevue_type_template_id_8f8c749e_render,
  tablevue_type_template_id_8f8c749e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var table = (table_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/theme-provider/theme-provider.vue?vue&type=template&id=1c3117cd&
var theme_providervue_type_template_id_1c3117cd_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ui-grid',{class:("ui-theme_" + _vm.mode),attrs:{"contained":true}},[_c('ui-grid',{staticClass:"ui-h-full",class:_vm.contentClass,attrs:{"id":_vm.APP_CONTENT_LAYOUT_ID,"contained":true}},[_vm._t("default")],2),_c('portal-target',{attrs:{"name":"modals-location","multiple":""}})],1)}
var theme_providervue_type_template_id_1c3117cd_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/theme-provider/theme-provider.vue?vue&type=template&id=1c3117cd&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/portal-vue/dist/portal-vue.common.js
var portal_vue_common = __webpack_require__("2b88");
var portal_vue_common_default = /*#__PURE__*/__webpack_require__.n(portal_vue_common);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/theme-provider/theme-provider.vue?vue&type=script&lang=js&
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//




external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(portal_vue_common_default.a);
/* harmony default export */ var theme_providervue_type_script_lang_js_ = ({
  name: "ThemeProvider",
  components: {
    UiGrid: grid
  },
  props: {
    mode: {
      type: String,
      required: false,
      default: "light",
      validator: function validator(val) {
        return ["light", "dark"].includes(val);
      }
    },
    contentClass: {
      type: String,
      required: false,
      default: ""
    }
  },
  data: function data() {
    return _objectSpread({}, config_namespaceObject);
  }
});
// CONCATENATED MODULE: ./src/components/theme-provider/theme-provider.vue?vue&type=script&lang=js&
 /* harmony default export */ var theme_provider_theme_providervue_type_script_lang_js_ = (theme_providervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/theme-provider/theme-provider.vue





/* normalize component */

var theme_provider_component = normalizeComponent(
  theme_provider_theme_providervue_type_script_lang_js_,
  theme_providervue_type_template_id_1c3117cd_render,
  theme_providervue_type_template_id_1c3117cd_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var theme_provider = (theme_provider_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/toggle/toggle.vue?vue&type=template&id=2108934a&
var togglevue_type_template_id_2108934a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ui-button',{staticClass:"ui-toggle",class:{ 'ui-toggle_checked': _vm.state },attrs:{"role":"switch","variant":"text","disabled":_vm.disabled},on:{"click":_vm.toggle}},[(!_vm.loading)?_c('span',{staticClass:"ui-toggle__icon"},[(_vm.state)?_c('check-icon'):_c('cross-icon')],1):_c('ui-loading')],1)}
var togglevue_type_template_id_2108934a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/toggle/toggle.vue?vue&type=template&id=2108934a&

// EXTERNAL MODULE: ./src/assets/check-2.svg
var check_2 = __webpack_require__("7af6");
var check_2_default = /*#__PURE__*/__webpack_require__.n(check_2);

// EXTERNAL MODULE: ./src/assets/cross.svg
var cross = __webpack_require__("89fe");
var cross_default = /*#__PURE__*/__webpack_require__.n(cross);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/toggle/toggle.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var togglevue_type_script_lang_js_ = ({
  name: "UiToggle",
  components: {
    UiButton: button_button,
    UiLoading: loading,
    CheckIcon: check_2_default.a,
    CrossIcon: cross_default.a
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
// CONCATENATED MODULE: ./src/components/toggle/toggle.vue?vue&type=script&lang=js&
 /* harmony default export */ var toggle_togglevue_type_script_lang_js_ = (togglevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/toggle/toggle.vue





/* normalize component */

var toggle_component = normalizeComponent(
  toggle_togglevue_type_script_lang_js_,
  togglevue_type_template_id_2108934a_render,
  togglevue_type_template_id_2108934a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var toggle = (toggle_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/token/token.vue?vue&type=template&id=5a458e7e&
var tokenvue_type_template_id_5a458e7e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"ui-token",on:{"click":function($event){$event.stopPropagation();return _vm.$emit('click')},"keydown":function($event){return _vm.$emit('keydown', $event)}}},[_vm._t("default",[_c('p',{staticClass:"ui-token__text"},[_vm._v(" "+_vm._s(_vm.title)+" ")])]),(!_vm.viewOnly)?_c('close-icon',{staticClass:"ui-token__close-btn",on:{"click":function($event){$event.stopPropagation();return _vm.$emit('close')}}}):_vm._e()],2)}
var tokenvue_type_template_id_5a458e7e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/token/token.vue?vue&type=template&id=5a458e7e&

// EXTERNAL MODULE: ./src/assets/close.svg
var assets_close = __webpack_require__("bf37");
var close_default = /*#__PURE__*/__webpack_require__.n(assets_close);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/token/token.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var tokenvue_type_script_lang_js_ = ({
  name: "UiToken",
  components: {
    CloseIcon: close_default.a
  },
  props: {
    title: {
      type: String,
      required: false,
      default: ""
    },
    viewOnly: {
      type: Boolean,
      required: false,
      default: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/token/token.vue?vue&type=script&lang=js&
 /* harmony default export */ var token_tokenvue_type_script_lang_js_ = (tokenvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/token/token.vue





/* normalize component */

var token_component = normalizeComponent(
  token_tokenvue_type_script_lang_js_,
  tokenvue_type_template_id_5a458e7e_render,
  tokenvue_type_template_id_5a458e7e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var token = (token_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/token-selector/token-selector.vue?vue&type=template&id=01011c4b&
var token_selectorvue_type_template_id_01011c4b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ui-grid',{staticClass:"ui-token-selector",class:{
    'ui-token-selector_focus': _vm.isFocus
  },attrs:{"align-items":"center","tabindex":"0"},nativeOn:{"click":function($event){return _vm.handleGlobalClick($event)},"keydown":function($event){return _vm.handleGlobalKeyDown($event)}}},[_vm._l((_vm.tokens),function(token){return _c('ui-grid',{key:token.id,staticClass:"ui-token-selector__token",attrs:{"tabindex":"-1"},nativeOn:{"keydown":function($event){return _vm.handleGlobalKeyDown($event)}}},[_vm._t("token-template",[_c('ui-token',{attrs:{"title":token.name},on:{"close":function($event){return _vm.handleCloseBtnClick(token)}}})],{"token":token,"handleCloseBtnClick":_vm.handleCloseBtnClick})],2)}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputText),expression:"inputText"}],ref:"input",staticClass:"ui-token-selector__input",attrs:{"type":"text","placeholder":_vm.tokens.length ? '' : _vm.placeholder},domProps:{"value":(_vm.inputText)},on:{"keydown":_vm.handleInputKeyDown,"blur":_vm.handleBlurInput,"input":function($event){if($event.target.composing){ return; }_vm.inputText=$event.target.value}}}),(Boolean(_vm.root))?_c('ui-popup',{attrs:{"anchor":{ root: _vm.root },"position":"left-bottom"}},[_c('ui-menu',{ref:"menu",attrs:{"focusable":false},nativeOn:{"keydown":function($event){return _vm.handleGlobalKeyDown($event)}}},[(_vm.allowUserDefinedTokens && _vm.inputText.length && !_vm.loading)?[_vm._t("user-defined-token-template",[_c('ui-menu-item',{attrs:{"id":"user-defined-token","tabindex":"-1"},on:{"click":function($event){return _vm.handleDropdownItemClick(_vm.dropdownItem)}},scopedSlots:_vm._u([{key:"text",fn:function(){return [_vm._v(" Add \""+_vm._s(_vm.inputText)+"\" ")]},proxy:true}],null,false,1208469959)})],{"inputText":_vm.inputText})]:_vm._e(),(_vm.remainingDropdownItems.length)?_vm._l((_vm.remainingDropdownItems),function(dropdownItem){return _c('ui-menu-item',{key:dropdownItem.id,attrs:{"id":dropdownItem.id,"data-index":dropdownItem.id},on:{"click":function($event){return _vm.handleDropdownItemClick(dropdownItem)}},scopedSlots:_vm._u([{key:"icon",fn:function(){return [_vm._t("dropdown-item-icon-template",null,{"dropdownItem":dropdownItem})]},proxy:true},{key:"text",fn:function(){return [_vm._t("dropdown-item-text-template",[_vm._v(" "+_vm._s(dropdownItem.name)+" ")],{"dropdownItem":dropdownItem})]},proxy:true},{key:"controls",fn:function(){return [_vm._t("dropdown-item-controls-template",null,{"dropdownItem":dropdownItem})]},proxy:true}],null,true)})}):(_vm.loading)?[_vm._t("loading-template",[_c('ui-menu-loading')])]:(!_vm.allowUserDefinedTokens)?[_vm._t("no-results-template",[_c('ui-menu-item',{attrs:{"id":"no-matches-found"},scopedSlots:_vm._u([{key:"text",fn:function(){return [_vm._v(" No matches found ")]},proxy:true}],null,false,2456302930)})])]:_vm._e()],2)],1):_vm._e()],2)}
var token_selectorvue_type_template_id_01011c4b_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/token-selector/token-selector.vue?vue&type=template&id=01011c4b&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/token-selector/token-selector.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var token_selectorvue_type_script_lang_js_ = ({
  name: "UiTokenSelector",
  components: {
    UiGrid: grid,
    UiToken: token,
    UiPopup: portal,
    UiMenuLoading: menu_loading,
    UiMenu: menu,
    UiMenuItem: item
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
      var root = document.getElementById(APP_CONTENT_LAYOUT_ID);
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
          id: uuid_default.a.v4(),
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
            id: uuid_default.a.v4(),
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
        id: uuid_default.a.v4(),
        name: this.inputText
      });
      this.clearTextInput();
    }
  }
});
// CONCATENATED MODULE: ./src/components/token-selector/token-selector.vue?vue&type=script&lang=js&
 /* harmony default export */ var token_selector_token_selectorvue_type_script_lang_js_ = (token_selectorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/token-selector/token-selector.vue





/* normalize component */

var token_selector_component = normalizeComponent(
  token_selector_token_selectorvue_type_script_lang_js_,
  token_selectorvue_type_template_id_01011c4b_render,
  token_selectorvue_type_template_id_01011c4b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var token_selector = (token_selector_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/treeview/treeview.vue?vue&type=template&id=500f1fc4&
var treeviewvue_type_template_id_500f1fc4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ui-grid',{staticClass:"ui-tree-view",attrs:{"component":"ul","direction":"column"}},_vm._l((_vm.upperNodes),function(node){return _c('nested-node',{key:node[_vm.uniqueNodeKey],attrs:{"node":node,"nested-node-key":_vm.nestedNodeKey,"unique-node-key":_vm.uniqueNodeKey},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var node = ref.node;
var nestedNodes = ref.nestedNodes;
return [_vm._t("default",null,{"node":node,"nestedNodes":nestedNodes,"nestedNodeKey":_vm.nestedNodeKey,"uniqueNodeKey":_vm.uniqueNodeKey})]}}],null,true)})}),1)}
var treeviewvue_type_template_id_500f1fc4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/treeview/treeview.vue?vue&type=template&id=500f1fc4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/treeview/nested-node.vue?vue&type=template&id=58769144&
var nested_nodevue_type_template_id_58769144_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ui-grid',{attrs:{"component":"li","direction":"column","contained":true}},[_vm._t("default",null,{"node":_vm.node,"nestedNodes":_vm.nestedNodes(_vm.node),"nestedNodeKey":_vm.nestedNodeKey,"uniqueNodeKey":_vm.uniqueNodeKey}),(_vm.node.expanded)?_c('ui-grid',{staticClass:"ui-tree-view__nested-nodes",attrs:{"component":"ul","direction":"column","contained":true}},_vm._l((_vm.nestedNodes(_vm.node)),function(node){return _c('nested-node',{key:node[_vm.uniqueNodeKey],attrs:{"node":node,"nested-node-key":_vm.nestedNodeKey,"unique-node-key":_vm.uniqueNodeKey},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var node = ref.node;
var nestedNodes = ref.nestedNodes;
return [_vm._t("default",null,{"node":node,"nestedNodes":nestedNodes,"nestedNodeKey":_vm.nestedNodeKey,"uniqueNodeKey":_vm.uniqueNodeKey})]}}],null,true)})}),1):_vm._e()],2)}
var nested_nodevue_type_template_id_58769144_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/treeview/nested-node.vue?vue&type=template&id=58769144&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/treeview/nested-node.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var nested_nodevue_type_script_lang_js_ = ({
  name: "NestedNode",
  components: {
    UiGrid: grid
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
});
// CONCATENATED MODULE: ./src/components/treeview/nested-node.vue?vue&type=script&lang=js&
 /* harmony default export */ var treeview_nested_nodevue_type_script_lang_js_ = (nested_nodevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/treeview/nested-node.vue





/* normalize component */

var nested_node_component = normalizeComponent(
  treeview_nested_nodevue_type_script_lang_js_,
  nested_nodevue_type_template_id_58769144_render,
  nested_nodevue_type_template_id_58769144_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var nested_node = (nested_node_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/treeview/treeview.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var treeviewvue_type_script_lang_js_ = ({
  name: "UiTreeView",
  components: {
    UiGrid: grid,
    NestedNode: nested_node
  },
  provide: function provide() {
    var _this = this;

    var data = {};
    Object.defineProperty(data, "nodes", {
      enumerable: true,
      get: function get() {
        return _this.nodes;
      }
    });
    return {
      "tree-view-data": data
    };
  },
  props: {
    nodes: {
      type: Array,
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
    upperNodes: function upperNodes() {
      var _this2 = this;

      return this.nodes.filter(function (n) {
        return !n[_this2.nestedNodeKey];
      });
    }
  },
  methods: {
    nestedNodes: function nestedNodes(node) {
      var _this3 = this;

      return this.nodes.filter(function (n) {
        return n[_this3.uniqueNodeKey] !== node[_this3.uniqueNodeKey] && n[_this3.nestedNodeKey] === node[_this3.uniqueNodeKey];
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/treeview/treeview.vue?vue&type=script&lang=js&
 /* harmony default export */ var treeview_treeviewvue_type_script_lang_js_ = (treeviewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/treeview/treeview.vue





/* normalize component */

var treeview_component = normalizeComponent(
  treeview_treeviewvue_type_script_lang_js_,
  treeviewvue_type_template_id_500f1fc4_render,
  treeviewvue_type_template_id_500f1fc4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var treeview = (treeview_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0e540dad-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/treeview/node.vue?vue&type=template&id=832c9994&
var nodevue_type_template_id_832c9994_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ui-button',{class:[
    'ui-tree-view__node',
    { 'ui-tree-view__node_active': _vm.active },
    { 'ui-tree-view__node_expanded': _vm.expanded },
    { 'ui-tree-view__node_hovered': _vm.opened }
  ],attrs:{"component":"li","variant":"text"},on:{"click":function($event){return _vm.$emit('click', $event)}},nativeOn:{"contextmenu":function($event){return _vm.$emit('contextmenu', $event)}}},[_c('ui-grid',{staticClass:"ui-tree-view__node__left",attrs:{"align-items":"center"}},[_c('ui-button',{staticClass:"ui-tree-view__node__btn",class:{ 'ui-tree-view__node__btn_hidden': !_vm.expandable },attrs:{"variant":"text","disabled":!_vm.expandable},nativeOn:{"click":function($event){$event.stopPropagation();return _vm.$emit('expand', $event)}}},[_c('arrow-icon',{staticClass:"ui-tree-view__node__btn__icon"})],1)],1),_c('ui-grid',{attrs:{"align-items":"center"}},[_vm._t("icon",null,{"node":_vm.node}),_vm._t("text",null,{"node":_vm.node})],2)],1)}
var nodevue_type_template_id_832c9994_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/treeview/node.vue?vue&type=template&id=832c9994&

// EXTERNAL MODULE: ./src/assets/triangle.svg
var triangle = __webpack_require__("25d8");
var triangle_default = /*#__PURE__*/__webpack_require__.n(triangle);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/treeview/node.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var nodevue_type_script_lang_js_ = ({
  name: "UiTreeViewNode",
  components: {
    UiGrid: grid,
    UiButton: button_button,
    ArrowIcon: triangle_default.a
  },
  props: {
    node: {
      type: Object,
      required: true
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    },
    expanded: {
      type: Boolean,
      required: false,
      default: false
    },
    expandable: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: function data() {
    return {
      opened: false
    };
  }
});
// CONCATENATED MODULE: ./src/components/treeview/node.vue?vue&type=script&lang=js&
 /* harmony default export */ var treeview_nodevue_type_script_lang_js_ = (nodevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/treeview/node.vue





/* normalize component */

var node_component = normalizeComponent(
  treeview_nodevue_type_script_lang_js_,
  nodevue_type_template_id_832c9994_render,
  nodevue_type_template_id_832c9994_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var node = (node_component.exports);
// CONCATENATED MODULE: ./src/index.js




























// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ })

/******/ });
//# sourceMappingURL=bundle.common.js.map