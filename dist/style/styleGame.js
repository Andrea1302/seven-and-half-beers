"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

var _default = _reactNative.StyleSheet.create({
  gameTable: {
    height: _reactNative.Dimensions.get('screen').height,
    width: _reactNative.Dimensions.get('screen').width,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  btn: {
    flexDirection: 'row'
  },
  singleBtn: {
    backgroundColor: 'blue',
    marginHorizontal: 20,
    padding: 10
  },
  table: {
    backgroundColor: "yellow",
    position: 'relative',
    height: 300,
    width: '80%',
    borderRadius: 20,
    justifyContent: 'space-between'
  },
  playerContainer: {
    justifyContent: 'space-between',
    position: "relative",
    height: '100%'
  },
  centralUser: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: "relative",
    bottom: 50,
    width: "100%",
    height: 100
  },
  centralSx: {
    position: "relative",
    right: 50
  },
  centralDx: {
    position: "relative",
    left: 50
  },
  topUser: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: "releative",
    bottom: 50,
    width: "100%",
    height: 100
  },
  bottomUser: {
    height: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 50,
    flexDirection: 'row',
    position: 'relative'
  },
  user: {
    height: "80%",
    width: 100,
    backgroundColor: 'blue',
    borderRadius: 50
  },
  playerRow: {
    height: '100%',
    alignItems: "center"
  },
  deck: {
    position: 'absolute',
    top: "50%",
    left: "50%",
    height: 100,
    width: 100
  }
});

exports.default = _default;