define(['exports', 'module'], function (exports, module) {
    'use strict';

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

    module.exports = NotImplementedError;
});