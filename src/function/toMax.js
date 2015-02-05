define(function(require) {
    'use strict';

    return function() {
        return function(max, input) {
            return Math.max(max, input);
        };
    };

});
