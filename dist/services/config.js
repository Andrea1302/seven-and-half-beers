"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WEBSOCKET = exports.TIMEOUT = exports.BASEURL = void 0;
//const
var TIMEOUT = 5000; // timeout setting in ms

exports.TIMEOUT = TIMEOUT;
var BASEURL = 'http://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com'; //! baseURL for json server. REMEMBER TO SET IT ON PORT 5000! command: json-server --watch "PATH JSON FILE" --port 5000 

exports.BASEURL = BASEURL;
var WEBSOCKET = "http://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws";
exports.WEBSOCKET = WEBSOCKET;