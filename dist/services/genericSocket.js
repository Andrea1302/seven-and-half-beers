"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeConnectionWithWs = closeConnectionWithWs;
exports.connectWithWs = connectWithWs;
exports.listenToWs = listenToWs;
exports.sendMessageToWs = sendMessageToWs;

var _configSocket = require("../services/configSocket");

//onOpen
function connectWithWs(myUser) {
  _configSocket.socket.onopen = function (e) {
    alert("[open] Connection established"); //Subscribe to the channel

    _configSocket.socket.send(JSON.stringify(myUser));
  };
} //send


function sendMessageToWs(message) {
  _configSocket.socket.send(JSON.stringify(message));
} //onMessage


function listenToWs() {
  _configSocket.socket.onmessage = function (event) {
    console.log("Message received: ", event.data);
    return event.data;
  };
} //onClose


function closeConnectionWithWs() {
  _configSocket.socket.close();

  console.log('çhiuso');
}