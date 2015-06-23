define(['exports', 'module'], function (exports, module) {
    // http://adripofjavascript.com/blog/drips/negating-predicate-functions-in-javascript.html
    'use strict';

    module.exports = function (predicateFn, context) {
        if (typeof context === 'undefined') {
            context = this;
        }
        return function (args) {
            return !predicateFn.apply(context, args);
        };
    };

    ;
});