export default function(element, eventName, handler, capturePhase) {
    capturePhase = capturePhase || false;
    var callback = function() {
        element.removeEventListener(eventName, callback, capturePhase);
        return handler.apply(this, arguments);
    };

    element.addEventListener(eventName, callback, capturePhase);
};
