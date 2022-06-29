"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _genericSocket = require("./services/genericSocket");

var _styleGame = _interopRequireDefault(require("./style/styleGame"));

var _Button = _interopRequireDefault(require("./Button"));

var _asyncStorage = require("./utils/asyncStorage");

var _configSocket = require("./services/configSocket");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* 
<LottieView ref={playerIcon} style={styleGame.bastardi} source={require('./assets/lotties/user.json')} loop={true} autosize={true} />
<LottieView ref={beer} style={{ height: "100%" }} source={require('./assets/lotties/beer.json')} loop={true} autosize={true} /> 
*/
var playerList = [{
  id: 112,
  username: "Sempronio",
  points: 1000,
  firstCard: 1,
  active: false,
  isDrunk: false,
  otherCards: 0
}, {
  id: 222,
  username: "PotatoGnognos",
  points: 758,
  firstCard: 2,
  active: false,
  otherCards: 0,
  isDrunk: false
}, {
  id: 300,
  username: "Yugi Muto",
  points: 9999,
  firstCard: "Exodia",
  active: false,
  otherCards: 0,
  isDrunk: false
}, {
  id: 2,
  username: "Seto Kaiba",
  points: 1,
  firstCard: 6,
  active: false,
  otherCards: 0,
  isDrunk: false
}, {
  id: 59,
  username: "Mai Valentine",
  points: 69,
  firstCard: 3,
  active: false,
  otherCards: 0,
  isDrunk: false
}, {
  id: 62,
  username: "Bulma",
  points: 420,
  firstCard: 2,
  active: false,
  isDrunk: false,
  otherCards: 0
}, {
  id: 711,
  username: "Nico Robin",
  points: 0,
  firstCard: 0.5,
  active: false,
  isDrunk: false,
  otherCards: 0
}]; // const nextCard = 2
// let myId

var Game = function Game(props) {
  // const myRef = useRef([])
  var _useState = (0, _react.useState)({
    infoGiocatori: playerList,
    contatoreTurni: 0,
    turns: 0,
    isMyTurn: false,
    myId: undefined
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1]; //DidUpade


  (0, _react.useEffect)(function () {
    if (_reactNative.Platform.OS !== 'web') {
      props.callback(state);
    }
  }, [state]);
  (0, _react.useEffect)(function () {
    // userInfo()
    _configSocket.socket.onmessage = function (event) {
      if (event.data[0] === '{') {
        console.log('questoo', event.data);
      }
    }; // (async () => {
    //     const user = await getStorage('user')
    //     setState({
    //         ...state,
    //         myId: user.id
    //     })
    // })()

  }, []);

  var stop = function stop() {
    var lenghtPlayers = state.infoGiocatori.length;

    if (state.turns === lenghtPlayers - 1) {
      alert('finiiish');
      return;
    }

    setState(_objectSpread(_objectSpread({}, state), {}, {
      turns: state.turns + 1
    }));
    props.stop(71);
  };

  var carta = function carta() {
    var newState = Object.assign({}, state);
    var arrCards = [0.5, 1, 2, 3, 4, 5, 6, 7];
    var nextCard = arrCards[Math.floor(Math.random() * (7 + 1))];
    newState.infoGiocatori[state.turns].otherCards = newState.infoGiocatori[state.turns].otherCards + nextCard;
    var sumCard = newState.infoGiocatori[state.turns].otherCards + newState.infoGiocatori[state.turns].firstCard;

    if (sumCard > 7.5) {
      console.log("Hai perso zi"); // myRef.current[state.turns].style = {backgrounColor : 'green'}
      // console.log(myRef.current[state.turns])

      newState.infoGiocatori[state.turns].isDrunk = true;
      stop();
      return props.addCard('gameover');
    }

    var variable;

    switch (nextCard) {
      case 0.5:
        {
          variable = 11.4;
          break;
        }

      case 1:
        {
          variable = 22.8;
          break;
        }

      case 2:
        {
          variable = 45.6;
          break;
        }

      case 3:
        {
          variable = 68.4;
          break;
        }

      case 4:
        {
          variable = 91.2;
          break;
        }

      case 5:
        {
          variable = 114;
          break;
        }

      case 6:
        {
          variable = 136.8;
          break;
        }

      case 7:
        {
          variable = 159.6;
          break;
        }
    }

    props.addCard(variable);
    setState(newState);
  };

  var webS = function webS() {// sendDataToWs(2, 'start', state.myId)
  };

  var start = function start() {// sendDataToWs(2, 'start', state.myId)
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: {
      uri: 'https://cdn.shopify.com/s/files/1/1772/0301/products/3_47247d8e-5f77-4b71-b13c-6e1c08adb51f.png?v=1575939071'
    },
    style: _styleGame.default.gameTable
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: props.styleChildren
  }, props.children), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styleGame.default.btn
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    styleCustom: _styleGame.default.singleBtn,
    label: "Stop",
    callback: stop
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    styleCustom: _styleGame.default.singleBtn,
    label: "Carta",
    callback: carta
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    styleCustom: _styleGame.default.singleBtn,
    label: "wbs",
    callback: webS
  })));
};

var _default = Game;
exports.default = _default;