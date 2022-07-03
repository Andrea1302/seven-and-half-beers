"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _authApi = require("./services/api/auth/authApi");

var _Button = _interopRequireDefault(require("./Button"));

var _reactNative = require("react-native");

var _styleForm = _interopRequireDefault(require("./style/styleForm"));

var _asyncStorage = require("./utils/asyncStorage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// button 
// components 
var formObject = {
  email: '',
  password: ''
};

var Login = function Login(_ref) {
  var goToRegistration = _ref.goToRegistration,
      callback = _ref.callback,
      imgBg = _ref.imgBg,
      containerStyle = _ref.containerStyle,
      styleBtn = _ref.styleBtn,
      styleTextBtn = _ref.styleTextBtn;

  var LoginFunction = function LoginFunction() {
    (0, _authApi.signInPostApi)(formObject).then(function (res) {
      // setStorage('user',res.data)
      callback(res);
    });
  };

  var handleInput = function handleInput(params) {
    return function (e) {
      formObject[params] = e;
    };
  };

  var goTo = function goTo() {
    goToRegistration();
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: {
      uri: 'https://img.freepik.com/free-vector/beer-with-bubbles-foam-background_107791-2563.jpg?w=2000'
    },
    style: [_styleForm.default.bgDefault, imgBg],
    resizeMode: "cover"
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_styleForm.default.container, containerStyle]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    style: _styleForm.default.input,
    onChangeText: handleInput('email'),
    placeholder: "email",
    placeholderTextColor: "#ececec"
  }), /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    secureTextEntry: true,
    style: _styleForm.default.input,
    onChangeText: handleInput('password'),
    placeholder: "password",
    placeholderTextColor: "#ececec"
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    styleCustomText: styleTextBtn,
    styleCustom: styleBtn,
    callback: LoginFunction,
    label: "Login"
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    styleCustomText: styleTextBtn,
    styleCustom: styleBtn,
    callback: goTo,
    label: "Go to registration"
  })));
};

var _default = Login;
exports.default = _default;