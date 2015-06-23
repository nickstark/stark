'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var proto = Element.prototype;
var funcName;
var prefixes = ['webkit', 'ms', 'moz'];
var prefix;
var found = false;
var matchFn = function matchFn(funcName, node, selector) {
    return node[funcName](selector);
};

// check for Element.prototype.matches
if (typeof proto.matches === 'function') {
    matchFn = matchFn.bind(null, 'matches');
}

// // check for older spec's matchesSelector methods
if (!found) {
    for (prefix in prefixes) {
        funcName = prefixes[prefix] + 'MatchesSelector';
        if (typeof proto[funcName] === 'function') {
            matchFn = matchFn.bind(null, funcName);
            found = true;
            break;
        }
    }
}

// use querySelectorAll
if (!found) {
    matchFn = function (node, selector) {
        var matches = (node.parentNode || document).querySelectorAll(selector);
        var i = 0;

        while (matches[i] && matches[i] !== node) {
            i += 1;
        }

        return !!matches[i];
    };
}

exports['default'] = matchFn;
module.exports = exports['default'];