define(function() {

    /*
    * Utility functions for working with objects
    */

    return {
        // creates an new object with subset of properties
        // var publicProfile = mask(fullUser, ['name', 'email', 'country']);
        mask: require('./object/mask')
    };

    //TODO: bindAll
    //TODO: extends

});
