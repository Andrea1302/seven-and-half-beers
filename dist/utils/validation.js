"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkMail = checkMail;
exports.checkPassword = checkPassword;

function checkMail(mail) {
  var reMail = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g;
  return reMail.test(mail);
}

function checkPassword(password) {
  var rePassword = /^(?=.{8,})(?=.[a-z])(?=.[A-Z])(?=.[@#$%!^&+=]).*$/;
  return rePassword.test(password);
}