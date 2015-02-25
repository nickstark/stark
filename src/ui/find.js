define(function () {
    'use strict';

    return function(selector, context) {
        // default to document for context
        context = context || document;

        // get NodeList
        var results = context.querySelectorAll(selector);

        // cast into Array
        return Array.prototype.slice.call(results);
    };

});
