define(function() {
    var show = function(element) {
        element.removeAttribute('hidden');
        element.setAttribute('aria-hidden', 'false');
    };

    return show;
});
