define(function() {

    return {
        collection: require('./collection'),
        function: require('./function'),
        promise: require('./promise'),
        string: require('./string'),
        ui: require('./ui'),
        PubSub: require('./micro/pubsub.js'),
        breakpoint: require('./micro/breakpoint')
    };

    //TODO: add object/class category (bindAll, inherit, extends, etc.)

    //TODO: generated documentation
    //TODO: UMD support

    //TODO: add more complex breakpoint service
    // Fires events on change
    // Getter
    // >, <, >=, <= operations
    // Multiple additions
    // returns object with set of matches

});
