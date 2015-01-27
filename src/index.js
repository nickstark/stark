define(function() {

    return {
        collection: require('./collection'),
        function: require('./function'),
        promise: require('./promise'),
        string: require('./string'),
        ui: require('./ui')
    };

    //TODO: add object/class category (bindAll, inherit, extends, etc.)
    //TODO: add pubsub

    //TODO: generated documentation
    //TODO: grunt umd build process
    //TODO: .jshint file

});
