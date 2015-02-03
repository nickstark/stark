define(function(require) {

    return function(element) {
        element.removeAttribute('hidden');
        element.setAttribute('aria-hidden', 'false');
    };

});
