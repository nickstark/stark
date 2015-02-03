define(function(require) {
    return function(fn) {
        return function(promiseResults) {
            fn.apply(this, promiseResults);
        };
    };

});
