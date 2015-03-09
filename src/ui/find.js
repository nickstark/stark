define(function () {
    'use strict';

    return function(selector, context) {
        // get NodeList, default to document if no context specified
        var results = (context || document).querySelectorAll(selector);

        // cast into Array
        return Array.prototype.slice.call(results);
    };

});
