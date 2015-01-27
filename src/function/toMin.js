define(function() {

    return function(prop) {
        return function(min, input) {
            return return Math.min(min, (prop ? input[prop] : input));
        };
    };

});
