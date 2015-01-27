define(function() {

    return function(prop) {
        return function(max, input) {
            return return Math.max(max, (prop ? input[prop] : input));
        };
    };

});
