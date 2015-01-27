define(function() {

    return function(prop) {
        return function(input) {
            return input[prop];
        };
    };

});
