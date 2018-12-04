webpackJsonp([0],{

/***/ "./node_modules/css-loader/index.js?{\"importLoaders\":1}!./node_modules/postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null]}!./src/containers/Reader/index.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?{"importLoaders":1}!./node_modules/postcss-loader/lib?{"ident":"postcss","plugins":[null,null]}!./src/containers/Reader/index.css ***!
  \*******************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".pdf-reader {\n    width: 100%;\n}", ""]);

// exports


/***/ }),

/***/ "./src/containers/Reader/index.css":
/*!*****************************************!*\
  !*** ./src/containers/Reader/index.css ***!
  \*****************************************/
/*! dynamic exports provided */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--1-oneOf-2-1!../../../node_modules/postcss-loader/lib??postcss!./index.css */ "./node_modules/css-loader/index.js?{\"importLoaders\":1}!./node_modules/postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null]}!./src/containers/Reader/index.css");
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
		module.hot.accept(/*! !../../../node_modules/css-loader??ref--1-oneOf-2-1!../../../node_modules/postcss-loader/lib??postcss!./index.css */ "./node_modules/css-loader/index.js?{\"importLoaders\":1}!./node_modules/postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null]}!./src/containers/Reader/index.css", function() {
			var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--1-oneOf-2-1!../../../node_modules/postcss-loader/lib??postcss!./index.css */ "./node_modules/css-loader/index.js?{\"importLoaders\":1}!./node_modules/postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null]}!./src/containers/Reader/index.css");
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/containers/Reader/index.js":
/*!****************************************!*\
  !*** ./src/containers/Reader/index.js ***!
  \****************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_css__ = __webpack_require__(/*! ./index.css */ "./src/containers/Reader/index.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_css__);
var _jsxFileName = "/app/src/containers/Reader/index.js",
    _this = this;




var Reader = function Reader() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "object",
        { className: "pdf-reader", data: "/assets/pdfs/pdf1.pdf", type: "application/pdf", __source: {
                fileName: _jsxFileName,
                lineNumber: 6
            },
            __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("iframe", { src: "/assets/pdfs/pdf1.pdf", __source: {
                fileName: _jsxFileName,
                lineNumber: 7
            },
            __self: _this
        })
    );
};

/* harmony default export */ __webpack_exports__["default"] = (Reader);

/***/ })

});
//# sourceMappingURL=0.chunk.js.map