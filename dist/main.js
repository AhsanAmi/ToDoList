/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/list-circle.svg */ \"./src/images/list-circle.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/checked.png */ \"./src/images/checked.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\r\\n    margin: 0px;\\r\\n    padding: 0px;\\r\\n    box-sizing: border-box;\\r\\n    list-style: none;\\r\\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\\r\\n}\\r\\ninput:focus{\\r\\n    outline: none;\\r\\n}\\r\\ntextarea:focus{\\r\\n    outline: none;\\r\\n}\\r\\n.container{\\r\\n    width:100%;\\r\\n    height:100vh;\\r\\n    padding: 10px;\\r\\n    \\r\\n    background:linear-gradient(135deg,#3c90c8,#361d3c);\\r\\n}\\r\\n.todo-app{\\r\\n    width: 30%;\\r\\n    max-width: 400px;\\r\\n    height: 100vh;\\r\\n    background: #f2f2f2;\\r\\n    padding: 40px 30px 70px;\\r\\n    position: absolute;\\r\\n    left: 0px;\\r\\n    top: 0px;\\r\\n}\\r\\n.todo-app h2{\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    color: #153677;\\r\\n    margin-bottom: 20px;\\r\\n    margin-top: 20px;\\r\\n    font-size: 2.2rem;\\r\\n}\\r\\n.todo-app img{\\r\\n    width: 30px;\\r\\n    /* margin-bottom : 10px; */\\r\\n}\\r\\n.row{\\r\\ndisplay: flex;\\r\\nalign-items: center;\\r\\njustify-content: space-between;\\r\\nbackground: #edeef0;\\r\\nborder-radius: 20px;\\r\\nmargin:30px 10px;\\r\\n}\\r\\n.add-project-aside input{\\r\\n    flex:1;\\r\\n    border: solid 1px;\\r\\n    outline: none;\\r\\n    background: transparent;\\r\\n    padding: 10px;\\r\\n    font-weight: 14px;\\r\\n}\\r\\n.add-project-aside input:focus{\\r\\n    border: solid 1px #ff5945; \\r\\n}\\r\\n.add-project-aside button{\\r\\n    border: none;\\r\\n    outline: none;\\r\\n    padding: 10px 30px;\\r\\n    background: #ff5945;\\r\\n    color: #fff;\\r\\n    font-size: 16px;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.add-project-aside ul li{\\r\\n    list-style: none;\\r\\n    font-size: 20px;\\r\\n    cursor: pointer;\\r\\n    user-select: none;\\r\\n    padding: 12px 8px 12px 5px;\\r\\n    position: relative;\\r\\n    left: 43px;\\r\\n}\\r\\n.add-project-aside ul li::before{\\r\\n    content:' ';\\r\\n    position:absolute;\\r\\n    height: 38px;\\r\\n    width: 38px;\\r\\n    border-radius: 50%;\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n    top: 10px;\\r\\n    left:-50px;\\r\\n    background-size:cover;\\r\\n    background-position: center;\\r\\n}\\r\\n.add-project-aside ul li.checked{\\r\\n    color: #ff5945; \\r\\n}\\r\\n.add-project-aside ul li.checked::before{\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n}\\r\\n.add-project-aside ul li span{\\r\\n    position: absolute;\\r\\n    right: 0;\\r\\n    top: 5px;\\r\\n    width: 50px;\\r\\n    height: 50px;\\r\\n    font-size: 40px;\\r\\n    line-height: 40px;\\r\\n    text-align: center;\\r\\n    color: #ff5945;\\r\\n    right: 100px;\\r\\n}\\r\\n\\r\\n/* second */\\r\\naside{\\r\\n    width: 70%;\\r\\n    position: absolute;\\r\\n    right: 0px;\\r\\n    top: 60px;\\r\\n  }\\r\\n.taskList   ul {\\r\\n    list-style-type: none;\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    justify-content: center;\\r\\n  }\\r\\n  .taskInputContainer ,.show-task-list-container{\\r\\n      display: flex;\\r\\n      flex-direction: column;\\r\\n      justify-content: center;\\r\\n      align-items: center;\\r\\n      background:white;\\r\\n      width: 400px;\\r\\n      box-shadow: rgba(144, 30, 30, 0.25) 0px 54px 55px, rgba(189, 29, 29, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\\r\\n  }\\r\\n  .taskInputContainer h3{\\r\\n    background-color: #ff5945;\\r\\n    font-size: 25px;\\r\\n    padding:1.5rem 0.5rem;\\r\\n    width: 400px;\\r\\n    color: #fff;\\r\\n  }\\r\\n  .taskInputContainer button{\\r\\n      width: 120px;\\r\\n      height: 40px;\\r\\n      font-size: 16px;\\r\\n      margin: 5px;\\r\\n      background: #ff5945;\\r\\n      color: #fff;\\r\\n      font-size: 20px;\\r\\n      border: none;\\r\\n      outline: none;\\r\\n      cursor: pointer;\\r\\n  }\\r\\n\\r\\n.taskInputContainer input,.show-task-list-container input {\\r\\n    font-size: 15px;;\\r\\n    padding: 1rem;\\r\\n    width: 300px;\\r\\n    height: 30px;\\r\\n    margin: 2rem 1rem;\\r\\n    border-top: solid 0px;\\r\\n    border-left: solid 0px;\\r\\n    border-right: solid 0px;\\r\\n    border-bottom: #ff5945 solid 2px;\\r\\n}\\r\\n.show-task-list-container input{\\r\\n    margin: .5rem;\\r\\n}\\r\\n.taskInputContainer textarea, .show-task-list-container textarea {\\r\\n    width: 300px;\\r\\n    height: 100px;\\r\\n    border-bottom: #ff5945 solid 2px;\\r\\n    padding:1rem;\\r\\n    margin: 1rem;\\r\\n    border-top: solid 0px;\\r\\n    border-left: solid 0px;\\r\\n    border-right: solid 0px;\\r\\n}\\r\\n\\r\\n\\r\\n.show-task-list-container button{\\r\\n     width: 120px;\\r\\n      height: 40px;\\r\\n      font-size: 16px;\\r\\n      margin: 5px;\\r\\n      background: #ff5945;\\r\\n      color: #fff;\\r\\n      font-size: 20px;\\r\\n      border: none;\\r\\n      outline: none;\\r\\n      cursor: pointer;\\r\\n }\\r\\n\\r\\n.show_section p{\\r\\n  width: 30%;\\r\\n  font-size: 20px;\\r\\n}\\r\\n.show-task-list-container{\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 320px;\\r\\n  margin-top: 3rem;\\r\\n  margin-right: 1rem;\\r\\n  margin-left: 1rem;\\r\\n  align-items: center;\\r\\n  border-radius: 5px;\\r\\n  background-color: #fff;\\r\\n  padding: 2rem 1rem;\\r\\n  min-height: 300px;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.show-task-list-container h2{\\r\\n    color: #153677;\\r\\n}\\r\\n\\r\\n.addProject{\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  font-size: 28px;\\r\\n  cursor: pointer;  \\r\\n  background: #ccc;\\r\\n  height: 50px;\\r\\n  justify-content: center;\\r\\n  line-height: 40px;\\r\\n  margin: 0px 4rem;\\r\\n  box-shadow: rgba(144, 30, 30, 0.25) 0px 54px 55px, rgba(189, 29, 29, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\\r\\n}\\r\\n.addProject:hover,.show-task-list-container:hover{\\r\\n  box-shadow: rgba(1, 1, 1, 0.25) 0px 54px 55px, rgba(6, 5, 5, 0.12) 0px -12px 30px, rgba(17, 13, 13, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\\r\\n\\r\\n}\\r\\n\\r\\n.addProject span{\\r\\n    margin-top: 6px;\\r\\n    font-size: 30px;\\r\\n    font-weight: 900;\\r\\n}\\r\\n\\r\\n.addProject img {\\r\\n  height: 40px;\\r\\n  width: 40px;\\r\\n  line-height: 40px;\\r\\n  margin-right: 20px;\\r\\n  margin-top: 5px;\\r\\n}\\r\\n\\r\\n.show_section{\\r\\n    padding: 0.5rem  0.5rem;\\r\\n}\\r\\n\\r\\n.Task-Heading{\\r\\n    color:#ccc;\\r\\n    font-size: 2rem;\\r\\nfont-weight: bolder;\\r\\nposition: relative;\\r\\nleft: 40%;\\r\\npadding: 10px 0px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-basic/./src/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\nmodule.exports = function (cssWithMappingToString) {\r\n  var list = [];\r\n\r\n  // return the list of modules as css string\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = \"\";\r\n      var needLayer = typeof item[5] !== \"undefined\";\r\n      if (item[4]) {\r\n        content += \"@supports (\".concat(item[4], \") {\");\r\n      }\r\n      if (item[2]) {\r\n        content += \"@media \".concat(item[2], \" {\");\r\n      }\r\n      if (needLayer) {\r\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\r\n      }\r\n      content += cssWithMappingToString(item);\r\n      if (needLayer) {\r\n        content += \"}\";\r\n      }\r\n      if (item[2]) {\r\n        content += \"}\";\r\n      }\r\n      if (item[4]) {\r\n        content += \"}\";\r\n      }\r\n      return content;\r\n    }).join(\"\");\r\n  };\r\n\r\n  // import a list of modules into the list\r\n  list.i = function i(modules, media, dedupe, supports, layer) {\r\n    if (typeof modules === \"string\") {\r\n      modules = [[null, modules, undefined]];\r\n    }\r\n    var alreadyImportedModules = {};\r\n    if (dedupe) {\r\n      for (var k = 0; k < this.length; k++) {\r\n        var id = this[k][0];\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n    for (var _k = 0; _k < modules.length; _k++) {\r\n      var item = [].concat(modules[_k]);\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        continue;\r\n      }\r\n      if (typeof layer !== \"undefined\") {\r\n        if (typeof item[5] === \"undefined\") {\r\n          item[5] = layer;\r\n        } else {\r\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\r\n          item[5] = layer;\r\n        }\r\n      }\r\n      if (media) {\r\n        if (!item[2]) {\r\n          item[2] = media;\r\n        } else {\r\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\r\n          item[2] = media;\r\n        }\r\n      }\r\n      if (supports) {\r\n        if (!item[4]) {\r\n          item[4] = \"\".concat(supports);\r\n        } else {\r\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\r\n          item[4] = supports;\r\n        }\r\n      }\r\n      list.push(item);\r\n    }\r\n  };\r\n  return list;\r\n};\n\n//# sourceURL=webpack://webpack-basic/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\r\n\r\nmodule.exports = function (url, options) {\r\n  if (!options) {\r\n    options = {};\r\n  }\r\n  if (!url) {\r\n    return url;\r\n  }\r\n  url = String(url.__esModule ? url.default : url);\r\n\r\n  // If url is already wrapped in quotes, remove them\r\n  if (/^['\"].*['\"]$/.test(url)) {\r\n    url = url.slice(1, -1);\r\n  }\r\n  if (options.hash) {\r\n    url += options.hash;\r\n  }\r\n\r\n  // Should url be wrapped?\r\n  // See https://drafts.csswg.org/css-values-3/#urls\r\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\r\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\r\n  }\r\n  return url;\r\n};\n\n//# sourceURL=webpack://webpack-basic/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\r\n\r\nmodule.exports = function (i) {\r\n  return i[1];\r\n};\n\n//# sourceURL=webpack://webpack-basic/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-basic/./src/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar stylesInDOM = [];\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n  for (var i = 0; i < stylesInDOM.length; i++) {\r\n    if (stylesInDOM[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n  return result;\r\n}\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var indexByIdentifier = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3],\r\n      supports: item[4],\r\n      layer: item[5]\r\n    };\r\n    if (indexByIdentifier !== -1) {\r\n      stylesInDOM[indexByIdentifier].references++;\r\n      stylesInDOM[indexByIdentifier].updater(obj);\r\n    } else {\r\n      var updater = addElementStyle(obj, options);\r\n      options.byIndex = i;\r\n      stylesInDOM.splice(i, 0, {\r\n        identifier: identifier,\r\n        updater: updater,\r\n        references: 1\r\n      });\r\n    }\r\n    identifiers.push(identifier);\r\n  }\r\n  return identifiers;\r\n}\r\nfunction addElementStyle(obj, options) {\r\n  var api = options.domAPI(options);\r\n  api.update(obj);\r\n  var updater = function updater(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\r\n        return;\r\n      }\r\n      api.update(obj = newObj);\r\n    } else {\r\n      api.remove();\r\n    }\r\n  };\r\n  return updater;\r\n}\r\nmodule.exports = function (list, options) {\r\n  options = options || {};\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDOM[index].references--;\r\n    }\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n      var _index = getIndexByIdentifier(_identifier);\r\n      if (stylesInDOM[_index].references === 0) {\r\n        stylesInDOM[_index].updater();\r\n        stylesInDOM.splice(_index, 1);\r\n      }\r\n    }\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack://webpack-basic/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar memo = {};\r\n\r\n/* istanbul ignore next  */\r\nfunction getTarget(target) {\r\n  if (typeof memo[target] === \"undefined\") {\r\n    var styleTarget = document.querySelector(target);\r\n\r\n    // Special case to return head of iframe instead of iframe itself\r\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n      try {\r\n        // This will throw an exception if access to iframe is blocked\r\n        // due to cross-origin restrictions\r\n        styleTarget = styleTarget.contentDocument.head;\r\n      } catch (e) {\r\n        // istanbul ignore next\r\n        styleTarget = null;\r\n      }\r\n    }\r\n    memo[target] = styleTarget;\r\n  }\r\n  return memo[target];\r\n}\r\n\r\n/* istanbul ignore next  */\r\nfunction insertBySelector(insert, style) {\r\n  var target = getTarget(insert);\r\n  if (!target) {\r\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n  }\r\n  target.appendChild(style);\r\n}\r\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-basic/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction insertStyleElement(options) {\r\n  var element = document.createElement(\"style\");\r\n  options.setAttributes(element, options.attributes);\r\n  options.insert(element, options.options);\r\n  return element;\r\n}\r\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-basic/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction setAttributesWithoutAttributes(styleElement) {\r\n  var nonce =  true ? __webpack_require__.nc : 0;\r\n  if (nonce) {\r\n    styleElement.setAttribute(\"nonce\", nonce);\r\n  }\r\n}\r\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-basic/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction apply(styleElement, options, obj) {\r\n  var css = \"\";\r\n  if (obj.supports) {\r\n    css += \"@supports (\".concat(obj.supports, \") {\");\r\n  }\r\n  if (obj.media) {\r\n    css += \"@media \".concat(obj.media, \" {\");\r\n  }\r\n  var needLayer = typeof obj.layer !== \"undefined\";\r\n  if (needLayer) {\r\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\r\n  }\r\n  css += obj.css;\r\n  if (needLayer) {\r\n    css += \"}\";\r\n  }\r\n  if (obj.media) {\r\n    css += \"}\";\r\n  }\r\n  if (obj.supports) {\r\n    css += \"}\";\r\n  }\r\n  var sourceMap = obj.sourceMap;\r\n  if (sourceMap && typeof btoa !== \"undefined\") {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  }\r\n\r\n  // For old IE\r\n  /* istanbul ignore if  */\r\n  options.styleTagTransform(css, styleElement, options.options);\r\n}\r\nfunction removeStyleElement(styleElement) {\r\n  // istanbul ignore if\r\n  if (styleElement.parentNode === null) {\r\n    return false;\r\n  }\r\n  styleElement.parentNode.removeChild(styleElement);\r\n}\r\n\r\n/* istanbul ignore next  */\r\nfunction domAPI(options) {\r\n  if (typeof document === \"undefined\") {\r\n    return {\r\n      update: function update() {},\r\n      remove: function remove() {}\r\n    };\r\n  }\r\n  var styleElement = options.insertStyleElement(options);\r\n  return {\r\n    update: function update(obj) {\r\n      apply(styleElement, options, obj);\r\n    },\r\n    remove: function remove() {\r\n      removeStyleElement(styleElement);\r\n    }\r\n  };\r\n}\r\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-basic/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction styleTagTransform(css, styleElement) {\r\n  if (styleElement.styleSheet) {\r\n    styleElement.styleSheet.cssText = css;\r\n  } else {\r\n    while (styleElement.firstChild) {\r\n      styleElement.removeChild(styleElement.firstChild);\r\n    }\r\n    styleElement.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-basic/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/AddTask.js":
/*!************************!*\
  !*** ./src/AddTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: () => (/* binding */ addTask)\n/* harmony export */ });\n\r\nconst addTask = (tasks) => {\r\n    const taskNameInput = document.getElementById(\"taskNameInput\");\r\n    const dateInput = document.getElementById(\"dateInput\");\r\n    const descriptionInput = document.getElementById(\"descriptionInput\");\r\n    const taskList = document.getElementById(\"taskList\");\r\n  \r\n    if (taskNameInput.value !== \"\") {\r\n      const task = {\r\n        name: taskNameInput.value,\r\n        date: dateInput.value,\r\n        description: descriptionInput.value,\r\n      };\r\n      tasks.unshift(task);\r\n      const taskInputContainer = document.getElementsByClassName(\"taskInputContainer\")[0];\r\n      taskInputContainer.style.display = \"none\";\r\n      const addProjectButton = document.getElementsByClassName(\"addProject\")[0];\r\n      addProjectButton.style.display = \"flex\";\r\n\r\n      taskNameInput.value = \"\";\r\n      dateInput.value = \"\";\r\n      descriptionInput.value = \"\";\r\n    }\r\n  };\r\n\r\n   \n\n//# sourceURL=webpack://webpack-basic/./src/AddTask.js?");

/***/ }),

/***/ "./src/factory-function.js":
/*!*********************************!*\
  !*** ./src/factory-function.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject)\n/* harmony export */ });\n\r\n\r\n\r\nconst addProject =  (projectName,listContainer) =>{\r\n    let listItems = document.querySelectorAll(\"#list-container li\");\r\n    listItems.forEach(function(item) {\r\n    item.classList.remove(\"checked\");\r\n  });\r\n        let li =document.createElement(\"li\");\r\n        li.innerHTML =projectName;\r\n        li.className=\"checked\";\r\n        listContainer.insertBefore(li, listContainer.firstChild);\r\n        let span =document.createElement(\"span\");\r\n        span.innerHTML=\"\\u00d7\";\r\n        li.appendChild(span)\r\n    }\r\n\r\n \n\n//# sourceURL=webpack://webpack-basic/./src/factory-function.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _factory_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factory-function */ \"./src/factory-function.js\");\n/* harmony import */ var _input_outputTaskField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-outputTaskField */ \"./src/input-outputTaskField.js\");\n/* harmony import */ var _renderTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderTasks */ \"./src/renderTasks.js\");\n\r\n\r\n\r\n\r\n\r\nlet ID_COUNTER = 1;\r\nlet SELECTE_ID;\r\nconst inputBox = document.getElementById(\"input-box\");\r\nconst listContainer = document.getElementById(\"list-container\");\r\nconst addButton = document.getElementById(\"addButton\");\r\n\r\nconst TaskContainerArray= [];\r\n\r\n\r\n\r\n\r\naddButton.addEventListener(\"click\", () => {\r\n  if (inputBox.value === '') {\r\n  } else {\r\n    let Project = {\r\n      ID: ID_COUNTER,\r\n      projectName: inputBox.value,\r\n      tasks: [],\r\n    };\r\n    removeUIElement(); \r\n    TaskContainerArray.unshift(Project);\r\n    let TaskArray = Project.tasks;\r\n    (0,_input_outputTaskField__WEBPACK_IMPORTED_MODULE_2__.createTaskInput)(TaskArray,Project.projectName);\r\n    (0,_factory_function__WEBPACK_IMPORTED_MODULE_1__.addProject)(Project.projectName, listContainer);\r\n    saveProjectName();\r\n\r\n    SELECTE_ID=ID_COUNTER;\r\n    inputBox.value = '';\r\n    ID_COUNTER++;\r\n  }\r\n  saveProjectTasks(TaskContainerArray);\r\n  saveSelectedTask();\r\n});\r\n\r\nlistContainer.addEventListener(\"click\", function(e) {\r\n  const lis = Array.from(listContainer.querySelectorAll(\"li\" ));\r\n  const clickedElement = e.target;\r\n\r\n  if (clickedElement.tagName === \"LI\") {\r\n\r\n      let listItems = document.querySelectorAll(\"#list-container li\");\r\n      listItems.forEach(function(item) {\r\n      item.addEventListener(\"click\", function() {\r\n      listItems.forEach(function(item) {\r\n      item.classList.remove(\"checked\");\r\n    });\r\n    this.classList.add(\"checked\");\r\n  });\r\n});\r\n\r\n\r\n    removeUIElement();\r\n    const index = lis.indexOf(clickedElement);\r\n    saveProjectName();\r\n    // get tasks array form relative index\r\n    const getTasksArray = TaskContainerArray[index].tasks;\r\n    const projectName=TaskContainerArray[index].projectName;\r\n    (0,_input_outputTaskField__WEBPACK_IMPORTED_MODULE_2__.createTaskInput)(getTasksArray,projectName)\r\n    ;(0,_renderTasks__WEBPACK_IMPORTED_MODULE_3__.showTasks)(getTasksArray);\r\n    saveProjectTasks(TaskContainerArray);\r\n    SELECTE_ID=index;\r\n    saveSelectedTask();\r\n  }\r\n  else if (clickedElement.tagName === \"SPAN\") {\r\n    e.target.parentElement.remove();\r\n    saveProjectName();\r\n    const index = lis.indexOf(e.target.parentElement);\r\n    removeUIElement();\r\n    TaskContainerArray.splice(index, 1);\r\n    saveProjectTasks(TaskContainerArray);\r\n\r\n    const getTasksArray = TaskContainerArray[0].tasks;\r\nconst projectName=TaskContainerArray[0].projectName;\r\n(0,_input_outputTaskField__WEBPACK_IMPORTED_MODULE_2__.createTaskInput)(getTasksArray,projectName)\r\n;(0,_renderTasks__WEBPACK_IMPORTED_MODULE_3__.showTasks)(getTasksArray);\r\n  }\r\n}, false);\r\n\r\n// Function to remove UI element\r\nconst  removeUIElement = () => {\r\n  const asideElements = Array.from(document.querySelectorAll(\"aside\"));\r\n  if (asideElements.length > 0) {\r\n    asideElements.forEach((element) => {\r\n      element.remove();\r\n    });\r\n  }\r\n}\r\n\r\n// Save data\r\nconst saveProjectName=()=> {\r\n  localStorage.setItem(\"Project-Name\", listContainer.innerHTML);\r\n}\r\nconst showDataAfterStoreData=() => {\r\n  listContainer.innerHTML = localStorage.getItem(\"Project-Name\");\r\n}\r\n\r\n\r\nconst saveProjectTasks = (ProjectTasks) => {\r\n  localStorage.setItem(\"Project-Tasks\", JSON.stringify(ProjectTasks));\r\n};\r\n\r\n\r\nconst getProjectTasks = (TaskContainerArray) => {\r\n  const storedArray = JSON.parse(localStorage.getItem('Project-Tasks'));\r\n  \r\n  if (storedArray) {\r\n    TaskContainerArray.length = 0;\r\n    Array.prototype.push.apply(TaskContainerArray, storedArray);\r\n  }\r\n};\r\n\r\n\r\ngetProjectTasks(TaskContainerArray);\r\nshowDataAfterStoreData();\r\n\r\nconst saveSelectedTask =()=> {\r\nlocalStorage.setItem(\"selected-Id\",SELECTE_ID)\r\n}\r\n\r\nconst getSelectedTask=()=>{\r\n  SELECTE_ID = localStorage.getItem(\"selected-Id\");\r\n  const getTasksArray = TaskContainerArray[SELECTE_ID].tasks;\r\nconst projectName=TaskContainerArray[SELECTE_ID].projectName;\r\n(0,_input_outputTaskField__WEBPACK_IMPORTED_MODULE_2__.createTaskInput)(getTasksArray,projectName)\r\n;(0,_renderTasks__WEBPACK_IMPORTED_MODULE_3__.showTasks)(getTasksArray);\r\n}\r\n\r\ngetSelectedTask();\r\n\r\n\n\n//# sourceURL=webpack://webpack-basic/./src/index.js?");

/***/ }),

/***/ "./src/input-outputTaskField.js":
/*!**************************************!*\
  !*** ./src/input-outputTaskField.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTaskInput: () => (/* binding */ createTaskInput)\n/* harmony export */ });\n/* harmony import */ var _AddTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddTask */ \"./src/AddTask.js\");\n/* harmony import */ var _renderTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTasks */ \"./src/renderTasks.js\");\n\r\n\r\n\r\nconst createTaskInput = (tasks,projectName) => {\r\n  // Create HTML Code by using javascript for Add Project Code\r\nconst mainContainer = document.getElementsByClassName(\"container-1\")[0];\r\nconst aside = document.createElement(\"aside\");\r\nmainContainer.appendChild(aside);\r\n\r\nconst heading = document.createElement(\"h2\");\r\nheading.className = \"Task-Heading\";\r\nheading.textContent=projectName;\r\naside.appendChild(heading);\r\n\r\nconst AddProject = document.createElement(\"div\");\r\nAddProject.className = \"addProject\";\r\naside.appendChild(AddProject);\r\n\r\nconst AddProjectText = document.createElement(\"span\");\r\nAddProjectText.textContent = \"Add Your Task Here\";\r\nAddProject.appendChild(AddProjectText);\r\n\r\nconst TaskInputContainer = document.createElement(\"div\");\r\nTaskInputContainer.id = \"taskInputContainer\";\r\nTaskInputContainer.className = \"taskInputContainer\";\r\naside.appendChild(TaskInputContainer);\r\n\r\nconst TaskList = document.createElement(\"div\");\r\nTaskList.className = \"taskList\";\r\naside.appendChild(TaskList);\r\nconst UlTaskList = document.createElement(\"ul\");\r\nUlTaskList.id = \"taskList\";\r\nTaskList.appendChild(UlTaskList);\r\n\r\n\r\n// Add Project Screen 70% when you click on Add Your Daily Task perform this function\r\nconst addProjectButton = document.getElementsByClassName(\"addProject\")[0];\r\naddProjectButton.addEventListener(\"click\", showInputContainer);\r\n\r\n\r\n\r\n\r\n\r\n\r\n    const taskInputContainer = document.getElementById(\"taskInputContainer\");\r\n    taskInputContainer.innerHTML = \"\";\r\n  \r\n    const taskNameheading = document.createElement(\"h3\");\r\n    taskNameheading.textContent=\"Enter Your Task Detail\";\r\n    const taskNameInput = document.createElement(\"input\");\r\n    taskNameInput.type = \"text\";\r\n    taskNameInput.id = \"taskNameInput\";\r\n    taskNameInput.placeholder = \"Enter task name...\";\r\n  \r\n    const dateInput = document.createElement(\"input\");\r\n    dateInput.type = \"date\";\r\n    dateInput.id = \"dateInput\";\r\n  \r\n    const descriptionInput = document.createElement(\"textarea\");\r\n    descriptionInput.id = \"descriptionInput\";\r\n    descriptionInput.placeholder = \"Enter task description...\";\r\n  \r\n    // Add Task Button\r\n    const addButton = document.createElement(\"button\");\r\n    addButton.textContent = \"Add Task\";\r\n    \r\n    //   add TAsk function import form AddTask.js  \r\n    addButton.addEventListener(\"click\", () => {\r\n      (0,_AddTask__WEBPACK_IMPORTED_MODULE_0__.addTask)(tasks);\r\n      (0,_renderTasks__WEBPACK_IMPORTED_MODULE_1__.showTasks)(tasks);     // after addition show all the task\r\n    });\r\n  \r\n    // Cancel Task Button\r\n    const cancelButton = document.createElement(\"button\");\r\n    cancelButton.textContent = \"Cancel\";\r\n    cancelButton.addEventListener(\"click\", cancelTask);\r\n\r\n\r\n    const buttonContainer = document.createElement(\"div\");\r\n    taskInputContainer.appendChild(taskNameheading);\r\n    taskInputContainer.appendChild(taskNameInput);\r\n    taskInputContainer.appendChild(dateInput);\r\n    taskInputContainer.appendChild(descriptionInput);\r\n    buttonContainer.appendChild(addButton);\r\n    buttonContainer.appendChild(cancelButton);\r\n    taskInputContainer.appendChild(buttonContainer);\r\n    taskNameInput.focus();\r\n    \r\n    // by default taskInputContainer Display none\r\n    taskInputContainer.style.display = \"none\";\r\n  };\r\n\r\n\r\n\r\n\r\n\r\n  //  cancelTask() never want to add current TAsk\r\nfunction cancelTask(){\r\n    const taskInputContainer = document.getElementById(\"taskInputContainer\");\r\n    const addProjectButton = document.getElementsByClassName(\"addProject\")[0];\r\n    addProjectButton.style.display = \"flex\";\r\n    taskInputContainer.style.display = \"none\";\r\n  } \r\n\r\n\r\n\r\n// Function Show Input Container to Add TAsk\r\nfunction showInputContainer() {\r\n  const taskInputContainer = document.getElementsByClassName(\"taskInputContainer\")[0];\r\n  const addProjectButton = document.getElementsByClassName(\"addProject\")[0];\r\n  addProjectButton.style.display = \"none\";\r\n  taskInputContainer.style.display = \"flex\";\r\n}\r\n\r\n\r\n\r\n  \n\n//# sourceURL=webpack://webpack-basic/./src/input-outputTaskField.js?");

/***/ }),

/***/ "./src/renderTasks.js":
/*!****************************!*\
  !*** ./src/renderTasks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showTasks: () => (/* binding */ showTasks)\n/* harmony export */ });\n\r\n\r\n// Function to render tasks  show tasks after edit, add && delete\r\nconst showTasks = (tasks) => {\r\n  const taskList = document.getElementById(\"taskList\");\r\n    taskList.innerHTML = \"\";\r\n  \r\n    tasks.forEach((task, index) => {\r\n      const listItem = document.createElement(\"li\");\r\n      const listItemContainer = document.createElement(\"div\");\r\n      const buttonContainer = document.createElement(\"div\");\r\n  \r\n      listItemContainer.className = \"show-task-list-container\";\r\n      buttonContainer.className = \"button-container\";\r\n  \r\n      const taskName = document.createElement(\"h2\");\r\n      taskName.className = \"show_section\";\r\n      taskName.textContent = task.name;\r\n  \r\n      const taskDate = document.createElement(\"h3\");\r\n      taskDate.textContent = task.date;\r\n      taskDate.className = \"show_section\";\r\n  \r\n      const taskDescription = document.createElement(\"p\");\r\n      taskDescription.textContent = task.description;\r\n      taskDate.className = \"show_section\";\r\n  \r\n      const editButton = document.createElement(\"button\");\r\n      editButton.textContent = \"Edit Data\";\r\n      editButton.addEventListener(\"click\", () => {\r\n        editTask(index,tasks);\r\n      });\r\n  \r\n      const removeButton = document.createElement(\"button\");\r\n      removeButton.textContent = \"Remove\";\r\n      removeButton.addEventListener(\"click\", () => {\r\n        removeTask(index,tasks);\r\n      });\r\n  \r\n      listItemContainer.appendChild(taskName);\r\n      listItemContainer.appendChild(taskDate);\r\n      listItemContainer.appendChild(taskDescription);\r\n      buttonContainer.appendChild(editButton);\r\n      buttonContainer.appendChild(removeButton);\r\n      listItemContainer.appendChild(buttonContainer);\r\n      listItem.appendChild(listItemContainer);\r\n      taskList.appendChild(listItem);\r\n    });\r\n\r\n\r\n  };\r\n\r\n\r\n\r\n  \r\n  // Function to remove a task\r\nconst removeTask = (index,tasks) => {\r\n    tasks.splice(index, 1);\r\n    showTasks(tasks);\r\n  };\r\n\r\n  // Function to edit a task\r\nconst editTask = (index,tasks) => {\r\n    const taskList = document.getElementById(\"taskList\");\r\n    const listItem = taskList.childNodes[index];\r\n    const task = tasks[index];\r\n    const taskName = task.name;\r\n    const taskDate = task.date;\r\n    const taskDescription = task.description;\r\n    const listItemContainer = document.createElement(\"div\");\r\n    listItemContainer.className = \"show-task-list-container\";\r\n    const taskNameInput = document.createElement(\"input\");\r\n    taskNameInput.type = \"text\";\r\n    taskNameInput.value = taskName;\r\n  \r\n    const dateInput = document.createElement(\"input\");\r\n    dateInput.type = \"date\";\r\n    dateInput.value = taskDate;\r\n  \r\n    const descriptionInput = document.createElement(\"textarea\");\r\n    descriptionInput.value = taskDescription;\r\n  \r\n    const saveButton = document.createElement(\"button\");\r\n    saveButton.textContent = \"Save\";\r\n    saveButton.addEventListener(\"click\", () => {\r\n      tasks[index] = {\r\n        name: taskNameInput.value,\r\n        date: dateInput.value,\r\n        description: descriptionInput.value,\r\n      };\r\n      showTasks(tasks);\r\n    });\r\n  \r\n    listItem.innerHTML = \"\";\r\n    listItemContainer.appendChild(taskNameInput);\r\n    listItemContainer.appendChild(dateInput);\r\n    listItemContainer.appendChild(descriptionInput);\r\n    listItemContainer.appendChild(saveButton);\r\n    listItem.appendChild(listItemContainer);\r\n    taskNameInput.focus();\r\n  };\r\n\r\n\r\n\r\n   \n\n//# sourceURL=webpack://webpack-basic/./src/renderTasks.js?");

/***/ }),

/***/ "./src/images/checked.png":
/*!********************************!*\
  !*** ./src/images/checked.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"882363f82ce0ebec9da9.png\";\n\n//# sourceURL=webpack://webpack-basic/./src/images/checked.png?");

/***/ }),

/***/ "./src/images/list-circle.svg":
/*!************************************!*\
  !*** ./src/images/list-circle.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3492eb6d144c3334f488.svg\";\n\n//# sourceURL=webpack://webpack-basic/./src/images/list-circle.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;