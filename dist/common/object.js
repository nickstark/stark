'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _objectBindAll = require('./object/bindAll');

var _objectBindAll2 = _interopRequireDefault(_objectBindAll);

var _objectMask = require('./object/mask');

var _objectMask2 = _interopRequireDefault(_objectMask);

var _objectExtend = require('./object/extend');

var _objectExtend2 = _interopRequireDefault(_objectExtend);

/*
* Utility functions for working with objects
*/

exports['default'] = {
    // bind all functions to object, takes optional target for creating private interfaces
    // bindAll(myLib) // bind all properties
    // bindAll(myLib, ['method1', 'method2']); // bind specific properties
    // bindAll(myLib, ['method1', 'method2'], myPublicExport); // expose to a different object
    bindAll: _objectBindAll2['default'],

    // creates an new object with subset of properties
    // var publicProfile = mask(fullUser, ['name', 'email', 'country']);
    mask: _objectMask2['default'],

    // copies properties onto destination object
    // var options = extend({}, defaults, configuration));
    extend: _objectExtend2['default']
};
module.exports = exports['default'];