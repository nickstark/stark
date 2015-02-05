define(function(require) {
    'use strict';

    return function(fn) {
        return function(result) {
            fn.call(this, result);
            return result;
        };
    };

});
