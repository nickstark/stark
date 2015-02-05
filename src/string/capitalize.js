define(function(require) {
    'use strict';

    return function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

});
