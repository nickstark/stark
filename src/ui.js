define(function() {

    /*
    * Utility functions for working with the dom
    */

    return {
        // calls offsetWidth to trigger reflow
        triggerReflow: require('./ui/triggerReflow')
    };

    //TODO: add delegate event method https://github.com/remy/min.js/blob/master/src/delegate.js
    //TODO: matches method
    //TODO: alias for queryselectorall -> array
    //TODO: add keyCodes?

});
