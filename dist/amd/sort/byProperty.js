define(['exports', 'module', './alphabetical'], function (exports, module, _alphabetical) {
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _defaultComparator = _interopRequireDefault(_alphabetical);

    module.exports = function (property, comparator) {
        comparator = comparator || _defaultComparator['default'];
        return function (a, b) {
            return comparator(a[property], b[property]);
        };
    };

    ;
});