'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var currentId = 0;

exports['default'] = function (prefix) {
    prefix = typeof prefix === 'undefined' ? '' : prefix + '';
    currentId += 1;
    return prefix + currentId;
};

;
module.exports = exports['default'];