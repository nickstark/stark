'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var NotImplementedError = function NotImplementedError(message) {
    Error.apply(this);
    Error.captureStackTrace(this, arguments.callee);

    if (message) {
        this.message = message;
    }
};

NotImplementedError.prototype = Object.create(Error.prototype);
NotImplementedError.prototype.constructor = NotImplementedError;

NotImplementedError.prototype.name = 'NotImplementedError';
NotImplementedError.prototype.message = 'Method not implemented';

exports['default'] = NotImplementedError;
module.exports = exports['default'];