(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory();
    } else {
        /*jshint sub:true */
        root.Stark = root.Stark || {};
        root.Stark.extend = factory();
    }
}(this, function() {
    'use strict';

    // Shallow extend for now
    return function(dest) {
        var argLen = arguments.length;
        var curSrc;
        var keys;
        var keysLen;
        var i = 1;
        var j;

        for (; i < argLen; i += 1) {
            curSrc = arguments[i];
            keys = Object.keys(curSrc);
            for (j = 0, keysLen = keys.length; j < keysLen; j += 1) {
                dest[keys[j]] = curSrc[keys[j]];
            }
        }

        return dest;
    };

}));
