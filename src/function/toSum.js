define(function() {

    return function(prop) {
        return function(total, input) {
            return total + (prop ? input[prop] : input);
        };
    };

});
