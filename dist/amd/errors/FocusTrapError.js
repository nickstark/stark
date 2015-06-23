define(['exports', 'module'], function (exports, module) {
    'use strict';

    var FocusTrapError = function FocusTrapError(currentRegion, errorRegion, message) {
        Error.apply(this);
        Error.captureStackTrace(this, arguments.callee);

        this.currentRegion = currentRegion;
        this.errorRegion = errorRegion;

        if (message) {
            this.message = message;
        }
    };

    FocusTrapError.prototype = Object.create(Error.prototype);
    FocusTrapError.prototype.constructor = FocusTrapError;

    FocusTrapError.prototype.name = 'FocusTrapError';
    FocusTrapError.prototype.message = 'Attempting to trap focus of more than one region';

    module.exports = FocusTrapError;
});