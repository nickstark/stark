define(function(require) {
    'use strict';

    return function(element) {
        element.removeAttribute('hidden');
        element.setAttribute('aria-hidden', 'false');
    };

});
