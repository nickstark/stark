// http://adripofjavascript.com/blog/drips/negating-predicate-functions-in-javascript.html
export default function(predicateFn, context) {
    if (typeof context === 'undefined') {
        context = this;
    }
    return function(args) {
        return !predicateFn.apply(context, args);
    };
};
