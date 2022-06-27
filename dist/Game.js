"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _Lottie = _interopRequireDefault(require("./Lottie"));

var _styleGame = _interopRequireDefault(require("./style/styleGame"));

var _Button = _interopRequireDefault(require("./Button"));

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
  otherCards: []
}, {
  id: 222,
  username: "PotatoGnognos",
  points: 758,
  firstCard: 2,
  active: false,
  otherCards: [],
  isDrunk: false
}, {
  id: 300,
  username: "Yugi Muto",
  points: 9999,
  firstCard: "Exodia",
  active: false,
  otherCards: [],
  isDrunk: false
}, {
  id: 2,
  username: "Seto Kaiba",
  points: 1,
  firstCard: 6,
  active: false,
  otherCards: [],
  isDrunk: false
}, {
  id: 59,
  username: "Mai Valentine",
  points: 69,
  firstCard: 3,
  active: false,
  otherCards: [],
  isDrunk: false
}, {
  id: 62,
  username: "Bulma",
  points: 420,
  firstCard: 2,
  active: false,
  isDrunk: false,
  otherCards: []
}, {
  id: 711,
  username: "Nico Robin",
  points: 0,
  firstCard: 0.5,
  active: false,
  isDrunk: false,
  otherCards: []
}];
var nextCard = 2;
var myId;

var Game = function Game(props) {
  var myRef = (0, _react.useRef)([]);

  var _useState = (0, _react.useState)({
    infoGiocatori: playerList,
    contatoreTurni: 0,
    turns: 0,
    isMyTurn: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var playerIcon = (0, _react.useRef)();
  var beer = (0, _react.useRef)(); //DidUpade

  (0, _react.useEffect)(function () {
    var newState = Object.assign({}, state);

    if (newState.turns === 0) {
      //Chiamata per prendere id user dallo storage
      myId = 59;
    }

    if (state.infoGiocatori[state.turns].id === myId) {
      newState.isMyTurn = true;
    } else {
      newState.isMyTurn = false;
    }

    setState(newState);
  }, [state.turns]);

  var renderPlayer = function renderPlayer(player, key) {
    return (
      /*#__PURE__*/
      // <View ref={el => myRef.current[key] = el} key={key} style={{ height: 200, width: 100, backgroundColor: state.infoGiocatori[state.turns].id === player.id ? 'yellow' : 'red' }}>
      _react.default.createElement(_reactNative.View, {
        key: key
      }, props.children, /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, player.username), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, player.firstCard), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, player.otherCards.map(function (card, key) {
        return /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
          key: key
        }, card);
      }))) // </View >

    );
  }; //DidUpdate

  /*  useEffect(() => {
       
       handleTurn()
   
   }, [state.contatoreTurni]) */
  // const handleTurn = () => {
  //     const newState = Object.assign({}, state)
  //     newState.infoGiocatori[state.contatoreTurni].active = true
  //     newState.infoGiocatori.forEach((player) => {
  //         if (player.active === true) {
  //             turnoId = player.id
  //         }
  //         if (turnoId === myId) {
  //             newState.isMyTurn = true
  //         } else {
  //             newState.isMyTurn = false
  //         }
  //     })
  //     console.log("Turno: ", newState.contatoreTurni)
  //     console.log("Tocca al giocatore con id:", turnoId)
  //     setState(newState)
  // }


  var stoppe = function stoppe() {
    var lenghtPlayers = state.infoGiocatori.length;

    if (state.turns === lenghtPlayers - 1) {
      alert('finiiish');
      return;
    }

    setState(_objectSpread(_objectSpread({}, state), {}, {
      turns: state.turns + 1
    })); // const newState = Object.assign({}, state)
    // index = newState.infoGiocatori.findIndex((player) => player.id === turnoId)
    // console.log("index: ", index)
    // newState.infoGiocatori[index].active = false
    // if (newState.infoGiocatori[index + 1] === undefined) {
    //     //Chiamata API per termiane la partita
    //     alert("turni finiti")
    //     return
    // }
    // newState.infoGiocatori[index + 1].active = true
    // setState({
    //     ...state,
    //     infoGiocatori: newState.infoGiocatori,
    //     contatoreTurni: state.contatoreTurni + 1
    // })
  };

  var carta = function carta() {
    var newState = Object.assign({}, state);
    var nextCard = Math.floor(Math.random() * 10 + 1);
    newState.infoGiocatori[state.turns].otherCards.push(nextCard);
    var sumCard = newState.infoGiocatori[state.turns].otherCards.reduce(function (a, b) {
      return a + b;
    }, newState.infoGiocatori[state.turns].firstCard);
    console.log("initCard", state.infoGiocatori[state.turns].firstCard, "nextCard", nextCard, "sommatoria: ", sumCard);

    if (sumCard > 7.5) {
      console.log("Hai perso zi"); // myRef.current[state.turns].style = {backgrounColor : 'green'}

      console.log(myRef.current[state.turns]);
      myRef.current[state.turns].style.border = '20px solid green';
      newState.infoGiocatori[state.turns].isDrunk = true;
      stoppe(); // newState.isMyTurn = false
      // newState.infoGiocatori[index].active = false
      // newState.infoGiocatori[index + 1].active = true

      return;
    }

    setState(newState);
  };

  return (
    /*#__PURE__*/
    // <ImageBackground
    //     source={{ uri: 'https://cdn.shopify.com/s/files/1/1772/0301/products/3_47247d8e-5f77-4b71-b13c-6e1c08adb51f.png?v=1575939071' }}
    //     style={styleGame.gameTable}
    // >
    //     <View style={styleGame.gameTable}>
    //         <ImageBackground
    //             source={{ uri: 'https://ae01.alicdn.com/kf/HTB1x512QXXXXXXIaFXXq6xXFXXXp/Huayi-asse-di-legno-fotografia-sfondo-paesaggio-foto-personalizzata-ritratto-studios-background-bordo-sfondo-xt4933.jpg' }}
    //             resizeMode="cover"
    //             style={styleGame.table}
    //         >
    //             {/* ER SPILLATORE*/}
    //             <Image
    //                 resizeMode="center"
    //                 style={styleGame.deck}
    //                 source={{ uri: 'https://www.bereacasa.it/wp-content/uploads/2018/01/heineken5lt.jpg' }}
    //             />
    //             <View style={styleGame.playerContainer}>
    //                 <View style={styleGame.topUser}>
    //                     {/*PLAYER 1*/}
    //                     {state.infoGiocatori[0] !== undefined
    //                         ?
    //                         <View style={styleGame.playerRow}>
    //                             <View style={{ flexDirection: "row", height: '80%' }}>
    //                             </View>
    //                             <Text>{state.infoGiocatori[0].username}</Text>
    //                             <Text>{state.infoGiocatori[0].points}</Text>
    //                         </View>
    //                         :
    //                         <View>
    //                             <Image
    //                                 resizeMode="center"
    //                                 style={styleGame.user}
    //                                 source={{ uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png' }}
    //                             />
    //                         </View>
    //                     }
    //                     {/*PLAYER 2*/}
    //                     {state.infoGiocatori[1] !== undefined
    //                         ?
    //                         <View style={styleGame.playerRow}>
    //                             <View style={{ flexDirection: "row", height: '80%' }}>
    //                             </View>
    //                             <Text>{state.infoGiocatori[1].username}</Text>
    //                             <Text>{state.infoGiocatori[1].points}</Text>
    //                         </View>
    //                         :
    //                         <View>
    //                             <Image
    //                                 resizeMode="center"
    //                                 style={styleGame.user}
    //                                 source={{ uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png' }}
    //                             />
    //                         </View>
    //                     }
    //                     {/*PLAYER 3*/}
    //                     {state.infoGiocatori[2] !== undefined
    //                         ?
    //                         <View style={styleGame.playerRow}>
    //                             <View style={{ flexDirection: "row", height: '80%' }}>
    //                             </View>
    //                             <Text>{state.infoGiocatori[2].username}</Text>
    //                             <Text>{state.infoGiocatori[2].points}</Text>
    //                         </View>
    //                         :
    //                         <View>
    //                             <Image
    //                                 resizeMode="center"
    //                                 style={styleGame.user}
    //                                 source={{ uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png' }}
    //                             />
    //                         </View>
    //                     }
    //                 </View>
    //                 <View style={styleGame.centralUser}>
    //                     {/*PLAYER 4*/}
    //                     {state.infoGiocatori[3] !== undefined
    //                         ?
    //                         <View style={[styleGame.playerRow, styleGame.centralSx]}>
    //                             <View style={{ flexDirection: "row", height: '80%' }}>
    //                             </View>
    //                             <Text>{state.infoGiocatori[3].username}</Text>
    //                             <Text>{state.infoGiocatori[3].points}</Text>
    //                         </View>
    //                         :
    //                         <View>
    //                             <Image
    //                                 resizeMode="center"
    //                                 style={styleGame.user}
    //                                 source={{ uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png' }}
    //                             />
    //                         </View>
    //                     }
    //                     {/*PLAYER 5*/}
    //                     {state.infoGiocatori[4] !== undefined
    //                         ?
    //                         <View style={[styleGame.playerRow, styleGame.centralDx]}>
    //                             <View style={{ flexDirection: "row", height: '80%' }}>
    //                             </View>
    //                             <Text>{state.infoGiocatori[4].username}</Text>
    //                             <Text>{state.infoGiocatori[4].points}</Text>
    //                         </View>
    //                         :
    //                         <View style={[styleGame.playerRow, styleGame.centralDx]}>
    //                             <Image
    //                                 resizeMode="center"
    //                                 style={styleGame.user}
    //                                 source={{ uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png' }}
    //                             />
    //                         </View>
    //                     }
    //                 </View>
    //                 <View style={styleGame.bottomUser}>
    //                     {/*PLAYER 6*/}
    //                     {state.infoGiocatori[5] !== undefined
    //                         ?
    //                         <View style={styleGame.playerRow}>
    //                             <View style={{ flexDirection: "row", height: '80%' }}>
    //                             </View>
    //                             <Text>{state.infoGiocatori[5].username}</Text>
    //                             <Text>{state.infoGiocatori[5].points}</Text>
    //                         </View>
    //                         :
    //                         <View style={styleGame.playerRow}>
    //                             <Image
    //                                 resizeMode="center"
    //                                 style={styleGame.user}
    //                                 source={{ uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png' }}
    //                             />
    //                         </View>
    //                     }
    //                     {/*PLAYER 7*/}
    //                     {state.infoGiocatori[6] !== undefined
    //                         ?
    //                         <View style={styleGame.playerRow}>
    //                             <View style={{ flexDirection: "row", height: '80%' }}>
    //                             </View>
    //                             <Text>{state.infoGiocatori[6].username}</Text>
    //                             <Text>{state.infoGiocatori[6].points}</Text>
    //                         </View>
    //                         :
    //                         <View style={styleGame.playerRow}>
    //                             <Image
    //                                 resizeMode="center"
    //                                 style={styleGame.user}
    //                                 source={{ uri: 'https://e7.pngegg.com/pngimages/524/884/png-clipart-alcohol-intoxication-character-drunk-hand-boy.png' }}
    //                             />
    //                         </View>
    //                     }
    //                 </View>
    //             </View>
    //             {
    //                 state.isMyTurn &&
    //                 <>
    //                     <Button styleCustom={{ backgrounColor: 'blue' }} label="Stop" callback={stoppe} />
    //                     <Button label="Carta" callback={carta} />
    //                 </>
    //             }
    //         </ImageBackground>
    //     </View>
    //     <>
    //         <Button styleCustom={{ backgrounColor: 'blue' }} label="Stop" callback={stoppe} />
    //         <Button label="Carta" callback={carta} />
    //     </>
    // </ImageBackground >
    _react.default.createElement(_reactNative.View, {
      style: {
        height: 600,
        backgroundColor: 'blue'
      }
    }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
      styleCustom: {
        backgrounColor: 'blue'
      },
      label: "Stop",
      callback: stoppe
    }), /*#__PURE__*/_react.default.createElement(_Button.default, {
      label: "Carta",
      callback: carta
    })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: {
        flexDirection: 'row',
        width: _reactNative.Dimensions.get('screen').width,
        justifyContent: 'space-between'
      }
    }, state.infoGiocatori.map(renderPlayer))))
  );
};

var _default = Game;
exports.default = _default;