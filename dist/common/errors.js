'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _errorsNotImplemented = require('./errors/NotImplemented');

var _errorsNotImplemented2 = _interopRequireDefault(_errorsNotImplemented);

/*
 * Error Classes
 */

exports['default'] = {
  // throws an error for not implemented functions
  NotImplemented: _errorsNotImplemented2['default']
};
module.exports = exports['default'];