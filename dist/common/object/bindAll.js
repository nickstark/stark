'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = function (source, props, target) {
    // default to binding to same object
    if (typeof target === 'undefined') {
        target = source;
    }

    // if no props, bind all functions
    if (!Array.isArray(props)) {
        props = Object.keys(source).filter(function (key) {
            return typeof source[key] === 'function';
        });
    }

    props.forEach(function (prop) {
        target[prop] = source[prop].bind(source);
    });
};

;
module.exports = exports['default'];