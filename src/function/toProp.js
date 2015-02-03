define(function(require) {

    return function(prop) {
        return function(input) {
            return input[prop];
        };
    };

});
