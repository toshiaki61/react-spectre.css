(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("classnames"), require("lodash.noop"), require("moment"), require("prop-types"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["classnames", "lodash.noop", "moment", "prop-types", "react"], factory);
	else if(typeof exports === 'object')
		exports["ReactSpectre"] = factory(require("classnames"), require("lodash.noop"), require("moment"), require("prop-types"), require("react"));
	else
		root["ReactSpectre"] = factory(root["classNames"], root["noop"], root["moment"], root["PropTypes"], root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_classnames__, __WEBPACK_EXTERNAL_MODULE_lodash_noop__, __WEBPACK_EXTERNAL_MODULE_moment__, __WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Accordion.jsx":
/*!**************************************!*\
  !*** ./src/components/Accordion.jsx ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Menu__ = __webpack_require__(/*! ./Menu */ "./src/components/Menu.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__elements_Icon__ = __webpack_require__(/*! ../elements/Icon */ "./src/elements/Icon.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__elements_form_uniqueId__ = __webpack_require__(/*! ../elements/form/uniqueId */ "./src/elements/form/uniqueId.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utilities_position__ = __webpack_require__(/*! ../utilities/position */ "./src/utilities/position.js");
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/components/Accordion.jsx',
    _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }









var Item = function Item(_ref) {
  var contents = _ref.contents,
      className = _ref.className,
      exclusive = _ref.exclusive,
      useIcon = _ref.useIcon,
      header = _ref.header;

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('accordion-item', className);
  var id = Object(__WEBPACK_IMPORTED_MODULE_4__elements_form_uniqueId__["a" /* default */])('accordion-item');
  var type = exclusive ? 'radio' : 'checkbox';
  var inputProps = { id: id, type: type, name: 'accordion-' + type };
  var icon = useIcon ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__elements_Icon__["a" /* default */], { className: Object(__WEBPACK_IMPORTED_MODULE_5__utilities_position__["a" /* default */])({ marginRight: true }), arrowRight: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: _this
  }) : null;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: classes, __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', Object.assign({}, inputProps, { hidden: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: _this
    })),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'label',
      { className: 'accordion-header', htmlFor: id, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: _this
      },
      icon,
      header
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'accordion-body', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Menu__["a" /* default */], { nav: true, contents: contents, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: _this
      })
    )
  );
};
Item.defaultProps = {
  className: '',
  exclusive: false,
  useIcon: false
};

var Accordion = function Accordion(_ref2) {
  var menus = _ref2.menus,
      className = _ref2.className,
      exclusive = _ref2.exclusive,
      useIcon = _ref2.useIcon;

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('accordion', className);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: classes, __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: _this
    },
    menus.map(function (_ref3, i) {
      var header = _ref3.header,
          contents = _ref3.contents,
          menu = _objectWithoutProperties(_ref3, ['header', 'contents']);

      var key = 'accordion_' + i;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Item, Object.assign({
        key: key,
        exclusive: exclusive,
        useIcon: useIcon,
        header: header,
        contents: contents
      }, menu, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: _this
      }));
    })
  );
};
Accordion.defaultProps = {
  className: '',
  exclusive: false,
  useIcon: false
};

/* harmony default export */ __webpack_exports__["a"] = (Accordion);

/***/ }),

/***/ "./src/components/Autocomplete.jsx":
/*!*****************************************!*\
  !*** ./src/components/Autocomplete.jsx ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Chip__ = __webpack_require__(/*! ./Chip */ "./src/components/Chip.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Tile__ = __webpack_require__(/*! ./Tile */ "./src/components/Tile.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Avatar__ = __webpack_require__(/*! ./Avatar */ "./src/components/Avatar.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__elements_Icon__ = __webpack_require__(/*! ../elements/Icon */ "./src/elements/Icon.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__elements_Button__ = __webpack_require__(/*! ../elements/Button */ "./src/elements/Button.jsx");
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/components/Autocomplete.jsx',
    _this2 = this;










var delimiter = '______';
function mark(target, search) {
  var _this = this;

  if (!search) {
    return target;
  }
  var regex = new RegExp('(' + search + ')', 'ig');
  return target.replace(regex, delimiter + '$1' + delimiter).replace(new RegExp('^' + delimiter + '|' + delimiter + '$', 'g'), '').split(delimiter).filter(function (row) {
    return row !== '';
  }).map(function (row, i) {
    if (regex.test(row)) {
      var key = 'mark-' + i;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'mark',
        { key: key, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: _this
        },
        row
      );
    }
    return row;
  });
}
function filter(word, key) {
  var regex = new RegExp(word, 'ig');
  return function search(value) {
    if (word === '') {
      return true;
    }
    return regex.test(value[key]);
  };
}

var Autocomplete = function Autocomplete(_ref) {
  var placeholder = _ref.placeholder,
      active = _ref.active,
      selected = _ref.selected,
      suggests = _ref.suggests,
      input = _ref.input,
      loading = _ref.loading,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      onClearClick = _ref.onClearClick,
      onSelected = _ref.onSelected;

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('form-autocomplete-input form-input', {
    'is-focused': active
  });
  var inputNode = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
    className: 'form-input',
    type: 'text',
    placeholder: placeholder,
    value: input,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: _this2
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      className: 'form-autocomplete',
      onFocus: onFocus,
      onBlur: onBlur,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: _this2
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: classes, __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: _this2
      },
      selected.map(function (_ref2) {
        var id = _ref2.id,
            name = _ref2.name,
            img = _ref2.img,
            initial = _ref2.initial;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Chip__["a" /* default */], {
          key: id,
          avatar: { initial: initial, img: img, alt: name },
          content: name,
          clear: active,
          onClearClick: function (_onClearClick) {
            function onClearClick(_x) {
              return _onClearClick.apply(this, arguments);
            }

            onClearClick.toString = function () {
              return _onClearClick.toString();
            };

            return onClearClick;
          }(function (e) {
            return onClearClick(e, id);
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: _this2
        });
      }),
      loading ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'has-icon-left', __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: _this2
        },
        inputNode,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__elements_Icon__["a" /* default */], { form: true, loading: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: _this2
        })
      ) : inputNode
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      { className: 'menu', style: { position: active ? 'static' : 'absolute' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: _this2
      },
      suggests.filter(filter(input, 'name')).map(function (_ref3) {
        var id = _ref3.id,
            name = _ref3.name,
            img = _ref3.img,
            initial = _ref3.initial;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { key: id, className: 'menu-item', __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            },
            __self: _this2
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6__elements_Button__["a" /* default */],
            { href: '#', onClick: function onClick(e) {
                return onSelected(e, id);
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 102
              },
              __self: _this2
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Tile__["a" /* default */], {
              compact: true,
              content: mark(name, input),
              icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Avatar__["a" /* default */], { sm: true, initial: initial, img: img, alt: name, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 106
                },
                __self: _this2
              }),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 103
              },
              __self: _this2
            })
          )
        );
      })
    )
  );
};
Autocomplete.defaultProps = {
  placeholder: 'typing here',
  active: false,
  selected: [],
  suggests: [],
  input: '',
  loading: false
};

/* harmony default export */ __webpack_exports__["a"] = (Autocomplete);

/***/ }),

/***/ "./src/components/Avatar.jsx":
/*!***********************************!*\
  !*** ./src/components/Avatar.jsx ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/components/Avatar.jsx',
    _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var Icon = function Icon(_ref) {
  var className = _ref.className,
      alt = _ref.alt,
      props = _objectWithoutProperties(_ref, ['className', 'alt']);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('avatar-icon', className);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', Object.assign({ className: classes, alt: alt }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: _this
  }));
};
Icon.defaultProps = {
  alt: '',
  className: ''
};

var Presence = function Presence(_ref2) {
  var presence = _ref2.presence;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('avatar-presence', presence), __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: _this
  });
};

var Avatar = function Avatar(_ref3) {
  var className = _ref3.className,
      xl = _ref3.xl,
      lg = _ref3.lg,
      sm = _ref3.sm,
      xs = _ref3.xs,
      initial = _ref3.initial,
      img = _ref3.img,
      icon = _ref3.icon,
      alt = _ref3.alt,
      presence = _ref3.presence,
      props = _objectWithoutProperties(_ref3, ['className', 'xl', 'lg', 'sm', 'xs', 'initial', 'img', 'icon', 'alt', 'presence']);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('avatar', {
    'avatar-xl': xl,
    'avatar-lg': lg,
    'avatar-sm': sm,
    'avatar-xs': xs
  }, className);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'figure',
    Object.assign({ className: classes, 'data-initial': initial }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: _this
    }),
    img ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: img, alt: alt, __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: _this
    }) : null,
    icon ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Avatar, { className: 'avatar-icon', initial: icon.initial, src: icon.src, alt: icon.alt, __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: _this
    }) : null,
    presence ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Presence, { presence: presence, __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: _this
    }) : null
  );
};

Avatar.defaultProps = {
  className: '',
  xl: false,
  lg: false,
  sm: false,
  xs: false,
  initial: '',
  img: '',
  icon: undefined,
  alt: '',
  presence: ''
};

/* harmony default export */ __webpack_exports__["a"] = (Avatar);

/***/ }),

/***/ "./src/components/Bar.jsx":
/*!********************************!*\
  !*** ./src/components/Bar.jsx ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elements_Button__ = __webpack_require__(/*! ../elements/Button */ "./src/elements/Button.jsx");
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/components/Bar.jsx',
    _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var Item = function Item(_ref) {
  var small = _ref.small,
      tooltip = _ref.tooltip,
      content = _ref.content,
      props = _objectWithoutProperties(_ref, ['small', 'tooltip', 'content']);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('bar-item', { tooltip: tooltip });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    Object.assign({
      className: classes,
      'data-tooltip': tooltip
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: _this
    }),
    small ? null : content
  );
};
Item.defaultProps = {
  small: false,
  tooltip: '',
  content: ''
};

var Bar = function Bar(_ref2) {
  var className = _ref2.className,
      small = _ref2.small,
      slider = _ref2.slider,
      items = _ref2.items;

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('bar', {
    'bar-sm': small,
    'bar-slider': slider
  }, className);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: classes, __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: _this
    },
    items.map(function (item, i) {
      var key = 'bar-item-' + i;
      if (slider) {
        var _value = item.value + '%';
        Object.assign(item, {
          role: 'progressbar',
          style: { width: _value },
          content: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__elements_Button__["a" /* default */], { className: 'bar-slider-btn tooltip', 'data-tooltip': _value, __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: _this
          })
        });
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Item, Object.assign({ key: key, small: small }, item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: _this
      }));
    })
  );
};
Bar.defaultProps = {
  className: '',
  small: false,
  slider: false,
  items: []
};

/* harmony default export */ __webpack_exports__["a"] = (Bar);

/***/ }),

/***/ "./src/components/Breadcrumb.jsx":
/*!***************************************!*\
  !*** ./src/components/Breadcrumb.jsx ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/components/Breadcrumb.jsx',
    _this = this;



var Item = function Item(_ref) {
  var link = _ref.link,
      content = _ref.content;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'li',
    { className: 'breadcrumb-item', __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      { href: link, __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: _this
      },
      content
    )
  );
};
Item.defaultProps = {
  link: '#',
  content: ''
};

var Breadcrumb = function Breadcrumb(_ref2) {
  var items = _ref2.items;

  if (items.length === 0) {
    return null;
  }
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    { className: 'breadcrumb', __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: _this
    },
    items.map(function (item, i) {
      var key = 'breadcrumb-' + i;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Item, Object.assign({ key: key }, item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: _this
      }));
    })
  );
};
Breadcrumb.defaultProps = {
  items: []
};

/* harmony default export */ __webpack_exports__["a"] = (Breadcrumb);

/***/ }),

/***/ "./src/components/Card.jsx":
/*!*********************************!*\
  !*** ./src/components/Card.jsx ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/components/Card.jsx',
    _this = this;



var Item = function Item(_ref) {
  var type = _ref.type,
      content = _ref.content;

  switch (type) {
    case 'image':
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'card-image', __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: _this
        },
        content
      );
    case 'body':
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'card-body', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: _this
        },
        content
      );
    case 'footer':
    default:
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'card-footer', __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: _this
        },
        content
      );
  }
};
Item.defaultProps = {
  type: '',
  content: null
};

var Card = function Card(_ref2) {
  var items = _ref2.items;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'card', __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: _this
    },
    items.map(function (item, i) {
      var key = 'card-' + i;
      if (item.type === 'header') {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { key: key, className: 'card-header', __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: _this
          },
          item.content.button,
          item.content.title ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'card-title h5', __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              },
              __self: _this
            },
            item.content.title
          ) : null,
          item.content.subtitle ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'card-subtitle text-gray', __source: {
                fileName: _jsxFileName,
                lineNumber: 53
              },
              __self: _this
            },
            item.content.subtitle
          ) : null
        );
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Item, Object.assign({ key: key }, item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: _this
      }));
    })
  );
};
Card.defaultProps = {
  items: []
};

/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ "./src/components/Chip.jsx":
/*!*********************************!*\
  !*** ./src/components/Chip.jsx ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_noop__ = __webpack_require__(/*! lodash.noop */ "lodash.noop");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_noop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_noop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Avatar__ = __webpack_require__(/*! ./Avatar */ "./src/components/Avatar.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__elements_Button__ = __webpack_require__(/*! ../elements/Button */ "./src/elements/Button.jsx");
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/components/Chip.jsx',
    _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var Chip = function Chip(_ref) {
  var clear = _ref.clear,
      icon = _ref.icon,
      avatar = _ref.avatar,
      content = _ref.content,
      className = _ref.className,
      onClearClick = _ref.onClearClick,
      props = _objectWithoutProperties(_ref, ['clear', 'icon', 'avatar', 'content', 'className', 'onClearClick']);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('chip', className);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: _this
    }),
    icon,
    avatar ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Avatar__["a" /* default */], { sm: true, initial: avatar.initial, img: avatar.img, alt: avatar.alt, __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: _this
    }) : null,
    content,
    clear ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__elements_Button__["a" /* default */], { clear: true, onClick: onClearClick, __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: _this
    }) : null
  );
};
Chip.defaultProps = {
  className: '',
  clear: false,
  icon: null,
  avatar: null,
  content: '',
  onClearClick: __WEBPACK_IMPORTED_MODULE_2_lodash_noop___default.a
};

/* harmony default export */ __webpack_exports__["a"] = (Chip);

/***/ }),

/***/ "./src/components/Dropdown.jsx":
/*!*************************************!*\
  !*** ./src/components/Dropdown.jsx ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_noop__ = __webpack_require__(/*! lodash.noop */ "lodash.noop");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_noop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_noop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Menu__ = __webpack_require__(/*! ./Menu */ "./src/components/Menu.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__elements_Button__ = __webpack_require__(/*! ../elements/Button */ "./src/elements/Button.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__elements_Icon__ = __webpack_require__(/*! ../elements/Icon */ "./src/elements/Icon.jsx");
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/components/Dropdown.jsx',
    _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }









var Dropdown = function Dropdown(_ref) {
  var className = _ref.className,
      active = _ref.active,
      right = _ref.right,
      initialValue = _ref.initialValue,
      contents = _ref.contents,
      onClick = _ref.onClick,
      onMenuClick = _ref.onMenuClick,
      props = _objectWithoutProperties(_ref, ['className', 'active', 'right', 'initialValue', 'contents', 'onClick', 'onMenuClick']);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('dropdown', {
    'dropdown-right': right,
    active: active
  }, className);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: _this
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4__elements_Button__["a" /* default */],
      { link: true, className: 'dropdown-toggle', tabIndex: '0', onClick: onClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: _this
      },
      initialValue,
      ' ',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__elements_Icon__["a" /* default */], { caret: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: _this
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Menu__["a" /* default */], { onClick: onMenuClick, contents: contents, __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: _this
    })
  );
};
Dropdown.defaultProps = {
  className: '',
  active: false,
  right: false,
  initialValue: '',
  contents: [],
  onClick: __WEBPACK_IMPORTED_MODULE_2_lodash_noop___default.a
};

/* harmony default export */ __webpack_exports__["a"] = (Dropdown);

/***/ }),

/***/ "./src/components/Empty.jsx":
/*!**********************************!*\
  !*** ./src/components/Empty.jsx ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elements_Icon__ = __webpack_require__(/*! ../elements/Icon */ "./src/elements/Icon.jsx");
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/components/Empty.jsx',
    _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var Title = function Title(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'className']);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('empty-title', 'h5', className);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'p',
    Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: _this
    }),
    children
  );
};
Title.defaultProps = {
  className: ''
};

var Subtitle = function Subtitle(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      props = _objectWithoutProperties(_ref2, ['children', 'className']);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('empty-subtitle', className);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'p',
    Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: _this
    }),
    children
  );
};
Subtitle.defaultProps = {
  children: null,
  className: ''
};

var Empty = function Empty(_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      icon = _ref3.icon,
      title = _ref3.title,
      subtitle = _ref3.subtitle,
      props = _objectWithoutProperties(_ref3, ['children', 'className', 'icon', 'title', 'subtitle']);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('empty', className);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: _this
    }),
    icon ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__elements_Icon__["a" /* default */], { className: 'icon-' + icon, style: { fontSize: '4rem' }, __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: _this
    }) : null,
    title ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Title,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: _this
      },
      title
    ) : null,
    subtitle ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Subtitle,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: _this
      },
      subtitle
    ) : null,
    children
  );
};
Empty.defaultProps = {
  children: null,
  className: '',
  icon: '',
  title: null,
  subtitle: null
};

/* harmony default export */ __webpack_exports__["a"] = (Empty);

/***/ }),

/***/ "./src/components/Menu.jsx":
/*!*********************************!*\
  !*** ./src/components/Menu.jsx ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_noop__ = __webpack_require__(/*! lodash.noop */ "lodash.noop");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_noop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_noop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utilities_Divider__ = __webpack_require__(/*! ../utilities/Divider */ "./src/utilities/Divider.jsx");
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/components/Menu.jsx',
    _this = this;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }







var Badge = function Badge(_ref) {
  var content = _ref.content;

  if (!content) {
    return null;
  }
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'menu-badge', __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'span',
      { className: 'label label-primary', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: _this
      },
      content
    )
  );
};

var Item = function Item(_ref2) {
  var id = _ref2.id,
      link = _ref2.link,
      content = _ref2.content,
      className = _ref2.className,
      divider = _ref2.divider,
      active = _ref2.active,
      badge = _ref2.badge,
      onClick = _ref2.onClick,
      props = _objectWithoutProperties(_ref2, ['id', 'link', 'content', 'className', 'divider', 'active', 'badge', 'onClick']);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('menu-item', className);
  if (divider) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__utilities_Divider__["a" /* default */], { className: className, content: typeof divider === 'string' ? divider : '', __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: _this
    });
  }
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'li',
    Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: _this
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Badge, { content: badge, __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: _this
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      { href: link, className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ active: active }), onClick: function (_onClick) {
          function onClick(_x) {
            return _onClick.apply(this, arguments);
          }

          onClick.toString = function () {
            return _onClick.toString();
          };

          return onClick;
        }(function (e) {
          return onClick(e, id);
        }), __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: _this
      },
      content
    )
  );
};
Item.defaultProps = {
  link: '',
  content: '',
  className: '',
  divider: false,
  active: false,
  badge: 0,
  onClick: __WEBPACK_IMPORTED_MODULE_2_lodash_noop___default.a
};

var Menu = function Menu(_ref3) {
  var className = _ref3.className,
      nav = _ref3.nav,
      contents = _ref3.contents,
      onClick = _ref3.onClick,
      props = _objectWithoutProperties(_ref3, ['className', 'nav', 'contents', 'onClick']);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('menu', {
    'menu-nav': nav
  }, className);
  var ulProps = Object.keys(props).filter(function (p) {
    return p !== 'header';
  }).reduce(function (memo, p) {
    return Object.assign(memo, _defineProperty({}, p, props[p]));
  }, {});
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    Object.assign({ className: classes }, ulProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: _this
    }),
    contents.map(function (content, i) {
      var key = content.id || 'menu-item_' + i;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Item, Object.assign({ key: key }, content, { onClick: onClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: _this
      }));
    })
  );
};
Menu.defaultProps = {
  className: '',
  nav: false,
  contents: [],
  onClick: __WEBPACK_IMPORTED_MODULE_2_lodash_noop___default.a
};

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),

/***/ "./src/components/Modal.jsx":
/*!**********************************!*\
  !*** ./src/components/Modal.jsx ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_noop__ = __webpack_require__(/*! lodash.noop */ "lodash.noop");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_noop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_noop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__elements_Button__ = __webpack_require__(/*! ../elements/Button */ "./src/elements/Button.jsx");
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/components/Modal.jsx',
    _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }







var Modal = function Modal(_ref) {
  var active = _ref.active,
      title = _ref.title,
      content = _ref.content,
      footer = _ref.footer,
      small = _ref.small,
      large = _ref.large,
      onClearClick = _ref.onClearClick,
      props = _objectWithoutProperties(_ref, ['active', 'title', 'content', 'footer', 'small', 'large', 'onClearClick']);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('modal', {
    active: active,
    'modal-sm': small,
    'modal-lg': large
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: _this
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'modal-overlay', __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: _this
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'modal-container', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'modal-header', __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__elements_Button__["a" /* default */], { clear: true, className: 'float-right', onClick: onClearClick, __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: _this
        }),
        title ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'modal-title h5', __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: _this
          },
          title
        ) : null
      ),
      content ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'modal-body', __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'content', __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: _this
          },
          content
        )
      ) : null,
      footer ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'modal-footer', __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: _this
        },
        footer
      ) : null
    )
  );
};
Modal.defaultProps = {
  active: false,
  title: '',
  content: null,
  footer: null,
  small: false,
  large: false,
  onClearClick: __WEBPACK_IMPORTED_MODULE_2_lodash_noop___default.a
};

/* harmony default export */ __webpack_exports__["a"] = (Modal);

/***/ }),

/***/ "./src/components/Nav.jsx":
/*!********************************!*\
  !*** ./src/components/Nav.jsx ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_noop__ = __webpack_require__(/*! lodash.noop */ "lodash.noop");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_noop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_noop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__elements_Button__ = __webpack_require__(/*! ../elements/Button */ "./src/elements/Button.jsx");
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/components/Nav.jsx',
    _this = this;







var Item = function Item(_ref) {
  var id = _ref.id,
      name = _ref.name,
      items = _ref.items,
      active = _ref.active,
      onClick = _ref.onClick;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'li',
    { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('nav-item', { active: active }), __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__elements_Button__["a" /* default */],
      {
        href: '#',
        onClick: function (_onClick) {
          function onClick(_x) {
            return _onClick.apply(this, arguments);
          }

          onClick.toString = function () {
            return _onClick.toString();
          };

          return onClick;
        }(function (e) {
          return onClick(e, id);
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: _this
      },
      name
    ),
    items && items.length ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Nav, { items: items, onClick: onClick, __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: _this
    }) : null
  );
};
Item.defaultProps = {
  items: [],
  active: false,
  onClick: __WEBPACK_IMPORTED_MODULE_2_lodash_noop___default.a
};

var Nav = function Nav(_ref2) {
  var items = _ref2.items,
      active = _ref2.active,
      onClick = _ref2.onClick;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    { className: 'nav', __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: _this
    },
    items.map(function (item) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Item, Object.assign({ key: item.id }, item, { active: active === item.id, onClick: onClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: _this
      }));
    })
  );
};
Nav.defaultProps = {
  items: [],
  active: '',
  onClick: __WEBPACK_IMPORTED_MODULE_2_lodash_noop___default.a
};

/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),

/***/ "./src/components/Pagination.jsx":
/*!***************************************!*\
  !*** ./src/components/Pagination.jsx ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_noop__ = __webpack_require__(/*! lodash.noop */ "lodash.noop");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_noop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_noop__);
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/components/Pagination.jsx',
    _this = this;





function calculateStartAndEnd(current, total, each) {
  if (total <= 2 * each + 5) {
    return { start: 1, end: total };
  } else if (current <= each + 3) {
    return { start: 1, end: 2 * each + 3 };
  } else if (current >= total - (each + 2)) {
    return { start: total - 2 * each - 2, end: total };
  }
  return { start: current - each, end: current + each };
}

function pages(current, total) {
  var each = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var skip = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '...';

  var page = calculateStartAndEnd(current, total, each);
  var result = [];
  if (page.start > 1) {
    result.push({ label: '1', value: 1 });
  }
  if (page.start > 2) {
    result.push({ label: skip, value: 0 });
  }
  for (var i = page.start; i <= page.end; i += 1) {
    result.push({ label: '' + i, value: i });
  }
  if (page.end < total - 1) {
    result.push({ label: skip, value: 0 });
  }
  if (page.end < total) {
    result.push({ label: '' + total, value: total });
  }
  return result;
}

var Item = function Item(_ref) {
  var current = _ref.current,
      value = _ref.value,
      label = _ref.label,
      disabled = _ref.disabled,
      onClick = _ref.onClick;

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('page-item', {
    disabled: disabled,
    active: value === current
  });
  var linkProp = {};
  if (disabled) {
    linkProp.tabIndex = -1;
  }
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'li',
    { className: classes, __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      Object.assign({ href: '#' }, linkProp, { onClick: function (_onClick) {
          function onClick(_x3) {
            return _onClick.apply(this, arguments);
          }

          onClick.toString = function () {
            return _onClick.toString();
          };

          return onClick;
        }(function (e) {
          return onClick(e, value);
        }), __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: _this
      }),
      label
    )
  );
};
Item.defaultProps = {
  value: 1,
  disabled: false,
  onClick: __WEBPACK_IMPORTED_MODULE_2_lodash_noop___default.a
};

var Title = function Title(_ref2) {
  var title = _ref2.title,
      subtitle = _ref2.subtitle,
      current = _ref2.current,
      value = _ref2.value,
      onClick = _ref2.onClick;

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('page-item', {
    'page-prev': current > value,
    'page-next': current < value
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'li',
    { className: classes, __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      { href: '#', onClick: function (_onClick2) {
          function onClick(_x4) {
            return _onClick2.apply(this, arguments);
          }

          onClick.toString = function () {
            return _onClick2.toString();
          };

          return onClick;
        }(function (e) {
          return onClick(e, value);
        }), __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'page-item-subtitle', __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: _this
        },
        subtitle
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'page-item-title h5', __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: _this
        },
        title
      )
    )
  );
};

var Pagination = function Pagination(_ref3) {
  var label = _ref3.label,
      current = _ref3.current,
      total = _ref3.total,
      each = _ref3.each,
      title = _ref3.title,
      onClick = _ref3.onClick;

  if (title) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      { className: 'pagination', __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Title, {
        title: title.prev.title,
        subtitle: title.prev.subtitle,
        current: current,
        value: current - 1,
        onClick: onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: _this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Title, {
        title: title.next.title,
        subtitle: title.next.subtitle,
        current: current,
        value: current + 1,
        onClick: onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: _this
      })
    );
  }
  var list = pages(current, total, each, label.skip);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    { className: 'pagination', __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Item, {
      current: current,
      label: label.previous,
      disabled: current === 1,
      value: current - 1,
      onClick: onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: _this
    }),
    list.map(function (row, i) {
      var key = 'paging-' + i;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Item, Object.assign({ key: key }, row, { current: current, disabled: !row.value, onClick: onClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: _this
      }));
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Item, {
      current: current,
      label: label.next,
      disabled: current === total,
      value: current + 1,
      onClick: onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: _this
    })
  );
};
Pagination.defaultProps = {
  label: { previous: 'Previous', next: 'Next', skip: '...' },
  total: 1,
  current: 1,
  each: 1,
  title: undefined,
  onClick: __WEBPACK_IMPORTED_MODULE_2_lodash_noop___default.a
};

/* harmony default export */ __webpack_exports__["a"] = (Pagination);

/***/ }),

/***/ "./src/components/Panel.jsx":
/*!**********************************!*\
  !*** ./src/components/Panel.jsx ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/components/Panel.jsx',
    _this = this;




var Panel = function Panel(_ref) {
  var header = _ref.header,
      nav = _ref.nav,
      content = _ref.content,
      footer = _ref.footer,
      headerClass = _ref.headerClass;

  var headerClasses = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('panel-header', headerClass);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'panel', __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: _this
    },
    header ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: headerClasses, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: _this
      },
      typeof header === 'string' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'panel-title', __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: _this
        },
        header
      ) : header
    ) : null,
    nav ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'panel-nav', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: _this
      },
      nav
    ) : null,
    content ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'panel-body', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: _this
      },
      content
    ) : null,
    footer ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'panel-footer', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: _this
      },
      footer
    ) : null
  );
};
Panel.defaultProps = {
  header: null,
  nav: null,
  content: null,
  footer: null,
  headerClass: ''
};

/* harmony default export */ __webpack_exports__["a"] = (Panel);

/***/ }),

/***/ "./src/components/Popover.jsx":
/*!************************************!*\
  !*** ./src/components/Popover.jsx ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/components/Popover.jsx',
    _this = this;




var Popover = function Popover(_ref) {
  var target = _ref.target,
      children = _ref.children,
      right = _ref.right,
      left = _ref.left,
      bottom = _ref.bottom;

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('popover', {
    'popover-right': right,
    'popover-left': left,
    'popover-bottom': bottom
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: classes, __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: _this
    },
    target,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'popover-container', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: _this
      },
      children
    )
  );
};
Popover.defaultProps = {
  right: false,
  left: false,
  bottom: false
};

/* harmony default export */ __webpack_exports__["a"] = (Popover);

/***/ }),

/***/ "./src/components/Step.jsx":
/*!*********************************!*\
  !*** ./src/components/Step.jsx ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/components/Step.jsx',
    _this = this;




var Step = function Step(_ref) {
  var items = _ref.items,
      active = _ref.active;

  if (!items.length) {
    return null;
  }
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    { className: 'step', __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: _this
    },
    items.map(function (_ref2) {
      var id = _ref2.id,
          name = _ref2.name,
          tooltip = _ref2.tooltip;

      var key = 'step-' + id;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { key: key, className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('step-item', { active: id === active }), __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { href: '#', className: 'tooltip', 'data-tooltip': tooltip, __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: _this
          },
          name
        )
      );
    })
  );
};
Step.defaultProps = {
  items: [],
  active: ''
};

/* harmony default export */ __webpack_exports__["a"] = (Step);

/***/ }),

/***/ "./src/components/Tab.jsx":
/*!********************************!*\
  !*** ./src/components/Tab.jsx ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_noop__ = __webpack_require__(/*! lodash.noop */ "lodash.noop");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_noop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_noop__);
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/components/Tab.jsx',
    _this = this;





var Tab = function Tab(_ref) {
  var items = _ref.items,
      active = _ref.active,
      onClick = _ref.onClick,
      action = _ref.action;

  if (!items.length) {
    return null;
  }
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    { className: 'tab tab-block', __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: _this
    },
    items.map(function (_ref2) {
      var id = _ref2.id,
          name = _ref2.name,
          badge = _ref2.badge;

      var key = 'tab-' + id;
      var linkProp = {
        onClick: function (_onClick) {
          function onClick(_x) {
            return _onClick.apply(this, arguments);
          }

          onClick.toString = function () {
            return _onClick.toString();
          };

          return onClick;
        }(function (e) {
          return onClick(e, id);
        })
      };
      if (badge) {
        linkProp.className = 'badge';
        linkProp['data-badge'] = badge;
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { key: key, className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('tab-item', { active: id === active }), __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          Object.assign({ href: '#' }, linkProp, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: _this
          }),
          name
        )
      );
    }),
    action ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { className: 'tab-item tab-action', __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: _this
      },
      action
    ) : null
  );
};
Tab.defaultProps = {
  items: [],
  active: '',
  onClick: __WEBPACK_IMPORTED_MODULE_2_lodash_noop___default.a,
  action: null
};

/* harmony default export */ __webpack_exports__["a"] = (Tab);

/***/ }),

/***/ "./src/components/Tile.jsx":
/*!*********************************!*\
  !*** ./src/components/Tile.jsx ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/components/Tile.jsx',
    _this = this;




var Tile = function Tile(_ref) {
  var compact = _ref.compact,
      title = _ref.title,
      subtitle = _ref.subtitle,
      content = _ref.content,
      icon = _ref.icon,
      action = _ref.action;

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('tile', { 'tile-centered': compact });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: classes, __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: _this
    },
    icon ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'tile-icon', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: _this
      },
      icon
    ) : null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'tile-content', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: _this
      },
      title ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'tile-title', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: _this
        },
        title
      ) : null,
      subtitle ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'tile-subtitle text-gray', __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: _this
        },
        subtitle
      ) : null,
      content
    ),
    action ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'tile-action', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: _this
      },
      action
    ) : null
  );
};
Tile.defaultProps = {
  compact: false,
  title: '',
  subtitle: '',
  content: '',
  icon: null,
  action: null
};

/* harmony default export */ __webpack_exports__["a"] = (Tile);

/***/ }),

/***/ "./src/components/Toast.jsx":
/*!**********************************!*\
  !*** ./src/components/Toast.jsx ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elements_Button__ = __webpack_require__(/*! ../elements/Button */ "./src/elements/Button.jsx");
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/components/Toast.jsx',
    _this = this;






var Toast = function Toast(_ref) {
  var title = _ref.title,
      content = _ref.content,
      onClearClick = _ref.onClearClick,
      primary = _ref.primary,
      success = _ref.success,
      warning = _ref.warning,
      error = _ref.error;

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('toast', {
    'toast-primary': primary,
    'toast-success': success,
    'toast-warning': warning,
    'toast-error': error
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: classes, __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: _this
    },
    onClearClick ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__elements_Button__["a" /* default */], { clear: true, className: 'float-right', onClick: onClearClick, __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: _this
    }) : null,
    title ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h5',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: _this
      },
      title
    ) : null,
    content
  );
};
Toast.defaultProps = {
  title: '',
  onClearClick: undefined,
  primary: false,
  success: false,
  warning: false,
  error: false
};

/* harmony default export */ __webpack_exports__["a"] = (Toast);

/***/ }),

/***/ "./src/elements/Button.jsx":
/*!*********************************!*\
  !*** ./src/elements/Button.jsx ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/elements/Button.jsx',
    _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      loading = _ref.loading,
      href = _ref.href,
      lg = _ref.lg,
      sm = _ref.sm,
      block = _ref.block,
      inputGroup = _ref.inputGroup,
      primary = _ref.primary,
      clear = _ref.clear,
      link = _ref.link,
      action = _ref.action,
      circle = _ref.circle,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'loading', 'href', 'lg', 'sm', 'block', 'inputGroup', 'primary', 'clear', 'link', 'action', 'circle']);

  var linkButton = link || href;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('btn', {
    loading: loading,
    'btn-lg': lg,
    'btn-sm': sm,
    'btn-block': block,
    'input-group-btn': inputGroup,
    'btn-primary': primary,
    'btn-clear': clear,
    'btn-link': linkButton && !primary,
    'btn-action': action,
    circle: circle
  }, className);

  var toReturn = null;
  if (href) {
    toReturn = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      Object.assign({ href: href, className: classes }, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: _this
      }),
      children
    );
  } else {
    toReturn = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'button',
      Object.assign({ className: classes }, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: _this
      }),
      children
    );
  }

  return toReturn;
};

var Group = function Group(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      block = _ref2.block;

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('btn-group', { 'btn-group-block': block }, className);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: classes, __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: _this
    },
    children
  );
};
Group.defaultProps = {
  className: '',
  block: false
};

Button.Group = Group;

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "./src/elements/Icon.jsx":
/*!*******************************!*\
  !*** ./src/elements/Icon.jsx ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/elements/Icon.jsx',
    _this = this;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var Icon = function Icon(_ref) {
  var _classnames;

  var className = _ref.className,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? '' : _ref$size,
      _ref$name = _ref.name,
      name = _ref$name === undefined ? '' : _ref$name,
      arrowUp = _ref.arrowUp,
      arrowRight = _ref.arrowRight,
      arrowDown = _ref.arrowDown,
      arrowLeft = _ref.arrowLeft,
      upward = _ref.upward,
      forward = _ref.forward,
      downward = _ref.downward,
      back = _ref.back,
      caret = _ref.caret,
      menu = _ref.menu,
      apps = _ref.apps,
      moreHoriz = _ref.moreHoriz,
      moreVert = _ref.moreVert,
      resizeHoriz = _ref.resizeHoriz,
      resizeVert = _ref.resizeVert,
      plus = _ref.plus,
      minus = _ref.minus,
      cross = _ref.cross,
      check = _ref.check,
      stop = _ref.stop,
      shutdown = _ref.shutdown,
      refresh = _ref.refresh,
      search = _ref.search,
      flag = _ref.flag,
      bookmark = _ref.bookmark,
      edit = _ref.edit,
      del = _ref.del,
      share = _ref.share,
      download = _ref.download,
      upload = _ref.upload,
      mail = _ref.mail,
      people = _ref.people,
      message = _ref.message,
      photo = _ref.photo,
      time = _ref.time,
      location = _ref.location,
      link = _ref.link,
      emoji = _ref.emoji,
      form = _ref.form,
      loading = _ref.loading,
      props = _objectWithoutProperties(_ref, ['className', 'size', 'name', 'arrowUp', 'arrowRight', 'arrowDown', 'arrowLeft', 'upward', 'forward', 'downward', 'back', 'caret', 'menu', 'apps', 'moreHoriz', 'moreVert', 'resizeHoriz', 'resizeVert', 'plus', 'minus', 'cross', 'check', 'stop', 'shutdown', 'refresh', 'search', 'flag', 'bookmark', 'edit', 'del', 'share', 'download', 'upload', 'mail', 'people', 'message', 'photo', 'time', 'location', 'link', 'emoji', 'form', 'loading']);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()((_classnames = {
    icon: !form,
    'form-icon': form,
    loading: loading
  }, _defineProperty(_classnames, 'icon-' + name, name), _defineProperty(_classnames, 'icon-' + size, size), _defineProperty(_classnames, 'icon-arrow-up', arrowUp), _defineProperty(_classnames, 'icon-arrow-right', arrowRight), _defineProperty(_classnames, 'icon-arrow-down', arrowDown), _defineProperty(_classnames, 'icon-arrow-left', arrowLeft), _defineProperty(_classnames, 'icon-upward', upward), _defineProperty(_classnames, 'icon-forward', forward), _defineProperty(_classnames, 'icon-downward', downward), _defineProperty(_classnames, 'icon-back', back), _defineProperty(_classnames, 'icon-caret', caret), _defineProperty(_classnames, 'icon-menu', menu), _defineProperty(_classnames, 'icon-apps', apps), _defineProperty(_classnames, 'icon-more-horiz', moreHoriz), _defineProperty(_classnames, 'icon-more-vert', moreVert), _defineProperty(_classnames, 'icon-resize-horiz', resizeHoriz), _defineProperty(_classnames, 'icon-resize-vert', resizeVert), _defineProperty(_classnames, 'icon-plus', plus), _defineProperty(_classnames, 'icon-minus', minus), _defineProperty(_classnames, 'icon-cross', cross), _defineProperty(_classnames, 'icon-check', check), _defineProperty(_classnames, 'icon-stop', stop), _defineProperty(_classnames, 'icon-shutdown', shutdown), _defineProperty(_classnames, 'icon-refresh', refresh), _defineProperty(_classnames, 'icon-search', search), _defineProperty(_classnames, 'icon-flag', flag), _defineProperty(_classnames, 'icon-bookmark', bookmark), _defineProperty(_classnames, 'icon-edit', edit), _defineProperty(_classnames, 'icon-delete', del), _defineProperty(_classnames, 'icon-share', share), _defineProperty(_classnames, 'icon-download', download), _defineProperty(_classnames, 'icon-upload', upload), _defineProperty(_classnames, 'icon-mail', mail), _defineProperty(_classnames, 'icon-people', people), _defineProperty(_classnames, 'icon-message', message), _defineProperty(_classnames, 'icon-photo', photo), _defineProperty(_classnames, 'icon-time', time), _defineProperty(_classnames, 'icon-location', location), _defineProperty(_classnames, 'icon-link', link), _defineProperty(_classnames, 'icon-emoji', emoji), _classnames), className);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', Object.assign({ className: classes }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: _this
  }));
};
Icon.defaultProps = {
  className: '',
  name: '',
  arrowUp: false,
  arrowRight: false,
  arrowDown: false,
  arrowLeft: false,
  upward: false,
  forward: false,
  downward: false,
  back: false,
  caret: false,
  menu: false,
  apps: false,
  moreHoriz: false,
  moreVert: false,
  resizeHoriz: false,
  resizeVert: false,
  plus: false,
  minus: false,
  cross: false,
  check: false,
  stop: false,
  shutdown: false,
  refresh: false,
  search: false,
  flag: false,
  bookmark: false,
  edit: false,
  del: false,
  share: false,
  download: false,
  upload: false,
  mail: false,
  people: false,
  message: false,
  photo: false,
  time: false,
  location: false,
  link: false,
  emoji: false,
  form: false,
  loading: false
};

/* harmony default export */ __webpack_exports__["a"] = (Icon);

/***/ }),

/***/ "./src/elements/Label.jsx":
/*!********************************!*\
  !*** ./src/elements/Label.jsx ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/elements/Label.jsx',
    _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var Label = function Label(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rounded = _ref.rounded,
      primary = _ref.primary,
      secondary = _ref.secondary,
      success = _ref.success,
      warning = _ref.warning,
      error = _ref.error,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'rounded', 'primary', 'secondary', 'success', 'warning', 'error']);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('label', {
    'label-rounded': rounded,
    'label-primary': primary,
    'label-secondary': secondary,
    'label-success': success,
    'label-warning': warning,
    'label-error': error
  }, className);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: _this
    }),
    children
  );
};
Label.defaultProps = {
  className: '',
  rounded: false,
  primary: false,
  secondary: false,
  success: false,
  warning: false,
  error: false
};

/* harmony default export */ __webpack_exports__["a"] = (Label);

/***/ }),

/***/ "./src/elements/Table.jsx":
/*!********************************!*\
  !*** ./src/elements/Table.jsx ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/elements/Table.jsx',
    _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var Table = function Table(_ref) {
  var header = _ref.header,
      contents = _ref.contents,
      className = _ref.className,
      striped = _ref.striped,
      hover = _ref.hover,
      props = _objectWithoutProperties(_ref, ['header', 'contents', 'className', 'striped', 'hover']);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('table', {
    'table-striped': striped,
    'table-hover': hover
  }, className);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'table',
    Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: _this
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'thead',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'tr',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: _this
        },
        header.map(function (row, i) {
          var key = 'header-' + i;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'th',
            { key: key, __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              },
              __self: _this
            },
            row
          );
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'tbody',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: _this
      },
      contents.map(function (content, i) {
        var rowKey = 'row-' + i;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'tr',
          { key: rowKey, __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: _this
          },
          content.map(function (column, j) {
            var columnKey = 'column-' + j;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'td',
              { key: columnKey, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
                },
                __self: _this
              },
              column
            );
          })
        );
      })
    )
  );
};
Table.defaultProps = {
  className: '',
  striped: false,
  hover: false
};

/* harmony default export */ __webpack_exports__["a"] = (Table);

/***/ }),

/***/ "./src/elements/form/Checkbox.jsx":
/*!****************************************!*\
  !*** ./src/elements/form/Checkbox.jsx ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uniqueId__ = __webpack_require__(/*! ./uniqueId */ "./src/elements/form/uniqueId.js");
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/elements/form/Checkbox.jsx',
    _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var CheckboxSingle = function CheckboxSingle(_ref) {
  var label = _ref.label,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['label', 'className']);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('form-checkbox', className);
  var id = Object(__WEBPACK_IMPORTED_MODULE_2__uniqueId__["a" /* default */])('checkbox');
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'label',
    Object.assign({ className: classes, htmlFor: id }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: _this
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { id: id, type: 'checkbox', __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: _this
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'form-icon', __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: _this
    }),
    ' ',
    label
  );
};
CheckboxSingle.defaultProps = {
  className: ''
};

var Checkbox = function Checkbox(_ref2) {
  var className = _ref2.className,
      label = _ref2.label,
      options = _ref2.options,
      props = _objectWithoutProperties(_ref2, ['className', 'label', 'options']);

  var keys = Object.keys(options);
  if (keys.length === 0) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CheckboxSingle, Object.assign({ label: label, className: className }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: _this
    }));
  }
  var list = keys.map(function (key) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CheckboxSingle, Object.assign({ key: key, label: options[key], className: className, value: key }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: _this
    }));
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'form-group', __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'span',
      { className: 'form-label', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: _this
      },
      label
    ),
    list
  );
};
Checkbox.defaultProps = {
  options: {}
};

/* harmony default export */ __webpack_exports__["a"] = (Checkbox);

/***/ }),

/***/ "./src/elements/form/Form.jsx":
/*!************************************!*\
  !*** ./src/elements/form/Form.jsx ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/elements/form/Form.jsx',
    _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var Form = function Form(_ref) {
  var children = _ref.children,
      className = _ref.className,
      horizontal = _ref.horizontal,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'horizontal']);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, { 'form-horizontal': horizontal });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'form',
    Object.assign({}, props, { className: classes, __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: _this
    }),
    children
  );
};
Form.defaultProps = {
  className: '',
  horizontal: false
};

var Group = function Group(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      success = _ref2.success,
      danger = _ref2.danger,
      props = _objectWithoutProperties(_ref2, ['children', 'className', 'success', 'danger']);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('form-group', className, { 'has-success': success, 'has-danger': danger });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    Object.assign({}, props, { className: classes, __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: _this
    }),
    children
  );
};
Group.defaultProps = {
  className: '',
  success: false,
  danger: false
};

var Label = function Label(_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      htmlFor = _ref3.htmlFor,
      props = _objectWithoutProperties(_ref3, ['children', 'className', 'htmlFor']);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('form-label', className);
  if (htmlFor) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'label',
      Object.assign({}, props, { className: classes, htmlFor: htmlFor, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: _this
      }),
      children
    );
  }
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    Object.assign({}, props, { className: classes, __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: _this
    }),
    children
  );
};
Label.defaultProps = {
  className: '',
  htmlFor: ''
};

Form.Group = Group;
Form.Label = Label;

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),

/***/ "./src/elements/form/Input.jsx":
/*!*************************************!*\
  !*** ./src/elements/form/Input.jsx ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Form__ = __webpack_require__(/*! ./Form */ "./src/elements/form/Form.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__uniqueId__ = __webpack_require__(/*! ./uniqueId */ "./src/elements/form/uniqueId.js");
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/elements/form/Input.jsx',
    _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }







var BaseInput = function BaseInput(_ref) {
  var className = _ref.className,
      success = _ref.success,
      danger = _ref.danger,
      textarea = _ref.textarea,
      slider = _ref.slider,
      sm = _ref.sm,
      lg = _ref.lg,
      props = _objectWithoutProperties(_ref, ['className', 'success', 'danger', 'textarea', 'slider', 'sm', 'lg']);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, {
    'form-input': !slider,
    'is-success': success,
    'is-danger': danger,
    'input-lg': lg,
    'input-sm': sm
  });
  if (textarea) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: _this
    }));
  }
  if (slider) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', Object.assign({}, props, { type: 'range', className: 'slider tooltip', __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: _this
    }));
  }
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', Object.assign({}, props, { className: classes, __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: _this
  }));
};
BaseInput.defaultProps = {
  className: '',
  success: false,
  danger: false,
  sm: false,
  lg: false,
  textarea: false,
  slider: false
};

var Input = function Input(_ref2) {
  var label = _ref2.label,
      id = _ref2.id,
      props = _objectWithoutProperties(_ref2, ['label', 'id']);

  var elementId = id || Object(__WEBPACK_IMPORTED_MODULE_3__uniqueId__["a" /* default */])('input');
  var content = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BaseInput, Object.assign({ id: elementId }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: _this
  }));
  if (label) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2__Form__["a" /* default */].Group,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__Form__["a" /* default */].Label,
        { htmlFor: elementId, __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: _this
        },
        label
      ),
      content
    );
  }
  return content;
};
Input.defaultProps = {
  className: '',
  success: false,
  danger: false,
  sm: false,
  lg: false,
  textarea: false,
  label: '',
  id: ''
};

var Group = function Group(_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      success = _ref3.success,
      danger = _ref3.danger,
      props = _objectWithoutProperties(_ref3, ['children', 'className', 'success', 'danger']);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('input-group', className, { 'has-success': success, 'has-danger': danger });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    Object.assign({}, props, { className: classes, __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: _this
    }),
    children
  );
};
Group.defaultProps = {
  className: '',
  success: false,
  danger: false
};

var Addon = function Addon(_ref4) {
  var children = _ref4.children,
      className = _ref4.className,
      sm = _ref4.sm,
      lg = _ref4.lg,
      props = _objectWithoutProperties(_ref4, ['children', 'className', 'sm', 'lg']);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('input-group-addon', className, { 'addon-sm': sm, 'addon-lg': lg });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    Object.assign({}, props, { className: classes, __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: _this
    }),
    children
  );
};
Addon.defaultProps = {
  className: '',
  sm: false,
  lg: false
};

Input.Group = Group;
Input.Addon = Addon;

/* harmony default export */ __webpack_exports__["a"] = (Input);

/***/ }),

/***/ "./src/elements/form/Radio.jsx":
/*!*************************************!*\
  !*** ./src/elements/form/Radio.jsx ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uniqueId__ = __webpack_require__(/*! ./uniqueId */ "./src/elements/form/uniqueId.js");
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/elements/form/Radio.jsx',
    _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var RadioSingle = function RadioSingle(_ref) {
  var label = _ref.label,
      className = _ref.className,
      name = _ref.name,
      checked = _ref.checked,
      props = _objectWithoutProperties(_ref, ['label', 'className', 'name', 'checked']);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('form-radio', className);
  var id = Object(__WEBPACK_IMPORTED_MODULE_2__uniqueId__["a" /* default */])('radio');
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'label',
    { className: classes, htmlFor: id, __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', Object.assign({ type: 'radio', name: name, checked: checked, id: id }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: _this
    })),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'form-icon', __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: _this
    }),
    ' ',
    label
  );
};
RadioSingle.defaultProps = {
  label: '',
  className: '',
  checked: false
};

var Radio = function Radio(_ref2) {
  var name = _ref2.name,
      label = _ref2.label,
      options = _ref2.options,
      props = _objectWithoutProperties(_ref2, ['name', 'label', 'options']);

  var keys = Object.keys(options);
  if (keys.length === 0) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(RadioSingle, Object.assign({ label: label, name: name }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: _this
    }));
  }
  var list = keys.map(function (key) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(RadioSingle, Object.assign({ key: key, label: options[key], name: name, value: key }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: _this
    }));
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'form-group', __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'span',
      { className: 'form-label', __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: _this
      },
      label
    ),
    list
  );
};
Radio.defaultProps = {
  options: {}
};

/* harmony default export */ __webpack_exports__["a"] = (Radio);

/***/ }),

/***/ "./src/elements/form/Select.jsx":
/*!**************************************!*\
  !*** ./src/elements/form/Select.jsx ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Form__ = __webpack_require__(/*! ./Form */ "./src/elements/form/Form.jsx");
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/elements/form/Select.jsx',
    _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var SelectOnly = function SelectOnly(_ref) {
  var children = _ref.children,
      className = _ref.className,
      sm = _ref.sm,
      lg = _ref.lg,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'sm', 'lg']);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('form-select', className, {
    'select-sm': sm,
    'select-lg': lg
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'select',
    Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: _this
    }),
    children
  );
};
SelectOnly.defaultProps = {
  children: null,
  className: '',
  sm: false,
  lg: false
};

var Select = function Select(_ref2) {
  var children = _ref2.children,
      label = _ref2.label,
      options = _ref2.options,
      props = _objectWithoutProperties(_ref2, ['children', 'label', 'options']);

  var labelNode = label ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__Form__["a" /* default */].Label,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: _this
    },
    label
  ) : null;
  var keys = Object.keys(options);
  if (keys.length > 0) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2__Form__["a" /* default */].Group,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: _this
      },
      labelNode,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        SelectOnly,
        Object.assign({}, props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: _this
        }),
        keys.map(function (key) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'option',
            { key: key, __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              },
              __self: _this
            },
            options[key]
          );
        })
      )
    );
  }
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    SelectOnly,
    Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: _this
    }),
    children
  );
};
Select.defaultProps = {
  label: '',
  options: {}
};

/* harmony default export */ __webpack_exports__["a"] = (Select);

/***/ }),

/***/ "./src/elements/form/Switch.jsx":
/*!**************************************!*\
  !*** ./src/elements/form/Switch.jsx ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uniqueId__ = __webpack_require__(/*! ./uniqueId */ "./src/elements/form/uniqueId.js");
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/elements/form/Switch.jsx',
    _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var Switch = function Switch(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'className']);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('form-switch', className);
  var id = Object(__WEBPACK_IMPORTED_MODULE_2__uniqueId__["a" /* default */])('switch');
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'label',
    { className: classes, htmlFor: id, __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', Object.assign({ type: 'checkbox' }, props, { id: id, __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: _this
    })),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'form-icon', __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: _this
    }),
    ' ',
    children
  );
};
Switch.defaultProps = {
  className: ''
};

/* harmony default export */ __webpack_exports__["a"] = (Switch);

/***/ }),

/***/ "./src/elements/form/uniqueId.js":
/*!***************************************!*\
  !*** ./src/elements/form/uniqueId.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var current = {};
var uniqueId = function uniqueId() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (!current[prefix]) {
    current[prefix] = 0;
  }
  // eslint-disable-next-line no-return-assign
  return prefix + '-' + (current[prefix] += 1);
};

/* harmony default export */ __webpack_exports__["a"] = (uniqueId);

/***/ }),

/***/ "./src/experimentals/Calendar.jsx":
/*!****************************************!*\
  !*** ./src/experimentals/Calendar.jsx ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_noop__ = __webpack_require__(/*! lodash.noop */ "lodash.noop");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_noop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_noop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__elements_Button__ = __webpack_require__(/*! ../elements/Button */ "./src/elements/Button.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__elements_Icon__ = __webpack_require__(/*! ../elements/Icon */ "./src/elements/Icon.jsx");
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/experimentals/Calendar.jsx',
    _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }









var Nav = function Nav(_ref) {
  var current = _ref.current,
      navFormat = _ref.navFormat,
      _ref$onMonthClick = _ref.onMonthClick,
      onMonthClick = _ref$onMonthClick === undefined ? __WEBPACK_IMPORTED_MODULE_3_lodash_noop___default.a : _ref$onMonthClick;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'calendar-nav navbar', __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4__elements_Button__["a" /* default */],
      { action: true, link: true, lg: true, onClick: function onClick(e) {
          return onMonthClick(e, current.clone().add(-1, 'month'));
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__elements_Icon__["a" /* default */], { arrowLeft: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: _this
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4__elements_Button__["a" /* default */],
      { link: true, lg: true, onClick: function onClick(e) {
          return onMonthClick(e, current.clone());
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: _this
      },
      current.format(navFormat)
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4__elements_Button__["a" /* default */],
      { action: true, link: true, lg: true, onClick: function onClick(e) {
          return onMonthClick(e, current.clone().add(1, 'month'));
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__elements_Icon__["a" /* default */], { arrowRight: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: _this
      })
    )
  );
};
Nav.defaultProps = {
  current: __WEBPACK_IMPORTED_MODULE_2_moment___default()(),
  navFormat: 'MMMM YYYY',
  onMonthClick: __WEBPACK_IMPORTED_MODULE_3_lodash_noop___default.a
};

var Header = function Header(_ref2) {
  var weekdays = _ref2.weekdays;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'calendar-header', __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: _this
    },
    weekdays.map(function (d, i) {
      var key = 'weekday-' + i;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { key: key, className: 'calendar-date', __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: _this
        },
        d
      );
    })
  );
};
Header.defaultProps = {};

var Body = function Body(_ref3) {
  var current = _ref3.current,
      start = _ref3.start,
      end = _ref3.end,
      options = _ref3.options,
      dateFormat = _ref3.dateFormat,
      onDateClick = _ref3.onDateClick;

  var dates = [];

  var _loop = function _loop(_d) {
    var before = _d.isBefore(current, 'month');
    var after = _d.isAfter(current, 'month');
    var datum = options.data && options.data.find(function (_ref4) {
      var date = _ref4.date;
      return _d.isSame(date, 'date');
    });
    var range = options.range && options.range.find(function (r) {
      return _d.isBetween(r.start, r.end, 'date', '[]');
    });
    var rangeStart = range && _d.isSame(range.start, 'date');
    var rangeEnd = range && _d.isSame(range.end, 'date');
    var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('calendar-date', {
      'prev-month': before,
      'current-month': _d.isSame(current, 'month'),
      'next-month': after,
      'calendar-range': range,
      'range-start': rangeStart,
      'range-end': rangeEnd,
      tooltip: datum,
      disabled: before || after
    });
    var btnClasses = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('date-item', {
      active: rangeStart || rangeEnd,
      badge: datum && datum.type === 'badge',
      'date-today': datum && datum.type === 'today'
    });
    var date = _d.clone();
    dates.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { key: date.format(), className: classes, 'data-tooltip': datum && datum.tooltip, __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__elements_Button__["a" /* default */],
        {
          disabled: datum && datum.type === 'disabled',
          className: btnClasses,
          onClick: function onClick(e) {
            return onDateClick(e, date);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: _this
        },
        date.format(dateFormat)
      )
    ));
  };

  for (var _d = start.clone(); _d.isSameOrBefore(end, 'date'); _d.add(1, 'day')) {
    _loop(_d);
  }
  // console.log(dates, current, options);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'calendar-body', __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: _this
    },
    dates
  );
};
Body.defaultProps = {
  current: undefined,
  start: undefined,
  end: undefined,
  options: {},
  dateFormat: 'D',
  onDateClick: __WEBPACK_IMPORTED_MODULE_3_lodash_noop___default.a
};

var Calendar = function Calendar(_ref5) {
  var navFormat = _ref5.navFormat,
      start = _ref5.start,
      end = _ref5.end,
      options = _ref5.options,
      onMonthClick = _ref5.onMonthClick,
      onDateClick = _ref5.onDateClick,
      current = _ref5.current,
      weekdays = _ref5.weekdays,
      props = _objectWithoutProperties(_ref5, ['navFormat', 'start', 'end', 'options', 'onMonthClick', 'onDateClick', 'current', 'weekdays']);

  if (!current) {
    return null;
  }
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'calendar', __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Nav, {
      current: current,
      navFormat: navFormat,
      onMonthClick: onMonthClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: _this
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'calendar-container', __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Header, { weekdays: weekdays, __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: _this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Body, Object.assign({}, props, {
        current: current,
        start: start || current.clone().startOf('month').startOf('week'),
        end: end || current.clone().endOf('month').endOf('week'),
        options: options,
        onDateClick: onDateClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: _this
      }))
    )
  );
};
Calendar.defaultProps = Object.assign({}, Nav.defaultProps, Header.defaultProps, Body.defaultProps);

/* harmony default export */ __webpack_exports__["a"] = (Calendar);

/***/ }),

/***/ "./src/experimentals/Carousel.jsx":
/*!****************************************!*\
  !*** ./src/experimentals/Carousel.jsx ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_noop__ = __webpack_require__(/*! lodash.noop */ "lodash.noop");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_noop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_noop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elements_Icon__ = __webpack_require__(/*! ../elements/Icon */ "./src/elements/Icon.jsx");
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/experimentals/Carousel.jsx',
    _this = this;






var Carousel = function Carousel(_ref) {
  var slides = _ref.slides,
      active = _ref.active,
      onChange = _ref.onChange;

  if (!slides || slides.length === 0) {
    return null;
  }
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'carousel', __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: _this
    },
    slides.map(function (slide, i) {
      var id = 'slide-' + i;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
        key: id + '_locator',
        id: id,
        name: 'carousel-radio',
        className: 'carousel-locator',
        checked: id === active,
        type: 'radio',
        hidden: true,
        onChange: function (_onChange) {
          function onChange(_x) {
            return _onChange.apply(this, arguments);
          }

          onChange.toString = function () {
            return _onChange.toString();
          };

          return onChange;
        }(function (e) {
          return onChange(e, id);
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: _this
      });
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'carousel-container', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: _this
      },
      slides.map(function (slide, i) {
        var key = 'slide-' + i + '_item';
        var prev = i === 0 ? slides.length - 1 : i - 1;
        var next = i === slides.length - 1 ? 0 : i + 1;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'figure',
          { key: key, className: 'carousel-item', __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'item-prev btn btn-action btn-lg', htmlFor: 'slide-' + prev, __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              },
              __self: _this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__elements_Icon__["a" /* default */], { arrowLeft: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              },
              __self: _this
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'item-next btn btn-action btn-lg', htmlFor: 'slide-' + next, __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              },
              __self: _this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__elements_Icon__["a" /* default */], { arrowRight: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              },
              __self: _this
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: slide.src, className: 'img-responsive rounded', alt: slide.alt, __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: _this
          })
        );
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'carousel-nav', __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: _this
      },
      slides.map(function (slide, i) {
        var id = 'slide-' + i;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          { key: id + '_nav', className: 'nav-item text-hide c-hand', htmlFor: id, __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: _this
          },
          i + 1
        );
      })
    )
  );
};
Carousel.defaultProps = {
  slides: [],
  active: 'slide-0',
  onChange: __WEBPACK_IMPORTED_MODULE_1_lodash_noop___default.a
};

/* harmony default export */ __webpack_exports__["a"] = (Carousel);

/***/ }),

/***/ "./src/experimentals/ComparisonSlider.jsx":
/*!************************************************!*\
  !*** ./src/experimentals/ComparisonSlider.jsx ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/experimentals/ComparisonSlider.jsx',
    _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var Image = function Image(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['src', 'alt', 'className']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', Object.assign({ src: src, className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('rounded', className), alt: alt }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: _this
  }));
};
Image.defaultProps = {
  alt: '',
  className: ''
};

var ComparisonSlider = function ComparisonSlider(_ref2) {
  var before = _ref2.before,
      after = _ref2.after;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'comparison-slider', __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'figure',
      { className: 'comparison-before', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Image, Object.assign({}, before, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: _this
      })),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'comparison-label', __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: _this
        },
        'Before'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'figure',
      { className: 'comparison-after', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Image, Object.assign({}, after, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: _this
      })),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'comparison-label', __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: _this
        },
        'After'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { className: 'comparison-resizer', readOnly: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: _this
      })
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (ComparisonSlider);

/***/ }),

/***/ "./src/experimentals/Filter.jsx":
/*!**************************************!*\
  !*** ./src/experimentals/Filter.jsx ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Volumes/SSD840/Workspaces/react-spectre.css/src/experimentals/Filter.jsx",
    _this = this;



var Filter = function Filter(_ref) {
  var tags = _ref.tags,
      data = _ref.data,
      active = _ref.active,
      onChange = _ref.onChange;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    { className: "filter", __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: _this
    },
    Object.keys(tags).map(function (key) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        key: key + "_input",
        id: key,
        className: "filter-tag",
        name: "filter-radio",
        checked: key === active,
        type: "radio",
        hidden: true,
        onChange: function (_onChange) {
          function onChange(_x) {
            return _onChange.apply(this, arguments);
          }

          onChange.toString = function () {
            return _onChange.toString();
          };

          return onChange;
        }(function (e) {
          return onChange(e, key);
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: _this
      });
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "filter-nav", __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: _this
      },
      Object.keys(tags).map(function (key) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "label",
          {
            key: key + "_nav",
            className: "chip",
            htmlFor: key,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: _this
          },
          tags[key]
        );
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "filter-body columns", __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: _this
      },
      data.map(function (_ref2, i) {
        var tag = _ref2.tag,
            title = _ref2.title,
            subtitle = _ref2.subtitle;

        var key = "card_" + i;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { key: key, className: "column col-4 filter-item", "data-tag": tag, __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "card", style: { marginBottom: '0.4rem' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              },
              __self: _this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "div",
              { className: "card-header", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 45
                },
                __self: _this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "card-title", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                  },
                  __self: _this
                },
                title
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "card-subtitle", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  },
                  __self: _this
                },
                subtitle
              )
            )
          )
        );
      })
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Filter);

/***/ }),

/***/ "./src/experimentals/Meter.jsx":
/*!*************************************!*\
  !*** ./src/experimentals/Meter.jsx ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Volumes/SSD840/Workspaces/react-spectre.css/src/experimentals/Meter.jsx",
    _this = this;



var Meter = function Meter(_ref) {
  var value = _ref.value,
      optimum = _ref.optimum,
      min = _ref.min,
      max = _ref.max,
      low = _ref.low,
      high = _ref.high;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meter", { className: "meter", value: value, optimum: optimum, min: min, max: max, low: low, high: high, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: _this
  });
};
Meter.defaultProps = {
  value: 0,
  optimum: 90,
  min: 0,
  max: 100,
  low: 30,
  high: 80
};

/* harmony default export */ __webpack_exports__["a"] = (Meter);

/***/ }),

/***/ "./src/experimentals/OffCanvas.jsx":
/*!*****************************************!*\
  !*** ./src/experimentals/OffCanvas.jsx ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elements_Icon__ = __webpack_require__(/*! ../elements/Icon */ "./src/elements/Icon.jsx");
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/experimentals/OffCanvas.jsx',
    _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var OffCanvas = function OffCanvas(_ref) {
  var children = _ref.children,
      sidebar = _ref.sidebar,
      props = _objectWithoutProperties(_ref, ['children', 'sidebar']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    Object.assign({ className: 'off-canvas' }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: _this
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'checkbox', className: 'off-canvas-checkbox', id: 'sidebar-checkbox', name: 'sidebar-checkbox', hidden: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: _this
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'label',
      { className: 'off-canvas-toggle btn btn-primary btn-lg', htmlFor: 'sidebar-checkbox', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__elements_Icon__["a" /* default */], { menu: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: _this
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('off-canvas-sidebar', sidebar.className || ''), __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: _this
      },
      sidebar.content
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'off-canvas-content', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: _this
      },
      children
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (OffCanvas);

/***/ }),

/***/ "./src/experimentals/Parallax.jsx":
/*!****************************************!*\
  !*** ./src/experimentals/Parallax.jsx ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Volumes/SSD840/Workspaces/react-spectre.css/src/experimentals/Parallax.jsx",
    _this = this;



var Parallax = function Parallax(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      title = _ref.title;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    { className: "parallax", __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "parallax-top-left", __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: _this
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "parallax-top-right", __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: _this
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "parallax-bottom-left", __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: _this
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "parallax-bottom-right", __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: _this
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "parallax-content", __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "parallax-front", __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "h2",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            },
            __self: _this
          },
          title
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "parallax-back", __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: src, className: "img-responsive rounded", alt: alt, __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: _this
        })
      )
    )
  );
};
Parallax.defaultProps = {
  src: 'https://picturepan2.github.io/spectre/img/osx-yosemite-2.jpg',
  alt: 'macOS Yosemite Wallpaper',
  title: 'tvOS parallax demo'
};

/* harmony default export */ __webpack_exports__["a"] = (Parallax);

/***/ }),

/***/ "./src/experimentals/Progress.jsx":
/*!****************************************!*\
  !*** ./src/experimentals/Progress.jsx ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Volumes/SSD840/Workspaces/react-spectre.css/src/experimentals/Progress.jsx",
    _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }



var Progress = function Progress(_ref) {
  var max = _ref.max,
      props = _objectWithoutProperties(_ref, ["max"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("progress", Object.assign({ className: "progress", max: max }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: _this
  }));
};
Progress.defaultProps = {
  max: 100
};

/* harmony default export */ __webpack_exports__["a"] = (Progress);

/***/ }),

/***/ "./src/experimentals/Slider.jsx":
/*!**************************************!*\
  !*** ./src/experimentals/Slider.jsx ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elements_form_Input__ = __webpack_require__(/*! ../elements/form/Input */ "./src/elements/form/Input.jsx");
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/experimentals/Slider.jsx',
    _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }





var Slider = function Slider(_ref) {
  var min = _ref.min,
      max = _ref.max,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ['min', 'max', 'value']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__elements_form_Input__["a" /* default */], Object.assign({ slider: true, min: min, max: max, defaultValue: value, 'data-tooltip': value }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: _this
  }));
};
Slider.defaultProps = {
  min: 0,
  max: 100,
  value: undefined
};

/* harmony default export */ __webpack_exports__["a"] = (Slider);

/***/ }),

/***/ "./src/experimentals/Timeline.jsx":
/*!****************************************!*\
  !*** ./src/experimentals/Timeline.jsx ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elements_Icon__ = __webpack_require__(/*! ../elements/Icon */ "./src/elements/Icon.jsx");
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/experimentals/Timeline.jsx',
    _this = this;






var Timeline = function Timeline(_ref) {
  var children = _ref.children,
      timelines = _ref.timelines;

  var timeline = children.map(function (child, i) {
    var key = 'timeline-' + i;
    var first = i === 0;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { key: key, className: 'timeline-item', id: key, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('timeline-left', { 'icon-lg': first }), __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          {
            href: '#' + key,
            className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('timeline-icon', 'tooltip', { 'icon-lg': !first }),
            'data-tooltip': timelines[i] || '',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__elements_Icon__["a" /* default */], { check: !first, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: _this
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'timeline-content', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: _this
        },
        child
      )
    );
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'timeline', __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: _this
    },
    timeline
  );
};
Timeline.defaultProps = {
  children: [],
  timelines: []
};

/* harmony default export */ __webpack_exports__["a"] = (Timeline);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: ComparisonSlider, Filter, Calendar, Timeline, Carousel, OffCanvas, Progress, Slider, Meter, Parallax, Switch, Form, Input, Select, Checkbox, uniqueId, Radio, Column, Container, Navbar, Columns, display, color, cursor, Divider, shape, text, position, Menu, Avatar, Dropdown, Breadcrumb, Panel, Autocomplete, Toast, Modal, Bar, Tile, Popover, Card, Pagination, Nav, Step, Chip, Empty, Accordion, Tab, Button, Table, Loading, Icon, Label, Column1, Column2, Column3, Column4, Column5, Column6, Column7, Column8, Column9, Column10, Column11, Column12 */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__experimentals_ComparisonSlider__ = __webpack_require__(/*! ./experimentals/ComparisonSlider */ "./src/experimentals/ComparisonSlider.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__experimentals_Filter__ = __webpack_require__(/*! ./experimentals/Filter */ "./src/experimentals/Filter.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__experimentals_Calendar__ = __webpack_require__(/*! ./experimentals/Calendar */ "./src/experimentals/Calendar.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__experimentals_Timeline__ = __webpack_require__(/*! ./experimentals/Timeline */ "./src/experimentals/Timeline.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__experimentals_Carousel__ = __webpack_require__(/*! ./experimentals/Carousel */ "./src/experimentals/Carousel.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__experimentals_OffCanvas__ = __webpack_require__(/*! ./experimentals/OffCanvas */ "./src/experimentals/OffCanvas.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__experimentals_Progress__ = __webpack_require__(/*! ./experimentals/Progress */ "./src/experimentals/Progress.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__experimentals_Slider__ = __webpack_require__(/*! ./experimentals/Slider */ "./src/experimentals/Slider.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__experimentals_Meter__ = __webpack_require__(/*! ./experimentals/Meter */ "./src/experimentals/Meter.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__experimentals_Parallax__ = __webpack_require__(/*! ./experimentals/Parallax */ "./src/experimentals/Parallax.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__elements_form_Switch__ = __webpack_require__(/*! ./elements/form/Switch */ "./src/elements/form/Switch.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__elements_form_Form__ = __webpack_require__(/*! ./elements/form/Form */ "./src/elements/form/Form.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__elements_form_Input__ = __webpack_require__(/*! ./elements/form/Input */ "./src/elements/form/Input.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__elements_form_Select__ = __webpack_require__(/*! ./elements/form/Select */ "./src/elements/form/Select.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__elements_form_Checkbox__ = __webpack_require__(/*! ./elements/form/Checkbox */ "./src/elements/form/Checkbox.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__elements_form_uniqueId__ = __webpack_require__(/*! ./elements/form/uniqueId */ "./src/elements/form/uniqueId.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__elements_form_Radio__ = __webpack_require__(/*! ./elements/form/Radio */ "./src/elements/form/Radio.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__layout_Column__ = __webpack_require__(/*! ./layout/Column */ "./src/layout/Column.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__layout_Container__ = __webpack_require__(/*! ./layout/Container */ "./src/layout/Container.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__layout_Navbar__ = __webpack_require__(/*! ./layout/Navbar */ "./src/layout/Navbar.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__layout_Columns__ = __webpack_require__(/*! ./layout/Columns */ "./src/layout/Columns.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__utilities_display__ = __webpack_require__(/*! ./utilities/display */ "./src/utilities/display.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__utilities_color__ = __webpack_require__(/*! ./utilities/color */ "./src/utilities/color.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__utilities_cursor__ = __webpack_require__(/*! ./utilities/cursor */ "./src/utilities/cursor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__utilities_Divider__ = __webpack_require__(/*! ./utilities/Divider */ "./src/utilities/Divider.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__utilities_Loading__ = __webpack_require__(/*! ./utilities/Loading */ "./src/utilities/Loading.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__utilities_shape__ = __webpack_require__(/*! ./utilities/shape */ "./src/utilities/shape.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__utilities_text__ = __webpack_require__(/*! ./utilities/text */ "./src/utilities/text.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__utilities_position__ = __webpack_require__(/*! ./utilities/position */ "./src/utilities/position.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_Menu__ = __webpack_require__(/*! ./components/Menu */ "./src/components/Menu.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_Avatar__ = __webpack_require__(/*! ./components/Avatar */ "./src/components/Avatar.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_Dropdown__ = __webpack_require__(/*! ./components/Dropdown */ "./src/components/Dropdown.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_Breadcrumb__ = __webpack_require__(/*! ./components/Breadcrumb */ "./src/components/Breadcrumb.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_Panel__ = __webpack_require__(/*! ./components/Panel */ "./src/components/Panel.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_Autocomplete__ = __webpack_require__(/*! ./components/Autocomplete */ "./src/components/Autocomplete.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_Toast__ = __webpack_require__(/*! ./components/Toast */ "./src/components/Toast.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_Modal__ = __webpack_require__(/*! ./components/Modal */ "./src/components/Modal.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_Bar__ = __webpack_require__(/*! ./components/Bar */ "./src/components/Bar.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_Tile__ = __webpack_require__(/*! ./components/Tile */ "./src/components/Tile.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_Popover__ = __webpack_require__(/*! ./components/Popover */ "./src/components/Popover.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_Card__ = __webpack_require__(/*! ./components/Card */ "./src/components/Card.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_Pagination__ = __webpack_require__(/*! ./components/Pagination */ "./src/components/Pagination.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_Nav__ = __webpack_require__(/*! ./components/Nav */ "./src/components/Nav.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_Step__ = __webpack_require__(/*! ./components/Step */ "./src/components/Step.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_Chip__ = __webpack_require__(/*! ./components/Chip */ "./src/components/Chip.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_Empty__ = __webpack_require__(/*! ./components/Empty */ "./src/components/Empty.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_Accordion__ = __webpack_require__(/*! ./components/Accordion */ "./src/components/Accordion.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_Tab__ = __webpack_require__(/*! ./components/Tab */ "./src/components/Tab.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__elements_Button__ = __webpack_require__(/*! ./elements/Button */ "./src/elements/Button.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__elements_Table__ = __webpack_require__(/*! ./elements/Table */ "./src/elements/Table.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__elements_Icon__ = __webpack_require__(/*! ./elements/Icon */ "./src/elements/Icon.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__elements_Label__ = __webpack_require__(/*! ./elements/Label */ "./src/elements/Label.jsx");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ComparisonSlider", function() { return __WEBPACK_IMPORTED_MODULE_0__experimentals_ComparisonSlider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return __WEBPACK_IMPORTED_MODULE_1__experimentals_Filter__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return __WEBPACK_IMPORTED_MODULE_2__experimentals_Calendar__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return __WEBPACK_IMPORTED_MODULE_3__experimentals_Timeline__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return __WEBPACK_IMPORTED_MODULE_4__experimentals_Carousel__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OffCanvas", function() { return __WEBPACK_IMPORTED_MODULE_5__experimentals_OffCanvas__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return __WEBPACK_IMPORTED_MODULE_6__experimentals_Progress__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return __WEBPACK_IMPORTED_MODULE_7__experimentals_Slider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Meter", function() { return __WEBPACK_IMPORTED_MODULE_8__experimentals_Meter__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Parallax", function() { return __WEBPACK_IMPORTED_MODULE_9__experimentals_Parallax__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return __WEBPACK_IMPORTED_MODULE_10__elements_form_Switch__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return __WEBPACK_IMPORTED_MODULE_11__elements_form_Form__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return __WEBPACK_IMPORTED_MODULE_12__elements_form_Input__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return __WEBPACK_IMPORTED_MODULE_13__elements_form_Select__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return __WEBPACK_IMPORTED_MODULE_14__elements_form_Checkbox__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return __WEBPACK_IMPORTED_MODULE_15__elements_form_uniqueId__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return __WEBPACK_IMPORTED_MODULE_16__elements_form_Radio__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return __WEBPACK_IMPORTED_MODULE_17__layout_Column__["m"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return __WEBPACK_IMPORTED_MODULE_18__layout_Container__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return __WEBPACK_IMPORTED_MODULE_19__layout_Navbar__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Columns", function() { return __WEBPACK_IMPORTED_MODULE_20__layout_Columns__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "display", function() { return __WEBPACK_IMPORTED_MODULE_21__utilities_display__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "color", function() { return __WEBPACK_IMPORTED_MODULE_22__utilities_color__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "cursor", function() { return __WEBPACK_IMPORTED_MODULE_23__utilities_cursor__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return __WEBPACK_IMPORTED_MODULE_24__utilities_Divider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "shape", function() { return __WEBPACK_IMPORTED_MODULE_26__utilities_shape__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return __WEBPACK_IMPORTED_MODULE_27__utilities_text__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "position", function() { return __WEBPACK_IMPORTED_MODULE_28__utilities_position__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return __WEBPACK_IMPORTED_MODULE_29__components_Menu__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return __WEBPACK_IMPORTED_MODULE_30__components_Avatar__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return __WEBPACK_IMPORTED_MODULE_31__components_Dropdown__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return __WEBPACK_IMPORTED_MODULE_32__components_Breadcrumb__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return __WEBPACK_IMPORTED_MODULE_33__components_Panel__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return __WEBPACK_IMPORTED_MODULE_34__components_Autocomplete__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return __WEBPACK_IMPORTED_MODULE_35__components_Toast__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return __WEBPACK_IMPORTED_MODULE_36__components_Modal__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Bar", function() { return __WEBPACK_IMPORTED_MODULE_37__components_Bar__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return __WEBPACK_IMPORTED_MODULE_38__components_Tile__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return __WEBPACK_IMPORTED_MODULE_39__components_Popover__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return __WEBPACK_IMPORTED_MODULE_40__components_Card__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return __WEBPACK_IMPORTED_MODULE_41__components_Pagination__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return __WEBPACK_IMPORTED_MODULE_42__components_Nav__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Step", function() { return __WEBPACK_IMPORTED_MODULE_43__components_Step__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Chip", function() { return __WEBPACK_IMPORTED_MODULE_44__components_Chip__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Empty", function() { return __WEBPACK_IMPORTED_MODULE_45__components_Empty__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return __WEBPACK_IMPORTED_MODULE_46__components_Accordion__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return __WEBPACK_IMPORTED_MODULE_47__components_Tab__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return __WEBPACK_IMPORTED_MODULE_48__elements_Button__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return __WEBPACK_IMPORTED_MODULE_49__elements_Table__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return __WEBPACK_IMPORTED_MODULE_25__utilities_Loading__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return __WEBPACK_IMPORTED_MODULE_50__elements_Icon__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return __WEBPACK_IMPORTED_MODULE_51__elements_Label__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Column1", function() { return __WEBPACK_IMPORTED_MODULE_17__layout_Column__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Column2", function() { return __WEBPACK_IMPORTED_MODULE_17__layout_Column__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Column3", function() { return __WEBPACK_IMPORTED_MODULE_17__layout_Column__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Column4", function() { return __WEBPACK_IMPORTED_MODULE_17__layout_Column__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Column5", function() { return __WEBPACK_IMPORTED_MODULE_17__layout_Column__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Column6", function() { return __WEBPACK_IMPORTED_MODULE_17__layout_Column__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Column7", function() { return __WEBPACK_IMPORTED_MODULE_17__layout_Column__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Column8", function() { return __WEBPACK_IMPORTED_MODULE_17__layout_Column__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Column9", function() { return __WEBPACK_IMPORTED_MODULE_17__layout_Column__["l"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Column10", function() { return __WEBPACK_IMPORTED_MODULE_17__layout_Column__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Column11", function() { return __WEBPACK_IMPORTED_MODULE_17__layout_Column__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Column12", function() { return __WEBPACK_IMPORTED_MODULE_17__layout_Column__["d"]; });




















































// import './example/';


/***/ }),

/***/ "./src/layout/Column.jsx":
/*!*******************************!*\
  !*** ./src/layout/Column.jsx ***!
  \*******************************/
/*! exports provided: default, ColumnClassnames, Column12, Column11, Column10, Column9, Column8, Column7, Column6, Column5, Column4, Column3, Column2, Column1 */
/*! exports used: Column1, Column10, Column11, Column12, Column2, Column3, Column4, Column5, Column6, Column7, Column8, Column9, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ColumnClassnames */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Column12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Column11; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Column10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return Column9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return Column8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Column7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Column6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Column5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Column4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Column3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Column2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Column1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/layout/Column.jsx',
    _this = this;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }





var Column = function Column(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'xs', 'sm', 'md', 'lg', 'xl', 'size']);

  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()('column', (_classnames = {}, _defineProperty(_classnames, 'col-xs-' + (xs || 0), !!xs), _defineProperty(_classnames, 'col-sm-' + (sm || 0), !!sm), _defineProperty(_classnames, 'col-md-' + (md || 0), !!md), _defineProperty(_classnames, 'col-lg-' + (lg || 0), !!lg), _defineProperty(_classnames, 'col-xl-' + (xl || 0), !!xl), _defineProperty(_classnames, 'col-' + (size || 0), !!size), _classnames), className);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: _this
    }),
    children
  );
};
Column.defaultProps = {
  children: null,
  className: '',
  xs: 0,
  sm: 0,
  md: 0,
  lg: 0,
  xl: 0,
  size: 0
};

/* harmony default export */ __webpack_exports__["m"] = (Column);

var ColumnClassnames = ['Column12', 'Column11', 'Column10', 'Column9', 'Column8', 'Column7', 'Column6', 'Column5', 'Column4', 'Column3', 'Column2', 'Column1', 'Column'];

var _ref2 = function () {
  var toExport = {};

  var _loop = function _loop(i) {
    var func = function func(_ref3) {
      var children = _ref3.children,
          props = _objectWithoutProperties(_ref3, ['children']);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Column,
        Object.assign({ size: i }, props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: _this
        }),
        children
      );
    };
    func.propTypes = { children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node };
    func.defaultProps = { children: null };
    func.funcName = 'Column' + i;
    toExport['Column' + i] = func;
  };

  for (var i = 12; i > 0; i -= 1) {
    _loop(i);
  }
  return toExport;
}(),
    Column12 = _ref2.Column12,
    Column11 = _ref2.Column11,
    Column10 = _ref2.Column10,
    Column9 = _ref2.Column9,
    Column8 = _ref2.Column8,
    Column7 = _ref2.Column7,
    Column6 = _ref2.Column6,
    Column5 = _ref2.Column5,
    Column4 = _ref2.Column4,
    Column3 = _ref2.Column3,
    Column2 = _ref2.Column2,
    Column1 = _ref2.Column1;



/***/ }),

/***/ "./src/layout/Columns.jsx":
/*!********************************!*\
  !*** ./src/layout/Columns.jsx ***!
  \********************************/
/*! exports provided: acquireContainerProps, default */
/*! exports used: acquireContainerProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = acquireContainerProps;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Container__ = __webpack_require__(/*! ./Container */ "./src/layout/Container.jsx");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/layout/Columns.jsx',
    _this = this;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var ColumnsWithoutContainer = function ColumnsWithoutContainer(_ref) {
  var children = _ref.children,
      gapless = _ref.gapless,
      oneline = _ref.oneline,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'gapless', 'oneline', 'className']);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('columns', {
    'col-gapless': gapless,
    'col-oneline': oneline
  }, className);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: _this
    }),
    children
  );
};
ColumnsWithoutContainer.defaultProps = {
  className: '',
  gapless: false,
  oneline: false
};

function acquireContainerProps(option) {
  switch (typeof option === 'undefined' ? 'undefined' : _typeof(option)) {
    case 'boolean':
      return null;
    case 'string':
      return _defineProperty({}, option, true);
    default:
      return option;
  }
}

var Columns = function Columns(_ref3) {
  var children = _ref3.children,
      container = _ref3.container,
      props = _objectWithoutProperties(_ref3, ['children', 'container']);

  var content = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    ColumnsWithoutContainer,
    Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: _this
    }),
    children
  );

  if (!container) {
    return content;
  }
  var containerProps = acquireContainerProps(container);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__Container__["a" /* default */],
    Object.assign({}, containerProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: _this
    }),
    content
  );
};
Columns.defaultProps = {
  container: false
};

/* harmony default export */ __webpack_exports__["b"] = (Columns);

/***/ }),

/***/ "./src/layout/Container.jsx":
/*!**********************************!*\
  !*** ./src/layout/Container.jsx ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/layout/Container.jsx',
    _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var Container = function Container(_ref) {
  var children = _ref.children,
      className = _ref.className,
      xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'xs', 'sm', 'md', 'lg', 'xl']);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('container', {
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    xl: xl
  }, className);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'section',
    Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: _this
    }),
    children
  );
};
Container.defaultProps = {
  className: '',
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false
};

/* harmony default export */ __webpack_exports__["a"] = (Container);

/***/ }),

/***/ "./src/layout/Navbar.jsx":
/*!*******************************!*\
  !*** ./src/layout/Navbar.jsx ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Container__ = __webpack_require__(/*! ./Container */ "./src/layout/Container.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Columns__ = __webpack_require__(/*! ./Columns */ "./src/layout/Columns.jsx");
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/layout/Navbar.jsx',
    _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }







var Section = function Section(_ref) {
  var children = _ref.children,
      className = _ref.className,
      center = _ref.center,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'center']);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
    'navbar-section': !center,
    'navbar-center': center
  }, className);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'section',
    Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: _this
    }),
    children
  );
};
Section.defaultProps = {
  className: '',
  center: false
};

var NavbarWithoutContainer = function NavbarWithoutContainer(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      props = _objectWithoutProperties(_ref2, ['children', 'className']);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('navbar', className);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'header',
    Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: _this
    }),
    children
  );
};
NavbarWithoutContainer.defaultProps = {
  className: ''
};

var Navbar = function Navbar(_ref3) {
  var children = _ref3.children,
      container = _ref3.container,
      props = _objectWithoutProperties(_ref3, ['children', 'container']);

  var content = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    NavbarWithoutContainer,
    Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: _this
    }),
    children
  );

  if (!container) {
    return content;
  }
  var containerProps = Object(__WEBPACK_IMPORTED_MODULE_3__Columns__["a" /* acquireContainerProps */])(container);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__Container__["a" /* default */],
    Object.assign({}, containerProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: _this
    }),
    content
  );
};
Navbar.defaultProps = {
  container: false
};

var Brand = function Brand(_ref4) {
  var children = _ref4.children,
      className = _ref4.className,
      props = _objectWithoutProperties(_ref4, ['children', 'className']);

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('navbar-brand', className);
  var component = null;
  if (props.href) {
    component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      Object.assign({ className: classes }, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: _this
      }),
      children
    );
  } else {
    component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'span',
      Object.assign({ className: classes }, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: _this
      }),
      children
    );
  }
  return component;
};
Brand.propTypes = {
  className: '',
  href: ''
};

Navbar.Brand = Brand;
Navbar.Section = Section;

/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ "./src/utilities/Divider.jsx":
/*!***********************************!*\
  !*** ./src/utilities/Divider.jsx ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/utilities/Divider.jsx',
    _this = this;




var Divider = function Divider(_ref) {
  var content = _ref.content,
      vertical = _ref.vertical,
      li = _ref.li,
      center = _ref.center,
      className = _ref.className;

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
    divider: !vertical,
    'divider-vert': vertical,
    'text-center': center
  }, className);
  if (li) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li', { className: classes, 'data-content': content, __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: _this
    });
  }
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: classes, 'data-content': content, __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: _this
  });
};
Divider.defaultProps = {
  content: '',
  vertical: false,
  li: false,
  center: false,
  className: ''
};

/* harmony default export */ __webpack_exports__["a"] = (Divider);

/***/ }),

/***/ "./src/utilities/Loading.jsx":
/*!***********************************!*\
  !*** ./src/utilities/Loading.jsx ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var _jsxFileName = '/Volumes/SSD840/Workspaces/react-spectre.css/src/utilities/Loading.jsx',
    _this = this;




var Loading = function Loading(_ref) {
  var large = _ref.large,
      className = _ref.className;

  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('loading', {
    'loading-lg': large
  }, className);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: classes, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: _this
  });
};
Loading.defaultProps = {
  large: false,
  className: ''
};

/* harmony default export */ __webpack_exports__["a"] = (Loading);

/***/ }),

/***/ "./src/utilities/color.js":
/*!********************************!*\
  !*** ./src/utilities/color.js ***!
  \********************************/
/*! exports provided: text, background */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background", function() { return background; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);


function text(_ref) {
  var primary = _ref.primary,
      secondary = _ref.secondary,
      gray = _ref.gray,
      light = _ref.light,
      success = _ref.success,
      warning = _ref.warning,
      error = _ref.error;
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return __WEBPACK_IMPORTED_MODULE_0_classnames___default()({
    'text-primary': primary,
    'text-secondary': secondary,
    'text-gray': gray,
    'text-light': light,
    'text-success': success,
    'text-warning': warning,
    'text-error': error
  }, className);
}

function background(_ref2) {
  var primary = _ref2.primary,
      secondary = _ref2.secondary,
      gray = _ref2.gray,
      light = _ref2.light,
      success = _ref2.success,
      warning = _ref2.warning,
      error = _ref2.error;
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return __WEBPACK_IMPORTED_MODULE_0_classnames___default()({
    'bg-primary': primary,
    'bg-secondary': secondary,
    'bg-gray': gray,
    'bg-light': light,
    'bg-success': success,
    'bg-warning': warning,
    'bg-error': error
  }, className);
}



/***/ }),

/***/ "./src/utilities/cursor.js":
/*!*********************************!*\
  !*** ./src/utilities/cursor.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cursor;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);


function cursor(_ref, className) {
  var hand = _ref.hand,
      move = _ref.move,
      zoomIn = _ref.zoomIn,
      zoomOut = _ref.zoomOut,
      notAllowed = _ref.notAllowed,
      auto = _ref.auto;

  return __WEBPACK_IMPORTED_MODULE_0_classnames___default()({
    'c-hand': hand,
    'c-move': move,
    'c-zoom-in': zoomIn,
    'c-zoom-out': zoomOut,
    'c-not-allowed': notAllowed,
    'c-auto': auto
  }, className);
}

/***/ }),

/***/ "./src/utilities/display.js":
/*!**********************************!*\
  !*** ./src/utilities/display.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = display;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);


function display(_ref, className) {
  var block = _ref.block,
      inline = _ref.inline,
      inlineBlock = _ref.inlineBlock,
      flex = _ref.flex,
      inlineFlex = _ref.inlineFlex,
      none = _ref.none,
      hide = _ref.hide,
      visible = _ref.visible,
      invisible = _ref.invisible,
      textHide = _ref.textHide,
      assistive = _ref.assistive;

  return __WEBPACK_IMPORTED_MODULE_0_classnames___default()({
    'd-block': block,
    'd-inline': inline,
    'd-inline-block': inlineBlock,
    'd-flex': flex,
    'd-inline-flex': inlineFlex,
    'd-none': none,
    'd-hide': hide,
    'd-visible': visible,
    'd-invisible': invisible,
    'text-hide': textHide,
    'text-assistive': assistive
  }, className);
}

/***/ }),

/***/ "./src/utilities/position.js":
/*!***********************************!*\
  !*** ./src/utilities/position.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = position;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);


function position(_ref) {
  var clearfix = _ref.clearfix,
      floatLeft = _ref.floatLeft,
      floatRight = _ref.floatRight,
      relative = _ref.relative,
      absolute = _ref.absolute,
      fixed = _ref.fixed,
      centered = _ref.centered,
      margin = _ref.margin,
      marginMore = _ref.marginMore,
      marginTop = _ref.marginTop,
      marginTopMore = _ref.marginTopMore,
      marginBottom = _ref.marginBottom,
      marginBottomMore = _ref.marginBottomMore,
      marginLeft = _ref.marginLeft,
      marginLeftMore = _ref.marginLeftMore,
      marginRight = _ref.marginRight,
      marginRightMore = _ref.marginRightMore,
      marginWidth = _ref.marginWidth,
      marginWidthMore = _ref.marginWidthMore,
      marginHeight = _ref.marginHeight,
      marginHeightMore = _ref.marginHeightMore,
      padding = _ref.padding,
      paddingMore = _ref.paddingMore,
      paddingTop = _ref.paddingTop,
      paddingTopMore = _ref.paddingTopMore,
      paddingBottom = _ref.paddingBottom,
      paddingBottomMore = _ref.paddingBottomMore,
      paddingLeft = _ref.paddingLeft,
      paddingLeftMore = _ref.paddingLeftMore,
      paddingRight = _ref.paddingRight,
      paddingRightMore = _ref.paddingRightMore,
      paddingWidth = _ref.paddingWidth,
      paddingWidthMore = _ref.paddingWidthMore,
      paddingHeight = _ref.paddingHeight,
      paddingHeightMore = _ref.paddingHeightMore;
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return __WEBPACK_IMPORTED_MODULE_0_classnames___default()({
    clearfix: clearfix,
    'float-left': floatLeft,
    'float-right': floatRight,
    relative: relative,
    absolute: absolute,
    fixed: fixed,
    centered: centered,
    'm-1': margin,
    'm-2': marginMore,
    'mt-1': marginTop,
    'mt-2': marginTopMore,
    'mb-1': marginBottom,
    'mb-2': marginBottomMore,
    'ml-1': marginLeft,
    'ml-2': marginLeftMore,
    'mr-1': marginRight,
    'mr-2': marginRightMore,
    'mx-1': marginWidth,
    'mx-2': marginWidthMore,
    'my-1': marginHeight,
    'my-2': marginHeightMore,
    'p-1': padding,
    'p-2': paddingMore,
    'pt-1': paddingTop,
    'pt-2': paddingTopMore,
    'pb-1': paddingBottom,
    'pb-2': paddingBottomMore,
    'pl-1': paddingLeft,
    'pl-2': paddingLeftMore,
    'pr-1': paddingRight,
    'pr-2': paddingRightMore,
    'px-1': paddingWidth,
    'px-2': paddingWidthMore,
    'py-1': paddingHeight,
    'py-2': paddingHeightMore
  }, className);
}

/***/ }),

/***/ "./src/utilities/shape.js":
/*!********************************!*\
  !*** ./src/utilities/shape.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shape;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);


function shape(_ref) {
  var rounded = _ref.rounded,
      circle = _ref.circle;
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return __WEBPACK_IMPORTED_MODULE_0_classnames___default()({
    rounded: rounded,
    circle: circle
  }, className);
}

/***/ }),

/***/ "./src/utilities/text.js":
/*!*******************************!*\
  !*** ./src/utilities/text.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = text;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);


function text(_ref, className) {
  var left = _ref.left,
      center = _ref.center,
      right = _ref.right,
      justify = _ref.justify,
      lowercase = _ref.lowercase,
      uppercase = _ref.uppercase,
      capitalize = _ref.capitalize,
      normal = _ref.normal,
      bold = _ref.bold,
      italic = _ref.italic,
      large = _ref.large,
      ellipsis = _ref.ellipsis,
      clip = _ref.clip,
      textBreak = _ref.textBreak;

  return __WEBPACK_IMPORTED_MODULE_0_classnames___default()({
    'text-left': left,
    'text-center': center,
    'text-right': right,
    'text-justify': justify,
    'text-lowercase': lowercase,
    'text-uppercase': uppercase,
    'text-capitalize': capitalize,
    'text-normal': normal,
    'text-bold': bold,
    'text-italic': italic,
    'text-large': large,
    'text-ellipsis': ellipsis,
    'text-clip': clip,
    'text-break': textBreak
  }, className);
}

/***/ }),

/***/ "classnames":
/*!**********************************************************************************************************!*\
  !*** external {"root":"classNames","commonjs2":"classnames","commonjs":"classnames","amd":"classnames"} ***!
  \**********************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_classnames__;

/***/ }),

/***/ "lodash.noop":
/*!*******************************************************************************************************!*\
  !*** external {"root":"noop","commonjs2":"lodash.noop","commonjs":"lodash.noop","amd":"lodash.noop"} ***!
  \*******************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_noop__;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_moment__;

/***/ }),

/***/ "prop-types":
/*!*********************************************************************************************************!*\
  !*** external {"root":"PropTypes","commonjs2":"prop-types","commonjs":"prop-types","amd":"prop-types"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=react-spectre.css.js.map