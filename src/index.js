define(function() {

    return {
        collection: require('./collection'),
        function: require('./function'),
        promise: require('./promise'),
        string: require('./string'),
        ui: require('./ui')
    };

    //TODO: add debounce method

    //TODO: add aria category (hide, show, etc.)
    //TODO: add object/class category (bindAll, inherit, extends, etc.)
    //TODO: add pubsub

});
