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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

=======
>>>>>>> 59327604b103a7dd1576f1faf4d8eaca296d7dc4
/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./src/components/App/context.js":
/*!***************************************!*\
  !*** ./src/components/App/context.js ***!
  \***************************************/
/*! exports provided: AppContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContext", function() { return AppContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AppContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](null);
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppContext\", function() { return AppContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AppContext = react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"](null);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAvY29udGV4dC5qcz85ZTEwIl0sIm5hbWVzIjpbIkFwcENvbnRleHQiLCJSZWFjdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLFVBQVUsR0FBR0MsbURBQUEsQ0FBb0IsSUFBcEIsQ0FBbkIiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BcHAvY29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgQXBwQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/App/context.js\n");
>>>>>>> 59327604b103a7dd1576f1faf4d8eaca296d7dc4

/***/ }),

/***/ "./src/components/Layout/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Layout/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\toyon\\OneDrive\\\uBB38\uC11C\\community\\src\\components\\Layout\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const {
  Header,
  Content,
  Footer
} = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"];
const route = [{
  title: "Home",
  url: "/"
}, {
  title: "게시판",
  url: "/board"
}, {
  title: "로그인",
  url: "/accounts/login"
}];

const LayoutComponent = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const routerAsPath = router.asPath.split("/");
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(Header, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    theme: "dark",
    mode: "horizontal",
    defaultSelectedKeys: ['1'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, route.map(i => __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: i.url,
    onClick: () => {
      router.push(i.url);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
    }
  }, i.title)))), __jsx(Content, {
    style: {
      padding: '0 50px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"], {
    style: {
      margin: '16px 0'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, routerAsPath.map(d => __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 36
    }
  }, d))), props.children), __jsx(Footer, {
    style: {
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, "Ant Design \xA92018 Created by Ant UED"));
};

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_1___default()(LayoutComponent)`
`);
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/jmk/Desktop/new/new_project/src/components/Layout/index.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst {\n  Header,\n  Content,\n  Footer\n} = antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"];\nconst route = [{\n  title: \"Home\",\n  url: \"/\"\n}, {\n  title: \"Q&A\",\n  url: \"/QnA\"\n}, {\n  title: \"Tech\",\n  url: \"/tech\"\n}, {\n  title: \"커뮤니티\",\n  url: \"/community\"\n}, {\n  title: \"칼럼\",\n  url: \"/columns\"\n}, {\n  title: \"Job\",\n  url: \"/job\"\n}, {\n  title: \"게시판\",\n  url: \"/board\"\n}, {\n  title: \"로그인\",\n  url: \"/accounts/login\"\n}];\n\nconst LayoutComponent = props => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  const routerAsPath = router.asPath.split(\"/\");\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n    className: props.className,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }\n  }, __jsx(Header, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"logo\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"], {\n    theme: \"dark\",\n    mode: \"horizontal\",\n    defaultSelectedKeys: ['1'],\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, route.map(i => __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"].Item, {\n    key: i.url,\n    onClick: () => {\n      router.push(i.url);\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 29\n    }\n  }, i.title)))), __jsx(Content, {\n    style: {\n      padding: '0 50px'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Breadcrumb\"], {\n    style: {\n      margin: '16px 0'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, routerAsPath.map((d, k) => __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Breadcrumb\"].Item, {\n    key: k,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 39\n    }\n  }, d))), props.children), __jsx(Footer, {\n    style: {\n      textAlign: 'center'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }, \"Ant Design \\xA92018 Created by Ant UED\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (styled_components__WEBPACK_IMPORTED_MODULE_1___default()(LayoutComponent)`\n`);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaW5kZXguanN4PzllZDAiXSwibmFtZXMiOlsiSGVhZGVyIiwiQ29udGVudCIsIkZvb3RlciIsIkxheW91dCIsInJvdXRlIiwidGl0bGUiLCJ1cmwiLCJMYXlvdXRDb21wb25lbnQiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInJvdXRlckFzUGF0aCIsImFzUGF0aCIsInNwbGl0IiwiY2xhc3NOYW1lIiwibWFwIiwiaSIsInB1c2giLCJwYWRkaW5nIiwibWFyZ2luIiwiZCIsImsiLCJjaGlsZHJlbiIsInRleHRBbGlnbiIsInN0eWxlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUFFQSxRQUFGO0FBQVVDLFNBQVY7QUFBbUJDO0FBQW5CLElBQThCQywyQ0FBcEM7QUFFQSxNQUFNQyxLQUFLLEdBQUcsQ0FDWjtBQUNFQyxPQUFLLEVBQUUsTUFEVDtBQUVFQyxLQUFHLEVBQUU7QUFGUCxDQURZLEVBS1o7QUFDRUQsT0FBSyxFQUFFLEtBRFQ7QUFFRUMsS0FBRyxFQUFFO0FBRlAsQ0FMWSxFQVNaO0FBQ0VELE9BQUssRUFBRSxNQURUO0FBRUVDLEtBQUcsRUFBRTtBQUZQLENBVFksRUFhWjtBQUNFRCxPQUFLLEVBQUUsTUFEVDtBQUVFQyxLQUFHLEVBQUU7QUFGUCxDQWJZLEVBaUJaO0FBQ0VELE9BQUssRUFBRSxJQURUO0FBRUVDLEtBQUcsRUFBRTtBQUZQLENBakJZLEVBcUJaO0FBQ0VELE9BQUssRUFBRSxLQURUO0FBRUVDLEtBQUcsRUFBRTtBQUZQLENBckJZLEVBeUJaO0FBQ0VELE9BQUssRUFBRSxLQURUO0FBRUVDLEtBQUcsRUFBRTtBQUZQLENBekJZLEVBNEJUO0FBQ0RELE9BQUssRUFBRSxLQUROO0FBRURDLEtBQUcsRUFBRTtBQUZKLENBNUJTLENBQWQ7O0FBbUNBLE1BQU1DLGVBQWUsR0FBSUMsS0FBRCxJQUFXO0FBQ2pDLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNQyxZQUFZLEdBQUdGLE1BQU0sQ0FBQ0csTUFBUCxDQUFjQyxLQUFkLENBQW9CLEdBQXBCLENBQXJCO0FBRUEsU0FDRSxNQUFDLDJDQUFEO0FBQVEsYUFBUyxFQUFFTCxLQUFLLENBQUNNLFNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyx5Q0FBRDtBQUFNLFNBQUssRUFBQyxNQUFaO0FBQW1CLFFBQUksRUFBQyxZQUF4QjtBQUFxQyx1QkFBbUIsRUFBRSxDQUFDLEdBQUQsQ0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHVixLQUFLLENBQUNXLEdBQU4sQ0FBV0MsQ0FBRCxJQUFPLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFFQSxDQUFDLENBQUNWLEdBQWxCO0FBQXVCLFdBQU8sRUFBRSxNQUFNO0FBQUVHLFlBQU0sQ0FBQ1EsSUFBUCxDQUFZRCxDQUFDLENBQUNWLEdBQWQ7QUFBb0IsS0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErRFUsQ0FBQyxDQUFDWCxLQUFqRSxDQUFqQixDQURILENBRkYsQ0FERixFQXdCRSxNQUFDLE9BQUQ7QUFBUyxTQUFLLEVBQUU7QUFBRWEsYUFBTyxFQUFFO0FBQVgsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0NBQUQ7QUFBWSxTQUFLLEVBQUU7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUixZQUFZLENBQUNJLEdBQWIsQ0FBaUIsQ0FBQ0ssQ0FBRCxFQUFJQyxDQUFKLEtBQVUsTUFBQywrQ0FBRCxDQUFZLElBQVo7QUFBaUIsT0FBRyxFQUFFQSxDQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBCRCxDQUExQixDQUEzQixDQURILENBREYsRUFJR1osS0FBSyxDQUFDYyxRQUpULENBeEJGLEVBOEJFLE1BQUMsTUFBRDtBQUFRLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUU7QUFBYixLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBOUJGLENBREY7QUFrQ0QsQ0F0Q0Q7O0FBd0NlQyx1SEFBTSxDQUFDakIsZUFBRCxDQUFrQjtDQUF2QyIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0xheW91dC9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IExheW91dCwgTWVudSwgQnJlYWRjcnVtYiwgQmFkZ2UgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmNvbnN0IHsgSGVhZGVyLCBDb250ZW50LCBGb290ZXIgfSA9IExheW91dDtcblxuY29uc3Qgcm91dGUgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJIb21lXCIsXG4gICAgdXJsOiBcIi9cIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlEmQVwiLFxuICAgIHVybDogXCIvUW5BXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJUZWNoXCIsXG4gICAgdXJsOiBcIi90ZWNoXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCLsu6TrrqTri4jti7BcIixcbiAgICB1cmw6IFwiL2NvbW11bml0eVwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwi7Lm865+8XCIsXG4gICAgdXJsOiBcIi9jb2x1bW5zXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJKb2JcIixcbiAgICB1cmw6IFwiL2pvYlwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwi6rKM7Iuc7YyQXCIsXG4gICAgdXJsOiBcIi9ib2FyZFwiLFxuICB9LCB7XG4gICAgdGl0bGU6IFwi66Gc6re47J24XCIsXG4gICAgdXJsOiBcIi9hY2NvdW50cy9sb2dpblwiLFxuICB9XG5dO1xuXG5cbmNvbnN0IExheW91dENvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgcm91dGVyQXNQYXRoID0gcm91dGVyLmFzUGF0aC5zcGxpdChcIi9cIik7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgIDxIZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiIC8+XG4gICAgICAgIDxNZW51IHRoZW1lPVwiZGFya1wiIG1vZGU9XCJob3Jpem9udGFsXCIgZGVmYXVsdFNlbGVjdGVkS2V5cz17WycxJ119PlxuICAgICAgICAgIHtyb3V0ZS5tYXAoKGkpID0+IDxNZW51Lkl0ZW0ga2V5PXtpLnVybH0gb25DbGljaz17KCkgPT4geyByb3V0ZXIucHVzaChpLnVybCkgfX0+e2kudGl0bGV9PC9NZW51Lkl0ZW0+KX1cbiAgICAgICAgPC9NZW51PlxuICAgICAgICB7LyogPHVsIGNsYXNzTmFtZT1cIm1lbnUtYWxlcnQtaWNvblwiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxCYWRnZSBjb3VudD17OTl9PlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImhlYWQtZXhhbXBsZVwiIC8+XG4gICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPEJhZGdlIGNvdW50PXs5OX0+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaGVhZC1leGFtcGxlXCIgLz5cbiAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8QmFkZ2UgY291bnQ9ezk5fT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJoZWFkLWV4YW1wbGVcIiAvPlxuICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPiAqL31cbiAgICAgIDwvSGVhZGVyPlxuICAgICAgPENvbnRlbnQgc3R5bGU9e3sgcGFkZGluZzogJzAgNTBweCcgfX0+XG4gICAgICAgIDxCcmVhZGNydW1iIHN0eWxlPXt7IG1hcmdpbjogJzE2cHggMCcgfX0+XG4gICAgICAgICAge3JvdXRlckFzUGF0aC5tYXAoKGQsIGspID0+IDxCcmVhZGNydW1iLkl0ZW0ga2V5PXtrfT57ZH08L0JyZWFkY3J1bWIuSXRlbT4pfVxuICAgICAgICA8L0JyZWFkY3J1bWI+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvQ29udGVudD5cbiAgICAgIDxGb290ZXIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5BbnQgRGVzaWduIMKpMjAxOCBDcmVhdGVkIGJ5IEFudCBVRUQ8L0Zvb3Rlcj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQoTGF5b3V0Q29tcG9uZW50KWBcbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Layout/index.jsx\n");
>>>>>>> 59327604b103a7dd1576f1faf4d8eaca296d7dc4

/***/ }),

/***/ "./src/hooks/app.js":
/*!**************************!*\
  !*** ./src/hooks/app.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const initializer = props => {
  var _props$init, _props$init2, _props$init3, _props$init4;

  const state = {
    status: {
      loading: false
    },
    user: {
      id: (_props$init = props.init) === null || _props$init === void 0 ? void 0 : _props$init.user.id,
      name: (_props$init2 = props.init) === null || _props$init2 === void 0 ? void 0 : _props$init2.user.name,
      token: (_props$init3 = props.init) === null || _props$init3 === void 0 ? void 0 : _props$init3.user.token,
      level: (_props$init4 = props.init) === null || _props$init4 === void 0 ? void 0 : _props$init4.user.level
    }
  };
  return state;
};

const dispatch = $ => {
  const login = () => {
    $.state.user.token = "";
  };

  const logout = () => {
    $.state.user.token = "";
  };

  return {
    login,
    logout
  };
};

const useApp = props => {
  const $ = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useLocalStore"])(() => ({
    state: initializer(props)
  }));
  const action = dispatch($);
  const app = {
    props,
    state: $.state,
    action
  };
  return app;
};

next_app__WEBPACK_IMPORTED_MODULE_0___default.a.getInitialProps = async appContext => {
  var _ref, _ck$auth;

  const nextAppProps = await next_app__WEBPACK_IMPORTED_MODULE_0___default.a.getInitialProps(appContext);
  const ctx = appContext.ctx;
  const ssr = !!appContext.ctx.req;
  const ck = cookie__WEBPACK_IMPORTED_MODULE_2___default.a.parse((_ref = ctx.req ? ctx.req.headers.cookie : document.cookie) !== null && _ref !== void 0 ? _ref : "");
  const token = (_ck$auth = ck.auth) !== null && _ck$auth !== void 0 ? _ck$auth : "";
  return _objectSpread(_objectSpread({}, nextAppProps), {}, {
    ssr,
    cookie: (cookie__WEBPACK_IMPORTED_MODULE_2___default()),
    init: {
      user: {
        token
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (useApp);
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ \"mobx-react-lite\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_3__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nconst initializer = props => {\n  var _props$init, _props$init2, _props$init3, _props$init4;\n\n  const state = {\n    status: {\n      loading: false\n    },\n    user: {\n      id: (_props$init = props.init) === null || _props$init === void 0 ? void 0 : _props$init.user.id,\n      name: (_props$init2 = props.init) === null || _props$init2 === void 0 ? void 0 : _props$init2.user.name,\n      token: (_props$init3 = props.init) === null || _props$init3 === void 0 ? void 0 : _props$init3.user.token,\n      level: (_props$init4 = props.init) === null || _props$init4 === void 0 ? void 0 : _props$init4.user.level\n    }\n  };\n  return state;\n};\n\nconst dispatch = $ => {\n  const login = () => {\n    $.state.user.token = \"\";\n  };\n\n  const logout = () => {\n    $.state.user.token = \"\";\n  };\n\n  return {\n    login,\n    logout\n  };\n};\n\nconst useApp = props => {\n  const $ = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__[\"useLocalStore\"])(() => ({\n    state: initializer(props)\n  }));\n  const action = dispatch($);\n  const app = {\n    props,\n    state: $.state,\n    action\n  };\n  return app;\n};\n\nnext_app__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps = async appContext => {\n  var _ref, _ck$auth;\n\n  const nextAppProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(appContext);\n  const ctx = appContext.ctx;\n  const ssr = !!appContext.ctx.req;\n  const ck = cookie__WEBPACK_IMPORTED_MODULE_3___default.a.parse((_ref = ctx.req ? ctx.req.headers.cookie : document.cookie) !== null && _ref !== void 0 ? _ref : \"\");\n  const token = (_ck$auth = ck.auth) !== null && _ck$auth !== void 0 ? _ck$auth : \"\";\n  return _objectSpread(_objectSpread({}, nextAppProps), {}, {\n    ssr,\n    cookie: (cookie__WEBPACK_IMPORTED_MODULE_3___default()),\n    init: {\n      user: {\n        token\n      }\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvYXBwLmpzPzQzODMiXSwibmFtZXMiOlsiaW5pdGlhbGl6ZXIiLCJwcm9wcyIsInN0YXRlIiwic3RhdHVzIiwibG9hZGluZyIsInVzZXIiLCJpZCIsImluaXQiLCJuYW1lIiwidG9rZW4iLCJsZXZlbCIsImRpc3BhdGNoIiwiJCIsImxvZ2luIiwibG9nb3V0IiwidXNlQXBwIiwidXNlTG9jYWxTdG9yZSIsImFjdGlvbiIsImFwcCIsIkFwcCIsImdldEluaXRpYWxQcm9wcyIsImFwcENvbnRleHQiLCJuZXh0QXBwUHJvcHMiLCJOZXh0QXBwIiwiY3R4Iiwic3NyIiwicmVxIiwiY2siLCJjb29raWUiLCJwYXJzZSIsImhlYWRlcnMiLCJkb2N1bWVudCIsImF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsV0FBVyxHQUFJQyxLQUFELElBQVc7QUFBQTs7QUFDN0IsUUFBTUMsS0FBSyxHQUFHO0FBQ1pDLFVBQU0sRUFBRTtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQURJO0FBRVpDLFFBQUksRUFBRTtBQUNKQyxRQUFFLGlCQUFFTCxLQUFLLENBQUNNLElBQVIsZ0RBQUUsWUFBWUYsSUFBWixDQUFpQkMsRUFEakI7QUFFSkUsVUFBSSxrQkFBRVAsS0FBSyxDQUFDTSxJQUFSLGlEQUFFLGFBQVlGLElBQVosQ0FBaUJHLElBRm5CO0FBR0pDLFdBQUssa0JBQUVSLEtBQUssQ0FBQ00sSUFBUixpREFBRSxhQUFZRixJQUFaLENBQWlCSSxLQUhwQjtBQUlKQyxXQUFLLGtCQUFFVCxLQUFLLENBQUNNLElBQVIsaURBQUUsYUFBWUYsSUFBWixDQUFpQks7QUFKcEI7QUFGTSxHQUFkO0FBVUEsU0FBT1IsS0FBUDtBQUNELENBWkQ7O0FBY0EsTUFBTVMsUUFBUSxHQUFJQyxDQUFELElBQU87QUFDdEIsUUFBTUMsS0FBSyxHQUFHLE1BQU07QUFDbEJELEtBQUMsQ0FBQ1YsS0FBRixDQUFRRyxJQUFSLENBQWFJLEtBQWIsR0FBcUIsRUFBckI7QUFDRCxHQUZEOztBQUlBLFFBQU1LLE1BQU0sR0FBRyxNQUFNO0FBQ25CRixLQUFDLENBQUNWLEtBQUYsQ0FBUUcsSUFBUixDQUFhSSxLQUFiLEdBQXFCLEVBQXJCO0FBQ0QsR0FGRDs7QUFJQSxTQUFPO0FBQ0xJLFNBREs7QUFFTEM7QUFGSyxHQUFQO0FBSUQsQ0FiRDs7QUFlQSxNQUFNQyxNQUFNLEdBQUlkLEtBQUQsSUFBVztBQUN4QixRQUFNVyxDQUFDLEdBQUdJLHFFQUFhLENBQUMsT0FBTztBQUFFZCxTQUFLLEVBQUVGLFdBQVcsQ0FBQ0MsS0FBRDtBQUFwQixHQUFQLENBQUQsQ0FBdkI7QUFFQSxRQUFNZ0IsTUFBTSxHQUFHTixRQUFRLENBQUNDLENBQUQsQ0FBdkI7QUFFQSxRQUFNTSxHQUFHLEdBQUc7QUFBRWpCLFNBQUY7QUFBU0MsU0FBSyxFQUFFVSxDQUFDLENBQUNWLEtBQWxCO0FBQXlCZTtBQUF6QixHQUFaO0FBRUEsU0FBT0MsR0FBUDtBQUNELENBUkQ7O0FBVUFDLCtDQUFHLENBQUNDLGVBQUosR0FBc0IsTUFBT0MsVUFBUCxJQUFzQjtBQUFBOztBQUMxQyxRQUFNQyxZQUFZLEdBQUcsTUFBTUMsK0NBQU8sQ0FBQ0gsZUFBUixDQUF3QkMsVUFBeEIsQ0FBM0I7QUFDQSxRQUFNRyxHQUFHLEdBQUdILFVBQVUsQ0FBQ0csR0FBdkI7QUFFQSxRQUFNQyxHQUFHLEdBQUcsQ0FBQyxDQUFDSixVQUFVLENBQUNHLEdBQVgsQ0FBZUUsR0FBN0I7QUFDQSxRQUFNQyxFQUFFLEdBQUdDLDZDQUFNLENBQUNDLEtBQVAsU0FBY0wsR0FBRyxDQUFDRSxHQUFKLEdBQVVGLEdBQUcsQ0FBQ0UsR0FBSixDQUFRSSxPQUFSLENBQWdCRixNQUExQixHQUFtQ0csUUFBUSxDQUFDSCxNQUExRCx1Q0FBcUUsRUFBckUsQ0FBWDtBQUVBLFFBQU1uQixLQUFLLGVBQUdrQixFQUFFLENBQUNLLElBQU4sK0NBQWMsRUFBekI7QUFFQSx5Q0FDS1YsWUFETDtBQUVFRyxPQUZGO0FBRU9HLDJEQUZQO0FBR0VyQixRQUFJLEVBQUU7QUFDSkYsVUFBSSxFQUFFO0FBQ0pJO0FBREk7QUFERjtBQUhSO0FBU0QsQ0FsQkQ7O0FBb0JlTSxxRUFBZiIsImZpbGUiOiIuL3NyYy9ob29rcy9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOZXh0QXBwLCB7IEFwcENvbnRleHQgYXMgTmV4dEFwcENvbnRleHQgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IHVzZUxvY2FsU3RvcmUgfSBmcm9tIFwibW9ieC1yZWFjdC1saXRlXCI7XG5pbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IGNvb2tpZSBmcm9tIFwiY29va2llXCI7XG5cbmNvbnN0IGluaXRpYWxpemVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHN0YXRlID0ge1xuICAgIHN0YXR1czogeyBsb2FkaW5nOiBmYWxzZSB9LFxuICAgIHVzZXI6IHtcbiAgICAgIGlkOiBwcm9wcy5pbml0Py51c2VyLmlkLFxuICAgICAgbmFtZTogcHJvcHMuaW5pdD8udXNlci5uYW1lLFxuICAgICAgdG9rZW46IHByb3BzLmluaXQ/LnVzZXIudG9rZW4sXG4gICAgICBsZXZlbDogcHJvcHMuaW5pdD8udXNlci5sZXZlbCxcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbmNvbnN0IGRpc3BhdGNoID0gKCQpID0+IHtcbiAgY29uc3QgbG9naW4gPSAoKSA9PiB7XG4gICAgJC5zdGF0ZS51c2VyLnRva2VuID0gXCJcIjtcbiAgfTtcblxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgJC5zdGF0ZS51c2VyLnRva2VuID0gXCJcIjtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGxvZ2luLFxuICAgIGxvZ291dCxcbiAgfTtcbn07XG5cbmNvbnN0IHVzZUFwcCA9IChwcm9wcykgPT4ge1xuICBjb25zdCAkID0gdXNlTG9jYWxTdG9yZSgoKSA9PiAoeyBzdGF0ZTogaW5pdGlhbGl6ZXIocHJvcHMpIH0pKTtcblxuICBjb25zdCBhY3Rpb24gPSBkaXNwYXRjaCgkKTtcblxuICBjb25zdCBhcHAgPSB7IHByb3BzLCBzdGF0ZTogJC5zdGF0ZSwgYWN0aW9uIH07XG5cbiAgcmV0dXJuIGFwcDtcbn07XG5cbkFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dCkgPT4ge1xuICBjb25zdCBuZXh0QXBwUHJvcHMgPSBhd2FpdCBOZXh0QXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KTtcbiAgY29uc3QgY3R4ID0gYXBwQ29udGV4dC5jdHg7XG5cbiAgY29uc3Qgc3NyID0gISFhcHBDb250ZXh0LmN0eC5yZXE7XG4gIGNvbnN0IGNrID0gY29va2llLnBhcnNlKChjdHgucmVxID8gY3R4LnJlcS5oZWFkZXJzLmNvb2tpZSA6IGRvY3VtZW50LmNvb2tpZSkgPz8gXCJcIik7XG5cbiAgY29uc3QgdG9rZW4gPSBjay5hdXRoID8/IFwiXCI7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5uZXh0QXBwUHJvcHMsXG4gICAgc3NyLCBjb29raWUsXG4gICAgaW5pdDoge1xuICAgICAgdXNlcjoge1xuICAgICAgICB0b2tlbixcbiAgICAgIH1cbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/app.js\n");
>>>>>>> 59327604b103a7dd1576f1faf4d8eaca296d7dc4

/***/ }),

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout/index.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "mobx-react");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/global */ "./styles/global.ts");
/* harmony import */ var _components_App_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/App/context */ "./src/components/App/context.ts");
/* harmony import */ var _hooks_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/app */ "./src/hooks/app.ts");
var _jsxFileName = "C:\\Users\\toyon\\OneDrive\\\uBB38\uC11C\\community\\src\\pages\\_app.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










function App(props) {
  return Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__["useObserver"])(() => {
    const app = Object(_hooks_app__WEBPACK_IMPORTED_MODULE_8__["default"])(props);
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_styles_global__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }), __jsx(_components_App_context__WEBPACK_IMPORTED_MODULE_7__["AppContext"].Provider, {
      value: app,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }
    }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    }, __jsx(props.Component, _extends({}, props.pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    })))));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_4___default()(App)`
`);
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout/index.jsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/global */ \"./styles/global.js\");\n/* harmony import */ var _components_App_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/App/context */ \"./src/components/App/context.js\");\n/* harmony import */ var _hooks_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/app */ \"./src/hooks/app.js\");\nvar _jsxFileName = \"/Users/jmk/Desktop/new/new_project/src/pages/_app.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\n\nfunction App(props) {\n  return Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__[\"useObserver\"])(() => {\n    const app = Object(_hooks_app__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(props);\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_styles_global__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }\n    }), __jsx(_components_App_context__WEBPACK_IMPORTED_MODULE_6__[\"AppContext\"].Provider, {\n      value: app,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }\n    }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 11\n      }\n    }, __jsx(props.Component, _extends({}, props.pageProps, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 13\n      }\n    })))));\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (styled_components__WEBPACK_IMPORTED_MODULE_3___default()(App)`\n`);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qc3g/NDM0YSJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInVzZU9ic2VydmVyIiwiYXBwIiwidXNlQXBwIiwicGFnZVByb3BzIiwic3R5bGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsR0FBVCxDQUFhQyxLQUFiLEVBQW9CO0FBQ2xCLFNBQU9DLDhEQUFXLENBQUMsTUFBTTtBQUN2QixVQUFNQyxHQUFHLEdBQUdDLDBEQUFNLENBQUNILEtBQUQsQ0FBbEI7QUFDQSxXQUNFLG1FQUNFLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUUsTUFBQyxrRUFBRCxDQUFZLFFBQVo7QUFBcUIsV0FBSyxFQUFFRSxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxLQUFELENBQU8sU0FBUCxlQUFxQkYsS0FBSyxDQUFDSSxTQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREYsQ0FERixDQUZGLENBREY7QUFXRCxHQWJpQixDQUFsQjtBQWNEOztBQUVjQyx1SEFBTSxDQUFDTixHQUFELENBQU07Q0FBM0IiLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VPYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnO1xuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gJy4uLy4uL3N0eWxlcy9nbG9iYWwnO1xuaW1wb3J0IHsgQXBwQ29udGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwL2NvbnRleHQnO1xuaW1wb3J0IHVzZUFwcCBmcm9tICcuLi9ob29rcy9hcHAnO1xuXG5mdW5jdGlvbiBBcHAocHJvcHMpIHtcbiAgcmV0dXJuIHVzZU9ic2VydmVyKCgpID0+IHtcbiAgICBjb25zdCBhcHAgPSB1c2VBcHAocHJvcHMpO1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2FwcH0+XG4gICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxwcm9wcy5Db21wb25lbnQgey4uLnByb3BzLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxuXG4gICAgICA8Lz5cbiAgICApO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKEFwcClgXG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.jsx\n");
>>>>>>> 59327604b103a7dd1576f1faf4d8eaca296d7dc4

/***/ }),

/***/ "./styles/global.js":
/*!**************************!*\
  !*** ./styles/global.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  /* http://meyerweb.com/eric/tools/css/reset/
  v2.0 | 20110126
  License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    border: 0;
    vertical-align: baseline;
    user-select:none;
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    outline: none;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  input[type=text]::-ms-clear {
    display:none;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }
  input[type=email],
  input[type=text],
  input[type=password] {
    user-select: initial;
  }
  button {
    border: 0;
  }
  select,
  input[type=checkbox],
  input[type=checkbox]:checked,
  input[type=radio],
  input[type=radio]:checked {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  body {
    position: relative;
    font-family: sans-serif;
    font-size: 14px;
  }
  html, body, #__next, #app {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .scroll {
    margin: 0 3px;
  }
  * {
    outline: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-tap-highlight-color: transparent;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n  /* http://meyerweb.com/eric/tools/css/reset/\n  v2.0 | 20110126\n  License: none (public domain)\n  */\n\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    border: 0;\n    vertical-align: baseline;\n    user-select:none;\n    margin: 0;\n    box-sizing: border-box;\n    padding: 0;\n    outline: none;\n  }\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n  input[type=text]::-ms-clear {\n    display:none;\n  }\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  input[type=number] {\n    -moz-appearance: textfield;\n  }\n  input[type=email],\n  input[type=text],\n  input[type=password] {\n    user-select: initial;\n  }\n  button {\n    border: 0;\n  }\n  select,\n  input[type=checkbox],\n  input[type=checkbox]:checked,\n  input[type=radio],\n  input[type=radio]:checked {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n  }\n  body {\n    position: relative;\n    font-family: sans-serif;\n    font-size: 14px;\n  }\n  html, body, #__next, #app {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n  }\n  .scroll {\n    margin: 0 3px;\n  }\n  * {\n    outline: none;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n\n    -webkit-tap-highlight-color: transparent;\n  }\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalStyle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvZ2xvYmFsLmpzPzg2YjQiXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxXQUFXLEdBQUdDLG1FQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUF0QztBQTRHZUQsMEVBQWYiLCJmaWxlIjoiLi9zdHlsZXMvZ2xvYmFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cbiAgdjIuMCB8IDIwMTEwMTI2XG4gIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4gICovXG5cbiAgaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG4gIGEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbiAgZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuICBzbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuICBiLCB1LCBpLCBjZW50ZXIsXG4gIGRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG4gIGZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxuICB0YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbiAgYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG4gIGZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcbiAgbWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG4gIHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gICAgYm9yZGVyOiAwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICB1c2VyLXNlbGVjdDpub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICBhcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxuICBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIGJvZHkge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG4gIG9sLCB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuICBibG9ja3F1b3RlLCBxIHtcbiAgICBxdW90ZXM6IG5vbmU7XG4gIH1cbiAgYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG4gIHE6YmVmb3JlLCBxOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBjb250ZW50OiBub25lO1xuICB9XG4gIHRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICB9XG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuICBpbnB1dFt0eXBlPXRleHRdOjotbXMtY2xlYXIge1xuICAgIGRpc3BsYXk6bm9uZTtcbiAgfVxuICBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbiAgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgfVxuICBpbnB1dFt0eXBlPWVtYWlsXSxcbiAgaW5wdXRbdHlwZT10ZXh0XSxcbiAgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICAgIHVzZXItc2VsZWN0OiBpbml0aWFsO1xuICB9XG4gIGJ1dHRvbiB7XG4gICAgYm9yZGVyOiAwO1xuICB9XG4gIHNlbGVjdCxcbiAgaW5wdXRbdHlwZT1jaGVja2JveF0sXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQsXG4gIGlucHV0W3R5cGU9cmFkaW9dLFxuICBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gIH1cbiAgYm9keSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICBodG1sLCBib2R5LCAjX19uZXh0LCAjYXBwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLnNjcm9sbCB7XG4gICAgbWFyZ2luOiAwIDNweDtcbiAgfVxuICAqIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/global.js\n");
>>>>>>> 59327604b103a7dd1576f1faf4d8eaca296d7dc4

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./src/pages/_app.jsx");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "mobx-react-lite":
/*!**********************************!*\
  !*** external "mobx-react-lite" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react-lite");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcC9jb250ZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2dsb2JhbC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9ieC1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vYngtcmVhY3QtbGl0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbInBhZ2VQcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkQ2F0Y2giLCJyZW5kZXIiLCJfX05fU1NHIiwidXJsIiwiY3JlYXRlVXJsIiwiQXBwIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJjb25zb2xlIiwid2FyblVybCIsInAiLCJiYWNrIiwicm91dGVyIiwicHVzaCIsInB1c2hUbyIsInB1c2hSb3V0ZSIsImFzIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwiQXBwQ29udGV4dCIsIkhlYWRlciIsIkNvbnRlbnQiLCJGb290ZXIiLCJMYXlvdXQiLCJyb3V0ZSIsInRpdGxlIiwiTGF5b3V0Q29tcG9uZW50IiwicHJvcHMiLCJ1c2VSb3V0ZXIiLCJyb3V0ZXJBc1BhdGgiLCJhc1BhdGgiLCJzcGxpdCIsImNsYXNzTmFtZSIsIm1hcCIsImkiLCJwYWRkaW5nIiwibWFyZ2luIiwiZCIsImNoaWxkcmVuIiwidGV4dEFsaWduIiwic3R5bGVkIiwiaW5pdGlhbGl6ZXIiLCJzdGF0ZSIsInN0YXR1cyIsImxvYWRpbmciLCJ1c2VyIiwiaWQiLCJpbml0IiwibmFtZSIsInRva2VuIiwibGV2ZWwiLCJkaXNwYXRjaCIsIiQiLCJsb2dpbiIsImxvZ291dCIsInVzZUFwcCIsInVzZUxvY2FsU3RvcmUiLCJhY3Rpb24iLCJhcHAiLCJhcHBDb250ZXh0IiwibmV4dEFwcFByb3BzIiwiTmV4dEFwcCIsImN0eCIsInNzciIsInJlcSIsImNrIiwiY29va2llIiwicGFyc2UiLCJoZWFkZXJzIiwiZG9jdW1lbnQiLCJhdXRoIiwidXNlT2JzZXJ2ZXIiLCJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Es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QUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxLQUFELENBQU8sU0FBUCxlQUFxQi9CLEtBQUssQ0FBQ25DLFNBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERixDQURGLENBRkYsQ0FERjtBQVdELEdBYmlCLENBQWxCO0FBY0Q7O0FBRWNnRCx1SEFBTSxDQUFDeEMsR0FBRCxDQUFNO0NBQTNCLEU7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU13RSxXQUFXLEdBQUdDLG1FQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUF0QztBQTRHZUQsMEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5R0EsaUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0ID0gQXBwQ29udGV4dFR5cGU8Um91dGVyPlxuXG5leHBvcnQgdHlwZSBBcHBQcm9wczxQID0ge30+ID0gQXBwUHJvcHNUeXBlPFJvdXRlciwgUD5cblxuLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtcbiAgQ29tcG9uZW50LFxuICBjdHgsXG59OiBBcHBDb250ZXh0KTogUHJvbWlzZTxBcHBJbml0aWFsUHJvcHM+IHtcbiAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eClcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwPFAgPSB7fSwgQ1AgPSB7fSwgUyA9IHt9PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgUCAmIEFwcFByb3BzPENQPixcbiAgU1xuPiB7XG4gIHN0YXRpYyBvcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcblxuICAvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAvLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuICAvLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgX2Vycm9ySW5mbzogRXJyb3JJbmZvKTogdm9pZCB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlciwgQ29tcG9uZW50LCBwYWdlUHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHRoaXNcbiAgICAgIC5wcm9wcyBhcyBBcHBQcm9wczxDUD5cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9uZW50XG4gICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgIHtcbiAgICAgICAgICAvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbiAgICAgICAgICAvLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuICAgICAgICAgIC4uLighKF9fTl9TU0cgfHwgX19OX1NTUCkgPyB7IHVybDogY3JlYXRlVXJsKHJvdXRlcikgfSA6IHt9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5sZXQgd2FybkNvbnRhaW5lcjogKCkgPT4gdm9pZFxubGV0IHdhcm5Vcmw6ICgpID0+IHZvaWRcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybkNvbnRhaW5lciA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgV2FybmluZzogdGhlIFxcYENvbnRhaW5lclxcYCBpbiBcXGBfYXBwXFxgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxuXG4gIHdhcm5VcmwgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvdXJsLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxufVxuXG4vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcihwOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5Db250YWluZXIoKVxuICByZXR1cm4gcC5jaGlsZHJlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcjogUm91dGVyKSB7XG4gIC8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG4gIGNvbnN0IHsgcGF0aG5hbWUsIGFzUGF0aCwgcXVlcnkgfSA9IHJvdXRlclxuICByZXR1cm4ge1xuICAgIGdldCBxdWVyeSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBxdWVyeVxuICAgIH0sXG4gICAgZ2V0IHBhdGhuYW1lKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHBhdGhuYW1lXG4gICAgfSxcbiAgICBnZXQgYXNQYXRoKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIGFzUGF0aFxuICAgIH0sXG4gICAgYmFjazogKCkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH0sXG4gICAgcHVzaDogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgYXMpXG4gICAgfSxcbiAgICBwdXNoVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCBwdXNoUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcHVzaFVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSwgcHVzaFVybClcbiAgICB9LFxuICAgIHJlcGxhY2U6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsIGFzKVxuICAgIH0sXG4gICAgcmVwbGFjZVRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcmVwbGFjZVJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHJlcGxhY2VVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUsIHJlcGxhY2VVcmwpXG4gICAgfSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBJQXBwIH0gZnJvbSBcIi4uLy4uL2hvb2tzL2FwcFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFwcENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwgYXMgYW55IGFzIElBcHApO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgTGF5b3V0LCBNZW51LCBCcmVhZGNydW1iLCBCYWRnZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmNvbnN0IHsgSGVhZGVyLCBDb250ZW50LCBGb290ZXIgfSA9IExheW91dDtcclxuXHJcbmludGVyZmFjZSBJTGF5b3V0UHJvcyB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCByb3V0ZSA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJIb21lXCIsXHJcbiAgICB1cmw6IFwiL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwi6rKM7Iuc7YyQXCIsXHJcbiAgICB1cmw6IFwiL2JvYXJkXCIsXHJcbiAgfSwge1xyXG4gICAgdGl0bGU6IFwi66Gc6re47J24XCIsXHJcbiAgICB1cmw6IFwiL2FjY291bnRzL2xvZ2luXCIsXHJcbiAgfVxyXG5dO1xyXG5cclxuXHJcbmNvbnN0IExheW91dENvbXBvbmVudDogUmVhY3QuRkM8SUxheW91dFByb3M+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHJvdXRlckFzUGF0aCA9IHJvdXRlci5hc1BhdGguc3BsaXQoXCIvXCIpO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9PlxyXG4gICAgICA8SGVhZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiIC8+XHJcbiAgICAgICAgPE1lbnUgdGhlbWU9XCJkYXJrXCIgbW9kZT1cImhvcml6b250YWxcIiBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbJzEnXX0+XHJcbiAgICAgICAgICB7cm91dGUubWFwKChpKSA9PiA8TWVudS5JdGVtIGtleT17aS51cmx9IG9uQ2xpY2s9eygpID0+IHsgcm91dGVyLnB1c2goaS51cmwpIH19PntpLnRpdGxlfTwvTWVudS5JdGVtPil9XHJcbiAgICAgICAgPC9NZW51PlxyXG4gICAgICAgIHsvKiA8dWwgY2xhc3NOYW1lPVwibWVudS1hbGVydC1pY29uXCI+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxCYWRnZSBjb3VudD17OTl9PlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaGVhZC1leGFtcGxlXCIgLz5cclxuICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxCYWRnZSBjb3VudD17OTl9PlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaGVhZC1leGFtcGxlXCIgLz5cclxuICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxCYWRnZSBjb3VudD17OTl9PlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaGVhZC1leGFtcGxlXCIgLz5cclxuICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD4gKi99XHJcbiAgICAgIDwvSGVhZGVyPlxyXG4gICAgICA8Q29udGVudCBzdHlsZT17eyBwYWRkaW5nOiAnMCA1MHB4JyB9fT5cclxuICAgICAgICA8QnJlYWRjcnVtYiBzdHlsZT17eyBtYXJnaW46ICcxNnB4IDAnIH19PlxyXG4gICAgICAgICAge3JvdXRlckFzUGF0aC5tYXAoKGQpID0+IDxCcmVhZGNydW1iLkl0ZW0+e2R9PC9CcmVhZGNydW1iLkl0ZW0+KX1cclxuICAgICAgICA8L0JyZWFkY3J1bWI+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgIDxGb290ZXIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5BbnQgRGVzaWduIMKpMjAxOCBDcmVhdGVkIGJ5IEFudCBVRUQ8L0Zvb3Rlcj5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKExheW91dENvbXBvbmVudClgXHJcbmA7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOZXh0QXBwLCB7IEFwcFByb3BzLCBBcHBDb250ZXh0IGFzIE5leHRBcHBDb250ZXh0IH0gZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCB7IHVzZUxvY2FsU3RvcmUgfSBmcm9tIFwibW9ieC1yZWFjdC1saXRlXCI7XHJcbmltcG9ydCB7IElBcHBQcm9wcyB9IGZyb20gXCIuLi9wYWdlcy9fYXBwXCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImNvb2tpZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXBwIHtcclxuICBwcm9wczogSUFwcFByb3BzO1xyXG4gIHN0YXRlOiBJQXBwU3RhdGU7XHJcbiAgYWN0aW9uOiBJQXBwQWN0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBUQXBwQWN0aW9uID0gdHlwZW9mIGRpc3BhdGNoIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBpbmZlciBSID8gUiA6IG5ldmVyO1xyXG5leHBvcnQgaW50ZXJmYWNlIElBcHBBY3Rpb24gZXh0ZW5kcyBUQXBwQWN0aW9uIHsgfVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXBwU3RhdGUge1xyXG4gIHN0YXR1czogeyBsb2FkaW5nOiBib29sZWFuIH0sXHJcbiAgdXNlcjoge1xyXG4gICAgaWQ6IHN0cmluZyxcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIHRva2VuOiBzdHJpbmcsXHJcbiAgICBsZXZlbDogc3RyaW5nXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsaXplciA9IChwcm9wczogSUFwcFByb3BzKSA9PiB7XHJcbiAgY29uc3Qgc3RhdGU6IElBcHBTdGF0ZSA9IHtcclxuICAgIHN0YXR1czogeyBsb2FkaW5nOiBmYWxzZSB9LFxyXG4gICAgdXNlcjoge1xyXG4gICAgICBpZDogcHJvcHMuaW5pdD8udXNlci5pZCxcclxuICAgICAgbmFtZTogcHJvcHMuaW5pdD8udXNlci5uYW1lLFxyXG4gICAgICB0b2tlbjogcHJvcHMuaW5pdD8udXNlci50b2tlbixcclxuICAgICAgbGV2ZWw6IHByb3BzLmluaXQ/LnVzZXIubGV2ZWwsXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiBzdGF0ZTtcclxufTtcclxuXHJcbmNvbnN0IGRpc3BhdGNoID0gKCQ6IHsgc3RhdGU6IElBcHBTdGF0ZSB9KSA9PiB7XHJcbiAgY29uc3QgbG9naW4gPSAoKSA9PiB7XHJcbiAgICAkLnN0YXRlLnVzZXIudG9rZW4gPSBcIlwiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgICQuc3RhdGUudXNlci50b2tlbiA9IFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGxvZ2luLFxyXG4gICAgbG9nb3V0LFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCB1c2VBcHAgPSAocHJvcHM6IElBcHBQcm9wcyk6IElBcHAgPT4ge1xyXG4gIGNvbnN0ICQgPSB1c2VMb2NhbFN0b3JlKCgpID0+ICh7IHN0YXRlOiBpbml0aWFsaXplcihwcm9wcykgfSkpO1xyXG5cclxuICBjb25zdCBhY3Rpb24gPSBkaXNwYXRjaCgkKTtcclxuXHJcbiAgY29uc3QgYXBwID0geyBwcm9wcywgc3RhdGU6ICQuc3RhdGUsIGFjdGlvbiB9O1xyXG5cclxuICByZXR1cm4gYXBwO1xyXG59O1xyXG5cclxuQXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChhcHBDb250ZXh0OiBOZXh0QXBwQ29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IG5leHRBcHBQcm9wcyA9IGF3YWl0IE5leHRBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpO1xyXG4gIGNvbnN0IGN0eCA9IGFwcENvbnRleHQuY3R4O1xyXG5cclxuICBjb25zdCBzc3IgPSAhIWFwcENvbnRleHQuY3R4LnJlcTtcclxuICBjb25zdCBjayA9IGNvb2tpZS5wYXJzZSgoY3R4LnJlcSA/IGN0eC5yZXEuaGVhZGVycy5jb29raWUgOiBkb2N1bWVudC5jb29raWUpID8/IFwiXCIpO1xyXG5cclxuICBjb25zdCB0b2tlbiA9IGNrLmF1dGggPz8gXCJcIjtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLm5leHRBcHBQcm9wcyxcclxuICAgIHNzciwgY29va2llLFxyXG4gICAgaW5pdDoge1xyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgdG9rZW4sXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VBcHA7XHJcbiIsImltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IHsgdXNlT2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0JztcclxuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gJy4uLy4uL3N0eWxlcy9nbG9iYWwnO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9BcHAvY29udGV4dCc7XHJcbmltcG9ydCB1c2VBcHAgZnJvbSAnLi4vaG9va3MvYXBwJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFwcFByb3BzIGV4dGVuZHMgQXBwUHJvcHMge1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBzc3I6IGJvb2xlYW47XHJcbiAgY29va2llOiBzdHJpbmc7XHJcbiAgaW5pdDogYW55O1xyXG59XHJcblxyXG5mdW5jdGlvbiBBcHAocHJvcHM6IElBcHBQcm9wcykge1xyXG4gIHJldHVybiB1c2VPYnNlcnZlcigoKSA9PiB7XHJcbiAgICBjb25zdCBhcHAgPSB1c2VBcHAocHJvcHMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8R2xvYmFsU3R5bGUgLz5cclxuICAgICAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17YXBwfT5cclxuICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxwcm9wcy5Db21wb25lbnQgey4uLnByb3BzLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxuXHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKEFwcClgXHJcbmA7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXHJcbiAgdjIuMCB8IDIwMTEwMTI2XHJcbiAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcclxuICAqL1xyXG5cclxuICBodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXHJcbiAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxyXG4gIGEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcclxuICBkZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXHJcbiAgc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcclxuICBiLCB1LCBpLCBjZW50ZXIsXHJcbiAgZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcclxuICBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcclxuICB0YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcclxuICBhcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcclxuICBmaWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXHJcbiAgbWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXHJcbiAgdGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICAgIHVzZXItc2VsZWN0Om5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIGFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXHJcbiAgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBib2R5IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIH1cclxuICBvbCwgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcbiAgYmxvY2txdW90ZSwgcSB7XHJcbiAgICBxdW90ZXM6IG5vbmU7XHJcbiAgfVxyXG4gIGJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxyXG4gIHE6YmVmb3JlLCBxOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgY29udGVudDogbm9uZTtcclxuICB9XHJcbiAgdGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gIH1cclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPXRleHRdOjotbXMtY2xlYXIge1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gIH1cclxuICBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuICBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIGlucHV0W3R5cGU9bnVtYmVyXSB7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxuICB9XHJcbiAgaW5wdXRbdHlwZT1lbWFpbF0sXHJcbiAgaW5wdXRbdHlwZT10ZXh0XSxcclxuICBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgICB1c2VyLXNlbGVjdDogaW5pdGlhbDtcclxuICB9XHJcbiAgYnV0dG9uIHtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbiAgc2VsZWN0LFxyXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdLFxyXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQsXHJcbiAgaW5wdXRbdHlwZT1yYWRpb10sXHJcbiAgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIH1cclxuICBib2R5IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBodG1sLCBib2R5LCAjX19uZXh0LCAjYXBwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgLnNjcm9sbCB7XHJcbiAgICBtYXJnaW46IDAgM3B4O1xyXG4gIH1cclxuICAqIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vYngtcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9ieC1yZWFjdC1saXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=