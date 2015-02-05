define(function(require) {
    'use strict';

    return function() {
        return function(min, input) {
            return Math.min(min, input);
        };
    };

});
