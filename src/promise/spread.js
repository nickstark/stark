define(function() {
    var spread = function(fn) {
        return function(promiseResults) {
            fn.apply(this, promiseResults);
        };
    };

    return spread;
});
