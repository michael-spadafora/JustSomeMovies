module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "C:\\Users\\mike spad\\Documents\\CSE 305\\SBUdb\\SBUdb\\components\\Header.js";


var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Home")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "About")));
};

/* unused harmony default export */ var _unused_webpack_default_export = (Header);

/***/ }),

/***/ "./components/LeftArrow.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_icons_fa__ = __webpack_require__("react-icons/fa");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_icons_fa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_icons_fa__);
var _jsxFileName = "C:\\Users\\mike spad\\Documents\\CSE 305\\SBUdb\\SBUdb\\components\\LeftArrow.js";


var styles = {
  position: "absolute",
  top: 200,
  left: 25
};

var LeftArrow = function LeftArrow(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "backArrow",
    onClick: props.goToPrevSlide,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_icons_fa__["FaArrowAltCircleLeft"], {
    size: "50px",
    style: styles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (LeftArrow);

/***/ }),

/***/ "./components/RightArrow.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_icons_fa__ = __webpack_require__("react-icons/fa");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_icons_fa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_icons_fa__);
var _jsxFileName = "C:\\Users\\mike spad\\Documents\\CSE 305\\SBUdb\\SBUdb\\components\\RightArrow.js";


var styles = {
  position: "absolute",
  top: 200,
  left: 575
};

var LeftArrow = function LeftArrow(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "forwardArrow",
    onClick: props.goToNextSlide,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_icons_fa__["FaArrowAltCircleRight"], {
    size: "50px",
    style: styles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (LeftArrow);

/***/ }),

/***/ "./components/Slide.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_image__ = __webpack_require__("react-image");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_image__);
var _jsxFileName = "C:\\Users\\mike spad\\Documents\\CSE 305\\SBUdb\\SBUdb\\components\\Slide.js";



var Slide = function Slide(_ref) {
  var image = _ref.image;
  var styles = {
    backgroundImage: "url(".concat(image, ")"),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  };
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_image___default.a, {
    src: image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Slide);

/***/ }),

/***/ "./components/Slider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Slider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Slide__ = __webpack_require__("./components/Slide.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_LeftArrow__ = __webpack_require__("./components/LeftArrow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_RightArrow__ = __webpack_require__("./components/RightArrow.js");
var _jsxFileName = "C:\\Users\\mike spad\\Documents\\CSE 305\\SBUdb\\SBUdb\\components\\Slider.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Slider =
/*#__PURE__*/
function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "goToPrevSlide", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.state.currentIndex <= 0) {
          return _this.setState({
            currentIndex: 0,
            //should end up being prevState.currentIndex - 1
            translateValue: 0 //should end up being total number of slides * slide size

          });
        }

        _this.setState(function (prevState) {
          return {
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + _this.slideWidth()
          };
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "goToNextSlide", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        // Exiting the method early if we are at the end of the images array.
        // We also want to reset currentIndex and translateValue, so we return
        // to the first image in the array.
        if (_this.state.currentIndex === _this.state.images.length - 1) {
          return _this.setState({
            currentIndex: 0,
            translateValue: 0
          });
        } // This will not run if we met the if condition above


        _this.setState(function (prevState) {
          return {
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -_this.slideWidth()
          };
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "slideWidth", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return document.querySelector('.slide').clientWidth;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "slideHeight", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return document.querySelector('.slide').clientHeight;
      }
    });
    _this.state = {
      images: ["https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg", "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg", "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg", "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg", "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg", "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg", "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg", "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"],
      currentIndex: 0,
      translateValue: 0
    };
    return _this;
  }

  _createClass(Slider, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "slider",
        style: {
          position: 'absolute',
          top: 50,
          width: 640,
          height: 400,
          overflow: 'hidden'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "slider-wrapper",
        style: {
          transform: "translateX(".concat(this.state.translateValue, "px)"),
          transition: 'transform ease-out 0.45s',
          display: 'flex'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, this.state.images.map(function (image, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Slide__["a" /* default */], {
          key: i,
          image: image,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        });
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "arrow-wrapper",
        style: {
          display: 'flex'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_LeftArrow__["a" /* default */], {
        goToPrevSlide: this.goToPrevSlide,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_RightArrow__["a" /* default */], {
        goToNextSlide: this.goToNextSlide,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      })));
    }
  }]);

  return Slider;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Slider__ = __webpack_require__("./components/Slider.js");
var _jsxFileName = "C:\\Users\\mike spad\\Documents\\CSE 305\\SBUdb\\SBUdb\\pages\\index.js";





var Index = function Index(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Slider__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Hello Next.js"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-image":
/***/ (function(module, exports) {

module.exports = require("react-image");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map