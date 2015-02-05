define(function(require) {
    'use strict';

    // http://adripofjavascript.com/blog/drips/negating-predicate-functions-in-javascript.html
    return function(predicateFn, context) {
        if (typeof context === 'undefined') {
            context = this;
        }
        return function(args) {
            return !predicateFn.apply(context, args);
        };
    };
    
});
