define(function(require) {
    'use strict';

    return function(fn) {
        return function(promiseResults) {
            fn.apply(this, promiseResults);
        };
    };

});
