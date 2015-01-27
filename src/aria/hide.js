define(function() {
    var hide = function(element) {
        element.setAttribute('hidden', 'hidden');
        element.setAttribute('aria-hidden', 'true');
    };

    return hide;
});
