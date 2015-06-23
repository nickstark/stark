"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = function (fn) {
    return function (result) {
        fn.call(this, result);
        return result;
    };
};

;
module.exports = exports["default"];