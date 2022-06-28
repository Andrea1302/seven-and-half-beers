"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var callback = _ref.callback,
      label = _ref.label,
      styleCustom = _ref.styleCustom,
      styleCustomText = _ref.styleCustomText;

  var onPress = function onPress() {
    callback();
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: styleCustom,
    onPress: onPress
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styleCustomText
  }, label));
};

Button.defaultProps = {
  styleCustom: {
    backgroundColor: '#4F8CAB',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    minWidth: 100,
    alignItems: 'center'
  },
  styleCustomText: {
    color: '#ececec',
    fontWeight: 'bold'
  }
}; // propTypes 

Button.propTypes = {
  styleBtn: _propTypes.default.string
};
var _default = Button;
exports.default = _default;