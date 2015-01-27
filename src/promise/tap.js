define(function() {

    var tap = function(fn) {
        return function(result) {
            fn.call(this, result);
            return result;
        };
    };

    return tap;
});
