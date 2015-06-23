'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _objectMask = require('../object/mask');

var _objectMask2 = _interopRequireDefault(_objectMask);

exports['default'] = function (url) {
    // create anchor element, have browser handle parsing
    var anchor = document.createElement('a');
    anchor.href = url;

    // mask out properties we don't need
    return (0, _objectMask2['default'])(anchor, ['hash', 'href', 'host', 'hostname', 'pathname', 'port', 'protocol', 'search']);
};

;
module.exports = exports['default'];