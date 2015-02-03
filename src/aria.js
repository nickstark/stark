define(function(require) {

    /*
    * Utility functions for including aria attributes
    */

    return {
        // adds hidden attribute and aria hidden
        // replacement for inline styling display
        // should have support or style rule for [hidden] { display: none; }
        hide: require('./aria/hide'),

        // removes hidden attribute and aria hidden
        // replacement for inline styling display
        show: require('./aria/show')
    };

});
