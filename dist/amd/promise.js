define(['exports', 'module', './promise/spread', './promise/tap'], function (exports, module, _promiseSpread, _promiseTap) {
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _spread = _interopRequireDefault(_promiseSpread);

    var _tap = _interopRequireDefault(_promiseTap);

    /*
    * Utility functions for working with promises
    */

    module.exports = {
        // spread out arguments returned via promise.all
        // Promise.all([a, b]).then(spread(function(a, b) {}));
        spread: _spread['default'],

        // tap into then chain without altering output
        // myPromise.then(tap(function(val) { console.log(val); })).then...
        tap: _tap['default']
    };
});