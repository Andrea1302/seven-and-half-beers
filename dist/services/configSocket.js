"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.socket = void 0;
var socket = new WebSocket("wss://demo.piesocket.com/v3/channel_14?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self"); // function connect() {
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