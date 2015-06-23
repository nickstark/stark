'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _promiseSpread = require('./promise/spread');

var _promiseSpread2 = _interopRequireDefault(_promiseSpread);

var _promiseTap = require('./promise/tap');

var _promiseTap2 = _interopRequireDefault(_promiseTap);

/*
* Utility functions for working with promises
*/

exports['default'] = {
    // spread out arguments returned via promise.all
    // Promise.all([a, b]).then(spread(function(a, b) {}));
    spread: _promiseSpread2['default'],

    // tap into then chain without altering output
    // myPromise.then(tap(function(val) { console.log(val); })).then...
    tap: _promiseTap2['default']
};
module.exports = exports['default'];