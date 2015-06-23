define(['exports', 'module', '../object/mask'], function (exports, module, _objectMask) {
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _mask = _interopRequireDefault(_objectMask);

    module.exports = function (url) {
        // create anchor element, have browser handle parsing
        var anchor = document.createElement('a');
        anchor.href = url;

        // mask out properties we don't need
        return (0, _mask['default'])(anchor, ['hash', 'href', 'host', 'hostname', 'pathname', 'port', 'protocol', 'search']);
    };

    ;
});