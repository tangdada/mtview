(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("mtview", [], factory);
	else if(typeof exports === 'object')
		exports["mtview"] = factory();
	else
		root["mtview"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _select = __webpack_require__(1);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mtview = {
  version: Object({"NODE_ENV":"production"}).VERSION, // eslint-disable-line no-undef
  'mt-select': _select2.default
};

var install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // locale.use(opts.locale);
  // locale.i18n(opts.i18n);

  Object.keys(mtview).forEach(function (key) {
    Vue.component(key, mtview[key]);
  });
};

var API = {
  version: Object({"NODE_ENV":"production"}).VERSION, // eslint-disable-line no-undef
  install: install,
  Select: _select2.default
};

module.exports.default = module.exports = API; // eslint-disable-line no-undef

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _select = __webpack_require__(2);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _select2.default;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_84c8dd5c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_vue__ = __webpack_require__(5);
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_84c8dd5c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
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
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'mt-select',
  data: function data() {
    return {
      optionList: [],
      selectValue: undefined,
      selectOptionLabel: '',
      showList: false,
      readonly: true
    };
  },
  mounted: function mounted() {
    document.addEventListener('click', this.domHandleClick);
    this.readonly = !(this.filters.length > 0);
    this.setOptions(this.options);
  },


  props: {
    value: [String, Number],
    options: Array,
    filters: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    placeholder: String,
    disabled: Boolean,
    loading: Boolean,
    onChange: Function,
    onClear: Function
  },

  watch: {
    'options': function options(val, oldValue) {
      this.setOptions(val);
    },
    'value': function value(val, oldValue) {
      this.checkItem(val);
      this.$emit('on-change', val);
    },
    'selectValue': function selectValue(val, oldValue) {
      this.$emit('input', val ? val + '' : '');
    }
  },
  methods: {
    domHandleClick: function domHandleClick(event) {
      if (this.showList) {
        this.checkItem(this.value);
      }
      this.showList = false;
    },
    toggleList: function toggleList(event) {
      this.showList = !this.showList;
      if (this.showList && !this.readonly) {
        event.target.select();
        this.filterByKeyword('');
      } else {
        this.checkItem(this.value);
      }
      event.stopPropagation();
    },
    setOptions: function setOptions() {
      var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      this.optionList = list;
      this.checkItem(this.value);
    },
    handleCheck: function handleCheck(id, event) {
      this.checkItem(id);
      this.showList = false;
      event.stopPropagation();
    },
    checkItem: function checkItem(id) {
      if (!id) {
        this.selectValue = id;
        this.selectOptionLabel = '';
      }
      for (var i = 0; i < this.optionList.length; i++) {
        if (this.optionList[i].id == id) {
          this.selectValue = this.optionList[i].id;
          this.selectOptionLabel = this.optionList[i].name;
          break;
        }
      }
    },
    handleInput: function handleInput() {
      this.filterByKeyword(this.selectOptionLabel);
    },
    filterByKeyword: function filterByKeyword(input) {
      var _this = this;

      this.showList = true;
      if (this.filters.length > 0) {
        this.optionList = this.optionList.map(function (item) {
          item.hide = !_this.containsKeyword(item, input);
          return item;
        });
      }
    },
    containsKeyword: function containsKeyword(item, input) {
      return this.filters.some(function (keyword) {
        return item[keyword] && item[keyword].toUpperCase().indexOf(input.toUpperCase()) > -1;
      });
    },
    clearCheck: function clearCheck() {
      this.selectValue = undefined;
      this.selectOptionLabel = '';
      this.$emit('on-clear');
    }
  }
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"selectOptionLabel",staticClass:"mt-select"},[_c('i',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"el-input__icon el-icon-loading"}),_vm._v(" "),_c('i',{directives:[{name:"show",rawName:"v-show",value:(_vm.selectValue && !_vm.disabled),expression:"selectValue && !disabled"}],staticClass:"el-input__icon el-icon-circle-close",on:{"click":_vm.clearCheck}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.selectOptionLabel),expression:"selectOptionLabel"}],staticClass:"mt-select_input",attrs:{"type":"text","readonly":_vm.readonly,"placeholder":_vm.placeholder,"disabled":_vm.disabled},domProps:{"value":(_vm.selectOptionLabel)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.selectOptionLabel=$event.target.value},_vm.handleInput],"click":_vm.toggleList}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showList),expression:"showList"}],staticClass:"mt-select_list"},_vm._l((_vm.optionList),function(item){return _c('div',{directives:[{name:"show",rawName:"v-show",value:(!item.hide),expression:"!item.hide"}],key:item.id,staticClass:"mt-select_item",class:{'on': _vm.selectValue == item.id},on:{"click":function($event){_vm.handleCheck(item.id, $event)}}},[_vm._v(_vm._s(item.name)+"\n    ")])}))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});