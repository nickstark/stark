// http://adripofjavascript.com/blog/drips/negating-predicate-functions-in-javascript.html
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = function (predicateFn, context) {
    if (typeof context === 'undefined') {
        context = this;
    }
    return function (args) {
        return !predicateFn.apply(context, args);
    };
};

;
module.exports = exports['default'];