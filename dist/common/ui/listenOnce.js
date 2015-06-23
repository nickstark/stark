"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = function (element, eventName, handler, capturePhase) {
    capturePhase = capturePhase || false;
    var callback = function callback() {
        element.removeEventListener(eventName, callback, capturePhase);
        return handler.apply(this, arguments);
    };

    element.addEventListener(eventName, callback, capturePhase);
};

;
module.exports = exports["default"];