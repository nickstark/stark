define(function(require) {

    /*
    * Utility functions for working with objects
    */

    return {
        // bind all functions to object, takes optional target for creating private interfaces
        // bindAll(myLib) // bind all properties
        // bindAll(myLib, ['method1', 'method2']); // bind specific properties
        // bindAll(myLib, ['method1', 'method2'], myPublicExport); // expose to a different object
        bindAll: require('./object/bindAll'),

        // creates an new object with subset of properties
        // var publicProfile = mask(fullUser, ['name', 'email', 'country']);
        mask: require('./object/mask'),

        // copies properties onto destination object
        // var options = extend({}, defaults, configuration));
        extend: require('./object/extend')
    };

});
