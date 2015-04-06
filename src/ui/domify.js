define(function () {
    'use strict';

    // Browser Support: IE9+, dependancy on Element.children

    return function(htmlStr) {
        var wrapper = document.createElement('div');
        wrapper.innerHTML = htmlStr;
        return Array.prototype.slice.call(wrapper.children);
    };

});
