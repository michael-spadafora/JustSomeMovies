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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Movie.js":
/*!*****************************!*\
  !*** ./components/Movie.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Jackie Quach\\IdeaProjects\\SBUdb\\components\\Movie.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Movie =
/*#__PURE__*/
function (_Component) {
  _inherits(Movie, _Component);

  function Movie() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Movie);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Movie)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      movies: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getMovies", function (_) {
      fetch('http://localhost:4000/movies').then(function (response) {
        return response.json();
      }).then(function (response) {
        return _this.setState({
          movies: response.movies
        });
      }).catch(function (err) {
        return console.error(err);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderMovie", function (_ref) {
      var movie_id = _ref.movie_id,
          title = _ref.title,
          poster_url = _ref.poster_url;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: movie_id,
        className: "movieBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "image",
        src: "https://image.tmdb.org/t/p/w500" + poster_url,
        alt: title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "imgText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, title));
    });

    return _this;
  }

  _createClass(Movie, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getMovies();
    }
  }, {
    key: "render",
    value: function render() {
      var movies = this.state.movies;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2660626337" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, movies.map(this.renderMovie), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Nunito:900:300",
        rel: "stylesheet",
        className: "jsx-2660626337",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2660626337",
        css: ".container{display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fill,200px);}img{width:200px;border-radius:5px;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;}.movieBox{position:relative;width:200px;height:280px;margin:10px;}.movieBox img{display:block;}.movieBox:hover>.imgText{opacity:1;cursor:pointer;}.movieBox:hover>img{opacity:0.3;cursor:pointer;-webkit-transform:scale(0.97);-ms-transform:scale(0.97);transform:scale(0.97);}.imgText{opacity:0;color:black;font-size:20px;-webkit-transition:.3s ease;transition:.3s ease;position:relative;top:-50%;text-align:center;font-family:Nunito;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSmFja2llIFF1YWNoXFxJZGVhUHJvamVjdHNcXFNCVWRiXFxjb21wb25lbnRzXFxNb3ZpZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Qm9DLEFBR3NDLEFBS0QsQUFLSyxBQU1KLEFBR0osQUFJRSxBQUtGLFVBUkssQUFTRixFQXZCSyxBQWtCSCxDQXZCQSxDQWdCbEIsSUFOZSxJQW1CSSxHQVRuQixFQW5CaUQsQUF1QnhCLEdBbEJVLEFBS25CLE9BbUJRLE1BbEJULFlBQ2Ysa0JBWEEsWUE2QnNCLGVBeEJ0QixHQXlCYSxFQVBiLE9BUXNCLGtCQUNDLG1CQUN2QiIsImZpbGUiOiJDOlxcVXNlcnNcXEphY2tpZSBRdWFjaFxcSWRlYVByb2plY3RzXFxTQlVkYlxcY29tcG9uZW50c1xcTW92aWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIE1vdmllIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBtb3ZpZXM6IFtdXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmdldE1vdmllcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1vdmllcyA9IF8gPT4ge1xyXG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvbW92aWVzJylcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB0aGlzLnNldFN0YXRlKHttb3ZpZXM6IHJlc3BvbnNlLm1vdmllc30pKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyTW92aWUgPSAoe21vdmllX2lkLCB0aXRsZSwgcG9zdGVyX3VybH0pID0+IFxyXG4gICAgPGRpdiBrZXk9e21vdmllX2lkfSBjbGFzc05hbWU9XCJtb3ZpZUJveFwiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2VcIiBzcmM9e1wiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMFwiICsgcG9zdGVyX3VybH0gYWx0PXt0aXRsZX0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1RleHRcIj57dGl0bGV9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge21vdmllc30gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIHttb3ZpZXMubWFwKHRoaXMucmVuZGVyTW92aWUpfVxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86OTAwOjMwMFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD4ge2BcclxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdChhdXRvLWZpbGwsMjAwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tb3ZpZUJveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjI4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm1vdmllQm94IGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tb3ZpZUJveDpob3ZlciA+IC5pbWdUZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm1vdmllQm94OmhvdmVyID4gaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTowLjM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMC45Nyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbWdUZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjNzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZTsiXX0= */\n/*@ sourceURL=C:\\Users\\Jackie Quach\\IdeaProjects\\SBUdb\\components\\Movie.js */",
        __self: this
      }));
    }
  }]);

  return Movie;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Movie);

/***/ }),

/***/ "./components/Person.js":
/*!******************************!*\
  !*** ./components/Person.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Jackie Quach\\IdeaProjects\\SBUdb\\components\\Person.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Person =
/*#__PURE__*/
function (_Component) {
  _inherits(Person, _Component);

  function Person() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Person);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Person)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      movies: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getMovies", function (_) {
      fetch('http://localhost:4000/movies').then(function (response) {
        return response.json();
      }).then(function (response) {
        return _this.setState({
          movies: response.movies
        });
      }).catch(function (err) {
        return console.error(err);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderMovie", function (_ref) {
      var movie_id = _ref.movie_id,
          title = _ref.title;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: movie_id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, title);
    });

    return _this;
  }

  _createClass(Person, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getMovies();
    }
  }, {
    key: "render",
    value: function render() {
      var movies = this.state.movies;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, movies.map(this.renderMovie));
    }
  }]);

  return Person;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/*const Person = () => (
    <div className="container">
        <div className="personPicture">
            <img src="https://m.media-amazon.com/images/M/MV5BODEwMjkzNDIzOV5BMl5BanBnXkFtZTgwOTQ4NTU0NzE@._V1_UX214_CR0,0,214,317_AL_.jpg"/>
        </div>
        <div className="personInfo">
            <h2 className = "personName">
                Rami Malek
            </h2>
            <p>About: Actor / Director </p>
            <p>Date of Birth: May 12, 1981</p>
        </div>
        <link href="https://fonts.googleapis.com/css?family=Nunito:900:300" rel="stylesheet"/>
        <style jsx global> {`
            body {
                background-color: #f0f0f0;
                font-family: Nunito;
            }
            .container {
                width: 300px;
                margin: 120px auto 120px;
                background-color: #fff;
                padding: 0 20px 20px;
                border-radius: 6px;
                -webkit-border-radius: 6px;
                -moz-border-radius: 6px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.075);
                -webkit-box-shadow: 0 2px 5px rgba(0,0,0,0.075);
                -moz-box-shadow: 0 2px 5px rgba(0,0,0,0.075);
                text-align: center;
            }
            .closeX {
                text-align:right;
                padding-top:10px;
            }
            .personPicture {
                overflow: hidden;
                height: 300px;
                width: 210px;
                position: relative;
                margin: auto;
                top: -80px;
                -webkit-box-shadow: 0 0 0 5px #f0f0f0;
                -moz-box-shadow: 0 0 0 5px #f0f0f0;
            }
            .personPicture img {
                position: absolute;
                left: 0;
                top: 0;
            }
            .personInfo {
                position: relative;
                top:-80px;
            }
            h2 {
                font-size: 32px;
                font-weight: 600;
                margin-bottom: 15px;
                color: #333;
            }
            p {
                font-size: 16px;
                line-height: 26px;
                margin-bottom: 20px;
                color: #666;
            }
        `}</style>
    </div>
)
}*/


/* harmony default export */ __webpack_exports__["default"] = (Person);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Person_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Person.js */ "./components/Person.js");
/* harmony import */ var _components_Movie_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Movie.js */ "./components/Movie.js");
var _jsxFileName = "C:\\Users\\Jackie Quach\\IdeaProjects\\SBUdb\\pages\\index.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Movie_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map