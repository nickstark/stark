'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _functionDebounce = require('./function/debounce');

var _functionDebounce2 = _interopRequireDefault(_functionDebounce);

var _functionIdentity = require('./function/identity');

var _functionIdentity2 = _interopRequireDefault(_functionIdentity);

var _functionNegate = require('./function/negate');

var _functionNegate2 = _interopRequireDefault(_functionNegate);

var _functionNoop = require('./function/noop');

var _functionNoop2 = _interopRequireDefault(_functionNoop);

var _functionToProp = require('./function/toProp');

var _functionToProp2 = _interopRequireDefault(_functionToProp);

var _functionToMax = require('./function/toMax');

var _functionToMax2 = _interopRequireDefault(_functionToMax);

var _functionToMin = require('./function/toMin');

var _functionToMin2 = _interopRequireDefault(_functionToMin);

var _functionToSum = require('./function/toSum');

var _functionToSum2 = _interopRequireDefault(_functionToSum);

var _functionToUnique = require('./function/toUnique');

var _functionToUnique2 = _interopRequireDefault(_functionToUnique);

/*
* Utility functions for generating helper functions
*/

exports['default'] = {
    // debounce function calls to reduce impact of event spamming
    debounce: _functionDebounce2['default'],

    // return first argument, useful for filtering out falsy values
    // identity(myObject) === myObject
    identity: _functionIdentity2['default'],

    // converts a functions to one that returns its opposite
    // isAuthenticated(userId); // false
    // var isUnauthenticated = negate(isAuthenticated);
    // isUnauthenticated(userId); // true
    negate: _functionNegate2['default'],

    // do nothing, useful for function placeholders or functional programming
    // (callback || noop)(callbackArgs);
    noop: _functionNoop2['default'],

    // useful for passing into mapping functions
    // var userIds = users.map(toProp('id'));
    toProp: _functionToProp2['default'],

    // useful for finding max in array
    // var total = [0, 1, 2, 3].reduce(toMax());
    // returns 3
    toMax: _functionToMax2['default'],

    // useful for finding max in array
    // var total = [0, 1, 2, 3].reduce(toMin());
    // returns 0
    toMin: _functionToMin2['default'],

    // useful for adding up properties of an array
    // var total = [0, 1, 2, 3].reduce(toSum());
    // returns 6
    toSum: _functionToSum2['default'],

    // useful for filtering out duplicates
    // var activeUsers = recentLoginIds.filter(toUnique());
    toUnique: _functionToUnique2['default']
};
module.exports = exports['default'];