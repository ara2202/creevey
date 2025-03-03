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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.storybook/generated-entry.js":
/* ./.storybook/generated-entry.js */
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "@storybook/react");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
module._StorybookPreserveDecorators=!0;Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["configure"])([__webpack_require__("./stories sync recursive ^\\.\\/(?:(?:|\\/|(?:(?:(?!(?:|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(md|js)x)$")],module);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./.storybook/preview.js":
/* ./.storybook/preview.js */
/*! exports provided: parameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parameters", function() { return parameters; });
var parameters={creevey:{captureElement:"root"}};

/***/ }),

/***/ "./node_modules/creevey/lib/cjs/server/loaders/webpack/dummy-hmr.js":
/* ./node_modules/creevey/lib/cjs/server/loaders/webpack/dummy-hmr.js */
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _global$__CREEVEY_HMR;

global.__CREEVEY_HMR_DATA__ = (_global$__CREEVEY_HMR = global.__CREEVEY_HMR_DATA__) !== null && _global$__CREEVEY_HMR !== void 0 ? _global$__CREEVEY_HMR : {};
Object.entries(__webpack_require__.m).forEach(([key, moduleFn]) => {
  __webpack_require__.m[key] = new Proxy(moduleFn, {
    apply(target, thisArg, args) {
      var _global$__CREEVEY_HMR2;

      const [module] = args;
      const {
        data
      } = global.__CREEVEY_HMR_DATA__[module.i] = (_global$__CREEVEY_HMR2 = global.__CREEVEY_HMR_DATA__[module.i]) !== null && _global$__CREEVEY_HMR2 !== void 0 ? _global$__CREEVEY_HMR2 : {
        data: {}
      };
      Object.assign(module, {
        hot: {
          accept() {
            /* noop */
          },

          get data() {
            return data;
          },

          dispose(callback) {
            global.__CREEVEY_HMR_DATA__[module.i].callback = callback;
          }

        }
      });
      return target.apply(thisArg, args);
    }

  });
});
var _default = {};
exports.default = _default;

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/* (webpack)/buildin/harmony-module.js */
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./stories sync recursive ^\\.\\/(?:(?:|\\/|(?:(?:(?!(?:|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(md|js)x)$":
/* ./stories sync ^\.\/(?:(?:|\/|(?:(?:(?!(?:|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.(md|js)x)$ */
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./KindA.stories.jsx": "./stories/KindA.stories.jsx",
	"./KindB.stories.mdx": "./stories/KindB.stories.mdx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./stories sync recursive ^\\.\\/(?:(?:|\\/|(?:(?:(?!(?:|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(md|js)x)$";

/***/ }),

/***/ "./stories/KindA.stories.jsx":
/* ./stories/KindA.stories.jsx */
/*! exports provided: default, StoryA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryA", function() { return StoryA; });
/* harmony default export */ __webpack_exports__["default"] = ({title:"KindA"});var StoryA=function(){};

/***/ }),

/***/ "./stories/KindB.stories.mdx":
/* ./stories/KindB.stories.mdx */
/*! exports provided: storyA, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storyA", function() { return storyA; });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_10__);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})}keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0})}else{obj[key]=value}return obj}/* @jsxRuntime classic */ /* @jsx mdx */var storyA=function(){};storyA.story={};storyA.story.name="StoryA";storyA.story.parameters=_objectSpread({},{creevey:{captureElement:"mdx-by-children"}});var componentMeta={title:"Docs/KindB",parameters:{creevey:{ignoreElements:["img"]}},includeStories:["storyA"]};componentMeta.parameters=componentMeta.parameters||{};/* harmony default export */ __webpack_exports__["default"] = (componentMeta);

/***/ }),

/***/ "./node_modules/@storybook/core/dist/server/common/polyfills.js":
/* external "./node_modules/@storybook/core/dist/server/common/polyfills.js" */
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("./node_modules/@storybook/core/dist/server/common/polyfills.js");

/***/ }),

/***/ "./node_modules/@storybook/core/dist/server/preview/globals.js":
/* external "./node_modules/@storybook/core/dist/server/preview/globals.js" */
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("./node_modules/@storybook/core/dist/server/preview/globals.js");

/***/ }),

/***/ 0:
/* multi ./node_modules/creevey/lib/cjs/server/loaders/webpack/dummy-hmr.js ./node_modules/@storybook/core/dist/server/common/polyfills.js ./node_modules/@storybook/core/dist/server/preview/globals.js ./.storybook/preview.js ./.storybook/generated-entry.js */
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./node_modules/creevey/lib/cjs/server/loaders/webpack/dummy-hmr.js */"./node_modules/creevey/lib/cjs/server/loaders/webpack/dummy-hmr.js");
__webpack_require__(/*! ./node_modules/@storybook/core/dist/server/common/polyfills.js */"./node_modules/@storybook/core/dist/server/common/polyfills.js");
__webpack_require__(/*! ./node_modules/@storybook/core/dist/server/preview/globals.js */"./node_modules/@storybook/core/dist/server/preview/globals.js");
__webpack_require__(/*! ./.storybook/preview.js */"./.storybook/preview.js");
module.exports = __webpack_require__(/*! ./.storybook/generated-entry.js */"./.storybook/generated-entry.js");


/***/ }),

/***/ "@storybook/react":
/* external "./node_modules/creevey/lib/cjs/server/storybook/entry.js" */
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("./node_modules/creevey/lib/cjs/server/storybook/entry.js");

/***/ }),

/***/ "core-js/modules/es.array.filter.js":
/* external "core-js/modules/es.array.filter.js" */
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.filter.js");

/***/ }),

/***/ "core-js/modules/es.array.for-each.js":
/* external "core-js/modules/es.array.for-each.js" */
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.for-each.js");

/***/ }),

/***/ "core-js/modules/es.function.name.js":
/* external "core-js/modules/es.function.name.js" */
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name.js");

/***/ }),

/***/ "core-js/modules/es.object.define-properties.js":
/* external "core-js/modules/es.object.define-properties.js" */
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.define-properties.js");

/***/ }),

/***/ "core-js/modules/es.object.define-property.js":
/* external "core-js/modules/es.object.define-property.js" */
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.define-property.js");

/***/ }),

/***/ "core-js/modules/es.object.get-own-property-descriptor.js":
/* external "core-js/modules/es.object.get-own-property-descriptor.js" */
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.get-own-property-descriptor.js");

/***/ }),

/***/ "core-js/modules/es.object.get-own-property-descriptors.js":
/* external "core-js/modules/es.object.get-own-property-descriptors.js" */
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.get-own-property-descriptors.js");

/***/ }),

/***/ "core-js/modules/es.object.keys.js":
/* external "core-js/modules/es.object.keys.js" */
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.keys.js");

/***/ }),

/***/ "core-js/modules/es.object.to-string.js":
/* external "core-js/modules/es.object.to-string.js" */
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.to-string.js");

/***/ }),

/***/ "core-js/modules/es.symbol.js":
/* external "core-js/modules/es.symbol.js" */
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol.js");

/***/ }),

/***/ "core-js/modules/web.dom-collections.for-each.js":
/* external "core-js/modules/web.dom-collections.for-each.js" */
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.for-each.js");

/***/ })

/******/ });