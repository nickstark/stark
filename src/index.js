define(function(require) {

    return {
        collection: require('./collection'),
        function: require('./function'),
        object: require('./object'),
        promise: require('./promise'),
        sort: require('./sort'),
        string: require('./string'),
        ui: require('./ui'),


        PubSub: require('./micro/pubsub'),
        Breakpoint: require('./micro/breakpoint'),
        StateManager: require('./micro/statemanager')
    };

    //TODO: generated documentation
    //TODO: UMD support
    //TODO: micro lib: focus trapper

    //TODO: add more complex breakpoint service
    // Fires events on change
    // Getter
    // >, <, >=, <= operations
    // Multiple additions
    // returns object with set of matches

});
