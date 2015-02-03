define(function(require) {

    /*
    * Utility functions for including aria attributes
    */

    return {
        // adds hidden attribute and aria hidden
        hide: require('./aria/hide'),

        // removes hidden attribute and aria hidden
        show: require('./aria/show')
    };

});
