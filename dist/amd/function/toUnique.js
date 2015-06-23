define(['exports', 'module'], function (exports, module) {
    'use strict';

    module.exports = function (comparator) {
        var seen = [];
        return function (input) {
            // if unique is defined by "id" property
            if (comparator) {
                if (typeof comparator === 'function') {} else {
                    input = input[prop];
                }
            }

            var isNew = seen.indexOf(input) === -1;
            if (isNew) {
                seen.push(input);
            }
            return isNew;
        };
    };

    ;
});

//TODO: add comparator functionality