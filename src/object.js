define(function(require) {

    /*
    * Utility functions for working with objects
    */

    return {
        // creates an new object with subset of properties
        // var publicProfile = mask(fullUser, ['name', 'email', 'country']);
        mask: require('./object/mask'),

        // copies properties onto destination object
        // var options = extend({}, defaults, configuration));
        extend: require('./object/extend')
    };

    //TODO: bindAll
    //TODO: extends

});
