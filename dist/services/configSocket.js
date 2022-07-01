"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.socket = void 0;
var socket = new WebSocket("ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws"); // function connect() {
//     return new Promise(function (resolve, reject) {
//         socket.onopen = function () {
//             resolve(socket);
//         };
//         socket.onerror = function (err) {
//             reject(err);
//         };
//     });
// }

exports.socket = socket;