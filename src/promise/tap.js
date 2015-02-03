define(function(require) {

    return function(fn) {
        return function(result) {
            fn.call(this, result);
            return result;
        };
    };

});
