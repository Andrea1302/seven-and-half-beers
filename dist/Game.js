"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeWebLottie = _interopRequireDefault(require("react-native-web-lottie"));

var _styleGame = _interopRequireDefault(require("./style/styleGame"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var playerList = [{
  username: "Sempronio",
  points: 1000,
  firstCard: 5,
  otherCards: []
}, {
  username: "PotatoGnognos",
  points: 758,
  firstCard: 2,
  otherCards: []
}, {
  username: "Yugi Muto",
  points: 9999,
  firstCard: "Exodia",
  otherCards: []
}, {
  username: "Seto Kaiba",
  points: 1,
  firstCard: 6,
  otherCards: []
}, {
  username: "Mai Valentine",
  points: 69,
  firstCard: 3,
  otherCards: []
}, {
  username: "Bulma",
  points: 420,
  firstCard: 2,
  otherCards: []
}, {
  username: "Nico Robin",
  points: 0,
  firstCard: 0.5,
  otherCards: []
}];

var Game = function Game(_ref) {
  var user = _ref.user,
      arrayPlayer = _ref.arrayPlayer;

  var _useState = (0, _react.useState)({
    infoGiocatori: playerList
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var playerIcon = (0, _react.useRef)();
  var beer = (0, _react.useRef)();
  (0, _react.useEffect)(function () {// playerIcon.current.play()
  }, []);
  return /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: {
      uri: 'https://cdn.shopify.com/s/files/1/1772/0301/products/3_47247d8e-5f77-4b71-b13c-6e1c08adb51f.png?v=1575939071'
    },
    style: _styleGame.default.gameTable
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.gameTable
  }, /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: {
      uri: 'https://ae01.alicdn.com/kf/HTB1x512QXXXXXXIaFXXq6xXFXXXp/Huayi-asse-di-legno-fotografia-sfondo-paesaggio-foto-personalizzata-ritratto-studios-background-bordo-sfondo-xt4933.jpg'
    },
    resizeMode: "cover",
    style: _styleGame.default.table
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "center",
    style: _styleGame.default.deck,
    source: {
      uri: 'https://www.bereacasa.it/wp-content/uploads/2018/01/heineken5lt.jpg'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.playerContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.topUser
  }, state.infoGiocatori[0] !== undefined ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.playerRow
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: "row",
      height: '80%'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNativeWebLottie.default, {
    ref: playerIcon,
    style: _styleGame.default.bastardi,
    source: require('./assets/lotties/user.json'),
    loop: true,
    autosize: true
  }), /*#__PURE__*/_react.default.createElement(_reactNativeWebLottie.default, {
    ref: beer,
    style: {
      height: "100%"
    },
    source: require('./assets/lotties/beer.json'),
    loop: true,
    autosize: true
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, state.infoGiocatori[0].username), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, state.infoGiocatori[0].points)) : /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "center",
    style: _styleGame.default.user,
    source: {
      uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png'
    }
  })), state.infoGiocatori[1] !== undefined ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.playerRow
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: "row",
      height: '80%'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNativeWebLottie.default, {
    ref: playerIcon,
    style: _styleGame.default.bastardi,
    source: require('./assets/lotties/user.json'),
    loop: true,
    autosize: true
  }), /*#__PURE__*/_react.default.createElement(_reactNativeWebLottie.default, {
    ref: beer,
    style: {
      height: "100%"
    },
    source: require('./assets/lotties/beer.json'),
    loop: true,
    autosize: true
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, state.infoGiocatori[1].username), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, state.infoGiocatori[1].points)) : /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "center",
    style: _styleGame.default.user,
    source: {
      uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png'
    }
  })), state.infoGiocatori[2] !== undefined ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.playerRow
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: "row",
      height: '80%'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNativeWebLottie.default, {
    ref: playerIcon,
    style: _styleGame.default.bastardi,
    source: require('./assets/lotties/user.json'),
    loop: true,
    autosize: true
  }), /*#__PURE__*/_react.default.createElement(_reactNativeWebLottie.default, {
    ref: beer,
    style: {
      height: "100%"
    },
    source: require('./assets/lotties/beer.json'),
    loop: true,
    autosize: true
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, state.infoGiocatori[2].username), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, state.infoGiocatori[2].points)) : /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "center",
    style: _styleGame.default.user,
    source: {
      uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png'
    }
  }))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.centralUser
  }, state.infoGiocatori[3] !== undefined ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_styleGame.default.playerRow, _styleGame.default.centralSx]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: "row",
      height: '80%'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNativeWebLottie.default, {
    ref: playerIcon,
    style: _styleGame.default.bastardi,
    source: require('./assets/lotties/user.json'),
    loop: true,
    autosize: true
  }), /*#__PURE__*/_react.default.createElement(_reactNativeWebLottie.default, {
    ref: beer,
    style: {
      height: "100%"
    },
    source: require('./assets/lotties/beer.json'),
    loop: true,
    autosize: true
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, state.infoGiocatori[3].username), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, state.infoGiocatori[3].points)) : /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "center",
    style: _styleGame.default.user,
    source: {
      uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png'
    }
  })), state.infoGiocatori[4] !== undefined ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_styleGame.default.playerRow, _styleGame.default.centralDx]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: "row",
      height: '80%'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNativeWebLottie.default, {
    ref: beer,
    style: {
      height: "100%"
    },
    source: require('./assets/lotties/beer.json'),
    loop: true,
    autosize: true
  }), /*#__PURE__*/_react.default.createElement(_reactNativeWebLottie.default, {
    ref: playerIcon,
    style: _styleGame.default.bastardi,
    source: require('./assets/lotties/user.json'),
    loop: true,
    autosize: true
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, state.infoGiocatori[4].username), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, state.infoGiocatori[4].points)) : /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_styleGame.default.playerRow, _styleGame.default.centralDx]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "center",
    style: _styleGame.default.user,
    source: {
      uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png'
    }
  }))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.bottomUser
  }, state.infoGiocatori[5] !== undefined ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.playerRow
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: "row",
      height: '80%'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNativeWebLottie.default, {
    ref: playerIcon,
    style: _styleGame.default.bastardi,
    source: require('./assets/lotties/user.json'),
    loop: true,
    autosize: true
  }), /*#__PURE__*/_react.default.createElement(_reactNativeWebLottie.default, {
    ref: beer,
    style: {
      height: "100%"
    },
    source: require('./assets/lotties/beer.json'),
    loop: true,
    autosize: true
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, state.infoGiocatori[5].username), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, state.infoGiocatori[5].points)) : /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.playerRow
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "center",
    style: _styleGame.default.user,
    source: {
      uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png'
    }
  })), state.infoGiocatori[6] !== undefined ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.playerRow
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: "row",
      height: '80%'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNativeWebLottie.default, {
    ref: playerIcon,
    style: _styleGame.default.bastardi,
    source: require('./assets/lotties/user.json'),
    loop: true,
    autosize: true
  }), /*#__PURE__*/_react.default.createElement(_reactNativeWebLottie.default, {
    ref: beer,
    style: {
      height: "100%"
    },
    source: require('./assets/lotties/beer.json'),
    loop: true,
    autosize: true
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, state.infoGiocatori[6].username), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, state.infoGiocatori[6].points)) : /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.playerRow
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "center",
    style: _styleGame.default.user,
    source: {
      uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png'
    }
  })))))));
};

var _default = Game;
exports.default = _default;