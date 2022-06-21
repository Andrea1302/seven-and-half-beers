"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _styleGame = _interopRequireDefault(require("./style/styleGame"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import LottieView from 'lottie-react-native';
// style 
var ptPlayers = [{
  player1: {
    card1: 5
  }
}, {
  player2: {
    card1: 1
  }
}, {
  player3: {
    card1: 2
  }
}, {
  player4: {
    card1: 3
  }
}, {
  player5: {
    card1: '7'
  }
}, {
  player6: {
    card1: '3'
  }
}, {
  player7: {
    card1: '2'
  }
}];

var Game = function Game(_ref) {
  var user = _ref.user;
  return /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: {
      uri: 'https://cdn.shopify.com/s/files/1/1772/0301/products/3_47247d8e-5f77-4b71-b13c-6e1c08adb51f.png?v=1575939071'
    },
    style: _styleGame.default.gameTable
  }, /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: {
      uri: 'https://ae01.alicdn.com/kf/HTB1x512QXXXXXXIaFXXq6xXFXXXp/Huayi-asse-di-legno-fotografia-sfondo-paesaggio-foto-personalizzata-ritratto-studios-background-bordo-sfondo-xt4933.jpg'
    },
    style: _styleGame.default.table
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.row
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.topUser
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "center",
    style: _styleGame.default.user,
    source: {
      uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.pt
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default['pts' + ptPlayers[0].player1.card1]
  }))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.topUser
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "center",
    style: _styleGame.default.user,
    source: {
      uri: 'https://flyclipart.com/thumb2/drunk-leprechaun-image-811722.png'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.pt
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default['pts' + ptPlayers[1].player2.card1]
  }))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.topUser
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "center",
    style: _styleGame.default.user,
    source: {
      uri: 'https://t.pimg.jp/030/961/784/5/30961784.jpg'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.pt
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default['pts' + ptPlayers[2].player3.card1]
  })))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.rowCentral
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.centralUser
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "center",
    style: _styleGame.default.user,
    source: {
      uri: 'https://e7.pngegg.com/pngimages/296/710/png-clipart-man-holding-bottle-illustration-alcohol-intoxication-drink-drunk-man-hand-people.png'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.pt
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default['pts' + ptPlayers[3].player4.card1]
  }))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.centralUser
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.pt
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default['pts' + ptPlayers[4].player5.card1]
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "center",
    style: _styleGame.default.user,
    source: {
      uri: 'https://e7.pngegg.com/pngimages/645/44/png-clipart-cartoon-women-borracho-hand-computer.png'
    }
  }))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.rowBottom
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.bottomUser
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.pt
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default['pts' + ptPlayers[5].player6.card1]
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "center",
    style: _styleGame.default.user,
    source: {
      uri: 'https://e7.pngegg.com/pngimages/543/904/png-clipart-beer-alcohol-intoxication-alcoholic-beverage-illustration-a-drunken-man-with-a-cartoon-illustration-cartoon-character-food.png'
    }
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.bottomUser
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.pt
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default['pts' + ptPlayers[6].player7.card1]
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "center",
    style: _styleGame.default.user,
    source: {
      uri: 'https://img.favpng.com/4/7/25/alcohol-intoxication-cartoon-clip-art-png-favpng-yLSkcL9XkYpKrSKSPj5zYB4Pt.jpg'
    }
  })))));
};

var _default = Game;
exports.default = _default;