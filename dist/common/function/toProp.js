"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = function (prop) {
    return function (input) {
        return input[prop];
    };
};

;
module.exports = exports["default"];