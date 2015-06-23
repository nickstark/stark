define(['exports', 'module', './function/debounce', './function/identity', './function/negate', './function/noop', './function/toProp', './function/toMax', './function/toMin', './function/toSum', './function/toUnique'], function (exports, module, _functionDebounce, _functionIdentity, _functionNegate, _functionNoop, _functionToProp, _functionToMax, _functionToMin, _functionToSum, _functionToUnique) {
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _debounce = _interopRequireDefault(_functionDebounce);

    var _identity = _interopRequireDefault(_functionIdentity);

    var _negate = _interopRequireDefault(_functionNegate);

    var _noop = _interopRequireDefault(_functionNoop);

    var _toProp = _interopRequireDefault(_functionToProp);

    var _toMax = _interopRequireDefault(_functionToMax);

    var _toMin = _interopRequireDefault(_functionToMin);

    var _toSum = _interopRequireDefault(_functionToSum);

    var _toUnique = _interopRequireDefault(_functionToUnique);

    /*
    * Utility functions for generating helper functions
    */

    module.exports = {
        // debounce function calls to reduce impact of event spamming
        debounce: _debounce['default'],

        // return first argument, useful for filtering out falsy values
        // identity(myObject) === myObject
        identity: _identity['default'],

        // converts a functions to one that returns its opposite
        // isAuthenticated(userId); // false
        // var isUnauthenticated = negate(isAuthenticated);
        // isUnauthenticated(userId); // true
        negate: _negate['default'],

        // do nothing, useful for function placeholders or functional programming
        // (callback || noop)(callbackArgs);
        noop: _noop['default'],

        // useful for passing into mapping functions
        // var userIds = users.map(toProp('id'));
        toProp: _toProp['default'],

        // useful for finding max in array
        // var total = [0, 1, 2, 3].reduce(toMax());
        // returns 3
        toMax: _toMax['default'],

        // useful for finding max in array
        // var total = [0, 1, 2, 3].reduce(toMin());
        // returns 0
        toMin: _toMin['default'],

        // useful for adding up properties of an array
        // var total = [0, 1, 2, 3].reduce(toSum());
        // returns 6
        toSum: _toSum['default'],

        // useful for filtering out duplicates
        // var activeUsers = recentLoginIds.filter(toUnique());
        toUnique: _toUnique['default']
    };
});