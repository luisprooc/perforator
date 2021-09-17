"use strict";
exports.__esModule = true;
exports.encryptPassword = void 0;
var createHmac = require('crypto').createHmac;
var encryptPassword = function (password, secret) {
    var hash = createHmac('sha512', secret)
        .update(password)
        .digest('hex');
    return hash;
};
exports.encryptPassword = encryptPassword;
console.log((0, exports.encryptPassword)('I love you', 'mysecret'));
