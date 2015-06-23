"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = function (fn) {
    return function (promiseResults) {
        fn.apply(this, promiseResults);
    };
};

;
module.exports = exports["default"];