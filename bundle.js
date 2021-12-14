/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,800;1,100;1,200;1,300;1,400;1,600;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Google font import */\n\n/* Reset Styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Variables */\n:root {\n  --primary-color-1: #fee3ec;\n  --primary-color-2: #f55b8c;\n  --accent-color: #f882a7;\n  --neutral-color-1: #550f24;\n  --neutral-color-2: #1d060d;\n  --white: #fff;\n  --font: 'Poppins', sans-serif;\n}\n\n/* Global styles */\nhtml {\n  overflow-x: hidden;\n}\n\nbody {\n  font-size: 16px;\n  font-family: var(--font);\n  background: var(--primary-color-1);\n  position: relative;\n  min-height: 97vh;\n}\n\nul > li {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: var(--accent-color);\n  cursor: pointer;\n}\n\n/* Main General styles */\nmain {\n  padding: 50px 10% 10px;\n}\n\nh1 {\n  font-size: 2.5rem;\n}\n\nh1,\nh2 {\n  color: var(--neutral-color-1);\n}\n\n/* Results section */\n.heading {\n  display: flex;\n  justify-content: space-between;\n}\n\n.main-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 50px;\n  margin: 5% auto;\n}\n\n.results {\n  width: 80%;\n}\n\n.refresh-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.refresh > button {\n  padding: 10px 20px;\n  background: var(--accent-color);\n  border: none;\n  color: #fff;\n  font-size: 1rem;\n  font-family: var(--font);\n  border-radius: 2px;\n}\n\n.refresh > button:hover {\n  cursor: pointer;\n  background: var(--primary-color-2);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\n.refresh > button:focus {\n  outline: none;\n}\n\n.refresh > button .fas {\n  font-size: 14px;\n  margin-left: 5px;\n}\n\n.scores-container {\n  border: solid 3px var(--primary-color-2);\n  padding: 5px;\n  border-radius: 4px;\n}\n\n.scores-container > ul > li {\n  background: white;\n  padding: 10px;\n  margin: 5px 0;\n  border-radius: 2px;\n  font-weight: 500;\n  word-wrap: break-word;\n}\n\n/* Add Section */\n.add {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.add > .score-heading {\n  margin-bottom: 20px;\n}\n\n.add > .add-form {\n  width: 100%;\n}\n\n.add > .add-form > form {\n  display: flex;\n  flex-direction: column;\n}\n\n.add > .add-form > form input {\n  width: 100%;\n  padding: 12px;\n  margin-bottom: 20px;\n  border: none;\n  border-left: solid 7px gray;\n  font-family: var(--font);\n  border-radius: 2px;\n}\n\n.add > .add-form > form input::-webkit-outer-spin-button,\n.add > .add-form > form input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.add > .add-form > form input:focus {\n  outline: none;\n  border-left: solid 7px var(--primary-color-2);\n}\n\n.add > .add-form > form input[type=number] {\n  -moz-appearance: textfield;\n}\n\n.add > .add-form > form > button {\n  padding: 12px;\n  width: 30%;\n  align-self: flex-end;\n  background: var(--accent-color);\n  border: none;\n  color: #fff;\n  font-family: var(--font);\n  font-size: 1rem;\n  border-radius: 2px;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n}\n\n.add > .add-form > form > button:hover {\n  cursor: pointer;\n  background: var(--primary-color-2);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\n.add > .add-form > form > button:focus {\n  outline: none;\n  background: var(--neutral-color-1);\n}\n\n/* Modal */\n#modal {\n  position: absolute;\n  top: -100vh;\n  left: 25%;\n  right: 25%;\n  width: 50%;\n  padding: 15px 0;\n  background: #fff;\n  text-align: center;\n  transition: top ease-out 1s 0.01s;\n}\n\n/* spinner */\n.loading-spinner {\n  animation: rotate-forever linear infinite 0.8s;\n  height: 12px;\n  width: 12px;\n  border: 2px solid #fff;\n  border-right-color: transparent;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n@keyframes rotate-forever {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* Error message */\n.error {\n  color: red;\n  font-size: 12px;\n  margin-bottom: 10px;\n}\n\n/* Footer */\nfooter {\n  position: absolute;\n  bottom: 0;\n  height: 10px;\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n  color: var(--neutral-color-1);\n}\n\n/* Small Screens */\n@media (max-width: 768px) {\n  .main-container {\n    grid-template-columns: 1fr;\n    gap: 50px 0;\n    margin: 5% auto;\n  }\n\n  .results {\n    width: 100%;\n  }\n\n  footer {\n    font-size: 11px;\n  }\n}\n\n.dark {\n  background: var(--neutral-color-2) !important;\n  color: var(--primary-color-1) !important;\n}\n\n.white {\n  background: var(--neutral-color-1) !important;\n}\n\n.input-dark {\n  background: var(--primary-color-1) !important;\n}\n\n.input-dark:focus {\n  border-left: solid 7px var(--neutral-color-1) !important;\n}\n\n.dark-control {\n  font-size: 25px;\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Google font import */\n@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,800;1,100;1,200;1,300;1,400;1,600;1,700&display=swap');\n\n/* Reset Styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Variables */\n:root {\n  --primary-color-1: #fee3ec;\n  --primary-color-2: #f55b8c;\n  --accent-color: #f882a7;\n  --neutral-color-1: #550f24;\n  --neutral-color-2: #1d060d;\n  --white: #fff;\n  --font: 'Poppins', sans-serif;\n}\n\n/* Global styles */\nhtml {\n  overflow-x: hidden;\n}\n\nbody {\n  font-size: 16px;\n  font-family: var(--font);\n  background: var(--primary-color-1);\n  position: relative;\n  min-height: 97vh;\n}\n\nul > li {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: var(--accent-color);\n  cursor: pointer;\n}\n\n/* Main General styles */\nmain {\n  padding: 50px 10% 10px;\n}\n\nh1 {\n  font-size: 2.5rem;\n}\n\nh1,\nh2 {\n  color: var(--neutral-color-1);\n}\n\n/* Results section */\n.heading {\n  display: flex;\n  justify-content: space-between;\n}\n\n.main-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 50px;\n  margin: 5% auto;\n}\n\n.results {\n  width: 80%;\n}\n\n.refresh-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.refresh > button {\n  padding: 10px 20px;\n  background: var(--accent-color);\n  border: none;\n  color: #fff;\n  font-size: 1rem;\n  font-family: var(--font);\n  border-radius: 2px;\n}\n\n.refresh > button:hover {\n  cursor: pointer;\n  background: var(--primary-color-2);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\n.refresh > button:focus {\n  outline: none;\n}\n\n.refresh > button .fas {\n  font-size: 14px;\n  margin-left: 5px;\n}\n\n.scores-container {\n  border: solid 3px var(--primary-color-2);\n  padding: 5px;\n  border-radius: 4px;\n}\n\n.scores-container > ul > li {\n  background: white;\n  padding: 10px;\n  margin: 5px 0;\n  border-radius: 2px;\n  font-weight: 500;\n  word-wrap: break-word;\n}\n\n/* Add Section */\n.add {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.add > .score-heading {\n  margin-bottom: 20px;\n}\n\n.add > .add-form {\n  width: 100%;\n}\n\n.add > .add-form > form {\n  display: flex;\n  flex-direction: column;\n}\n\n.add > .add-form > form input {\n  width: 100%;\n  padding: 12px;\n  margin-bottom: 20px;\n  border: none;\n  border-left: solid 7px gray;\n  font-family: var(--font);\n  border-radius: 2px;\n}\n\n.add > .add-form > form input::-webkit-outer-spin-button,\n.add > .add-form > form input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.add > .add-form > form input:focus {\n  outline: none;\n  border-left: solid 7px var(--primary-color-2);\n}\n\n.add > .add-form > form input[type=number] {\n  -moz-appearance: textfield;\n}\n\n.add > .add-form > form > button {\n  padding: 12px;\n  width: 30%;\n  align-self: flex-end;\n  background: var(--accent-color);\n  border: none;\n  color: #fff;\n  font-family: var(--font);\n  font-size: 1rem;\n  border-radius: 2px;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n}\n\n.add > .add-form > form > button:hover {\n  cursor: pointer;\n  background: var(--primary-color-2);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\n.add > .add-form > form > button:focus {\n  outline: none;\n  background: var(--neutral-color-1);\n}\n\n/* Modal */\n#modal {\n  position: absolute;\n  top: -100vh;\n  left: 25%;\n  right: 25%;\n  width: 50%;\n  padding: 15px 0;\n  background: #fff;\n  text-align: center;\n  transition: top ease-out 1s 0.01s;\n}\n\n/* spinner */\n.loading-spinner {\n  animation: rotate-forever linear infinite 0.8s;\n  height: 12px;\n  width: 12px;\n  border: 2px solid #fff;\n  border-right-color: transparent;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n@keyframes rotate-forever {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* Error message */\n.error {\n  color: red;\n  font-size: 12px;\n  margin-bottom: 10px;\n}\n\n/* Footer */\nfooter {\n  position: absolute;\n  bottom: 0;\n  height: 10px;\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n  color: var(--neutral-color-1);\n}\n\n/* Small Screens */\n@media (max-width: 768px) {\n  .main-container {\n    grid-template-columns: 1fr;\n    gap: 50px 0;\n    margin: 5% auto;\n  }\n\n  .results {\n    width: 100%;\n  }\n\n  footer {\n    font-size: 11px;\n  }\n}\n\n.dark {\n  background: var(--neutral-color-2) !important;\n  color: var(--primary-color-1) !important;\n}\n\n.white {\n  background: var(--neutral-color-1) !important;\n}\n\n.input-dark {\n  background: var(--primary-color-1) !important;\n}\n\n.input-dark:focus {\n  border-left: solid 7px var(--neutral-color-1) !important;\n}\n\n.dark-control {\n  font-size: 25px;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fetchWrapper.js":
/*!*****************************!*\
  !*** ./src/fetchWrapper.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FetchWrapper)
/* harmony export */ });
/**
 * @class FetchWrapper - class to handle fetch methods
 */
class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  /**
   * @function get - implements the fetch get request
   * @param {string} endpoint - the endpoint to be attached to the baseURL to form complete url
   * @returns {object} - the Promise response from the server
   */
  async get(endpoint) {
    const response = await fetch(this.baseURL + endpoint);
    return response.json();
  }

  /**
   * @function post - implements the fetch post request
   * @param {string} endpoint - the endpoint to be attached to the baseURL to form complete url
   * @param {object} data - the data object to be sent to the server
   * @returns {object} - the Promise response from the server
   */
  async post(endpoint, data) {
    const response = await fetch(this.baseURL + endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Helper)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _fetchWrapper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchWrapper.js */ "./src/fetchWrapper.js");
/* eslint-disable class-methods-use-this */



const API = new _fetchWrapper_js__WEBPACK_IMPORTED_MODULE_1__["default"]('https://us-central1-js-capstone-backend.cloudfunctions.net/api/');
const spinner = document.querySelector('.spinner');
const submit = document.querySelector('.submit');

/**
 * @class Helper - the helper class
 */
class Helper {
/**
 * @function createNewGame - create new game on load
 */
  static async createNewGame() {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLocal()) {
      try {
        const gameID = await _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].generateID();
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].setLocal('ID', gameID);
      } catch (err) {
        throw new Error(err);
      }
    }
  }

  /**
   * @function postHandler - handles the form submit event
   * @param {Event Object} e - the event object
   */
  async postHandler(e) {
    const user = document.querySelector('#name').value.trim();
    const score = Number(document.querySelector('#score').value.trim());
    try {
      e.preventDefault();
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].inputChecker();
      const data = {
        user,
        score,
      };
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].startLoader(submit, spinner);
      const { result } = await API.post(`games/${_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLocal()}/scores`, data);
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].showModal(result);
    } catch (err) {
      throw new Error(err);
    } finally {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].stopLoader(submit, spinner, 'Submit');
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clearFields();
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].inputFocus();
    }
  }

  /**
   * @function getHandler - handles the refresh button click event
   * @param {Event Object} e - the event object
   */
  async getHandler() {
    const refresh = document.querySelector('#refresh');
    const spin = document.querySelector('.spin');
    try {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].startLoader(refresh, spin);
      await Helper.createNewGame();
      const { result } = await API.get(`games/${_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLocal()}/scores/`);
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].checkScores(result);
    } catch (err) {
      throw new Error(err);
    } finally {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].stopLoader(refresh, spin, 'Refresh <i class="fas fa-sync-alt">');
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].inputFocus();
    }
  }
}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Utils)
/* harmony export */ });
/* harmony import */ var _fetchWrapper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchWrapper.js */ "./src/fetchWrapper.js");


const API = new _fetchWrapper_js__WEBPACK_IMPORTED_MODULE_0__["default"]('https://us-central1-js-capstone-backend.cloudfunctions.net/api/');
const user = document.querySelector('#name');
const score = document.querySelector('#score');

/**
 * @class Utils - the utility class to hold all utiltity functionality
 */
class Utils {
/**
 * @function startLoader - handles the start of the spinner loading
 * @param {HTMLElement} elem1 - the first HTMLElement
 * @param {HTMLElement} elem2 - the second HTMLElement
 */
  static startLoader(elem1, elem2) {
    elem2.classList.add('loading-spinner');
    elem1.innerHTML = 'Loading';
  }

  /**
   * @function stopLoader - handles the stop of the spinner loading
   * @param {HTMLElement} elem1 - the first HTMLElement
   * @param {HTMLElement} elem2 - the second HTMLElement
   * @param {String} value - the string value to insert into the DOM
   */
  static stopLoader(elem1, elem2, value) {
    elem2.classList.remove('loading-spinner');
    elem1.innerHTML = value;
  }

  /**
   * @function render - handles the rendering of the server response on the DOM
   * @param {Array} data - the array response from the server
   */
  static render(data) {
    document.querySelector('.list').innerHTML = data.sort((a, b) => b.score - a.score)
      .map((result) => `<li>${result.user} : ${result.score}</li>`)
      .join('');
  }

  /**
   * @function getLocal - handles getting the ID from local storage
   * @returns {Array} - the ID string
   */
  static getLocal() {
    return JSON.parse(localStorage.getItem('ID'));
  }

  /**
   * @function setLocal - handles setting the ID to the local storage
   * @param {String} id - the key to set in the local storage
   * @param {String} data - the data value to set in the local storage
   */
  static setLocal(id, data) {
    localStorage.setItem(id, JSON.stringify(data));
  }

  /**
   * @function generateID - handles creating a new game ID
   * @returns {String} - the new game ID
   */
  static async generateID() {
    const { result } = await API.post('games/', { name: 'My cool new game' });
    return result.substr(14, 20);
  }

  /**
   * @function clearFields - handles clearing the input after submit
   */
  static clearFields() {
    user.value = '';
    score.value = '';
  }

  /**
   * @function showModal - shows the modal
   * @param {String} result - the result from the server
   * @returns - stops operations if inputs are empty
   */
  static showModal(result) {
    Utils.inputChecker();
    const elem = document.querySelector('#modal');
    elem.innerHTML = result;
    elem.style.top = '5px';
    setTimeout(() => {
      elem.style.top = '-100vh';
    }, 3500);
  }

  /**
   * @function inputChecker - handles stopping operations if inputs are empty
   * @returns
   */
  static inputChecker() {
    if (user.value === '' || score.value === '') {
      Utils.displayError('The user and score inputs can not be empty');
    } else {
      Utils.displayError('');
    }
  }

  /**
   * @function inputFocus - handles the input focus on load
   */
  static inputFocus() {
    user.focus();
  }

  /**
   * @function checkScores - checks the length of the array retrieved from the server
   * @param {Array} result - the result array from the server
   */
  static checkScores(result) {
    if (result.length === 0) {
      document.querySelector('.list').innerHTML = '<li>No Leaderboard scores added yet</li>';
    } else {
      Utils.render(result);
    }
  }

  /**
   * @function displayError - handle the display of error
   * @param {string} value - the error string
   */
  static displayError(value) {
    document.querySelector('.error').innerHTML = `${value}`;
  }
}

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ "./src/helpers.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");




const helper = new _helpers_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

window.addEventListener('DOMContentLoaded', async () => {
  await _helpers_js__WEBPACK_IMPORTED_MODULE_1__["default"].createNewGame();
  await helper.getHandler();
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].inputFocus();
  document.querySelector('.add-form form').addEventListener('submit', helper.postHandler);
  document.querySelector('.refresh-btn').addEventListener('click', helper.getHandler);

  // Dark Mode controller
  document.querySelector('.dark-control').addEventListener('click', () => {
    document.querySelectorAll('.scores-container > ul > li, button').forEach((elem) => elem.classList.toggle('white'));
    document.querySelectorAll('h1, h2, footer p, body').forEach((elem) => elem.classList.toggle('dark'));
    document.querySelectorAll('input').forEach((elem) => elem.classList.toggle('input-dark'));
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxN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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLG9EQUFvRCxNQUFNO0FBQzFEO0FBQ0E7Ozs7OztVQ2hJQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDYTtBQUNIOztBQUUvQixtQkFBbUIsbURBQU07O0FBRXpCO0FBQ0EsUUFBUSxpRUFBb0I7QUFDNUI7QUFDQSxFQUFFLDREQUFnQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvZmV0Y2hXcmFwcGVyLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsODAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNjAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEdvb2dsZSBmb250IGltcG9ydCAqL1xcblxcbi8qIFJlc2V0IFN0eWxlcyAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFZhcmlhYmxlcyAqL1xcbjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvci0xOiAjZmVlM2VjO1xcbiAgLS1wcmltYXJ5LWNvbG9yLTI6ICNmNTViOGM7XFxuICAtLWFjY2VudC1jb2xvcjogI2Y4ODJhNztcXG4gIC0tbmV1dHJhbC1jb2xvci0xOiAjNTUwZjI0O1xcbiAgLS1uZXV0cmFsLWNvbG9yLTI6ICMxZDA2MGQ7XFxuICAtLXdoaXRlOiAjZmZmO1xcbiAgLS1mb250OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIEdsb2JhbCBzdHlsZXMgKi9cXG5odG1sIHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLTEpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogOTd2aDtcXG59XFxuXFxudWwgPiBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBNYWluIEdlbmVyYWwgc3R5bGVzICovXFxubWFpbiB7XFxuICBwYWRkaW5nOiA1MHB4IDEwJSAxMHB4O1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuaDEsXFxuaDIge1xcbiAgY29sb3I6IHZhcigtLW5ldXRyYWwtY29sb3ItMSk7XFxufVxcblxcbi8qIFJlc3VsdHMgc2VjdGlvbiAqL1xcbi5oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ2FwOiAwIDUwcHg7XFxuICBtYXJnaW46IDUlIGF1dG87XFxufVxcblxcbi5yZXN1bHRzIHtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi5yZWZyZXNoLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5yZWZyZXNoID4gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxuLnJlZnJlc2ggPiBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvci0yKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMCAxM3B4IDI3cHggLTVweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDAgOHB4IDE2cHggLThweDtcXG59XFxuXFxuLnJlZnJlc2ggPiBidXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnJlZnJlc2ggPiBidXR0b24gLmZhcyB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4uc2NvcmVzLWNvbnRhaW5lciB7XFxuICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1wcmltYXJ5LWNvbG9yLTIpO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uc2NvcmVzLWNvbnRhaW5lciA+IHVsID4gbGkge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiA1cHggMDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi8qIEFkZCBTZWN0aW9uICovXFxuLmFkZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGQgPiAuc2NvcmUtaGVhZGluZyB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uYWRkID4gLmFkZC1mb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWRkID4gLmFkZC1mb3JtID4gZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFkZCA+IC5hZGQtZm9ybSA+IGZvcm0gaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCA3cHggZ3JheTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxuLmFkZCA+IC5hZGQtZm9ybSA+IGZvcm0gaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXFxuLmFkZCA+IC5hZGQtZm9ybSA+IGZvcm0gaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uYWRkID4gLmFkZC1mb3JtID4gZm9ybSBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDdweCB2YXIoLS1wcmltYXJ5LWNvbG9yLTIpO1xcbn1cXG5cXG4uYWRkID4gLmFkZC1mb3JtID4gZm9ybSBpbnB1dFt0eXBlPW51bWJlcl0ge1xcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxufVxcblxcbi5hZGQgPiAuYWRkLWZvcm0gPiBmb3JtID4gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICB3aWR0aDogMzAlO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDAgMjVweCA1MHB4IC0xMnB4O1xcbn1cXG5cXG4uYWRkID4gLmFkZC1mb3JtID4gZm9ybSA+IGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLTIpO1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwIDEzcHggMjdweCAtNXB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMCA4cHggMTZweCAtOHB4O1xcbn1cXG5cXG4uYWRkID4gLmFkZC1mb3JtID4gZm9ybSA+IGJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbmV1dHJhbC1jb2xvci0xKTtcXG59XFxuXFxuLyogTW9kYWwgKi9cXG4jbW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMTAwdmg7XFxuICBsZWZ0OiAyNSU7XFxuICByaWdodDogMjUlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmc6IDE1cHggMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiB0b3AgZWFzZS1vdXQgMXMgMC4wMXM7XFxufVxcblxcbi8qIHNwaW5uZXIgKi9cXG4ubG9hZGluZy1zcGlubmVyIHtcXG4gIGFuaW1hdGlvbjogcm90YXRlLWZvcmV2ZXIgbGluZWFyIGluZmluaXRlIDAuOHM7XFxuICBoZWlnaHQ6IDEycHg7XFxuICB3aWR0aDogMTJweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZS1mb3JldmVyIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuLyogRXJyb3IgbWVzc2FnZSAqL1xcbi5lcnJvciB7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGhlaWdodDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6IHZhcigtLW5ldXRyYWwtY29sb3ItMSk7XFxufVxcblxcbi8qIFNtYWxsIFNjcmVlbnMgKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5tYWluLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBnYXA6IDUwcHggMDtcXG4gICAgbWFyZ2luOiA1JSBhdXRvO1xcbiAgfVxcblxcbiAgLnJlc3VsdHMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gIH1cXG59XFxuXFxuLmRhcmsge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbmV1dHJhbC1jb2xvci0yKSAhaW1wb3J0YW50O1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItMSkgIWltcG9ydGFudDtcXG59XFxuXFxuLndoaXRlIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW5ldXRyYWwtY29sb3ItMSkgIWltcG9ydGFudDtcXG59XFxuXFxuLmlucHV0LWRhcmsge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvci0xKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaW5wdXQtZGFyazpmb2N1cyB7XFxuICBib3JkZXItbGVmdDogc29saWQgN3B4IHZhcigtLW5ldXRyYWwtY29sb3ItMSkgIWltcG9ydGFudDtcXG59XFxuXFxuLmRhcmstY29udHJvbCB7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsdUJBQXVCOztBQUd2QixpQkFBaUI7QUFDakI7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdC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OztBQUVBO0VBQ0UsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0Usd0RBQXdEO0FBQzFEOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR29vZ2xlIGZvbnQgaW1wb3J0ICovXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw4MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw2MDA7MSw3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuLyogUmVzZXQgU3R5bGVzICovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogVmFyaWFibGVzICovXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWNvbG9yLTE6ICNmZWUzZWM7XFxuICAtLXByaW1hcnktY29sb3ItMjogI2Y1NWI4YztcXG4gIC0tYWNjZW50LWNvbG9yOiAjZjg4MmE3O1xcbiAgLS1uZXV0cmFsLWNvbG9yLTE6ICM1NTBmMjQ7XFxuICAtLW5ldXRyYWwtY29sb3ItMjogIzFkMDYwZDtcXG4gIC0td2hpdGU6ICNmZmY7XFxuICAtLWZvbnQ6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogR2xvYmFsIHN0eWxlcyAqL1xcbmh0bWwge1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3ItMSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4taGVpZ2h0OiA5N3ZoO1xcbn1cXG5cXG51bCA+IGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIE1haW4gR2VuZXJhbCBzdHlsZXMgKi9cXG5tYWluIHtcXG4gIHBhZGRpbmc6IDUwcHggMTAlIDEwcHg7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbC1jb2xvci0xKTtcXG59XFxuXFxuLyogUmVzdWx0cyBzZWN0aW9uICovXFxuLmhlYWRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6IDAgNTBweDtcXG4gIG1hcmdpbjogNSUgYXV0bztcXG59XFxuXFxuLnJlc3VsdHMge1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLnJlZnJlc2gtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnJlZnJlc2ggPiBidXR0b24ge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG4ucmVmcmVzaCA+IGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLTIpO1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwIDEzcHggMjdweCAtNXB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMCA4cHggMTZweCAtOHB4O1xcbn1cXG5cXG4ucmVmcmVzaCA+IGJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucmVmcmVzaCA+IGJ1dHRvbiAuZmFzIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5zY29yZXMtY29udGFpbmVyIHtcXG4gIGJvcmRlcjogc29saWQgM3B4IHZhcigtLXByaW1hcnktY29sb3ItMik7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5zY29yZXMtY29udGFpbmVyID4gdWwgPiBsaSB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDVweCAwO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLyogQWRkIFNlY3Rpb24gKi9cXG4uYWRkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZCA+IC5zY29yZS1oZWFkaW5nIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5hZGQgPiAuYWRkLWZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hZGQgPiAuYWRkLWZvcm0gPiBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWRkID4gLmFkZC1mb3JtID4gZm9ybSBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDdweCBncmF5O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG4uYWRkID4gLmFkZC1mb3JtID4gZm9ybSBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcXG4uYWRkID4gLmFkZC1mb3JtID4gZm9ybSBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5hZGQgPiAuYWRkLWZvcm0gPiBmb3JtIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItbGVmdDogc29saWQgN3B4IHZhcigtLXByaW1hcnktY29sb3ItMik7XFxufVxcblxcbi5hZGQgPiAuYWRkLWZvcm0gPiBmb3JtIGlucHV0W3R5cGU9bnVtYmVyXSB7XFxuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG59XFxuXFxuLmFkZCA+IC5hZGQtZm9ybSA+IGZvcm0gPiBidXR0b24ge1xcbiAgcGFkZGluZzogMTJweDtcXG4gIHdpZHRoOiAzMCU7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCAyNXB4IDUwcHggLTEycHg7XFxufVxcblxcbi5hZGQgPiAuYWRkLWZvcm0gPiBmb3JtID4gYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3ItMik7XFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDAgMTNweCAyN3B4IC01cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDhweCAxNnB4IC04cHg7XFxufVxcblxcbi5hZGQgPiAuYWRkLWZvcm0gPiBmb3JtID4gYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTEpO1xcbn1cXG5cXG4vKiBNb2RhbCAqL1xcbiNtb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xMDB2aDtcXG4gIGxlZnQ6IDI1JTtcXG4gIHJpZ2h0OiAyNSU7XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZzogMTVweCAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IHRvcCBlYXNlLW91dCAxcyAwLjAxcztcXG59XFxuXFxuLyogc3Bpbm5lciAqL1xcbi5sb2FkaW5nLXNwaW5uZXIge1xcbiAgYW5pbWF0aW9uOiByb3RhdGUtZm9yZXZlciBsaW5lYXIgaW5maW5pdGUgMC44cztcXG4gIGhlaWdodDogMTJweDtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlLWZvcmV2ZXIge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG4vKiBFcnJvciBtZXNzYWdlICovXFxuLmVycm9yIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbC1jb2xvci0xKTtcXG59XFxuXFxuLyogU21hbGwgU2NyZWVucyAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLm1haW4tY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdhcDogNTBweCAwO1xcbiAgICBtYXJnaW46IDUlIGF1dG87XFxuICB9XFxuXFxuICAucmVzdWx0cyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgfVxcbn1cXG5cXG4uZGFyayB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTIpICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci0xKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ud2hpdGUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbmV1dHJhbC1jb2xvci0xKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaW5wdXQtZGFyayB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLTEpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5pbnB1dC1kYXJrOmZvY3VzIHtcXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCA3cHggdmFyKC0tbmV1dHJhbC1jb2xvci0xKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZGFyay1jb250cm9sIHtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKipcbiAqIEBjbGFzcyBGZXRjaFdyYXBwZXIgLSBjbGFzcyB0byBoYW5kbGUgZmV0Y2ggbWV0aG9kc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGZXRjaFdyYXBwZXIge1xuICBjb25zdHJ1Y3RvcihiYXNlVVJMKSB7XG4gICAgdGhpcy5iYXNlVVJMID0gYmFzZVVSTDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gZ2V0IC0gaW1wbGVtZW50cyB0aGUgZmV0Y2ggZ2V0IHJlcXVlc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVuZHBvaW50IC0gdGhlIGVuZHBvaW50IHRvIGJlIGF0dGFjaGVkIHRvIHRoZSBiYXNlVVJMIHRvIGZvcm0gY29tcGxldGUgdXJsXG4gICAqIEByZXR1cm5zIHtvYmplY3R9IC0gdGhlIFByb21pc2UgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyXG4gICAqL1xuICBhc3luYyBnZXQoZW5kcG9pbnQpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMuYmFzZVVSTCArIGVuZHBvaW50KTtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBwb3N0IC0gaW1wbGVtZW50cyB0aGUgZmV0Y2ggcG9zdCByZXF1ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbmRwb2ludCAtIHRoZSBlbmRwb2ludCB0byBiZSBhdHRhY2hlZCB0byB0aGUgYmFzZVVSTCB0byBmb3JtIGNvbXBsZXRlIHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIHRoZSBkYXRhIG9iamVjdCB0byBiZSBzZW50IHRvIHRoZSBzZXJ2ZXJcbiAgICogQHJldHVybnMge29iamVjdH0gLSB0aGUgUHJvbWlzZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXJcbiAgICovXG4gIGFzeW5jIHBvc3QoZW5kcG9pbnQsIGRhdGEpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMuYmFzZVVSTCArIGVuZHBvaW50LCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9XG59IiwiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuaW1wb3J0IFV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IEZldGNoV3JhcHBlciBmcm9tICcuL2ZldGNoV3JhcHBlci5qcyc7XG5cbmNvbnN0IEFQSSA9IG5ldyBGZXRjaFdyYXBwZXIoJ2h0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpLycpO1xuY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGlubmVyJyk7XG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0Jyk7XG5cbi8qKlxuICogQGNsYXNzIEhlbHBlciAtIHRoZSBoZWxwZXIgY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVscGVyIHtcbi8qKlxuICogQGZ1bmN0aW9uIGNyZWF0ZU5ld0dhbWUgLSBjcmVhdGUgbmV3IGdhbWUgb24gbG9hZFxuICovXG4gIHN0YXRpYyBhc3luYyBjcmVhdGVOZXdHYW1lKCkge1xuICAgIGlmICghVXRpbHMuZ2V0TG9jYWwoKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZ2FtZUlEID0gYXdhaXQgVXRpbHMuZ2VuZXJhdGVJRCgpO1xuICAgICAgICBVdGlscy5zZXRMb2NhbCgnSUQnLCBnYW1lSUQpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gcG9zdEhhbmRsZXIgLSBoYW5kbGVzIHRoZSBmb3JtIHN1Ym1pdCBldmVudFxuICAgKiBAcGFyYW0ge0V2ZW50IE9iamVjdH0gZSAtIHRoZSBldmVudCBvYmplY3RcbiAgICovXG4gIGFzeW5jIHBvc3RIYW5kbGVyKGUpIHtcbiAgICBjb25zdCB1c2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZS50cmltKCk7XG4gICAgY29uc3Qgc2NvcmUgPSBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njb3JlJykudmFsdWUudHJpbSgpKTtcbiAgICB0cnkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgVXRpbHMuaW5wdXRDaGVja2VyKCk7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB1c2VyLFxuICAgICAgICBzY29yZSxcbiAgICAgIH07XG4gICAgICBVdGlscy5zdGFydExvYWRlcihzdWJtaXQsIHNwaW5uZXIpO1xuICAgICAgY29uc3QgeyByZXN1bHQgfSA9IGF3YWl0IEFQSS5wb3N0KGBnYW1lcy8ke1V0aWxzLmdldExvY2FsKCl9L3Njb3Jlc2AsIGRhdGEpO1xuICAgICAgVXRpbHMuc2hvd01vZGFsKHJlc3VsdCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgVXRpbHMuc3RvcExvYWRlcihzdWJtaXQsIHNwaW5uZXIsICdTdWJtaXQnKTtcbiAgICAgIFV0aWxzLmNsZWFyRmllbGRzKCk7XG4gICAgICBVdGlscy5pbnB1dEZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBnZXRIYW5kbGVyIC0gaGFuZGxlcyB0aGUgcmVmcmVzaCBidXR0b24gY2xpY2sgZXZlbnRcbiAgICogQHBhcmFtIHtFdmVudCBPYmplY3R9IGUgLSB0aGUgZXZlbnQgb2JqZWN0XG4gICAqL1xuICBhc3luYyBnZXRIYW5kbGVyKCkge1xuICAgIGNvbnN0IHJlZnJlc2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVmcmVzaCcpO1xuICAgIGNvbnN0IHNwaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BpbicpO1xuICAgIHRyeSB7XG4gICAgICBVdGlscy5zdGFydExvYWRlcihyZWZyZXNoLCBzcGluKTtcbiAgICAgIGF3YWl0IEhlbHBlci5jcmVhdGVOZXdHYW1lKCk7XG4gICAgICBjb25zdCB7IHJlc3VsdCB9ID0gYXdhaXQgQVBJLmdldChgZ2FtZXMvJHtVdGlscy5nZXRMb2NhbCgpfS9zY29yZXMvYCk7XG4gICAgICBVdGlscy5jaGVja1Njb3JlcyhyZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIFV0aWxzLnN0b3BMb2FkZXIocmVmcmVzaCwgc3BpbiwgJ1JlZnJlc2ggPGkgY2xhc3M9XCJmYXMgZmEtc3luYy1hbHRcIj4nKTtcbiAgICAgIFV0aWxzLmlucHV0Rm9jdXMoKTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgRmV0Y2hXcmFwcGVyIGZyb20gJy4vZmV0Y2hXcmFwcGVyLmpzJztcblxuY29uc3QgQVBJID0gbmV3IEZldGNoV3JhcHBlcignaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvJyk7XG5jb25zdCB1c2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcbmNvbnN0IHNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njb3JlJyk7XG5cbi8qKlxuICogQGNsYXNzIFV0aWxzIC0gdGhlIHV0aWxpdHkgY2xhc3MgdG8gaG9sZCBhbGwgdXRpbHRpdHkgZnVuY3Rpb25hbGl0eVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlscyB7XG4vKipcbiAqIEBmdW5jdGlvbiBzdGFydExvYWRlciAtIGhhbmRsZXMgdGhlIHN0YXJ0IG9mIHRoZSBzcGlubmVyIGxvYWRpbmdcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW0xIC0gdGhlIGZpcnN0IEhUTUxFbGVtZW50XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtMiAtIHRoZSBzZWNvbmQgSFRNTEVsZW1lbnRcbiAqL1xuICBzdGF0aWMgc3RhcnRMb2FkZXIoZWxlbTEsIGVsZW0yKSB7XG4gICAgZWxlbTIuY2xhc3NMaXN0LmFkZCgnbG9hZGluZy1zcGlubmVyJyk7XG4gICAgZWxlbTEuaW5uZXJIVE1MID0gJ0xvYWRpbmcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBzdG9wTG9hZGVyIC0gaGFuZGxlcyB0aGUgc3RvcCBvZiB0aGUgc3Bpbm5lciBsb2FkaW5nXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW0xIC0gdGhlIGZpcnN0IEhUTUxFbGVtZW50XG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW0yIC0gdGhlIHNlY29uZCBIVE1MRWxlbWVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSB0aGUgc3RyaW5nIHZhbHVlIHRvIGluc2VydCBpbnRvIHRoZSBET01cbiAgICovXG4gIHN0YXRpYyBzdG9wTG9hZGVyKGVsZW0xLCBlbGVtMiwgdmFsdWUpIHtcbiAgICBlbGVtMi5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nLXNwaW5uZXInKTtcbiAgICBlbGVtMS5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gcmVuZGVyIC0gaGFuZGxlcyB0aGUgcmVuZGVyaW5nIG9mIHRoZSBzZXJ2ZXIgcmVzcG9uc2Ugb24gdGhlIERPTVxuICAgKiBAcGFyYW0ge0FycmF5fSBkYXRhIC0gdGhlIGFycmF5IHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlclxuICAgKi9cbiAgc3RhdGljIHJlbmRlcihkYXRhKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKS5pbm5lckhUTUwgPSBkYXRhLnNvcnQoKGEsIGIpID0+IGIuc2NvcmUgLSBhLnNjb3JlKVxuICAgICAgLm1hcCgocmVzdWx0KSA9PiBgPGxpPiR7cmVzdWx0LnVzZXJ9IDogJHtyZXN1bHQuc2NvcmV9PC9saT5gKVxuICAgICAgLmpvaW4oJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBnZXRMb2NhbCAtIGhhbmRsZXMgZ2V0dGluZyB0aGUgSUQgZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAqIEByZXR1cm5zIHtBcnJheX0gLSB0aGUgSUQgc3RyaW5nXG4gICAqL1xuICBzdGF0aWMgZ2V0TG9jYWwoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0lEJykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBzZXRMb2NhbCAtIGhhbmRsZXMgc2V0dGluZyB0aGUgSUQgdG8gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgICogQHBhcmFtIHtTdHJpbmd9IGlkIC0gdGhlIGtleSB0byBzZXQgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEgLSB0aGUgZGF0YSB2YWx1ZSB0byBzZXQgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgICovXG4gIHN0YXRpYyBzZXRMb2NhbChpZCwgZGF0YSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGlkLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGdlbmVyYXRlSUQgLSBoYW5kbGVzIGNyZWF0aW5nIGEgbmV3IGdhbWUgSURcbiAgICogQHJldHVybnMge1N0cmluZ30gLSB0aGUgbmV3IGdhbWUgSURcbiAgICovXG4gIHN0YXRpYyBhc3luYyBnZW5lcmF0ZUlEKCkge1xuICAgIGNvbnN0IHsgcmVzdWx0IH0gPSBhd2FpdCBBUEkucG9zdCgnZ2FtZXMvJywgeyBuYW1lOiAnTXkgY29vbCBuZXcgZ2FtZScgfSk7XG4gICAgcmV0dXJuIHJlc3VsdC5zdWJzdHIoMTQsIDIwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gY2xlYXJGaWVsZHMgLSBoYW5kbGVzIGNsZWFyaW5nIHRoZSBpbnB1dCBhZnRlciBzdWJtaXRcbiAgICovXG4gIHN0YXRpYyBjbGVhckZpZWxkcygpIHtcbiAgICB1c2VyLnZhbHVlID0gJyc7XG4gICAgc2NvcmUudmFsdWUgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gc2hvd01vZGFsIC0gc2hvd3MgdGhlIG1vZGFsXG4gICAqIEBwYXJhbSB7U3RyaW5nfSByZXN1bHQgLSB0aGUgcmVzdWx0IGZyb20gdGhlIHNlcnZlclxuICAgKiBAcmV0dXJucyAtIHN0b3BzIG9wZXJhdGlvbnMgaWYgaW5wdXRzIGFyZSBlbXB0eVxuICAgKi9cbiAgc3RhdGljIHNob3dNb2RhbChyZXN1bHQpIHtcbiAgICBVdGlscy5pbnB1dENoZWNrZXIoKTtcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJyk7XG4gICAgZWxlbS5pbm5lckhUTUwgPSByZXN1bHQ7XG4gICAgZWxlbS5zdHlsZS50b3AgPSAnNXB4JztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGVsZW0uc3R5bGUudG9wID0gJy0xMDB2aCc7XG4gICAgfSwgMzUwMCk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGlucHV0Q2hlY2tlciAtIGhhbmRsZXMgc3RvcHBpbmcgb3BlcmF0aW9ucyBpZiBpbnB1dHMgYXJlIGVtcHR5XG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBzdGF0aWMgaW5wdXRDaGVja2VyKCkge1xuICAgIGlmICh1c2VyLnZhbHVlID09PSAnJyB8fCBzY29yZS52YWx1ZSA9PT0gJycpIHtcbiAgICAgIFV0aWxzLmRpc3BsYXlFcnJvcignVGhlIHVzZXIgYW5kIHNjb3JlIGlucHV0cyBjYW4gbm90IGJlIGVtcHR5Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFV0aWxzLmRpc3BsYXlFcnJvcignJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBpbnB1dEZvY3VzIC0gaGFuZGxlcyB0aGUgaW5wdXQgZm9jdXMgb24gbG9hZFxuICAgKi9cbiAgc3RhdGljIGlucHV0Rm9jdXMoKSB7XG4gICAgdXNlci5mb2N1cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBjaGVja1Njb3JlcyAtIGNoZWNrcyB0aGUgbGVuZ3RoIG9mIHRoZSBhcnJheSByZXRyaWV2ZWQgZnJvbSB0aGUgc2VydmVyXG4gICAqIEBwYXJhbSB7QXJyYXl9IHJlc3VsdCAtIHRoZSByZXN1bHQgYXJyYXkgZnJvbSB0aGUgc2VydmVyXG4gICAqL1xuICBzdGF0aWMgY2hlY2tTY29yZXMocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDApIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0JykuaW5uZXJIVE1MID0gJzxsaT5ObyBMZWFkZXJib2FyZCBzY29yZXMgYWRkZWQgeWV0PC9saT4nO1xuICAgIH0gZWxzZSB7XG4gICAgICBVdGlscy5yZW5kZXIocmVzdWx0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGRpc3BsYXlFcnJvciAtIGhhbmRsZSB0aGUgZGlzcGxheSBvZiBlcnJvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSB0aGUgZXJyb3Igc3RyaW5nXG4gICAqL1xuICBzdGF0aWMgZGlzcGxheUVycm9yKHZhbHVlKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJykuaW5uZXJIVE1MID0gYCR7dmFsdWV9YDtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9oZWxwZXJzLmpzJztcbmltcG9ydCBVdGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuY29uc3QgaGVscGVyID0gbmV3IEhlbHBlcigpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFzeW5jICgpID0+IHtcbiAgYXdhaXQgSGVscGVyLmNyZWF0ZU5ld0dhbWUoKTtcbiAgYXdhaXQgaGVscGVyLmdldEhhbmRsZXIoKTtcbiAgVXRpbHMuaW5wdXRGb2N1cygpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWZvcm0gZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhlbHBlci5wb3N0SGFuZGxlcik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWZyZXNoLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGVscGVyLmdldEhhbmRsZXIpO1xuXG4gIC8vIERhcmsgTW9kZSBjb250cm9sbGVyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXJrLWNvbnRyb2wnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2NvcmVzLWNvbnRhaW5lciA+IHVsID4gbGksIGJ1dHRvbicpLmZvckVhY2goKGVsZW0pID0+IGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgnd2hpdGUnKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaDEsIGgyLCBmb290ZXIgcCwgYm9keScpLmZvckVhY2goKGVsZW0pID0+IGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpLmZvckVhY2goKGVsZW0pID0+IGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaW5wdXQtZGFyaycpKTtcbiAgfSk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=