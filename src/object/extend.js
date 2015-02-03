define(function(require) {
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
});
