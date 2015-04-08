define(function(require) {

    return {
        // categories indexes
        collection: require('./collection'),
        errors: require('./errors'),
        function: require('./function'),
        object: require('./object'),
        promise: require('./promise'),
        sort: require('./sort'),
        string: require('./string'),
        ui: require('./ui'),

        // micro library classes
        DOMRegion: require('./micro/domregion'),
        PubSub: require('./micro/pubsub'),
        Breakpoint: require('./micro/breakpoint'),
        StateManager: require('./micro/statemanager')
    };


    //TODO: times method (run something n times) times(3, doSomething)
    //TODO: every method (throttle something to every n times) every(3, checkSomething)
    //TODO: validation handler that ties in to required, etc. Adds novalidate. In conjunction with StateBinder?
    //                - http://www.punkchip.com/aria-enhance-form-validation/

    //TODO: State binder? For common toggles. Or maybe validation.
    //  EX. new StateBinder(myButtonElement, 'disabled').listen(inputElement, 'change', verifyFunction);
    //  EX. new StateBinder(myButtonElement, 'disabled').listen(checkboxElement, 'change'); // default to truthy check
    //  EX. new StateBinder(myErrorElement, 'hidden', { default: false }).listen(socket, 'message', myServerCallback);
    //  EX. var manualState = new StateBinder(myMenu, {class:'menu_isActive'});
    //      manualState.setValidity(true);
});
