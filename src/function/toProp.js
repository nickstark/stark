define(function(require) {
    'use strict';

    return function(prop) {
        return function(input) {
            return input[prop];
        };
    };

});
