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

    //TODO: generated documentation DOXX
    //TODO: UMD support
    //TODO: micro lib: asset loader/manager
    //TODO: unit testing

    //TODO: BaseView with event listener registry
    //TODO: micro templating
    //TODO: object deep equals
    //TODO: times method (run something n times) times(3, doSomething)
    //TODO: every method (throttle something to every n times) every(3, checkSomething)
    //TODO: validation handler that ties in to required, etc. Adds novalidate.

    //TODO: State binder? For common toggles. Or maybe validation.
    //  EX. new StateBinder(myButtonElement, 'disabled').listen(inputElement, 'change', verifyFunction);
    //  EX. new StateBinder(myButtonElement, 'disabled').listen(checkboxElement, 'change'); // default to truthy check
    //  EX. new StateBinder(myErrorElement, 'hidden', { default: false }).listen(socket, 'message', myServerCallback);
    //  EX. var manualState = new StateBinder(myMenu, {class:'menu_isActive'});
    //      manualState.setValidity(true);

    var formValidator = new FormValidator(document.forms[0]);
    // adds novalidate to form, on check adds aria-invalid to elements
    // registers
    //     - required
    //     - maxlength
    //     - pattern

    // validation for specific field
    formValidator.addValidation('fieldName', function(form, field) {}, ['blur', 'change']); // default to both blur and change

    // validation on whole form
    formValidator.addValidation(function(form) {}, ['submit']);

    form.elements.forEach(function(element) {
        formValidator.addValidation(element.name);
    })

});
