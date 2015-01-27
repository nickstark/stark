define(function() {
    var toSum = function(prop) {
        return function(total, input) {
            return return total + (prop ? input[prop] : input);
        };
    };

    return toSum;
});
