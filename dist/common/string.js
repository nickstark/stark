'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _stringCamelCase = require('./string/camelCase');

var _stringCamelCase2 = _interopRequireDefault(_stringCamelCase);

var _stringCapitalize = require('./string/capitalize');

var _stringCapitalize2 = _interopRequireDefault(_stringCapitalize);

var _stringParseUrl = require('./string/parseUrl');

var _stringParseUrl2 = _interopRequireDefault(_stringParseUrl);

/*
* Utility functions for working with strings
*/

exports['default'] = {
    // camelCase('To Camel Case') === 'toCamelCase'
    camelCase: _stringCamelCase2['default'],

    // capitalize('word') === 'Word'
    capitalize: _stringCapitalize2['default'],

    // parseUrl('http://sample.com/route/string?test=hello#link1');
    //
    // NOTE: This only works in the browser
    //
    //    {
    //        "hash": "#link1",
    //        "href": "http://sample.com/route/string?test=hello#link1",
    //        "host": "sample.com",
    //        "hostname": "sample.com",
    //        "pathname": "/route/string",
    //        "port": "",
    //        "protocol": "http:",
    //        "search": "?test=hello"
    //    }
    parseUrl: _stringParseUrl2['default']
};
module.exports = exports['default'];