(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory();
    } else {
        /*jshint sub:true */
        root.Stark = root.Stark || {};
        root.Stark.bindAll = factory();
    }
}(this, function() {
    'use strict';

    return function(source, props, target) {
        // default to binding to same object
        if (typeof target === 'undefined') {
            target = source;
        }

        // if no props, bind all functions
        if (!Array.isArray(props)) {
            props = Object.keys(source).filter(function(key) {
                return typeof source[key] === 'function';
            });
        }

        props.forEach(function(prop) {
            target[prop] = source[prop].bind(source);
        });
    };

}));
