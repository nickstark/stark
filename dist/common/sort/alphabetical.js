'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = function (a, b) {
    a = '' + a;
    b = '' + b; // cast to string using concatination (null causes error on toString)
    return a > b ? 1 : a < b ? -1 : 0;
};

;
module.exports = exports['default'];