import matches from './matches';

var removeListener = Element.prototype.removeEventListener;

var DelegatedEvent = function(originalEvent, delegateRoot, delegateTarget) {
    this.original = originalEvent;
    this.delegateRoot = delegateRoot;
    this.delegateTarget = delegateTarget;
};

DelegatedEvent.prototype.preventDefault = function() {
    return this.original.preventDefault();
};

DelegatedEvent.prototype.stopPropagation = function() {
    return this.original.stopPropagation();
};

export default function(root, eventName, childSelector, handler, capturePhase) {
    capturePhase = capturePhase || false; // default to bubbling phase

    var delegateHandler = function(event) {
        var target = event.target;
        var returnVal;

        // check if any element up the chain matches selector
        while (target !== root) {
            if (target && matches(target, childSelector)) {
                returnVal = handler.call(this, new DelegatedEvent(event, root, target)); // call handler with original event
                if (returnVal === false) {
                    // simulate return false;
                    event.preventDefault();
                    event.stopPropagation();
                }
                break;
            }
            target = target.parentNode;
        }
    };

    // add delegate-wrapped handler
    root.addEventListener(eventName, delegateHandler, capturePhase);

    // return function to remove event listener
    return {
        delegateRoot: root,
        remove: removeListener.bind(root, eventName, delegateHandler, capturePhase)
    };
};
