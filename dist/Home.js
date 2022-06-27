"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { getStorage } from './utils/asyncStorage'
//Components
var Home = function Home(_ref) {
  var goTo = _ref.goTo,
      logoutCallback = _ref.logoutCallback;

  // useEffect(() => {
  //     getUser()
  // }, [])
  // const getUser = async () => {
  //     let newstate = Object.assign({}, state)
  //     let user = await getStorage('user')
  //     if (user !== undefined) {
  //         newstate.isUserLogged = true
  //     }
  // }
  var navigateTo = function navigateTo(path) {
    return function () {
      goTo(path);
    };
  };

  var logout = function logout() {
    logoutCallback();
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    style: {
      height: _reactNative.Dimensions.get('screen').height,
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'center'
    },
    source: {
      uri: 'https://thumbs.gfycat.com/LikableMarriedArizonaalligatorlizard-size_restricted.gif'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "ciao "), /*#__PURE__*/_react.default.createElement(_Button.default, {
    callback: navigateTo("quickplay"),
    label: "Gioca Veloce"
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    callback: navigateTo("LobbyPage"),
    label: "Crea Lobby"
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    callback: navigateTo("leaderboard"),
    label: "Leaderboard"
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    callback: logout,
    label: "Logout"
  }));
};

var _default = Home;
exports.default = _default;