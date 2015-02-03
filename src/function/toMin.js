define(function(require) {

    return function() {
        return function(min, input) {
            return Math.min(min, input);
        };
    };

});
