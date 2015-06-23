define(['exports', 'module', './errors/NotImplemented'], function (exports, module, _errorsNotImplemented) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _NotImplemented = _interopRequireDefault(_errorsNotImplemented);

  /*
   * Error Classes
   */

  module.exports = {
    // throws an error for not implemented functions
    NotImplemented: _NotImplemented['default']
  };
});