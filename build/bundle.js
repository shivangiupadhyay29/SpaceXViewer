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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    GET_SPACEX_LIST: 'GET_SPACEX_LIST',
    SPACEX_LIST_RECEIVED: 'SPACEX_LIST_RECEIVED'
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
module.exports = __webpack_require__(6);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _staticApp = __webpack_require__(7);

var _staticApp2 = _interopRequireDefault(_staticApp);

var _store = __webpack_require__(19);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(29);
var app = express();

app.use(express.static('public')); //bundle.js file is 
// looked into this folder exposed by the server to webpack
//to be sent to the browser. 

app.get('*', function (req, res) {
    res.send((0, _staticApp2.default)(req, _store2.default));
});

app.listen(3030, function () {
    return console.log('server is listening on 3030..');
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(8);

var _server2 = __webpack_require__(9);

var _reactRedux = __webpack_require__(10);

var _route = __webpack_require__(11);

var _route2 = _interopRequireDefault(_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _server2.StaticRouter,
            { location: req.path, context: {} },
            _react2.default.createElement(_route2.default, null)
        )
    ));
    return '\n    <html>\n    <head></head>\n    <body>\n        <div id=\'root\'>' + content + '</div>\n        <script src="bundle.js"></script>\n    </body>\n    </html>\n    ';
}; //react app dependencies

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/server");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(12);

var _containers = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactRouterDom.Route, { path: '/', element: _react2.default.createElement(_containers.Home, null) })
    );
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _home = __webpack_require__(14);

Object.defineProperty(exports, 'Home', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_home).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(15);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(16);

var _header = __webpack_require__(18);

var _header2 = _interopRequireDefault(_header);

var _filters = __webpack_require__(30);

var _filters2 = _interopRequireDefault(_filters);

var _spaceList = __webpack_require__(31);

var _spaceList2 = _interopRequireDefault(_spaceList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home(props) {
    var title = props.title;


    return _react2.default.createElement(
        'div',
        { className: 'home-container' },
        _react2.default.createElement(_header2.default, { title: title }),
        _react2.default.createElement(_filters2.default, null),
        _react2.default.createElement(_spaceList2.default, null)
    );
};
Home.propTypes = {
    title: _propTypes2.default.string.isRequired
};

Home.defaultProps = {
    title: _constants.headerTitle
};

exports.default = Home;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lang = __webpack_require__(17);

Object.keys(_lang).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _lang[key];
    }
  });
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var headerTitle = exports.headerTitle = 'SpaceX Launch Programs';

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    'h1',
    null,
    props.title
  );
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});

var _redux = __webpack_require__(1);

var _reduxSaga = __webpack_require__(20);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _rootSaga = __webpack_require__(21);

var _rootSaga2 = _interopRequireDefault(_rootSaga);

var _rootReducer = __webpack_require__(26);

var _rootReducer2 = _interopRequireDefault(_rootReducer);

__webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sagaMiddleware = (0, _reduxSaga2.default)();

var createAppStore = function createAppStore() {
      var Store = (0, _redux.createStore)(_rootReducer2.default, (0, _redux.applyMiddleware)(sagaMiddleware));
      // use the same saga middleware that you have enhanced your store with
      sagaMiddleware.run(_rootSaga2.default);
      return Store;
};

exports.default = createAppStore();

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.default = rootSaga;

var _effects = __webpack_require__(2);

var _space = __webpack_require__(22);

var _marked = /*#__PURE__*/regeneratorRuntime.mark(rootSaga);

function rootSaga() {
   return regeneratorRuntime.wrap(function rootSaga$(_context) {
      while (1) {
         switch (_context.prev = _context.next) {
            case 0:
               _context.next = 2;
               return (0, _effects.all)([(0, _space.listWatcher)()]);

            case 2:
            case 'end':
               return _context.stop();
         }
      }
   }, _marked, this);
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.listWatcher = listWatcher;

var _space = __webpack_require__(3);

var _space2 = _interopRequireDefault(_space);

var _constant = __webpack_require__(23);

var _api = __webpack_require__(24);

var _effects = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(fetchSpaceXList),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(listWatcher);

function fetchSpaceXList(action) {
    var _action$params, params, _params$offset, offset, limit, url, json;

    return regeneratorRuntime.wrap(function fetchSpaceXList$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _action$params = action.params, params = _action$params === undefined ? null : _action$params;
                    _params$offset = params.offset, offset = _params$offset === undefined ? 0 : _params$offset, limit = params.limit;
                    url = _constant.baseApiURL + (params ? '?' : '');
                    _context.next = 5;
                    return (0, _api.api)(url, _constant.type.GET, params).then(function (response) {
                        return response;
                    });

                case 5:
                    json = _context.sent;
                    _context.next = 8;
                    return (0, _effects.put)({ type: _space2.default.SPACEX_LIST_RECEIVED, json: json });

                case 8:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}

function listWatcher(params) {
    return regeneratorRuntime.wrap(function listWatcher$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return (0, _effects.takeLatest)(_space2.default.GET_SPACEX_LIST, fetchSpaceXList);

                case 2:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked2, this);
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var baseApiURL = exports.baseApiURL = "https://api.spaceXdata.com/v3/launches?limit=100";

var type = exports.type = { GET: 'GET', POST: 'POST', PUT: 'PUT', DELETE: 'DELETE' };

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var api = exports.api = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, type, params) {
    var body = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var myRequest;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // const header = generateHeader();
            url = url + resolveQueryParams(params);
            myRequest = generateRequest(url, type, header, body);

            requestLogger(url, type, header, body);
            _context.next = 5;
            return fetch(myRequest).then(function (response) {
              responseLogger(response);
              return response.json();
            }).catch(function (err) {
              console.error('main error handler', err);
            });

          case 5:
            return _context.abrupt('return', _context.sent);

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function api(_x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// import {  setJwtHeaders } from '../utils';
var fetch = __webpack_require__(25);

var generateHeader = function generateHeader() {
  var headerObject = setJwtHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
    'X-Custom-Header': 'ProcessThisImmediately'
  });
  return new Headers(headerObject);
};

var generateRequest = function generateRequest(url, type, myHeaders, body) {
  var bodyLiteral = body ? { body: JSON.stringify(body) } : {};
  return new Request(url, _extends({
    method: type,
    headers: myHeaders,
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    redirect: 'follow', // manual, *follow, error
    // accept: 'application/json, text/plain, */*',
    referrerPolicy: 'no-referrer' }, bodyLiteral));
};

var resolveQueryParams = function resolveQueryParams(params) {
  return params ? Object.keys(params).map(function (k) {
    return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
  }).join('&') : '';
};

var requestLogger = function requestLogger(url, type, header, body) {
  console.info('Request API:::>>>>>>>>>>> with URL:::::', url, 'TYPE:::', type);
  console.info('Token::::', JSON.stringify(header.get('Authorization')));
  body && console.info('Body::::', body);
  console.info('END Request::::>>>>>>>>>>');
};

var responseLogger = function responseLogger(response) {
  console.info('Response API:::>>>>>>');
  console.info('Response:', response);
  console.info('END Responset:::>>>>>');
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(1);

var _space = __webpack_require__(27);

var _space2 = _interopRequireDefault(_space);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    spaceMissions: _space2.default
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _space = __webpack_require__(3);

var _space2 = _interopRequireDefault(_space);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initState = {
    missions: [],
    loading: false
};

var reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
    var action = arguments[1];

    switch (action.type) {
        case _space2.default.GET_SPACEX_LIST:
            return _extends({}, state, { loading: true });
        case _space2.default.SPACEX_LIST_RECEIVED:
            return _extends({}, state, { missions: action.json, loading: false });
        default:
            return _extends({}, state);
    }
};

exports.default = reducer;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(15);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Filters = function Filters(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h2',
            null,
            'filters..!!'
        )
    );
};
Filters.propTypes = {};

Filters.defaultProps = {};

exports.default = Filters;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(15);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpaceList = function SpaceList(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h2',
            null,
            'listing..!!'
        )
    );
};

SpaceList.propTypes = {};

SpaceList.defaultProps = {};

exports.default = SpaceList;

/***/ })
/******/ ]);