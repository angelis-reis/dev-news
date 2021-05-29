/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/NewsCard.js":
/*!********************************!*\
  !*** ./components/NewsCard.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewsCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_icons_Tv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Tv */ \"@material-ui/icons/Tv\");\n/* harmony import */ var _material_ui_icons_Tv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Tv__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ArrowUpward */ \"@material-ui/icons/ArrowUpward\");\n/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Comment */ \"@material-ui/icons/Comment\");\n/* harmony import */ var _material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Comment__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/home/angelis-reis/Documentos/desenvolvimento2/dev-news/components/NewsCard.js\";\n\n\n\n\n\n\nconst CardStyle = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`\n\t/* max-width: 340px;\n\tmin-width: 270px; */\n\twidth: 280px;\n\tpadding: 8px 0;\n\t/* -webkit-box-direction: normal; */\n\t/* -webkit-box-orient: vertical; */\n\theight: 380px;\n\tborder: 1px solid rgba(233, 234, 236, 0.08);\n\tborder-radius: 16px;\n\t/* box-shadow: 0 0 80px -15px rgba(0, 0, 0, 0.4); */\n\t/* margin-right: auto; */\n\t/* margin-left: auto; */\n\tbackground-color: #25282c;\n\tdisplay: grid;\n\tgrid-template-rows: 45px 1fr 40px;\n\n\t&:hover {\n\t\tborder: 1px solid #474b52;\n\t}\n\n\ta {\n\t\ttext-decoration: none;\n\t}\n\n\t.cardHeader {\n\t\tmargin: 8px 16px 8px 24px;\n\t\twidth: 30px;\n\t\theight: 30px;\n\t\tbackground-color: #fff;\n\t\tborder-radius: 50%;\n\t}\n\n\t.cardHeader img {\n\t\twidth: 70%;\n\t\tpadding-left: 4px;\n\t\theight: 100%;\n\t}\n\n\t.postLink {\n\t\ttext-decoration: none;\n\t\tdisplay: grid;\n\t\tgrid-template-rows: 90px 45px 160px;\n\t\tcursor: pointer;\n\t}\n\n\t.postTitle {\n\t\tcolor: #fff;\n\t\tfont-size: 12px;\n\t\tfont-weight: 300;\n\t\tletter-spacing: 0.56px;\n\t\tline-height: 20px;\n\t\tmargin: 8px 24px;\n\t\tpadding-top: px;\n\t\t/* font-size: 14px; */\n\t}\n\t.postMetadata {\n\t\tmargin: 8px 24px;\n\t\tcolor: #686e78;\n\t\tfont-size: 10px;\n\t\tline-height: 16px;\n\t\tletter-spacing: 0.4px;\n\t\tfont-weight: 700;\n\t\t/* margin: 24px 24px 12px; */\n\t}\n\t.cardImage img {\n\t\tmargin-left: 8px;\n\t\tborder-radius: 16px;\n\t\twidth: 95%;\n\t\tpadding-left: auto;\n\t\theight: 100%;\n\t}\n\n\t.postButtons {\n\t\tpadding-top: 20px;\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t\tmargin: 4px 0px 8px 20px;\n\t}\n\n\t.postButtons span {\n\t\tpadding-left: 10px;\n\t}\n\t.commentIcon {\n\t\tpadding-left: 30px;\n\t}\n`;\nfunction NewsCard(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardStyle, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"cardHeader\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: \"https://cdn.worldvectorlogo.com/logos/medium-1.svg\",\n        alt: \"Post Image\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n      target: \"_blank\",\n      href: props.newsLink,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"postLink\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"postTitle\",\n          children: props.newsTitle\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"postMetadata\",\n          children: props.newsMetadata\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"cardImage\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: props.urlImg,\n            alt: \"Post Image\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 99,\n    columnNumber: 3\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXYtbmV3cy8uL2NvbXBvbmVudHMvTmV3c0NhcmQuanM/MjliNSJdLCJuYW1lcyI6WyJDYXJkU3R5bGUiLCJzdHlsZWQiLCJOZXdzQ2FyZCIsInByb3BzIiwibmV3c0xpbmsiLCJuZXdzVGl0bGUiLCJuZXdzTWV0YWRhdGEiLCJ1cmxJbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQyw4REFBVztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBdEZBO0FBd0ZlLFNBQVNDLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZDLHNCQUNDLDhEQUFDLFNBQUQ7QUFBQSw0QkFDQztBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUEsNkJBQ0M7QUFDQyxXQUFHLEVBQUMsb0RBREw7QUFFQyxXQUFHLEVBQUM7QUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBT0M7QUFBRyxZQUFNLEVBQUMsUUFBVjtBQUFtQixVQUFJLEVBQUVBLEtBQUssQ0FBQ0MsUUFBL0I7QUFBQSw2QkFDQztBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLGdDQUNDO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsb0JBQTRCRCxLQUFLLENBQUNFO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFFQztBQUFLLG1CQUFTLEVBQUMsY0FBZjtBQUFBLG9CQUErQkYsS0FBSyxDQUFDRztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZELGVBR0M7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxpQ0FDQztBQUFLLGVBQUcsRUFBRUgsS0FBSyxDQUFDSSxNQUFoQjtBQUF3QixlQUFHLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBMEJBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OZXdzQ2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IFR2SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHYnO1xuaW1wb3J0IEFycm93VXB3YXJkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dVcHdhcmQnO1xuaW1wb3J0IENvbW1lbnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Db21tZW50JztcblxuY29uc3QgQ2FyZFN0eWxlID0gc3R5bGVkLmRpdmBcblx0LyogbWF4LXdpZHRoOiAzNDBweDtcblx0bWluLXdpZHRoOiAyNzBweDsgKi9cblx0d2lkdGg6IDI4MHB4O1xuXHRwYWRkaW5nOiA4cHggMDtcblx0LyogLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7ICovXG5cdC8qIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7ICovXG5cdGhlaWdodDogMzgwcHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjMzLCAyMzQsIDIzNiwgMC4wOCk7XG5cdGJvcmRlci1yYWRpdXM6IDE2cHg7XG5cdC8qIGJveC1zaGFkb3c6IDAgMCA4MHB4IC0xNXB4IHJnYmEoMCwgMCwgMCwgMC40KTsgKi9cblx0LyogbWFyZ2luLXJpZ2h0OiBhdXRvOyAqL1xuXHQvKiBtYXJnaW4tbGVmdDogYXV0bzsgKi9cblx0YmFja2dyb3VuZC1jb2xvcjogIzI1MjgyYztcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiA0NXB4IDFmciA0MHB4O1xuXG5cdCY6aG92ZXIge1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICM0NzRiNTI7XG5cdH1cblxuXHRhIHtcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdH1cblxuXHQuY2FyZEhlYWRlciB7XG5cdFx0bWFyZ2luOiA4cHggMTZweCA4cHggMjRweDtcblx0XHR3aWR0aDogMzBweDtcblx0XHRoZWlnaHQ6IDMwcHg7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdH1cblxuXHQuY2FyZEhlYWRlciBpbWcge1xuXHRcdHdpZHRoOiA3MCU7XG5cdFx0cGFkZGluZy1sZWZ0OiA0cHg7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHR9XG5cblx0LnBvc3RMaW5rIHtcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0ZGlzcGxheTogZ3JpZDtcblx0XHRncmlkLXRlbXBsYXRlLXJvd3M6IDkwcHggNDVweCAxNjBweDtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdH1cblxuXHQucG9zdFRpdGxlIHtcblx0XHRjb2xvcjogI2ZmZjtcblx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0XHRsZXR0ZXItc3BhY2luZzogMC41NnB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xuXHRcdG1hcmdpbjogOHB4IDI0cHg7XG5cdFx0cGFkZGluZy10b3A6IHB4O1xuXHRcdC8qIGZvbnQtc2l6ZTogMTRweDsgKi9cblx0fVxuXHQucG9zdE1ldGFkYXRhIHtcblx0XHRtYXJnaW46IDhweCAyNHB4O1xuXHRcdGNvbG9yOiAjNjg2ZTc4O1xuXHRcdGZvbnQtc2l6ZTogMTBweDtcblx0XHRsaW5lLWhlaWdodDogMTZweDtcblx0XHRsZXR0ZXItc3BhY2luZzogMC40cHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHQvKiBtYXJnaW46IDI0cHggMjRweCAxMnB4OyAqL1xuXHR9XG5cdC5jYXJkSW1hZ2UgaW1nIHtcblx0XHRtYXJnaW4tbGVmdDogOHB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDE2cHg7XG5cdFx0d2lkdGg6IDk1JTtcblx0XHRwYWRkaW5nLWxlZnQ6IGF1dG87XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHR9XG5cblx0LnBvc3RCdXR0b25zIHtcblx0XHRwYWRkaW5nLXRvcDogMjBweDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG5cdFx0bWFyZ2luOiA0cHggMHB4IDhweCAyMHB4O1xuXHR9XG5cblx0LnBvc3RCdXR0b25zIHNwYW4ge1xuXHRcdHBhZGRpbmctbGVmdDogMTBweDtcblx0fVxuXHQuY29tbWVudEljb24ge1xuXHRcdHBhZGRpbmctbGVmdDogMzBweDtcblx0fVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3c0NhcmQocHJvcHMpIHtcblx0cmV0dXJuIChcblx0XHQ8Q2FyZFN0eWxlPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcmRIZWFkZXInPlxuXHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0c3JjPSdodHRwczovL2Nkbi53b3JsZHZlY3RvcmxvZ28uY29tL2xvZ29zL21lZGl1bS0xLnN2Zydcblx0XHRcdFx0XHRhbHQ9J1Bvc3QgSW1hZ2UnXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxhIHRhcmdldD0nX2JsYW5rJyBocmVmPXtwcm9wcy5uZXdzTGlua30+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwb3N0TGluayc+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Bvc3RUaXRsZSc+e3Byb3BzLm5ld3NUaXRsZX08L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncG9zdE1ldGFkYXRhJz57cHJvcHMubmV3c01ldGFkYXRhfTwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJkSW1hZ2UnPlxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e3Byb3BzLnVybEltZ30gYWx0PSdQb3N0IEltYWdlJyAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvYT5cblxuXHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPSdwb3N0QnV0dG9ucyc+XG5cdFx0XHRcdDxBcnJvd1Vwd2FyZEljb24gLz5cblx0XHRcdFx0PHNwYW4+NDM8L3NwYW4+XG5cdFx0XHRcdDxDb21tZW50SWNvbiBjbGFzc05hbWU9J2NvbW1lbnRJY29uJyAvPlxuXHRcdFx0XHQ8c3Bhbj41PC9zcGFuPlxuXHRcdFx0PC9kaXY+ICovfVxuXHRcdDwvQ2FyZFN0eWxlPlxuXHQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NewsCard.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_NewsCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NewsCard */ \"./components/NewsCard.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _sensitive_newsApiKey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sensitive/newsApiKey */ \"./sensitive/newsApiKey.js\");\n\n\nvar _jsxFileName = \"/home/angelis-reis/Documentos/desenvolvimento2/dev-news/pages/index.js\";\n\n\n\n\n\n\nconst NewsWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`\n\tmargin-left: 70px;\n\tmargin-right: 70px;\n\tdisplay: inline-flex;\n\tflex-wrap: wrap;\n\tgap: 22px;\n\tjustify-content: space-around;\n`;\nfunction Home() {\n  const {\n    0: newsList,\n    1: setNewsList\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n\n  async function fetchNews() {\n    const requestNews = await axios__WEBPACK_IMPORTED_MODULE_5___default().get(`https://newsapi.org/v2/everything?q=javascript&sortBy=popularity&language=pt&apiKey=${_sensitive_newsApiKey__WEBPACK_IMPORTED_MODULE_6__.default}`);\n    console.log('Koca: requestNews ', requestNews);\n    setNewsList(requestNews.data.articles);\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    fetchNews();\n  }, []);\n  console.log('Koca: newsList ', newsList);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NewsWrapper, {\n      children: newsList.map(news => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewsCard__WEBPACK_IMPORTED_MODULE_4__.default // publisherLogo={news.publisherLogo}\n      , {\n        newsLink: news.url,\n        newsTitle: news.title,\n        newsMetadata: news.publishedAt,\n        urlImg: news.urlToImage\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 6\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXYtbmV3cy8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwibmFtZXMiOlsiTmV3c1dyYXBwZXIiLCJzdHlsZWQiLCJIb21lIiwibmV3c0xpc3QiLCJzZXROZXdzTGlzdCIsInVzZVN0YXRlIiwiZmV0Y2hOZXdzIiwicmVxdWVzdE5ld3MiLCJheGlvcyIsIm5ld3NBcGlLZXkiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImFydGljbGVzIiwidXNlRWZmZWN0IiwibWFwIiwibmV3cyIsInVybCIsInRpdGxlIiwicHVibGlzaGVkQXQiLCJ1cmxUb0ltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxXQUFXLEdBQUdDLDhEQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUEE7QUFTZSxTQUFTQyxJQUFULEdBQWdCO0FBQzlCLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsK0NBQVEsQ0FBQyxFQUFELENBQXhDOztBQUVBLGlCQUFlQyxTQUFmLEdBQTJCO0FBQzFCLFVBQU1DLFdBQVcsR0FBRyxNQUFNQyxnREFBQSxDQUN4Qix1RkFBc0ZDLDBEQUFXLEVBRHpFLENBQTFCO0FBR0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDSixXQUFsQztBQUVBSCxlQUFXLENBQUNHLFdBQVcsQ0FBQ0ssSUFBWixDQUFpQkMsUUFBbEIsQ0FBWDtBQUNBOztBQUVEQyxrREFBUyxDQUFDLE1BQU07QUFDZlIsYUFBUztBQUNULEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQUksU0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JSLFFBQS9CO0FBRUEsc0JBQ0M7QUFBQSw0QkFDQyw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQyw4REFBQyxXQUFEO0FBQUEsZ0JBQ0VBLFFBQVEsQ0FBQ1ksR0FBVCxDQUFjQyxJQUFELGlCQUNiLDhEQUFDLHlEQUFELENBQ0M7QUFERDtBQUVDLGdCQUFRLEVBQUVBLElBQUksQ0FBQ0MsR0FGaEI7QUFHQyxpQkFBUyxFQUFFRCxJQUFJLENBQUNFLEtBSGpCO0FBSUMsb0JBQVksRUFBRUYsSUFBSSxDQUFDRyxXQUpwQjtBQUtDLGNBQU0sRUFBRUgsSUFBSSxDQUFDSTtBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRDtBQUFBLGtCQUREO0FBa0JBIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IE5ld3NDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvTmV3c0NhcmQnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBuZXdzQXBpS2V5IGZyb20gJy4uL3NlbnNpdGl2ZS9uZXdzQXBpS2V5JztcblxuY29uc3QgTmV3c1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRtYXJnaW4tbGVmdDogNzBweDtcblx0bWFyZ2luLXJpZ2h0OiA3MHB4O1xuXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRnYXA6IDIycHg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblx0Y29uc3QgW25ld3NMaXN0LCBzZXROZXdzTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cblx0YXN5bmMgZnVuY3Rpb24gZmV0Y2hOZXdzKCkge1xuXHRcdGNvbnN0IHJlcXVlc3ROZXdzID0gYXdhaXQgYXhpb3MuZ2V0KFxuXHRcdFx0YGh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvZXZlcnl0aGluZz9xPWphdmFzY3JpcHQmc29ydEJ5PXBvcHVsYXJpdHkmbGFuZ3VhZ2U9cHQmYXBpS2V5PSR7bmV3c0FwaUtleX1gXG5cdFx0KTtcblx0XHRjb25zb2xlLmxvZygnS29jYTogcmVxdWVzdE5ld3MgJywgcmVxdWVzdE5ld3MpO1xuXG5cdFx0c2V0TmV3c0xpc3QocmVxdWVzdE5ld3MuZGF0YS5hcnRpY2xlcyk7XG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZldGNoTmV3cygpO1xuXHR9LCBbXSk7XG5cblx0Y29uc29sZS5sb2coJ0tvY2E6IG5ld3NMaXN0ICcsIG5ld3NMaXN0KTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8SGVhZGVyIC8+XG5cdFx0XHQ8TmV3c1dyYXBwZXI+XG5cdFx0XHRcdHtuZXdzTGlzdC5tYXAoKG5ld3MpID0+IChcblx0XHRcdFx0XHQ8TmV3c0NhcmRcblx0XHRcdFx0XHRcdC8vIHB1Ymxpc2hlckxvZ289e25ld3MucHVibGlzaGVyTG9nb31cblx0XHRcdFx0XHRcdG5ld3NMaW5rPXtuZXdzLnVybH1cblx0XHRcdFx0XHRcdG5ld3NUaXRsZT17bmV3cy50aXRsZX1cblx0XHRcdFx0XHRcdG5ld3NNZXRhZGF0YT17bmV3cy5wdWJsaXNoZWRBdH1cblx0XHRcdFx0XHRcdHVybEltZz17bmV3cy51cmxUb0ltYWdlfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9OZXdzV3JhcHBlcj5cblxuXHRcdFx0ey8qIDxoMT4gaG9tZXBhZ2U8L2gxPiAqL31cblx0XHQ8Lz5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./sensitive/newsApiKey.js":
/*!*********************************!*\
  !*** ./sensitive/newsApiKey.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst newsApiKey = '43195574afa4402895a5f8a3dda8c1b0';\n/* harmony default export */ __webpack_exports__[\"default\"] = (newsApiKey);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXYtbmV3cy8uL3NlbnNpdGl2ZS9uZXdzQXBpS2V5LmpzPzkzZDQiXSwibmFtZXMiOlsibmV3c0FwaUtleSJdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFVBQVUsR0FBRyxrQ0FBbkI7QUFFQSwrREFBZUEsVUFBZiIsImZpbGUiOiIuL3NlbnNpdGl2ZS9uZXdzQXBpS2V5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbmV3c0FwaUtleSA9ICc0MzE5NTU3NGFmYTQ0MDI4OTVhNWY4YTNkZGE4YzFiMCc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ld3NBcGlLZXk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sensitive/newsApiKey.js\n");

/***/ }),

/***/ "@material-ui/icons/ArrowUpward":
/*!*************************************************!*\
  !*** external "@material-ui/icons/ArrowUpward" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/ArrowUpward");;

/***/ }),

/***/ "@material-ui/icons/Comment":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Comment" ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Comment");;

/***/ }),

/***/ "@material-ui/icons/Tv":
/*!****************************************!*\
  !*** external "@material-ui/icons/Tv" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Tv");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_next_image_js-node_modules_next_link_js","components_Header_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();