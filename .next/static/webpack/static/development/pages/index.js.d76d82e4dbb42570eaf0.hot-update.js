webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/native-url/dist/index.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
false,

/***/ "./node_modules/querystring-es3/decode.js":
false,

/***/ "./node_modules/querystring-es3/encode.js":
false,

/***/ "./node_modules/querystring-es3/index.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./node_modules/webpack/buildin/module.js":
false,

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobxreact.esm.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/jmk/Desktop/new/new_project/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  & { \\n    min-height: 100vh;\\n    padding: 0 0.5rem;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n\\n    main {\\n      padding: 5rem 0;\\n      flex: 1;\\n      display: flex;\\n      flex-direction: column;\\n      justify-content: center;\\n      align-items: center;\\n    }\\n\\n    footer {\\n      width: 100%;\\n      height: 100px;\\n      border-top: 1px solid #eaeaea;\\n      display: flex;\\n      justify-content: center;\\n      align-items: center;\\n    }\\n\\n    footer img {\\n      margin-left: 0.5rem;\\n    }\\n\\n    footer a {\\n      display: flex;\\n      justify-content: center;\\n      align-items: center;\\n    }\\n\\n    a {\\n      color: inherit;\\n      text-decoration: none;\\n    }\\n\\n    .title a {\\n      color: #0070f3;\\n      text-decoration: none;\\n    }\\n\\n    .title a:hover,\\n    .title a:focus,\\n    .title a:active {\\n      text-decoration: underline;\\n    }\\n\\n    .title {\\n      margin: 0;\\n      line-height: 1.15;\\n      font-size: 4rem;\\n    }\\n\\n    .title,\\n    .description {\\n      text-align: center;\\n    }\\n\\n    .description {\\n      line-height: 1.5;\\n      font-size: 1.5rem;\\n    }\\n\\n    code {\\n      background: #fafafa;\\n      border-radius: 5px;\\n      padding: 0.75rem;\\n      font-size: 1.1rem;\\n      font-family: Menlo, Monaco, Lucida Console, Liberation Mono,\\n        DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;\\n    }\\n\\n    .grid {\\n      display: flex;\\n      align-items: center;\\n      justify-content: center;\\n      flex-wrap: wrap;\\n\\n      max-width: 800px;\\n      margin-top: 3rem;\\n    }\\n\\n    .card {\\n      margin: 1rem;\\n      flex-basis: 45%;\\n      padding: 1.5rem;\\n      text-align: left;\\n      color: inherit;\\n      text-decoration: none;\\n      border: 1px solid #eaeaea;\\n      border-radius: 10px;\\n      transition: color 0.15s ease, border-color 0.15s ease;\\n    }\\n\\n    .card:hover,\\n    .card:focus,\\n    .card:active {\\n      color: #0070f3;\\n      border-color: #0070f3;\\n    }\\n\\n    .card h3 {\\n      margin: 0 0 1rem 0;\\n      font-size: 1.5rem;\\n    }\\n\\n    .card p {\\n      margin: 0;\\n      font-size: 1.25rem;\\n      line-height: 1.5;\\n    }\\n\\n    .logo {\\n      height: 1em;\\n    }\\n\\n    @media (max-width: 600px) {\\n      .grid {\\n        width: 100%;\\n        flex-direction: column;\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar Home = function Home(props) {\n  _s();\n\n  return Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__[\"useObserver\"])(function () {\n    return __jsx(\"div\", {\n      className: props.className,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 7\n      }\n    }, \"home\", __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      onClick: function onClick() {\n        router.push(\"/account/login\");\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }\n    }, \"login\"));\n  });\n};\n\n_s(Home, \"V6gQiDY4afZNDcSHjVFQDeiM1XA=\", false, function () {\n  return [mobx_react__WEBPACK_IMPORTED_MODULE_4__[\"useObserver\"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Home)(_templateObject()));\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwidXNlT2JzZXJ2ZXIiLCJjbGFzc05hbWUiLCJyb3V0ZXIiLCJwdXNoIiwic3R5bGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTs7QUFLQSxJQUFNQSxJQUFxQixHQUFHLFNBQXhCQSxJQUF3QixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDdkMsU0FBT0MsOERBQVcsQ0FBQyxZQUFNO0FBQ3ZCLFdBQ0U7QUFBSyxlQUFTLEVBQUVELEtBQUssQ0FBQ0UsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUVFLE1BQUMsOERBQUQ7QUFBUSxhQUFPLEVBQUUsbUJBQU07QUFBRUMsY0FBTSxDQUFDQyxJQUFQLENBQVksZ0JBQVo7QUFBZ0MsT0FBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLENBREY7QUFNRCxHQVBpQixDQUFsQjtBQVNELENBVkQ7O0dBQU1MLEk7VUFDR0Usc0Q7OztLQURIRixJO0FBWVNNLGdJQUFNLENBQUNOLElBQUQsQ0FBckIiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VPYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5jb25zdCBIb21lOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIHVzZU9ic2VydmVyKCgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgIGhvbWVcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHJvdXRlci5wdXNoKFwiL2FjY291bnQvbG9naW5cIik7IH19PmxvZ2luPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0pO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChIb21lKWBcbiAgJiB7IFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgbWFpbiB7XG4gICAgICBwYWRkaW5nOiA1cmVtIDA7XG4gICAgICBmbGV4OiAxO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgZm9vdGVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICBmb290ZXIgaW1nIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgfVxuXG4gICAgZm9vdGVyIGEge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cblxuICAgIC50aXRsZSBhIHtcbiAgICAgIGNvbG9yOiAjMDA3MGYzO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cblxuICAgIC50aXRsZSBhOmhvdmVyLFxuICAgIC50aXRsZSBhOmZvY3VzLFxuICAgIC50aXRsZSBhOmFjdGl2ZSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICBmb250LXNpemU6IDRyZW07XG4gICAgfVxuXG4gICAgLnRpdGxlLFxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG5cbiAgICBjb2RlIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcbiAgICAgICAgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xuICAgIH1cblxuICAgIC5ncmlkIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgIH1cblxuICAgIC5jYXJkIHtcbiAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgIGZsZXgtYmFzaXM6IDQ1JTtcbiAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XG4gICAgfVxuXG4gICAgLmNhcmQ6aG92ZXIsXG4gICAgLmNhcmQ6Zm9jdXMsXG4gICAgLmNhcmQ6YWN0aXZlIHtcbiAgICAgIGNvbG9yOiAjMDA3MGYzO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xuICAgIH1cblxuICAgIC5jYXJkIGgzIHtcbiAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cblxuICAgIC5jYXJkIHAge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICB9XG5cbiAgICAubG9nbyB7XG4gICAgICBoZWlnaHQ6IDFlbTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgIC5ncmlkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG4gICAgfVxuICB9XG5gIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})