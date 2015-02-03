define(function(require) {

    /*
    * Utility functions for working with the dom
    */

    return {
        // calls offsetWidth to trigger reflow
        // fade-in example:
        //   element.style.display = 'block';
        //   triggerReflow();
        //   element.classList.add('element_isVisible');
        triggerReflow: require('./ui/triggerReflow'),

        // fallback for vendor prefixed or non-existant Element.prototype.matches
        // var isElementActive = matches(element, '.clasName_isActive');
        matches: require('./ui/matches')
    };

    //TODO: add delegate event method https://github.com/remy/min.js/blob/master/src/delegate.js
    //TODO: alias for queryselectorall -> array

});
