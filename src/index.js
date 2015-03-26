define(function(require) {

    return {
        // categories indexes
        collection: require('./collection'),
        function: require('./function'),
        object: require('./object'),
        promise: require('./promise'),
        sort: require('./sort'),
        string: require('./string'),
        ui: require('./ui'),

        // micro library classes
        PubSub: require('./micro/pubsub'),
        Breakpoint: require('./micro/breakpoint'),
        StateManager: require('./micro/statemanager')
    };

    //TODO: generated documentation DOXX
    //TODO: UMD support
    //TODO: micro lib: focus trapper
    //TODO: micro lib: asset loader/manager
    //TODO: unit testing


    //TODO: degrees to radians
    //TODO: radians to degrees
    //TODO: Vector and Point classes?
    //TODO: BaseView with event listener registry
    //TODO: micro templating
    //TODO: object deep equals
    //TODO: Container base object (common size, isEmpty, forEach, etc)
    //TODO: Error classes (Not implemented, etc)
    //TODO: DOMify method (turns string into element representation) - create tmp el and innerHTML
    //TODO: times method (run something n times) times(3, doSomething)
    //TODO: every method (throttle something to every n times) every(3, checkSomething)
    //TODO: validation handler that ties in to required, etc. Adds novalidate.

    //TODO: State binder? For common toggles. Or maybe validation.
    //  EX. new StateBinder(myButtonElement, 'disabled').listen(inputElement, 'change', verifyFunction);
    //  EX. new StateBinder(myButtonElement, 'disabled').listen(checkboxElement, 'change'); // default to truthy check
    //  EX. new StateBinder(myErrorElement, 'hidden', { default: false }).listen(socket, 'message', myServerCallback);
    //  EX. var manualState = new StateBinder(myMenu, {class:'menu_isActive'});
    //      manualState.setValidity(true);

    //TODO: attach listener and detach when complete ("once")

});
