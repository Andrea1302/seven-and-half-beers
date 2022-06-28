"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wsMessage = exports.sendDataToWs = exports.openConnection = void 0;

var _config = require("./config");

var _sockjsClient = _interopRequireDefault(require("sockjs-client"));

var _stompjs = _interopRequireDefault(require("stompjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Note this line
var SOCKET = new _sockjsClient.default(_config.WEBSOCKET);

var STOMPCLIENT = _stompjs.default.over(SOCKET);

var openConnection = function openConnection(idLobby) {
  STOMPCLIENT.connect({}, function (frame) {
    console.log('frame', frame);
    STOMPCLIENT.subscribe("/lobby/".concat(idLobby), function (res) {
      console.log('res', JSON.parse('body', res.body));
    });
  });
};

exports.openConnection = openConnection;

var wsMessage = function wsMessage() {
  STOMPCLIENT.onMessage = function (event) {
    // listen to data sent from the web socket server
    var message = JSON.parse(event.data);
    console.log('message', message);
  };
};

exports.wsMessage = wsMessage;

var sendDataToWs = function sendDataToWs(idLobby, resource, idUser) {
  STOMPCLIENT.send("/app/room/".concat(idLobby, "/").concat(resource, "/").concat(idUser));
};

exports.sendDataToWs = sendDataToWs;