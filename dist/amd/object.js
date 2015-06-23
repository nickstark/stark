define(['exports', 'module', './object/bindAll', './object/mask', './object/extend'], function (exports, module, _objectBindAll, _objectMask, _objectExtend) {
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _bindAll = _interopRequireDefault(_objectBindAll);

    var _mask = _interopRequireDefault(_objectMask);

    var _extend = _interopRequireDefault(_objectExtend);

    /*
    * Utility functions for working with objects
    */

    module.exports = {
        // bind all functions to object, takes optional target for creating private interfaces
        // bindAll(myLib) // bind all properties
        // bindAll(myLib, ['method1', 'method2']); // bind specific properties
        // bindAll(myLib, ['method1', 'method2'], myPublicExport); // expose to a different object
        bindAll: _bindAll['default'],

        // creates an new object with subset of properties
        // var publicProfile = mask(fullUser, ['name', 'email', 'country']);
        mask: _mask['default'],

        // copies properties onto destination object
        // var options = extend({}, defaults, configuration));
        extend: _extend['default']
    };
});