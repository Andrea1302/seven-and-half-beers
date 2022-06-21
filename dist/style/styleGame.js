"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

var _default = _reactNative.StyleSheet.create({
  gameTable: {
    height: _reactNative.Dimensions.get('screen').height,
    justifyContent: 'center',
    alignItems: 'center'
  },
  table: {
    height: _reactNative.Dimensions.get('screen').height / 1.5,
    backgroundColor: 'yellow',
    width: _reactNative.Dimensions.get('screen').width - 200,
    borderRadius: 20,
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'relative',
    bottom: 50
  },
  rowCentral: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: _reactNative.Dimensions.get('screen').width - 100,
    position: 'relative',
    right: 50
  },
  rowBottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'relative',
    bottom: 61
  },
  centralUser: {
    flexDirection: 'row'
  },
  bottomUser: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  topUser: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  user: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
    borderRadius: 50
  },
  pt: {
    height: 90,
    width: 50,
    backgroundColor: '#000',
    margin: 16,
    justifyContent: 'flex-end'
  },
  pts1: {
    height: 12,
    backgroundColor: '#fff'
  },
  pts2: {
    height: 24,
    backgroundColor: '#fff'
  },
  pts3: {
    height: 36,
    backgroundColor: '#fff'
  },
  pts4: {
    height: 48,
    backgroundColor: '#fff'
  },
  pts5: {
    height: 60,
    backgroundColor: '#fff'
  },
  pts6: {
    height: 72,
    backgroundColor: '#fff'
  },
  pts7: {
    height: 84,
    backgroundColor: '#fff'
  }
});

exports.default = _default;