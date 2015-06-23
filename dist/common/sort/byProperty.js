'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _alphabetical = require('./alphabetical');

var _alphabetical2 = _interopRequireDefault(_alphabetical);

exports['default'] = function (property, comparator) {
    comparator = comparator || _alphabetical2['default'];
    return function (a, b) {
        return comparator(a[property], b[property]);
    };
};

;
module.exports = exports['default'];