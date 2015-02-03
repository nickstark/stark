define(function(require) {

    return function(element) {
        element.setAttribute('hidden', 'hidden');
        element.setAttribute('aria-hidden', 'true');
    };

});
