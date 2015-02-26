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
    //TODO: micro lib: asset loader/manage


    // TODO: degrees to radians
    // TODO: radians to degrees

    //TODO: add more complex breakpoint service?
    // Fires events on change
    // Getter
    // >, <, >=, <= operations
    // Multiple additions
    // returns object with set of matches

});
