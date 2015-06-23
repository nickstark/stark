'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _matches = require('./matches');

var _matches2 = _interopRequireDefault(_matches);

var removeListener = Element.prototype.removeEventListener;

var DelegatedEvent = function DelegatedEvent(originalEvent, delegateRoot, delegateTarget) {
    this.original = originalEvent;
    this.delegateRoot = delegateRoot;
    this.delegateTarget = delegateTarget;
};

DelegatedEvent.prototype.preventDefault = function () {
    return this.original.preventDefault();
};

DelegatedEvent.prototype.stopPropagation = function () {
    return this.original.stopPropagation();
};

exports['default'] = function (root, eventName, childSelector, handler, capturePhase) {
    capturePhase = capturePhase || false; // default to bubbling phase

    var delegateHandler = function delegateHandler(event) {
        var target = event.target;
        var returnVal;

        // check if any element up the chain matches selector
        while (target !== root) {
            if (target && (0, _matches2['default'])(target, childSelector)) {
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

;
module.exports = exports['default'];