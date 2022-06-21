"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

var _default = _reactNative.StyleSheet.create({
  bgDefault: {
    width: _reactNative.Dimensions.get('screen').width,
    height: _reactNative.Dimensions.get('screen').height,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    width: _reactNative.Dimensions.get('screen').width / 2,
    height: _reactNative.Dimensions.get('screen').height / 1.5,
    backgroundColor: 'rgba(61, 52, 25, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  input: {
    borderRadius: 5,
    marginVertical: 10,
    color: '#ececec',
    backgroundColor: '#8A7946',
    padding: 10,
    minWidth: _reactNative.Platform.OS === 'web' ? '50%' : '80%'
  },
  btn: {
    padding: 10,
    backgroundColor: '#4F8CAB',
    borderRadius: 10,
    marginTop: 30
  },
  textBtn: {
    color: '#ececec'
  },
  errorInput: {
    borderColor: 'red',
    borderWidth: 2
  }
});

exports.default = _default;