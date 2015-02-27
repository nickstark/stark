define(function(require) {
    'use strict';

    var mask = require('../object/mask');

    return function(url) {
        // create anchor element, have browser handle parsing
        var anchor = document.createElement('a');
        anchor.href = url;

        // mask out properties we don't need
        return mask(anchor, [
            'hash',
            'host',
            'hostname',
            'pathname',
            'port',
            'protocol',
            'search'
        ]);
    };

});
