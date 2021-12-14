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
___CSS_LOADER_EXPORT___.push([module.id, "/* Google font import */\n\n/* Reset Styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Variables */\n:root {\n  --primary-color-1: #fee3ec;\n  --primary-color-2: #f55b8c;\n  --accent-color: #f882a7;\n  --neutral-color-1: #550f24;\n  --white: #fff;\n  --font: 'Poppins', sans-serif;\n}\n\n/* Global styles */\nhtml {\n  overflow-x: hidden;\n}\n\nbody {\n  font-size: 16px;\n  font-family: var(--font);\n  background: var(--primary-color-1);\n  position: relative;\n  min-height: 97vh;\n}\n\nul > li {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: var(--accent-color);\n  cursor: pointer;\n}\n\n/* Main General styles */\nmain {\n  padding: 50px 10% 10px;\n}\n\nh1 {\n  font-size: 2.5rem;\n}\n\nh1,\nh2 {\n  color: var(--neutral-color-1);\n}\n\n/* Results section */\n.main-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 50px;\n  margin: 5% auto;\n}\n\n.results {\n  width: 80%;\n}\n\n.refresh-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.refresh > button {\n  padding: 10px 20px;\n  background: var(--accent-color);\n  border: none;\n  color: #fff;\n  font-size: 1rem;\n  font-family: var(--font);\n  border-radius: 2px;\n}\n\n.refresh > button:hover {\n  cursor: pointer;\n  background: var(--primary-color-2);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\n.refresh > button:focus {\n  outline: none;\n}\n\n.refresh > button .fas {\n  font-size: 14px;\n  margin-left: 5px;\n}\n\n.scores-container {\n  border: solid 3px var(--primary-color-2);\n  padding: 5px;\n  border-radius: 4px;\n}\n\n.scores-container > ul > li {\n  background: white;\n  padding: 10px;\n  margin: 5px 0;\n  border-radius: 2px;\n  font-weight: 500;\n}\n\n/* Add Section */\n.add {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.add > .score-heading {\n  margin-bottom: 20px;\n}\n\n.add > .add-form {\n  width: 100%;\n}\n\n.add > .add-form > form {\n  display: flex;\n  flex-direction: column;\n}\n\n.add > .add-form > form input {\n  width: 100%;\n  padding: 12px;\n  margin-bottom: 20px;\n  border: none;\n  border-left: solid 7px gray;\n  font-family: var(--font);\n  border-radius: 2px;\n}\n\n.add > .add-form > form input::-webkit-outer-spin-button,\n.add > .add-form > form input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.add > .add-form > form input:focus {\n  outline: none;\n  border-left: solid 7px var(--primary-color-2);\n}\n\n.add > .add-form > form input[type=number] {\n  -moz-appearance: textfield;\n}\n\n.add > .add-form > form > button {\n  padding: 12px;\n  width: 30%;\n  align-self: flex-end;\n  background: var(--accent-color);\n  border: none;\n  color: #fff;\n  font-family: var(--font);\n  font-size: 1rem;\n  border-radius: 2px;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n}\n\n.add > .add-form > form > button:hover {\n  cursor: pointer;\n  background: var(--primary-color-2);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\n.add > .add-form > form > button:focus {\n  outline: none;\n  background: var(--neutral-color-1);\n}\n\n/* Modal */\n.modal {\n  position: absolute;\n  top: -100vh;\n  left: 25%;\n  right: 25%;\n  width: 50%;\n  padding: 15px 0;\n  background: #fff;\n  text-align: center;\n  transition: top ease-out 1s 0.01s;\n}\n\n/* spinner */\n.loading-spinner {\n  animation: rotate-forever linear infinite 0.8s;\n  height: 12px;\n  width: 12px;\n  border: 2px solid #fff;\n  border-right-color: transparent;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n@keyframes rotate-forever {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* Footer */\nfooter {\n  position: absolute;\n  bottom: 0;\n  height: 10px;\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n  color: var(--neutral-color-1);\n}\n\n/* Small Screens */\n@media (max-width: 768px) {\n  .main-container {\n    grid-template-columns: 1fr;\n    gap: 50px 0;\n    margin: 5% auto;\n  }\n\n  .results {\n    width: 100%;\n  }\n\n  footer {\n    font-size: 11px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,uBAAuB;;AAGvB,iBAAiB;AACjB;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA,cAAc;AACd;EACE,0BAA0B;EAC1B,0BAA0B;EAC1B,uBAAuB;EACvB,0BAA0B;EAC1B,aAAa;EACb,6BAA6B;AAC/B;;AAEA,kBAAkB;AAClB;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,wBAAwB;EACxB,kCAAkC;EAClC,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,0BAA0B;EAC1B,eAAe;AACjB;;AAEA,wBAAwB;AACxB;EACE,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,6BAA6B;AAC/B;;AAEA,oBAAoB;AACpB;EACE,aAAa;EACb,8BAA8B;EAC9B,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,+BAA+B;EAC/B,YAAY;EACZ,WAAW;EACX,eAAe;EACf,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,kCAAkC;EAClC,uFAAuF;AACzF;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,wCAAwC;EACxC,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,aAAa;EACb,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA,gBAAgB;AAChB;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,2BAA2B;EAC3B,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA;;EAEE,wBAAwB;EACxB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,6CAA6C;AAC/C;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,UAAU;EACV,oBAAoB;EACpB,+BAA+B;EAC/B,YAAY;EACZ,WAAW;EACX,wBAAwB;EACxB,eAAe;EACf,kBAAkB;EAClB,iDAAiD;AACnD;;AAEA;EACE,eAAe;EACf,kCAAkC;EAClC,uFAAuF;AACzF;;AAEA;EACE,aAAa;EACb,kCAAkC;AACpC;;AAEA,UAAU;AACV;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,UAAU;EACV,UAAU;EACV,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,iCAAiC;AACnC;;AAEA,YAAY;AACZ;EACE,8CAA8C;EAC9C,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,+BAA+B;EAC/B,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE;IACE,uBAAuB;EACzB;;EAEA;IACE,yBAAyB;EAC3B;AACF;;AAEA,WAAW;AACX;EACE,kBAAkB;EAClB,SAAS;EACT,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,6BAA6B;AAC/B;;AAEA,kBAAkB;AAClB;EACE;IACE,0BAA0B;IAC1B,WAAW;IACX,eAAe;EACjB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,eAAe;EACjB;AACF","sourcesContent":["/* Google font import */\n@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,800;1,100;1,200;1,300;1,400;1,600;1,700&display=swap');\n\n/* Reset Styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Variables */\n:root {\n  --primary-color-1: #fee3ec;\n  --primary-color-2: #f55b8c;\n  --accent-color: #f882a7;\n  --neutral-color-1: #550f24;\n  --white: #fff;\n  --font: 'Poppins', sans-serif;\n}\n\n/* Global styles */\nhtml {\n  overflow-x: hidden;\n}\n\nbody {\n  font-size: 16px;\n  font-family: var(--font);\n  background: var(--primary-color-1);\n  position: relative;\n  min-height: 97vh;\n}\n\nul > li {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: var(--accent-color);\n  cursor: pointer;\n}\n\n/* Main General styles */\nmain {\n  padding: 50px 10% 10px;\n}\n\nh1 {\n  font-size: 2.5rem;\n}\n\nh1,\nh2 {\n  color: var(--neutral-color-1);\n}\n\n/* Results section */\n.main-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 50px;\n  margin: 5% auto;\n}\n\n.results {\n  width: 80%;\n}\n\n.refresh-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.refresh > button {\n  padding: 10px 20px;\n  background: var(--accent-color);\n  border: none;\n  color: #fff;\n  font-size: 1rem;\n  font-family: var(--font);\n  border-radius: 2px;\n}\n\n.refresh > button:hover {\n  cursor: pointer;\n  background: var(--primary-color-2);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\n.refresh > button:focus {\n  outline: none;\n}\n\n.refresh > button .fas {\n  font-size: 14px;\n  margin-left: 5px;\n}\n\n.scores-container {\n  border: solid 3px var(--primary-color-2);\n  padding: 5px;\n  border-radius: 4px;\n}\n\n.scores-container > ul > li {\n  background: white;\n  padding: 10px;\n  margin: 5px 0;\n  border-radius: 2px;\n  font-weight: 500;\n}\n\n/* Add Section */\n.add {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.add > .score-heading {\n  margin-bottom: 20px;\n}\n\n.add > .add-form {\n  width: 100%;\n}\n\n.add > .add-form > form {\n  display: flex;\n  flex-direction: column;\n}\n\n.add > .add-form > form input {\n  width: 100%;\n  padding: 12px;\n  margin-bottom: 20px;\n  border: none;\n  border-left: solid 7px gray;\n  font-family: var(--font);\n  border-radius: 2px;\n}\n\n.add > .add-form > form input::-webkit-outer-spin-button,\n.add > .add-form > form input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.add > .add-form > form input:focus {\n  outline: none;\n  border-left: solid 7px var(--primary-color-2);\n}\n\n.add > .add-form > form input[type=number] {\n  -moz-appearance: textfield;\n}\n\n.add > .add-form > form > button {\n  padding: 12px;\n  width: 30%;\n  align-self: flex-end;\n  background: var(--accent-color);\n  border: none;\n  color: #fff;\n  font-family: var(--font);\n  font-size: 1rem;\n  border-radius: 2px;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n}\n\n.add > .add-form > form > button:hover {\n  cursor: pointer;\n  background: var(--primary-color-2);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\n.add > .add-form > form > button:focus {\n  outline: none;\n  background: var(--neutral-color-1);\n}\n\n/* Modal */\n.modal {\n  position: absolute;\n  top: -100vh;\n  left: 25%;\n  right: 25%;\n  width: 50%;\n  padding: 15px 0;\n  background: #fff;\n  text-align: center;\n  transition: top ease-out 1s 0.01s;\n}\n\n/* spinner */\n.loading-spinner {\n  animation: rotate-forever linear infinite 0.8s;\n  height: 12px;\n  width: 12px;\n  border: 2px solid #fff;\n  border-right-color: transparent;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n@keyframes rotate-forever {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* Footer */\nfooter {\n  position: absolute;\n  bottom: 0;\n  height: 10px;\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n  color: var(--neutral-color-1);\n}\n\n/* Small Screens */\n@media (max-width: 768px) {\n  .main-container {\n    grid-template-columns: 1fr;\n    gap: 50px 0;\n    margin: 5% auto;\n  }\n\n  .results {\n    width: 100%;\n  }\n\n  footer {\n    font-size: 11px;\n  }\n}\n"],"sourceRoot":""}]);
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
    const elem = document.querySelector('.modal');
    elem.innerHTML = result;
    elem.style.top = '-7vh';
    setTimeout(() => {
      elem.style.top = '-100vh';
    }, 3000);
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
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ2E7QUFDSDs7QUFFL0IsbUJBQW1CLG1EQUFNOztBQUV6QjtBQUNBLFFBQVEsaUVBQW9CO0FBQzVCO0FBQ0EsRUFBRSw0REFBZ0I7QUFDbEI7QUFDQTtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2ZldGNoV3JhcHBlci5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDgwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDYwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHb29nbGUgZm9udCBpbXBvcnQgKi9cXG5cXG4vKiBSZXNldCBTdHlsZXMgKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBWYXJpYWJsZXMgKi9cXG46cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3ItMTogI2ZlZTNlYztcXG4gIC0tcHJpbWFyeS1jb2xvci0yOiAjZjU1YjhjO1xcbiAgLS1hY2NlbnQtY29sb3I6ICNmODgyYTc7XFxuICAtLW5ldXRyYWwtY29sb3ItMTogIzU1MGYyNDtcXG4gIC0td2hpdGU6ICNmZmY7XFxuICAtLWZvbnQ6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogR2xvYmFsIHN0eWxlcyAqL1xcbmh0bWwge1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3ItMSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4taGVpZ2h0OiA5N3ZoO1xcbn1cXG5cXG51bCA+IGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIE1haW4gR2VuZXJhbCBzdHlsZXMgKi9cXG5tYWluIHtcXG4gIHBhZGRpbmc6IDUwcHggMTAlIDEwcHg7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbC1jb2xvci0xKTtcXG59XFxuXFxuLyogUmVzdWx0cyBzZWN0aW9uICovXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6IDAgNTBweDtcXG4gIG1hcmdpbjogNSUgYXV0bztcXG59XFxuXFxuLnJlc3VsdHMge1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLnJlZnJlc2gtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnJlZnJlc2ggPiBidXR0b24ge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG4ucmVmcmVzaCA+IGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLTIpO1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwIDEzcHggMjdweCAtNXB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMCA4cHggMTZweCAtOHB4O1xcbn1cXG5cXG4ucmVmcmVzaCA+IGJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucmVmcmVzaCA+IGJ1dHRvbiAuZmFzIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5zY29yZXMtY29udGFpbmVyIHtcXG4gIGJvcmRlcjogc29saWQgM3B4IHZhcigtLXByaW1hcnktY29sb3ItMik7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5zY29yZXMtY29udGFpbmVyID4gdWwgPiBsaSB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDVweCAwO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLyogQWRkIFNlY3Rpb24gKi9cXG4uYWRkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZCA+IC5zY29yZS1oZWFkaW5nIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5hZGQgPiAuYWRkLWZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hZGQgPiAuYWRkLWZvcm0gPiBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWRkID4gLmFkZC1mb3JtID4gZm9ybSBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDdweCBncmF5O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG4uYWRkID4gLmFkZC1mb3JtID4gZm9ybSBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcXG4uYWRkID4gLmFkZC1mb3JtID4gZm9ybSBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5hZGQgPiAuYWRkLWZvcm0gPiBmb3JtIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItbGVmdDogc29saWQgN3B4IHZhcigtLXByaW1hcnktY29sb3ItMik7XFxufVxcblxcbi5hZGQgPiAuYWRkLWZvcm0gPiBmb3JtIGlucHV0W3R5cGU9bnVtYmVyXSB7XFxuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG59XFxuXFxuLmFkZCA+IC5hZGQtZm9ybSA+IGZvcm0gPiBidXR0b24ge1xcbiAgcGFkZGluZzogMTJweDtcXG4gIHdpZHRoOiAzMCU7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCAyNXB4IDUwcHggLTEycHg7XFxufVxcblxcbi5hZGQgPiAuYWRkLWZvcm0gPiBmb3JtID4gYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3ItMik7XFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDAgMTNweCAyN3B4IC01cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDhweCAxNnB4IC04cHg7XFxufVxcblxcbi5hZGQgPiAuYWRkLWZvcm0gPiBmb3JtID4gYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTEpO1xcbn1cXG5cXG4vKiBNb2RhbCAqL1xcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xMDB2aDtcXG4gIGxlZnQ6IDI1JTtcXG4gIHJpZ2h0OiAyNSU7XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZzogMTVweCAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IHRvcCBlYXNlLW91dCAxcyAwLjAxcztcXG59XFxuXFxuLyogc3Bpbm5lciAqL1xcbi5sb2FkaW5nLXNwaW5uZXIge1xcbiAgYW5pbWF0aW9uOiByb3RhdGUtZm9yZXZlciBsaW5lYXIgaW5maW5pdGUgMC44cztcXG4gIGhlaWdodDogMTJweDtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlLWZvcmV2ZXIge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbC1jb2xvci0xKTtcXG59XFxuXFxuLyogU21hbGwgU2NyZWVucyAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLm1haW4tY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdhcDogNTBweCAwO1xcbiAgICBtYXJnaW46IDUlIGF1dG87XFxuICB9XFxuXFxuICAucmVzdWx0cyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHVCQUF1Qjs7QUFHdkIsaUJBQWlCO0FBQ2pCO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUEsY0FBYztBQUNkO0VBQ0UsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsNkJBQTZCO0FBQy9COztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLHVGQUF1RjtBQUN6Rjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyx1RkFBdUY7QUFDekY7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0FBQ3BDOztBQUVBLFVBQVU7QUFDVjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7RUFDVixVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUNBQWlDO0FBQ25DOztBQUVBLFlBQVk7QUFDWjtFQUNFLDhDQUE4QztFQUM5QyxZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUEsV0FBVztBQUNYO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFO0lBQ0UsMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdvb2dsZSBmb250IGltcG9ydCAqL1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsODAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNjAwOzEsNzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbi8qIFJlc2V0IFN0eWxlcyAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFZhcmlhYmxlcyAqL1xcbjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvci0xOiAjZmVlM2VjO1xcbiAgLS1wcmltYXJ5LWNvbG9yLTI6ICNmNTViOGM7XFxuICAtLWFjY2VudC1jb2xvcjogI2Y4ODJhNztcXG4gIC0tbmV1dHJhbC1jb2xvci0xOiAjNTUwZjI0O1xcbiAgLS13aGl0ZTogI2ZmZjtcXG4gIC0tZm9udDogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiBHbG9iYWwgc3R5bGVzICovXFxuaHRtbCB7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvci0xKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDk3dmg7XFxufVxcblxcbnVsID4gbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogTWFpbiBHZW5lcmFsIHN0eWxlcyAqL1xcbm1haW4ge1xcbiAgcGFkZGluZzogNTBweCAxMCUgMTBweDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTEpO1xcbn1cXG5cXG4vKiBSZXN1bHRzIHNlY3Rpb24gKi9cXG4ubWFpbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdhcDogMCA1MHB4O1xcbiAgbWFyZ2luOiA1JSBhdXRvO1xcbn1cXG5cXG4ucmVzdWx0cyB7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4ucmVmcmVzaC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ucmVmcmVzaCA+IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbi5yZWZyZXNoID4gYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3ItMik7XFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDAgMTNweCAyN3B4IC01cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDhweCAxNnB4IC04cHg7XFxufVxcblxcbi5yZWZyZXNoID4gYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5yZWZyZXNoID4gYnV0dG9uIC5mYXMge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLnNjb3Jlcy1jb250YWluZXIge1xcbiAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0tcHJpbWFyeS1jb2xvci0yKTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLnNjb3Jlcy1jb250YWluZXIgPiB1bCA+IGxpIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogNXB4IDA7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4vKiBBZGQgU2VjdGlvbiAqL1xcbi5hZGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkID4gLnNjb3JlLWhlYWRpbmcge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmFkZCA+IC5hZGQtZm9ybSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFkZCA+IC5hZGQtZm9ybSA+IGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hZGQgPiAuYWRkLWZvcm0gPiBmb3JtIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItbGVmdDogc29saWQgN3B4IGdyYXk7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbi5hZGQgPiAuYWRkLWZvcm0gPiBmb3JtIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxcbi5hZGQgPiAuYWRkLWZvcm0gPiBmb3JtIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmFkZCA+IC5hZGQtZm9ybSA+IGZvcm0gaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCA3cHggdmFyKC0tcHJpbWFyeS1jb2xvci0yKTtcXG59XFxuXFxuLmFkZCA+IC5hZGQtZm9ybSA+IGZvcm0gaW5wdXRbdHlwZT1udW1iZXJdIHtcXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbn1cXG5cXG4uYWRkID4gLmFkZC1mb3JtID4gZm9ybSA+IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgd2lkdGg6IDMwJTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwIDI1cHggNTBweCAtMTJweDtcXG59XFxuXFxuLmFkZCA+IC5hZGQtZm9ybSA+IGZvcm0gPiBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvci0yKTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMCAxM3B4IDI3cHggLTVweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDAgOHB4IDE2cHggLThweDtcXG59XFxuXFxuLmFkZCA+IC5hZGQtZm9ybSA+IGZvcm0gPiBidXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW5ldXRyYWwtY29sb3ItMSk7XFxufVxcblxcbi8qIE1vZGFsICovXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTEwMHZoO1xcbiAgbGVmdDogMjUlO1xcbiAgcmlnaHQ6IDI1JTtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogdG9wIGVhc2Utb3V0IDFzIDAuMDFzO1xcbn1cXG5cXG4vKiBzcGlubmVyICovXFxuLmxvYWRpbmctc3Bpbm5lciB7XFxuICBhbmltYXRpb246IHJvdGF0ZS1mb3JldmVyIGxpbmVhciBpbmZpbml0ZSAwLjhzO1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgd2lkdGg6IDEycHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUtZm9yZXZlciB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbi8qIEZvb3RlciAqL1xcbmZvb3RlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTEpO1xcbn1cXG5cXG4vKiBTbWFsbCBTY3JlZW5zICovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAubWFpbi1jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ2FwOiA1MHB4IDA7XFxuICAgIG1hcmdpbjogNSUgYXV0bztcXG4gIH1cXG5cXG4gIC5yZXN1bHRzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICBmb290ZXIge1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyoqXG4gKiBAY2xhc3MgRmV0Y2hXcmFwcGVyIC0gY2xhc3MgdG8gaGFuZGxlIGZldGNoIG1ldGhvZHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmV0Y2hXcmFwcGVyIHtcbiAgY29uc3RydWN0b3IoYmFzZVVSTCkge1xuICAgIHRoaXMuYmFzZVVSTCA9IGJhc2VVUkw7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGdldCAtIGltcGxlbWVudHMgdGhlIGZldGNoIGdldCByZXF1ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbmRwb2ludCAtIHRoZSBlbmRwb2ludCB0byBiZSBhdHRhY2hlZCB0byB0aGUgYmFzZVVSTCB0byBmb3JtIGNvbXBsZXRlIHVybFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSAtIHRoZSBQcm9taXNlIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlclxuICAgKi9cbiAgYXN5bmMgZ2V0KGVuZHBvaW50KSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLmJhc2VVUkwgKyBlbmRwb2ludCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gcG9zdCAtIGltcGxlbWVudHMgdGhlIGZldGNoIHBvc3QgcmVxdWVzdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW5kcG9pbnQgLSB0aGUgZW5kcG9pbnQgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIGJhc2VVUkwgdG8gZm9ybSBjb21wbGV0ZSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSB0aGUgZGF0YSBvYmplY3QgdG8gYmUgc2VudCB0byB0aGUgc2VydmVyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9IC0gdGhlIFByb21pc2UgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyXG4gICAqL1xuICBhc3luYyBwb3N0KGVuZHBvaW50LCBkYXRhKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLmJhc2VVUkwgKyBlbmRwb2ludCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfVxufSIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBVdGlscyBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCBGZXRjaFdyYXBwZXIgZnJvbSAnLi9mZXRjaFdyYXBwZXIuanMnO1xuXG5jb25zdCBBUEkgPSBuZXcgRmV0Y2hXcmFwcGVyKCdodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS8nKTtcbmNvbnN0IHNwaW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3Bpbm5lcicpO1xuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpO1xuXG4vKipcbiAqIEBjbGFzcyBIZWxwZXIgLSB0aGUgaGVscGVyIGNsYXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbHBlciB7XG4vKipcbiAqIEBmdW5jdGlvbiBjcmVhdGVOZXdHYW1lIC0gY3JlYXRlIG5ldyBnYW1lIG9uIGxvYWRcbiAqL1xuICBzdGF0aWMgYXN5bmMgY3JlYXRlTmV3R2FtZSgpIHtcbiAgICBpZiAoIVV0aWxzLmdldExvY2FsKCkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGdhbWVJRCA9IGF3YWl0IFV0aWxzLmdlbmVyYXRlSUQoKTtcbiAgICAgICAgVXRpbHMuc2V0TG9jYWwoJ0lEJywgZ2FtZUlEKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHBvc3RIYW5kbGVyIC0gaGFuZGxlcyB0aGUgZm9ybSBzdWJtaXQgZXZlbnRcbiAgICogQHBhcmFtIHtFdmVudCBPYmplY3R9IGUgLSB0aGUgZXZlbnQgb2JqZWN0XG4gICAqL1xuICBhc3luYyBwb3N0SGFuZGxlcihlKSB7XG4gICAgY29uc3QgdXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWUudHJpbSgpO1xuICAgIGNvbnN0IHNjb3JlID0gTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY29yZScpLnZhbHVlLnRyaW0oKSk7XG4gICAgdHJ5IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIFV0aWxzLmlucHV0Q2hlY2tlcigpO1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgdXNlcixcbiAgICAgICAgc2NvcmUsXG4gICAgICB9O1xuICAgICAgVXRpbHMuc3RhcnRMb2FkZXIoc3VibWl0LCBzcGlubmVyKTtcbiAgICAgIGNvbnN0IHsgcmVzdWx0IH0gPSBhd2FpdCBBUEkucG9zdChgZ2FtZXMvJHtVdGlscy5nZXRMb2NhbCgpfS9zY29yZXNgLCBkYXRhKTtcbiAgICAgIFV0aWxzLnNob3dNb2RhbChyZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIFV0aWxzLnN0b3BMb2FkZXIoc3VibWl0LCBzcGlubmVyLCAnU3VibWl0Jyk7XG4gICAgICBVdGlscy5jbGVhckZpZWxkcygpO1xuICAgICAgVXRpbHMuaW5wdXRGb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gZ2V0SGFuZGxlciAtIGhhbmRsZXMgdGhlIHJlZnJlc2ggYnV0dG9uIGNsaWNrIGV2ZW50XG4gICAqIEBwYXJhbSB7RXZlbnQgT2JqZWN0fSBlIC0gdGhlIGV2ZW50IG9iamVjdFxuICAgKi9cbiAgYXN5bmMgZ2V0SGFuZGxlcigpIHtcbiAgICBjb25zdCByZWZyZXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlZnJlc2gnKTtcbiAgICBjb25zdCBzcGluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwaW4nKTtcbiAgICB0cnkge1xuICAgICAgVXRpbHMuc3RhcnRMb2FkZXIocmVmcmVzaCwgc3Bpbik7XG4gICAgICBhd2FpdCBIZWxwZXIuY3JlYXRlTmV3R2FtZSgpO1xuICAgICAgY29uc3QgeyByZXN1bHQgfSA9IGF3YWl0IEFQSS5nZXQoYGdhbWVzLyR7VXRpbHMuZ2V0TG9jYWwoKX0vc2NvcmVzL2ApO1xuICAgICAgVXRpbHMuY2hlY2tTY29yZXMocmVzdWx0KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBVdGlscy5zdG9wTG9hZGVyKHJlZnJlc2gsIHNwaW4sICdSZWZyZXNoIDxpIGNsYXNzPVwiZmFzIGZhLXN5bmMtYWx0XCI+Jyk7XG4gICAgICBVdGlscy5pbnB1dEZvY3VzKCk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IEZldGNoV3JhcHBlciBmcm9tICcuL2ZldGNoV3JhcHBlci5qcyc7XG5cbmNvbnN0IEFQSSA9IG5ldyBGZXRjaFdyYXBwZXIoJ2h0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpLycpO1xuY29uc3QgdXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XG5jb25zdCBzY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY29yZScpO1xuXG4vKipcbiAqIEBjbGFzcyBVdGlscyAtIHRoZSB1dGlsaXR5IGNsYXNzIHRvIGhvbGQgYWxsIHV0aWx0aXR5IGZ1bmN0aW9uYWxpdHlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMge1xuLyoqXG4gKiBAZnVuY3Rpb24gc3RhcnRMb2FkZXIgLSBoYW5kbGVzIHRoZSBzdGFydCBvZiB0aGUgc3Bpbm5lciBsb2FkaW5nXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtMSAtIHRoZSBmaXJzdCBIVE1MRWxlbWVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbTIgLSB0aGUgc2Vjb25kIEhUTUxFbGVtZW50XG4gKi9cbiAgc3RhdGljIHN0YXJ0TG9hZGVyKGVsZW0xLCBlbGVtMikge1xuICAgIGVsZW0yLmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmctc3Bpbm5lcicpO1xuICAgIGVsZW0xLmlubmVySFRNTCA9ICdMb2FkaW5nJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gc3RvcExvYWRlciAtIGhhbmRsZXMgdGhlIHN0b3Agb2YgdGhlIHNwaW5uZXIgbG9hZGluZ1xuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtMSAtIHRoZSBmaXJzdCBIVE1MRWxlbWVudFxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtMiAtIHRoZSBzZWNvbmQgSFRNTEVsZW1lbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIC0gdGhlIHN0cmluZyB2YWx1ZSB0byBpbnNlcnQgaW50byB0aGUgRE9NXG4gICAqL1xuICBzdGF0aWMgc3RvcExvYWRlcihlbGVtMSwgZWxlbTIsIHZhbHVlKSB7XG4gICAgZWxlbTIuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZy1zcGlubmVyJyk7XG4gICAgZWxlbTEuaW5uZXJIVE1MID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHJlbmRlciAtIGhhbmRsZXMgdGhlIHJlbmRlcmluZyBvZiB0aGUgc2VydmVyIHJlc3BvbnNlIG9uIHRoZSBET01cbiAgICogQHBhcmFtIHtBcnJheX0gZGF0YSAtIHRoZSBhcnJheSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXJcbiAgICovXG4gIHN0YXRpYyByZW5kZXIoZGF0YSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0JykuaW5uZXJIVE1MID0gZGF0YS5zb3J0KChhLCBiKSA9PiBiLnNjb3JlIC0gYS5zY29yZSlcbiAgICAgIC5tYXAoKHJlc3VsdCkgPT4gYDxsaT4ke3Jlc3VsdC51c2VyfSA6ICR7cmVzdWx0LnNjb3JlfTwvbGk+YClcbiAgICAgIC5qb2luKCcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gZ2V0TG9jYWwgLSBoYW5kbGVzIGdldHRpbmcgdGhlIElEIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgKiBAcmV0dXJucyB7QXJyYXl9IC0gdGhlIElEIHN0cmluZ1xuICAgKi9cbiAgc3RhdGljIGdldExvY2FsKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdJRCcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gc2V0TG9jYWwgLSBoYW5kbGVzIHNldHRpbmcgdGhlIElEIHRvIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpZCAtIHRoZSBrZXkgdG8gc2V0IGluIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhIC0gdGhlIGRhdGEgdmFsdWUgdG8gc2V0IGluIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAqL1xuICBzdGF0aWMgc2V0TG9jYWwoaWQsIGRhdGEpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpZCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBnZW5lcmF0ZUlEIC0gaGFuZGxlcyBjcmVhdGluZyBhIG5ldyBnYW1lIElEXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9IC0gdGhlIG5ldyBnYW1lIElEXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZ2VuZXJhdGVJRCgpIHtcbiAgICBjb25zdCB7IHJlc3VsdCB9ID0gYXdhaXQgQVBJLnBvc3QoJ2dhbWVzLycsIHsgbmFtZTogJ015IGNvb2wgbmV3IGdhbWUnIH0pO1xuICAgIHJldHVybiByZXN1bHQuc3Vic3RyKDE0LCAyMCk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGNsZWFyRmllbGRzIC0gaGFuZGxlcyBjbGVhcmluZyB0aGUgaW5wdXQgYWZ0ZXIgc3VibWl0XG4gICAqL1xuICBzdGF0aWMgY2xlYXJGaWVsZHMoKSB7XG4gICAgdXNlci52YWx1ZSA9ICcnO1xuICAgIHNjb3JlLnZhbHVlID0gJyc7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHNob3dNb2RhbCAtIHNob3dzIHRoZSBtb2RhbFxuICAgKiBAcGFyYW0ge1N0cmluZ30gcmVzdWx0IC0gdGhlIHJlc3VsdCBmcm9tIHRoZSBzZXJ2ZXJcbiAgICogQHJldHVybnMgLSBzdG9wcyBvcGVyYXRpb25zIGlmIGlucHV0cyBhcmUgZW1wdHlcbiAgICovXG4gIHN0YXRpYyBzaG93TW9kYWwocmVzdWx0KSB7XG4gICAgVXRpbHMuaW5wdXRDaGVja2VyKCk7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgIGVsZW0uaW5uZXJIVE1MID0gcmVzdWx0O1xuICAgIGVsZW0uc3R5bGUudG9wID0gJy03dmgnO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZWxlbS5zdHlsZS50b3AgPSAnLTEwMHZoJztcbiAgICB9LCAzMDAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gaW5wdXRDaGVja2VyIC0gaGFuZGxlcyBzdG9wcGluZyBvcGVyYXRpb25zIGlmIGlucHV0cyBhcmUgZW1wdHlcbiAgICogQHJldHVybnNcbiAgICovXG4gIHN0YXRpYyBpbnB1dENoZWNrZXIoKSB7XG4gICAgaWYgKHVzZXIudmFsdWUgPT09ICcnIHx8IHNjb3JlLnZhbHVlID09PSAnJykge1xuICAgICAgVXRpbHMuZGlzcGxheUVycm9yKCdUaGUgdXNlciBhbmQgc2NvcmUgaW5wdXRzIGNhbiBub3QgYmUgZW1wdHknKTtcbiAgICB9IGVsc2Uge1xuICAgICAgVXRpbHMuZGlzcGxheUVycm9yKCcnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGlucHV0Rm9jdXMgLSBoYW5kbGVzIHRoZSBpbnB1dCBmb2N1cyBvbiBsb2FkXG4gICAqL1xuICBzdGF0aWMgaW5wdXRGb2N1cygpIHtcbiAgICB1c2VyLmZvY3VzKCk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGNoZWNrU2NvcmVzIC0gY2hlY2tzIHRoZSBsZW5ndGggb2YgdGhlIGFycmF5IHJldHJpZXZlZCBmcm9tIHRoZSBzZXJ2ZXJcbiAgICogQHBhcmFtIHtBcnJheX0gcmVzdWx0IC0gdGhlIHJlc3VsdCBhcnJheSBmcm9tIHRoZSBzZXJ2ZXJcbiAgICovXG4gIHN0YXRpYyBjaGVja1Njb3JlcyhyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKS5pbm5lckhUTUwgPSAnPGxpPk5vIExlYWRlcmJvYXJkIHNjb3JlcyBhZGRlZCB5ZXQ8L2xpPic7XG4gICAgfSBlbHNlIHtcbiAgICAgIFV0aWxzLnJlbmRlcihyZXN1bHQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gZGlzcGxheUVycm9yIC0gaGFuZGxlIHRoZSBkaXNwbGF5IG9mIGVycm9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIHRoZSBlcnJvciBzdHJpbmdcbiAgICovXG4gIHN0YXRpYyBkaXNwbGF5RXJyb3IodmFsdWUpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKS5pbm5lckhUTUwgPSBgJHt2YWx1ZX1gO1xuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IEhlbHBlciBmcm9tICcuL2hlbHBlcnMuanMnO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuXG5jb25zdCBoZWxwZXIgPSBuZXcgSGVscGVyKCk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBIZWxwZXIuY3JlYXRlTmV3R2FtZSgpO1xuICBhd2FpdCBoZWxwZXIuZ2V0SGFuZGxlcigpO1xuICBVdGlscy5pbnB1dEZvY3VzKCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZm9ybSBmb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGVscGVyLnBvc3RIYW5kbGVyKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZnJlc2gtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoZWxwZXIuZ2V0SGFuZGxlcik7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=