define(function() {
    return function(fn) {
        return function(promiseResults) {
            fn.apply(this, promiseResults);
        };
    };

});
