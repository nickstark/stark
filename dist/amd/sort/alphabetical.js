define(['exports', 'module'], function (exports, module) {
    'use strict';

    module.exports = function (a, b) {
        a = '' + a;
        b = '' + b; // cast to string using concatination (null causes error on toString)
        return a > b ? 1 : a < b ? -1 : 0;
    };

    ;
});