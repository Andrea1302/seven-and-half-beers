"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Lottie = function Lottie(props) {
  console.log(props);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.children);
};

var _default = Lottie;
exports.default = _default;