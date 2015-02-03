define(function(require) {

    return {
        collection: require('./collection'),
        function: require('./function'),
        object: require('./object'),
        promise: require('./promise'),
        string: require('./string'),
        ui: require('./ui'),


        PubSub: require('./micro/pubsub.js'),
        Breakpoint: require('./micro/breakpoint')
    };

    //TODO: generated documentation
    //TODO: UMD support

    //TODO: add more complex breakpoint service
    // Fires events on change
    // Getter
    // >, <, >=, <= operations
    // Multiple additions
    // returns object with set of matches

});
