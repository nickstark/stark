define(function() {

    /*
    * Utility functions for working with the dom
    */

    return {
        // calls offsetWidth to trigger reflow
        triggerReflow: require('./ui/triggerReflow'),

        // fallback for vendor prefixed or non-existant Element.prototype.matches
        matches: require('./ui/matches')
    };

    //TODO: add delegate event method https://github.com/remy/min.js/blob/master/src/delegate.js
    //TODO: alias for queryselectorall -> array

});
