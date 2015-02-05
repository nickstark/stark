define(function(require) {
    'use strict';

    return function(obj, props) {
        var newObj = {};
        props.forEach(function(prop) {
            newObj[prop] = obj[prop];
        });
        return newObj;
    };

});
