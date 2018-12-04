webpackJsonp([2],{

/***/ "./node_modules/css-loader/index.js?{\"importLoaders\":1}!./node_modules/postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null]}!./src/containers/Calendar/index.css":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?{"importLoaders":1}!./node_modules/postcss-loader/lib?{"ident":"postcss","plugins":[null,null]}!./src/containers/Calendar/index.css ***!
  \*********************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".calendar-iframe {\n    width: 100%;\n    border: none;\n}", ""]);

// exports


/***/ }),

/***/ "./src/containers/Calendar/index.css":
/*!*******************************************!*\
  !*** ./src/containers/Calendar/index.css ***!
  \*******************************************/
/*! dynamic exports provided */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--1-oneOf-2-1!../../../node_modules/postcss-loader/lib??postcss!./index.css */ "./node_modules/css-loader/index.js?{\"importLoaders\":1}!./node_modules/postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null]}!./src/containers/Calendar/index.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(/*! !../../../node_modules/css-loader??ref--1-oneOf-2-1!../../../node_modules/postcss-loader/lib??postcss!./index.css */ "./node_modules/css-loader/index.js?{\"importLoaders\":1}!./node_modules/postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null]}!./src/containers/Calendar/index.css", function() {
			var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--1-oneOf-2-1!../../../node_modules/postcss-loader/lib??postcss!./index.css */ "./node_modules/css-loader/index.js?{\"importLoaders\":1}!./node_modules/postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null]}!./src/containers/Calendar/index.css");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/containers/Calendar/index.js":
/*!******************************************!*\
  !*** ./src/containers/Calendar/index.js ***!
  \******************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_css__ = __webpack_require__(/*! ./index.css */ "./src/containers/Calendar/index.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_css__);
var _jsxFileName = '/app/src/containers/Calendar/index.js',
    _this = this;




var Calendar = function Calendar() {
    var MODE = "DAY";
    if (window.DEVICE.toLowerCase() === "tablet") {
        MODE = "WEEK";
    }
    if (window.DEVICE.toLowerCase() === "computer") {
        MODE = "MONTH";
    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('iframe', { className: "calendar-iframe", src: "https://calendar.google.com/calendar/embed?src=sahiln.narula%40gmail.com&ctz=America%2FToronto&mode=" + MODE, __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        },
        __self: _this
    });
};

/* harmony default export */ __webpack_exports__["default"] = (Calendar);

/***/ })

});
//# sourceMappingURL=2.chunk.js.map