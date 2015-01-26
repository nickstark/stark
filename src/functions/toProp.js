define(function() {
    var toProp = function(prop) {
        return function(input) {
            return input[prop];
        };
    };

    return toProp;
});
