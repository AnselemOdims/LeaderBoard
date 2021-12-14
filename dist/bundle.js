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
___CSS_LOADER_EXPORT___.push([module.id, "/* Google font import */\n\n/* Reset Styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Variables */\n:root {\n  --primary-color-1: #fee3ec;\n  --primary-color-2: #f55b8c;\n  --accent-color: #f882a7;\n  --neutral-color-1: #550f24;\n  --white: #fff;\n  --font: 'Poppins', sans-serif;\n}\n\n/* Global styles */\nhtml {\n  overflow-x: hidden;\n}\n\nbody {\n  font-size: 16px;\n  font-family: var(--font);\n  background: var(--primary-color-1);\n  position: relative;\n  min-height: 97vh;\n}\n\nul > li {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: var(--accent-color);\n  cursor: pointer;\n}\n\n/* Main General styles */\nmain {\n  padding: 50px 10% 10px;\n}\n\nh1 {\n  font-size: 2.5rem;\n}\n\nh1,\nh2 {\n  color: var(--neutral-color-1);\n}\n\n/* Results section */\n.main-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 50px;\n  margin: 5% auto;\n}\n\n.results {\n  width: 80%;\n}\n\n.refresh-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.refresh > button {\n  padding: 10px 20px;\n  background: var(--accent-color);\n  border: none;\n  color: #fff;\n  font-size: 1rem;\n  font-family: var(--font);\n  border-radius: 2px;\n}\n\n.refresh > button:hover {\n  cursor: pointer;\n  background: var(--primary-color-2);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\n.refresh > button:focus {\n  outline: none;\n}\n\n.refresh > button .fas {\n  font-size: 14px;\n  margin-left: 5px;\n}\n\n.scores-container {\n  border: solid 3px var(--primary-color-2);\n  padding: 5px;\n  border-radius: 4px;\n}\n\n.scores-container > ul > li {\n  background: white;\n  padding: 10px;\n  margin: 5px 0;\n  border-radius: 2px;\n  font-weight: 500;\n  word-wrap: break-word;\n}\n\n/* Add Section */\n.add {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.add > .score-heading {\n  margin-bottom: 20px;\n}\n\n.add > .add-form {\n  width: 100%;\n}\n\n.add > .add-form > form {\n  display: flex;\n  flex-direction: column;\n}\n\n.add > .add-form > form input {\n  width: 100%;\n  padding: 12px;\n  margin-bottom: 20px;\n  border: none;\n  border-left: solid 7px gray;\n  font-family: var(--font);\n  border-radius: 2px;\n}\n\n.add > .add-form > form input::-webkit-outer-spin-button,\n.add > .add-form > form input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.add > .add-form > form input:focus {\n  outline: none;\n  border-left: solid 7px var(--primary-color-2);\n}\n\n.add > .add-form > form input[type=number] {\n  -moz-appearance: textfield;\n}\n\n.add > .add-form > form > button {\n  padding: 12px;\n  width: 30%;\n  align-self: flex-end;\n  background: var(--accent-color);\n  border: none;\n  color: #fff;\n  font-family: var(--font);\n  font-size: 1rem;\n  border-radius: 2px;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n}\n\n.add > .add-form > form > button:hover {\n  cursor: pointer;\n  background: var(--primary-color-2);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\n.add > .add-form > form > button:focus {\n  outline: none;\n  background: var(--neutral-color-1);\n}\n\n/* Modal */\n#modal {\n  position: absolute;\n  top: -100vh;\n  left: 25%;\n  right: 25%;\n  width: 50%;\n  padding: 15px 0;\n  background: #fff;\n  text-align: center;\n  transition: top ease-out 1s 0.01s;\n}\n\n/* spinner */\n.loading-spinner {\n  animation: rotate-forever linear infinite 0.8s;\n  height: 12px;\n  width: 12px;\n  border: 2px solid #fff;\n  border-right-color: transparent;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n@keyframes rotate-forever {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* Error message */\n.error {\n  color: red;\n  font-size: 12px;\n  margin-bottom: 10px;\n}\n\n/* Footer */\nfooter {\n  position: absolute;\n  bottom: 0;\n  height: 10px;\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n  color: var(--neutral-color-1);\n}\n\n/* Small Screens */\n@media (max-width: 768px) {\n  .main-container {\n    grid-template-columns: 1fr;\n    gap: 50px 0;\n    margin: 5% auto;\n  }\n\n  .results {\n    width: 100%;\n  }\n\n  footer {\n    font-size: 11px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,uBAAuB;;AAGvB,iBAAiB;AACjB;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA,cAAc;AACd;EACE,0BAA0B;EAC1B,0BAA0B;EAC1B,uBAAuB;EACvB,0BAA0B;EAC1B,aAAa;EACb,6BAA6B;AAC/B;;AAEA,kBAAkB;AAClB;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,wBAAwB;EACxB,kCAAkC;EAClC,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,0BAA0B;EAC1B,eAAe;AACjB;;AAEA,wBAAwB;AACxB;EACE,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,6BAA6B;AAC/B;;AAEA,oBAAoB;AACpB;EACE,aAAa;EACb,8BAA8B;EAC9B,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,+BAA+B;EAC/B,YAAY;EACZ,WAAW;EACX,eAAe;EACf,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,kCAAkC;EAClC,uFAAuF;AACzF;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,wCAAwC;EACxC,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA,gBAAgB;AAChB;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,2BAA2B;EAC3B,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA;;EAEE,wBAAwB;EACxB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,6CAA6C;AAC/C;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,UAAU;EACV,oBAAoB;EACpB,+BAA+B;EAC/B,YAAY;EACZ,WAAW;EACX,wBAAwB;EACxB,eAAe;EACf,kBAAkB;EAClB,iDAAiD;AACnD;;AAEA;EACE,eAAe;EACf,kCAAkC;EAClC,uFAAuF;AACzF;;AAEA;EACE,aAAa;EACb,kCAAkC;AACpC;;AAEA,UAAU;AACV;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,UAAU;EACV,UAAU;EACV,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,iCAAiC;AACnC;;AAEA,YAAY;AACZ;EACE,8CAA8C;EAC9C,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,+BAA+B;EAC/B,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE;IACE,uBAAuB;EACzB;;EAEA;IACE,yBAAyB;EAC3B;AACF;;AAEA,kBAAkB;AAClB;EACE,UAAU;EACV,eAAe;EACf,mBAAmB;AACrB;;AAEA,WAAW;AACX;EACE,kBAAkB;EAClB,SAAS;EACT,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,6BAA6B;AAC/B;;AAEA,kBAAkB;AAClB;EACE;IACE,0BAA0B;IAC1B,WAAW;IACX,eAAe;EACjB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,eAAe;EACjB;AACF","sourcesContent":["/* Google font import */\n@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,800;1,100;1,200;1,300;1,400;1,600;1,700&display=swap');\n\n/* Reset Styles */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* Variables */\n:root {\n  --primary-color-1: #fee3ec;\n  --primary-color-2: #f55b8c;\n  --accent-color: #f882a7;\n  --neutral-color-1: #550f24;\n  --white: #fff;\n  --font: 'Poppins', sans-serif;\n}\n\n/* Global styles */\nhtml {\n  overflow-x: hidden;\n}\n\nbody {\n  font-size: 16px;\n  font-family: var(--font);\n  background: var(--primary-color-1);\n  position: relative;\n  min-height: 97vh;\n}\n\nul > li {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: var(--accent-color);\n  cursor: pointer;\n}\n\n/* Main General styles */\nmain {\n  padding: 50px 10% 10px;\n}\n\nh1 {\n  font-size: 2.5rem;\n}\n\nh1,\nh2 {\n  color: var(--neutral-color-1);\n}\n\n/* Results section */\n.main-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 50px;\n  margin: 5% auto;\n}\n\n.results {\n  width: 80%;\n}\n\n.refresh-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.refresh > button {\n  padding: 10px 20px;\n  background: var(--accent-color);\n  border: none;\n  color: #fff;\n  font-size: 1rem;\n  font-family: var(--font);\n  border-radius: 2px;\n}\n\n.refresh > button:hover {\n  cursor: pointer;\n  background: var(--primary-color-2);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\n.refresh > button:focus {\n  outline: none;\n}\n\n.refresh > button .fas {\n  font-size: 14px;\n  margin-left: 5px;\n}\n\n.scores-container {\n  border: solid 3px var(--primary-color-2);\n  padding: 5px;\n  border-radius: 4px;\n}\n\n.scores-container > ul > li {\n  background: white;\n  padding: 10px;\n  margin: 5px 0;\n  border-radius: 2px;\n  font-weight: 500;\n  word-wrap: break-word;\n}\n\n/* Add Section */\n.add {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.add > .score-heading {\n  margin-bottom: 20px;\n}\n\n.add > .add-form {\n  width: 100%;\n}\n\n.add > .add-form > form {\n  display: flex;\n  flex-direction: column;\n}\n\n.add > .add-form > form input {\n  width: 100%;\n  padding: 12px;\n  margin-bottom: 20px;\n  border: none;\n  border-left: solid 7px gray;\n  font-family: var(--font);\n  border-radius: 2px;\n}\n\n.add > .add-form > form input::-webkit-outer-spin-button,\n.add > .add-form > form input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.add > .add-form > form input:focus {\n  outline: none;\n  border-left: solid 7px var(--primary-color-2);\n}\n\n.add > .add-form > form input[type=number] {\n  -moz-appearance: textfield;\n}\n\n.add > .add-form > form > button {\n  padding: 12px;\n  width: 30%;\n  align-self: flex-end;\n  background: var(--accent-color);\n  border: none;\n  color: #fff;\n  font-family: var(--font);\n  font-size: 1rem;\n  border-radius: 2px;\n  box-shadow: rgba(0, 0, 0, 0.25) 0 25px 50px -12px;\n}\n\n.add > .add-form > form > button:hover {\n  cursor: pointer;\n  background: var(--primary-color-2);\n  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;\n}\n\n.add > .add-form > form > button:focus {\n  outline: none;\n  background: var(--neutral-color-1);\n}\n\n/* Modal */\n#modal {\n  position: absolute;\n  top: -100vh;\n  left: 25%;\n  right: 25%;\n  width: 50%;\n  padding: 15px 0;\n  background: #fff;\n  text-align: center;\n  transition: top ease-out 1s 0.01s;\n}\n\n/* spinner */\n.loading-spinner {\n  animation: rotate-forever linear infinite 0.8s;\n  height: 12px;\n  width: 12px;\n  border: 2px solid #fff;\n  border-right-color: transparent;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n@keyframes rotate-forever {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* Error message */\n.error {\n  color: red;\n  font-size: 12px;\n  margin-bottom: 10px;\n}\n\n/* Footer */\nfooter {\n  position: absolute;\n  bottom: 0;\n  height: 10px;\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n  color: var(--neutral-color-1);\n}\n\n/* Small Screens */\n@media (max-width: 768px) {\n  .main-container {\n    grid-template-columns: 1fr;\n    gap: 50px 0;\n    margin: 5% auto;\n  }\n\n  .results {\n    width: 100%;\n  }\n\n  footer {\n    font-size: 11px;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0saUlBQWlJLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxxQkFBcUIsMkJBQTJCLGNBQWMsZUFBZSwyQkFBMkIsR0FBRyw0QkFBNEIsK0JBQStCLCtCQUErQiw0QkFBNEIsK0JBQStCLGtCQUFrQixrQ0FBa0MsR0FBRywrQkFBK0Is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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ2E7QUFDSDs7QUFFL0IsbUJBQW1CLG1EQUFNOztBQUV6QjtBQUNBLFFBQVEsaUVBQW9CO0FBQzVCO0FBQ0EsRUFBRSw0REFBZ0I7QUFDbEI7QUFDQTtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2ZldGNoV3JhcHBlci5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDgwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDYwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHb29nbGUgZm9udCBpbXBvcnQgKi9cXG5cXG4vKiBSZXNldCBTdHlsZXMgKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBWYXJpYWJsZXMgKi9cXG46cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3ItMTogI2ZlZTNlYztcXG4gIC0tcHJpbWFyeS1jb2xvci0yOiAjZjU1YjhjO1xcbiAgLS1hY2NlbnQtY29sb3I6ICNmODgyYTc7XFxuICAtLW5ldXRyYWwtY29sb3ItMTogIzU1MGYyNDtcXG4gIC0td2hpdGU6ICNmZmY7XFxuICAtLWZvbnQ6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogR2xvYmFsIHN0eWxlcyAqL1xcbmh0bWwge1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3ItMSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4taGVpZ2h0OiA5N3ZoO1xcbn1cXG5cXG51bCA+IGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIE1haW4gR2VuZXJhbCBzdHlsZXMgKi9cXG5tYWluIHtcXG4gIHBhZGRpbmc6IDUwcHggMTAlIDEwcHg7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbC1jb2xvci0xKTtcXG59XFxuXFxuLyogUmVzdWx0cyBzZWN0aW9uICovXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6IDAgNTBweDtcXG4gIG1hcmdpbjogNSUgYXV0bztcXG59XFxuXFxuLnJlc3VsdHMge1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLnJlZnJlc2gtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnJlZnJlc2ggPiBidXR0b24ge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG4ucmVmcmVzaCA+IGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLTIpO1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwIDEzcHggMjdweCAtNXB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMCA4cHggMTZweCAtOHB4O1xcbn1cXG5cXG4ucmVmcmVzaCA+IGJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucmVmcmVzaCA+IGJ1dHRvbiAuZmFzIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5zY29yZXMtY29udGFpbmVyIHtcXG4gIGJvcmRlcjogc29saWQgM3B4IHZhcigtLXByaW1hcnktY29sb3ItMik7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5zY29yZXMtY29udGFpbmVyID4gdWwgPiBsaSB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDVweCAwO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLyogQWRkIFNlY3Rpb24gKi9cXG4uYWRkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZCA+IC5zY29yZS1oZWFkaW5nIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5hZGQgPiAuYWRkLWZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hZGQgPiAuYWRkLWZvcm0gPiBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWRkID4gLmFkZC1mb3JtID4gZm9ybSBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDdweCBncmF5O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG4uYWRkID4gLmFkZC1mb3JtID4gZm9ybSBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcXG4uYWRkID4gLmFkZC1mb3JtID4gZm9ybSBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5hZGQgPiAuYWRkLWZvcm0gPiBmb3JtIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItbGVmdDogc29saWQgN3B4IHZhcigtLXByaW1hcnktY29sb3ItMik7XFxufVxcblxcbi5hZGQgPiAuYWRkLWZvcm0gPiBmb3JtIGlucHV0W3R5cGU9bnVtYmVyXSB7XFxuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG59XFxuXFxuLmFkZCA+IC5hZGQtZm9ybSA+IGZvcm0gPiBidXR0b24ge1xcbiAgcGFkZGluZzogMTJweDtcXG4gIHdpZHRoOiAzMCU7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCAyNXB4IDUwcHggLTEycHg7XFxufVxcblxcbi5hZGQgPiAuYWRkLWZvcm0gPiBmb3JtID4gYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3ItMik7XFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDAgMTNweCAyN3B4IC01cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDhweCAxNnB4IC04cHg7XFxufVxcblxcbi5hZGQgPiAuYWRkLWZvcm0gPiBmb3JtID4gYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTEpO1xcbn1cXG5cXG4vKiBNb2RhbCAqL1xcbiNtb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xMDB2aDtcXG4gIGxlZnQ6IDI1JTtcXG4gIHJpZ2h0OiAyNSU7XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZzogMTVweCAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IHRvcCBlYXNlLW91dCAxcyAwLjAxcztcXG59XFxuXFxuLyogc3Bpbm5lciAqL1xcbi5sb2FkaW5nLXNwaW5uZXIge1xcbiAgYW5pbWF0aW9uOiByb3RhdGUtZm9yZXZlciBsaW5lYXIgaW5maW5pdGUgMC44cztcXG4gIGhlaWdodDogMTJweDtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlLWZvcmV2ZXIge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG4vKiBFcnJvciBtZXNzYWdlICovXFxuLmVycm9yIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbC1jb2xvci0xKTtcXG59XFxuXFxuLyogU21hbGwgU2NyZWVucyAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLm1haW4tY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdhcDogNTBweCAwO1xcbiAgICBtYXJnaW46IDUlIGF1dG87XFxuICB9XFxuXFxuICAucmVzdWx0cyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHVCQUF1Qjs7QUFHdkIsaUJBQWlCO0FBQ2pCO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUEsY0FBYztBQUNkO0VBQ0UsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsNkJBQTZCO0FBQy9COztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLHVGQUF1RjtBQUN6Rjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osV0FBVztFQUNYLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsdUZBQXVGO0FBQ3pGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztBQUNwQzs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0VBQ1YsVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlDQUFpQztBQUNuQzs7QUFFQSxZQUFZO0FBQ1o7RUFDRSw4Q0FBOEM7RUFDOUMsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBLFdBQVc7QUFDWDtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRTtJQUNFLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHb29nbGUgZm9udCBpbXBvcnQgKi9cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDgwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDYwMDsxLDcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKiBSZXNldCBTdHlsZXMgKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBWYXJpYWJsZXMgKi9cXG46cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3ItMTogI2ZlZTNlYztcXG4gIC0tcHJpbWFyeS1jb2xvci0yOiAjZjU1YjhjO1xcbiAgLS1hY2NlbnQtY29sb3I6ICNmODgyYTc7XFxuICAtLW5ldXRyYWwtY29sb3ItMTogIzU1MGYyNDtcXG4gIC0td2hpdGU6ICNmZmY7XFxuICAtLWZvbnQ6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogR2xvYmFsIHN0eWxlcyAqL1xcbmh0bWwge1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3ItMSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4taGVpZ2h0OiA5N3ZoO1xcbn1cXG5cXG51bCA+IGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIE1haW4gR2VuZXJhbCBzdHlsZXMgKi9cXG5tYWluIHtcXG4gIHBhZGRpbmc6IDUwcHggMTAlIDEwcHg7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbC1jb2xvci0xKTtcXG59XFxuXFxuLyogUmVzdWx0cyBzZWN0aW9uICovXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6IDAgNTBweDtcXG4gIG1hcmdpbjogNSUgYXV0bztcXG59XFxuXFxuLnJlc3VsdHMge1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLnJlZnJlc2gtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnJlZnJlc2ggPiBidXR0b24ge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG4ucmVmcmVzaCA+IGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLTIpO1xcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwIDEzcHggMjdweCAtNXB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMCA4cHggMTZweCAtOHB4O1xcbn1cXG5cXG4ucmVmcmVzaCA+IGJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucmVmcmVzaCA+IGJ1dHRvbiAuZmFzIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5zY29yZXMtY29udGFpbmVyIHtcXG4gIGJvcmRlcjogc29saWQgM3B4IHZhcigtLXByaW1hcnktY29sb3ItMik7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5zY29yZXMtY29udGFpbmVyID4gdWwgPiBsaSB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDVweCAwO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLyogQWRkIFNlY3Rpb24gKi9cXG4uYWRkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZCA+IC5zY29yZS1oZWFkaW5nIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5hZGQgPiAuYWRkLWZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hZGQgPiAuYWRkLWZvcm0gPiBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWRkID4gLmFkZC1mb3JtID4gZm9ybSBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDdweCBncmF5O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG4uYWRkID4gLmFkZC1mb3JtID4gZm9ybSBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcXG4uYWRkID4gLmFkZC1mb3JtID4gZm9ybSBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5hZGQgPiAuYWRkLWZvcm0gPiBmb3JtIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItbGVmdDogc29saWQgN3B4IHZhcigtLXByaW1hcnktY29sb3ItMik7XFxufVxcblxcbi5hZGQgPiAuYWRkLWZvcm0gPiBmb3JtIGlucHV0W3R5cGU9bnVtYmVyXSB7XFxuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG59XFxuXFxuLmFkZCA+IC5hZGQtZm9ybSA+IGZvcm0gPiBidXR0b24ge1xcbiAgcGFkZGluZzogMTJweDtcXG4gIHdpZHRoOiAzMCU7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMCAyNXB4IDUwcHggLTEycHg7XFxufVxcblxcbi5hZGQgPiAuYWRkLWZvcm0gPiBmb3JtID4gYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3ItMik7XFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDAgMTNweCAyN3B4IC01cHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDhweCAxNnB4IC04cHg7XFxufVxcblxcbi5hZGQgPiAuYWRkLWZvcm0gPiBmb3JtID4gYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTEpO1xcbn1cXG5cXG4vKiBNb2RhbCAqL1xcbiNtb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xMDB2aDtcXG4gIGxlZnQ6IDI1JTtcXG4gIHJpZ2h0OiAyNSU7XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZzogMTVweCAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IHRvcCBlYXNlLW91dCAxcyAwLjAxcztcXG59XFxuXFxuLyogc3Bpbm5lciAqL1xcbi5sb2FkaW5nLXNwaW5uZXIge1xcbiAgYW5pbWF0aW9uOiByb3RhdGUtZm9yZXZlciBsaW5lYXIgaW5maW5pdGUgMC44cztcXG4gIGhlaWdodDogMTJweDtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlLWZvcmV2ZXIge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG4vKiBFcnJvciBtZXNzYWdlICovXFxuLmVycm9yIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbC1jb2xvci0xKTtcXG59XFxuXFxuLyogU21hbGwgU2NyZWVucyAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLm1haW4tY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdhcDogNTBweCAwO1xcbiAgICBtYXJnaW46IDUlIGF1dG87XFxuICB9XFxuXFxuICAucmVzdWx0cyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qKlxuICogQGNsYXNzIEZldGNoV3JhcHBlciAtIGNsYXNzIHRvIGhhbmRsZSBmZXRjaCBtZXRob2RzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZldGNoV3JhcHBlciB7XG4gIGNvbnN0cnVjdG9yKGJhc2VVUkwpIHtcbiAgICB0aGlzLmJhc2VVUkwgPSBiYXNlVVJMO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBnZXQgLSBpbXBsZW1lbnRzIHRoZSBmZXRjaCBnZXQgcmVxdWVzdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW5kcG9pbnQgLSB0aGUgZW5kcG9pbnQgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIGJhc2VVUkwgdG8gZm9ybSBjb21wbGV0ZSB1cmxcbiAgICogQHJldHVybnMge29iamVjdH0gLSB0aGUgUHJvbWlzZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXJcbiAgICovXG4gIGFzeW5jIGdldChlbmRwb2ludCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy5iYXNlVVJMICsgZW5kcG9pbnQpO1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHBvc3QgLSBpbXBsZW1lbnRzIHRoZSBmZXRjaCBwb3N0IHJlcXVlc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVuZHBvaW50IC0gdGhlIGVuZHBvaW50IHRvIGJlIGF0dGFjaGVkIHRvIHRoZSBiYXNlVVJMIHRvIGZvcm0gY29tcGxldGUgdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gdGhlIGRhdGEgb2JqZWN0IHRvIGJlIHNlbnQgdG8gdGhlIHNlcnZlclxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSAtIHRoZSBQcm9taXNlIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlclxuICAgKi9cbiAgYXN5bmMgcG9zdChlbmRwb2ludCwgZGF0YSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy5iYXNlVVJMICsgZW5kcG9pbnQsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgIH0pO1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH1cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgRmV0Y2hXcmFwcGVyIGZyb20gJy4vZmV0Y2hXcmFwcGVyLmpzJztcblxuY29uc3QgQVBJID0gbmV3IEZldGNoV3JhcHBlcignaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvJyk7XG5jb25zdCBzcGlubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwaW5uZXInKTtcbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKTtcblxuLyoqXG4gKiBAY2xhc3MgSGVscGVyIC0gdGhlIGhlbHBlciBjbGFzc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxwZXIge1xuLyoqXG4gKiBAZnVuY3Rpb24gY3JlYXRlTmV3R2FtZSAtIGNyZWF0ZSBuZXcgZ2FtZSBvbiBsb2FkXG4gKi9cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZU5ld0dhbWUoKSB7XG4gICAgaWYgKCFVdGlscy5nZXRMb2NhbCgpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBnYW1lSUQgPSBhd2FpdCBVdGlscy5nZW5lcmF0ZUlEKCk7XG4gICAgICAgIFV0aWxzLnNldExvY2FsKCdJRCcsIGdhbWVJRCk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBwb3N0SGFuZGxlciAtIGhhbmRsZXMgdGhlIGZvcm0gc3VibWl0IGV2ZW50XG4gICAqIEBwYXJhbSB7RXZlbnQgT2JqZWN0fSBlIC0gdGhlIGV2ZW50IG9iamVjdFxuICAgKi9cbiAgYXN5bmMgcG9zdEhhbmRsZXIoZSkge1xuICAgIGNvbnN0IHVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpLnZhbHVlLnRyaW0oKTtcbiAgICBjb25zdCBzY29yZSA9IE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NvcmUnKS52YWx1ZS50cmltKCkpO1xuICAgIHRyeSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBVdGlscy5pbnB1dENoZWNrZXIoKTtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHVzZXIsXG4gICAgICAgIHNjb3JlLFxuICAgICAgfTtcbiAgICAgIFV0aWxzLnN0YXJ0TG9hZGVyKHN1Ym1pdCwgc3Bpbm5lcik7XG4gICAgICBjb25zdCB7IHJlc3VsdCB9ID0gYXdhaXQgQVBJLnBvc3QoYGdhbWVzLyR7VXRpbHMuZ2V0TG9jYWwoKX0vc2NvcmVzYCwgZGF0YSk7XG4gICAgICBVdGlscy5zaG93TW9kYWwocmVzdWx0KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBVdGlscy5zdG9wTG9hZGVyKHN1Ym1pdCwgc3Bpbm5lciwgJ1N1Ym1pdCcpO1xuICAgICAgVXRpbHMuY2xlYXJGaWVsZHMoKTtcbiAgICAgIFV0aWxzLmlucHV0Rm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGdldEhhbmRsZXIgLSBoYW5kbGVzIHRoZSByZWZyZXNoIGJ1dHRvbiBjbGljayBldmVudFxuICAgKiBAcGFyYW0ge0V2ZW50IE9iamVjdH0gZSAtIHRoZSBldmVudCBvYmplY3RcbiAgICovXG4gIGFzeW5jIGdldEhhbmRsZXIoKSB7XG4gICAgY29uc3QgcmVmcmVzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWZyZXNoJyk7XG4gICAgY29uc3Qgc3BpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGluJyk7XG4gICAgdHJ5IHtcbiAgICAgIFV0aWxzLnN0YXJ0TG9hZGVyKHJlZnJlc2gsIHNwaW4pO1xuICAgICAgYXdhaXQgSGVscGVyLmNyZWF0ZU5ld0dhbWUoKTtcbiAgICAgIGNvbnN0IHsgcmVzdWx0IH0gPSBhd2FpdCBBUEkuZ2V0KGBnYW1lcy8ke1V0aWxzLmdldExvY2FsKCl9L3Njb3Jlcy9gKTtcbiAgICAgIFV0aWxzLmNoZWNrU2NvcmVzKHJlc3VsdCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgVXRpbHMuc3RvcExvYWRlcihyZWZyZXNoLCBzcGluLCAnUmVmcmVzaCA8aSBjbGFzcz1cImZhcyBmYS1zeW5jLWFsdFwiPicpO1xuICAgICAgVXRpbHMuaW5wdXRGb2N1cygpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCBGZXRjaFdyYXBwZXIgZnJvbSAnLi9mZXRjaFdyYXBwZXIuanMnO1xuXG5jb25zdCBBUEkgPSBuZXcgRmV0Y2hXcmFwcGVyKCdodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS8nKTtcbmNvbnN0IHVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xuY29uc3Qgc2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NvcmUnKTtcblxuLyoqXG4gKiBAY2xhc3MgVXRpbHMgLSB0aGUgdXRpbGl0eSBjbGFzcyB0byBob2xkIGFsbCB1dGlsdGl0eSBmdW5jdGlvbmFsaXR5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxzIHtcbi8qKlxuICogQGZ1bmN0aW9uIHN0YXJ0TG9hZGVyIC0gaGFuZGxlcyB0aGUgc3RhcnQgb2YgdGhlIHNwaW5uZXIgbG9hZGluZ1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbTEgLSB0aGUgZmlyc3QgSFRNTEVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW0yIC0gdGhlIHNlY29uZCBIVE1MRWxlbWVudFxuICovXG4gIHN0YXRpYyBzdGFydExvYWRlcihlbGVtMSwgZWxlbTIpIHtcbiAgICBlbGVtMi5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nLXNwaW5uZXInKTtcbiAgICBlbGVtMS5pbm5lckhUTUwgPSAnTG9hZGluZyc7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHN0b3BMb2FkZXIgLSBoYW5kbGVzIHRoZSBzdG9wIG9mIHRoZSBzcGlubmVyIGxvYWRpbmdcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbTEgLSB0aGUgZmlyc3QgSFRNTEVsZW1lbnRcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbTIgLSB0aGUgc2Vjb25kIEhUTUxFbGVtZW50XG4gICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAtIHRoZSBzdHJpbmcgdmFsdWUgdG8gaW5zZXJ0IGludG8gdGhlIERPTVxuICAgKi9cbiAgc3RhdGljIHN0b3BMb2FkZXIoZWxlbTEsIGVsZW0yLCB2YWx1ZSkge1xuICAgIGVsZW0yLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmctc3Bpbm5lcicpO1xuICAgIGVsZW0xLmlubmVySFRNTCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiByZW5kZXIgLSBoYW5kbGVzIHRoZSByZW5kZXJpbmcgb2YgdGhlIHNlcnZlciByZXNwb25zZSBvbiB0aGUgRE9NXG4gICAqIEBwYXJhbSB7QXJyYXl9IGRhdGEgLSB0aGUgYXJyYXkgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyXG4gICAqL1xuICBzdGF0aWMgcmVuZGVyKGRhdGEpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpLmlubmVySFRNTCA9IGRhdGEuc29ydCgoYSwgYikgPT4gYi5zY29yZSAtIGEuc2NvcmUpXG4gICAgICAubWFwKChyZXN1bHQpID0+IGA8bGk+JHtyZXN1bHQudXNlcn0gOiAke3Jlc3VsdC5zY29yZX08L2xpPmApXG4gICAgICAuam9pbignJyk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGdldExvY2FsIC0gaGFuZGxlcyBnZXR0aW5nIHRoZSBJRCBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICogQHJldHVybnMge0FycmF5fSAtIHRoZSBJRCBzdHJpbmdcbiAgICovXG4gIHN0YXRpYyBnZXRMb2NhbCgpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnSUQnKSk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIHNldExvY2FsIC0gaGFuZGxlcyBzZXR0aW5nIHRoZSBJRCB0byB0aGUgbG9jYWwgc3RvcmFnZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gaWQgLSB0aGUga2V5IHRvIHNldCBpbiB0aGUgbG9jYWwgc3RvcmFnZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YSAtIHRoZSBkYXRhIHZhbHVlIHRvIHNldCBpbiB0aGUgbG9jYWwgc3RvcmFnZVxuICAgKi9cbiAgc3RhdGljIHNldExvY2FsKGlkLCBkYXRhKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaWQsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZnVuY3Rpb24gZ2VuZXJhdGVJRCAtIGhhbmRsZXMgY3JlYXRpbmcgYSBuZXcgZ2FtZSBJRFxuICAgKiBAcmV0dXJucyB7U3RyaW5nfSAtIHRoZSBuZXcgZ2FtZSBJRFxuICAgKi9cbiAgc3RhdGljIGFzeW5jIGdlbmVyYXRlSUQoKSB7XG4gICAgY29uc3QgeyByZXN1bHQgfSA9IGF3YWl0IEFQSS5wb3N0KCdnYW1lcy8nLCB7IG5hbWU6ICdNeSBjb29sIG5ldyBnYW1lJyB9KTtcbiAgICByZXR1cm4gcmVzdWx0LnN1YnN0cigxNCwgMjApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBjbGVhckZpZWxkcyAtIGhhbmRsZXMgY2xlYXJpbmcgdGhlIGlucHV0IGFmdGVyIHN1Ym1pdFxuICAgKi9cbiAgc3RhdGljIGNsZWFyRmllbGRzKCkge1xuICAgIHVzZXIudmFsdWUgPSAnJztcbiAgICBzY29yZS52YWx1ZSA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBzaG93TW9kYWwgLSBzaG93cyB0aGUgbW9kYWxcbiAgICogQHBhcmFtIHtTdHJpbmd9IHJlc3VsdCAtIHRoZSByZXN1bHQgZnJvbSB0aGUgc2VydmVyXG4gICAqIEByZXR1cm5zIC0gc3RvcHMgb3BlcmF0aW9ucyBpZiBpbnB1dHMgYXJlIGVtcHR5XG4gICAqL1xuICBzdGF0aWMgc2hvd01vZGFsKHJlc3VsdCkge1xuICAgIFV0aWxzLmlucHV0Q2hlY2tlcigpO1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwnKTtcbiAgICBlbGVtLmlubmVySFRNTCA9IHJlc3VsdDtcbiAgICBlbGVtLnN0eWxlLnRvcCA9ICctN3ZoJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGVsZW0uc3R5bGUudG9wID0gJy0xMDB2aCc7XG4gICAgfSwgMzAwMCk7XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGlucHV0Q2hlY2tlciAtIGhhbmRsZXMgc3RvcHBpbmcgb3BlcmF0aW9ucyBpZiBpbnB1dHMgYXJlIGVtcHR5XG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBzdGF0aWMgaW5wdXRDaGVja2VyKCkge1xuICAgIGlmICh1c2VyLnZhbHVlID09PSAnJyB8fCBzY29yZS52YWx1ZSA9PT0gJycpIHtcbiAgICAgIFV0aWxzLmRpc3BsYXlFcnJvcignVGhlIHVzZXIgYW5kIHNjb3JlIGlucHV0cyBjYW4gbm90IGJlIGVtcHR5Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFV0aWxzLmRpc3BsYXlFcnJvcignJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBpbnB1dEZvY3VzIC0gaGFuZGxlcyB0aGUgaW5wdXQgZm9jdXMgb24gbG9hZFxuICAgKi9cbiAgc3RhdGljIGlucHV0Rm9jdXMoKSB7XG4gICAgdXNlci5mb2N1cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBmdW5jdGlvbiBjaGVja1Njb3JlcyAtIGNoZWNrcyB0aGUgbGVuZ3RoIG9mIHRoZSBhcnJheSByZXRyaWV2ZWQgZnJvbSB0aGUgc2VydmVyXG4gICAqIEBwYXJhbSB7QXJyYXl9IHJlc3VsdCAtIHRoZSByZXN1bHQgYXJyYXkgZnJvbSB0aGUgc2VydmVyXG4gICAqL1xuICBzdGF0aWMgY2hlY2tTY29yZXMocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDApIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0JykuaW5uZXJIVE1MID0gJzxsaT5ObyBMZWFkZXJib2FyZCBzY29yZXMgYWRkZWQgeWV0PC9saT4nO1xuICAgIH0gZWxzZSB7XG4gICAgICBVdGlscy5yZW5kZXIocmVzdWx0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGZ1bmN0aW9uIGRpc3BsYXlFcnJvciAtIGhhbmRsZSB0aGUgZGlzcGxheSBvZiBlcnJvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSB0aGUgZXJyb3Igc3RyaW5nXG4gICAqL1xuICBzdGF0aWMgZGlzcGxheUVycm9yKHZhbHVlKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJykuaW5uZXJIVE1MID0gYCR7dmFsdWV9YDtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9oZWxwZXJzLmpzJztcbmltcG9ydCBVdGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuY29uc3QgaGVscGVyID0gbmV3IEhlbHBlcigpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFzeW5jICgpID0+IHtcbiAgYXdhaXQgSGVscGVyLmNyZWF0ZU5ld0dhbWUoKTtcbiAgYXdhaXQgaGVscGVyLmdldEhhbmRsZXIoKTtcbiAgVXRpbHMuaW5wdXRGb2N1cygpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWZvcm0gZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhlbHBlci5wb3N0SGFuZGxlcik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWZyZXNoLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGVscGVyLmdldEhhbmRsZXIpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9