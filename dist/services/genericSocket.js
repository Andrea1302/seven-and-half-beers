"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeConnectionWithWs = closeConnectionWithWs;
exports.connectWithWs = connectWithWs;
exports.listenToWs = listenToWs;
exports.requestCard = requestCard;
exports.sendMessageToWs = sendMessageToWs;

var _configSocket = require("../services/configSocket");

//onOpen
function connectWithWs(myUser) {
  _configSocket.socket.onopen = function (e) {
    console.log("[open] Connection established"); //Subscribe to the channel

    _configSocket.socket.send(JSON.stringify(myUser));
  };
} // export async function connectWithWs() {
//     try {
//         let server = await connect()
//         console.log('server', server)
//     } catch (error) {
//         console.log("ooops ", error)
//     }
// }
//send


function sendMessageToWs(message) {
  console.log('messeggio da inviare', message);

  _configSocket.socket.send(JSON.stringify(message));
}

function requestCard(message) {
  _configSocket.socket.send(JSON.stringify(message));

  setTimeout(function () {
    endMatch(message.user_id);
  }, 100);
}

function endMatch(id) {
  console.log("check end match...");
  var message = {
    user_id: id,
    method: "checkEndMatch"
  };
  sendMessageToWs(message);
} //onMessage


function listenToWs() {
  _configSocket.socket.onmessage = function (event) {
    console.log("Message received: ", event.data);
    return event.data;
  };

  return _configSocket.socket.onmessage;
} //onClose


function closeConnectionWithWs() {
  _configSocket.socket.close();

  console.log('çhiuso');
}