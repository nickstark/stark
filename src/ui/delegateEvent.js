define(function(require) {
    'use strict';

    var matches = require('./matches');
    var removeListener = Element.prototype.removeEventListener;

    return function(root, eventName, childSelector, handler, capturePhase) {
        capturePhase = capturePhase || false; // default to bubbling phase

        var delegateHandler = function(event) {
            var target = event.target;

            // check if any element up the chain matches selector
            while (target !== root) {
                if (target && matches(target, childSelector)) {
                    handler.call(this, event); // call handler with original event
                    break;
                }
                target = target.parentNode;
            }
        };

        // add delegate-wrapped handler
        root.addEventListener(eventName, delegateHandler, capturePhase);

        // return function to remove event listener
        return {
            remove: removeListener.bind(root, eventName, delegateHandler, capturePhase)
        };
    };

});
