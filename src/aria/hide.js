define(function(require) {
    'use strict';

    return function(element) {
        element.setAttribute('hidden', 'hidden');
        element.setAttribute('aria-hidden', 'true');
    };

});
