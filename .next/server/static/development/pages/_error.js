module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/_error.tsx":
/*!******************************!*\
  !*** ./src/pages/_error.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/jmk/Desktop/new/new_project/src/pages/_error.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"];\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst _HomeButton = props => {\n  return __jsx(\"button\", {\n    className: props.className,\n    onClick: () => props.onClick(),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    className: \"title\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, \"\\uD648\\uC73C\\uB85C \\uB3CC\\uC544\\uAC00\\uAE30\"));\n};\n\nconst HomeButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_HomeButton)`\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  line-height: 56px;\n\n  width: 400px;\n  @media (max-width: 720px) { width: 90%; }\n  height: 56px;\n\n  color: #006ee5;\n  background-color: #fff;\n\n  border: 1px solid #006ee5;\n  border-radius: 4px;\n  font-size: 18px;\n\n  cursor: pointer;\n\n  .title { margin-right: 5px; }\n\n  path { stroke: #006ee5; }\n`;\n\nclass ErrorPage extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"timeoutId\", NaN);\n\n    this.state = {\n      hasError: false\n    };\n  }\n\n  componentWillUnmount() {\n    if (isNaN(this.timeoutId)) return;\n    clearTimeout(this.timeoutId);\n  }\n\n  render() {\n    return __jsx(\"div\", {\n      className: this.props.className,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 7\n      }\n    }, __jsx(\"p\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }\n    }, \"ERROR\"), __jsx(HomeButton, {\n      onClick: () => location.replace(\"/\"),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }\n    }));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (styled_components__WEBPACK_IMPORTED_MODULE_1___default()(ErrorPage)`\n  width: 100%;\n  height: 100vh;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  > p {\n    font-size: 100px;\n    font-weight: bold;\n  }\n`);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2Vycm9yLnRzeD8yZTJjIl0sIm5hbWVzIjpbIl9Ib21lQnV0dG9uIiwicHJvcHMiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiSG9tZUJ1dHRvbiIsInN0eWxlZCIsIkVycm9yUGFnZSIsIlJlYWN0IiwiY29uc3RydWN0b3IiLCJOYU4iLCJzdGF0ZSIsImhhc0Vycm9yIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJpc05hTiIsInRpbWVvdXRJZCIsImNsZWFyVGltZW91dCIsInJlbmRlciIsImxvY2F0aW9uIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsV0FBaUYsR0FBSUMsS0FBRCxJQUFXO0FBQ25HLFNBQ0U7QUFBUSxhQUFTLEVBQUVBLEtBQUssQ0FBQ0MsU0FBekI7QUFBb0MsV0FBTyxFQUFFLE1BQU1ELEtBQUssQ0FBQ0UsT0FBTixFQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtREFERixDQURGO0FBS0QsQ0FORDs7QUFRQSxNQUFNQyxVQUFVLEdBQUdDLHdEQUFNLENBQUNMLFdBQUQsQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUF2Qzs7QUE0QkEsTUFBTU0sU0FBTixTQUF3QkMsK0NBQXhCLENBQXlEO0FBR3ZEQyxhQUFXLENBQUNQLEtBQUQsRUFBeUI7QUFDbEMsVUFBTUEsS0FBTjs7QUFEa0MsdUNBRlJRLEdBRVE7O0FBR2xDLFNBQUtDLEtBQUwsR0FBYTtBQUFFQyxjQUFRLEVBQUU7QUFBWixLQUFiO0FBQ0Q7O0FBRU1DLHNCQUFQLEdBQThCO0FBQzVCLFFBQUlDLEtBQUssQ0FBQyxLQUFLQyxTQUFOLENBQVQsRUFBMkI7QUFDM0JDLGdCQUFZLENBQUMsS0FBS0QsU0FBTixDQUFaO0FBQ0Q7O0FBRU1FLFFBQVAsR0FBZ0I7QUFDZCxXQUNFO0FBQUssZUFBUyxFQUFFLEtBQUtmLEtBQUwsQ0FBV0MsU0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFLE1BQUMsVUFBRDtBQUFZLGFBQU8sRUFBRSxNQUFNZSxRQUFRLENBQUNDLE9BQVQsQ0FBaUIsR0FBakIsQ0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLENBREY7QUFNRDs7QUFyQnNEOztBQXdCMUNiLHVIQUFNLENBQUNDLFNBQUQsQ0FBWTs7Ozs7Ozs7Ozs7OztDQUFqQyIsImZpbGUiOiIuL3NyYy9wYWdlcy9fZXJyb3IudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBfSG9tZUJ1dHRvbjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8eyBjbGFzc05hbWU/OiBzdHJpbmc7IG9uQ2xpY2s6ICgpID0+IHZvaWQgfT4gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNsaWNrKCl9PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj7tmYjsnLzroZwg64+M7JWE6rCA6riwPC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuY29uc3QgSG9tZUJ1dHRvbiA9IHN0eWxlZChfSG9tZUJ1dHRvbilgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNTZweDtcblxuICB3aWR0aDogNDAwcHg7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkgeyB3aWR0aDogOTAlOyB9XG4gIGhlaWdodDogNTZweDtcblxuICBjb2xvcjogIzAwNmVlNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuICBib3JkZXI6IDFweCBzb2xpZCAjMDA2ZWU1O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgLnRpdGxlIHsgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cblxuICBwYXRoIHsgc3Ryb2tlOiAjMDA2ZWU1OyB9XG5gO1xuXG5leHBvcnQgaW50ZXJmYWNlIElFcnJvclBhZ2VQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn1cblxuY2xhc3MgRXJyb3JQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElFcnJvclBhZ2VQcm9wcz4ge1xuICBwcml2YXRlIHRpbWVvdXRJZDogbnVtYmVyID0gTmFOO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJRXJyb3JQYWdlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0geyBoYXNFcnJvcjogZmFsc2UgfTtcbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAoaXNOYU4odGhpcy50aW1lb3V0SWQpKSByZXR1cm47XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElkKTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgIDxwPkVSUk9SPC9wPlxuICAgICAgICA8SG9tZUJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBsb2NhdGlvbi5yZXBsYWNlKFwiL1wiKX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKEVycm9yUGFnZSlgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gID4gcCB7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_error.tsx\n");

/***/ }),

/***/ 3:
/*!************************************!*\
  !*** multi ./src/pages/_error.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jmk/Desktop/new/new_project/src/pages/_error.tsx */"./src/pages/_error.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });