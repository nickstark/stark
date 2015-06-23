define(["exports", "module"], function (exports, module) {
    "use strict";

    module.exports = function (element, eventName, handler, capturePhase) {
        capturePhase = capturePhase || false;
        var callback = function callback() {
            element.removeEventListener(eventName, callback, capturePhase);
            return handler.apply(this, arguments);
        };

        element.addEventListener(eventName, callback, capturePhase);
    };

    ;
});