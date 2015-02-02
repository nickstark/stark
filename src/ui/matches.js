define(function () {
    'use strict';

    var proto = Element.prototype;
    var funcName;
    var prefix;
    var matchFn = function(funcName, node, selector) {
        return node[funcName](selector);
    };

    // check for Element.prototype.matches
    if (typeof proto.matches === 'function') {
        return matchFn.bind(null, 'matches');
    }

    // // check for older spec's matchesSelector methods
    var prefixes = ['webkit', 'ms', 'moz'];
    for (prefix in prefixes) {
        funcName = prefixes[prefix] + 'MatchesSelector';
        if (typeof proto[funcName] === 'function') {
            return matchFn.bind(null, funcName);
        }
    }

    // use querySelectorAll
    if (typeof proto.querySelectorAll === 'function') {
        return function(node, selector) {
            var matches = (node.parentNode || document).querySelectorAll(selector);
            var i = 0;

            while (matches[i] && matches[i] !== node) {
                i += 1;
            }

            return !!matches[i];
        };
    }

    throw new Error('matches() Unsupported: unable to match selectors.');
});
