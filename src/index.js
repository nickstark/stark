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
    //TODO: remove grunt dependancy


    //TODO: degrees to radians
    //TODO: radians to degrees
    //TODO: Vector and Point classes?
    //TODO: BaseView with event listener registry
    //TODO: micro templating
    //TODO: object deep equals
    //TODO: Container base object (common size, isEmpty, forEach, etc)
    //TODO: Error classes (Not implemented, etc)

    //TODO: attach listener and detach when complete ("once")

});
