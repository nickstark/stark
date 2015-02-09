define(function(require) {
    'use strict';

    var matches = require('./matches');

    return function(root, eventName, childSelector, handler, capturePhase) {
        capturePhase = capturePhase || false;

        var delegateHandler = function(event) {
            var target = event.target;
            while (target !== root) {
                if (target && matches(target, childSelector)) {
                    handler.call(this, event);
                    break;
                }
                target = target.parentNode;
            }
        };

        root.addEventListener(eventName, delegateHandler, capturePhase);

        // return function to remove event listener
        return {
            remove: function() {
                return Element.prototype.removeEventListner.bind(root, eventName, delegateHandler, capturePhase);
            }
        };
    };

});
