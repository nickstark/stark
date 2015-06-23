define(['exports', 'module', './string/camelCase', './string/capitalize', './string/parseUrl'], function (exports, module, _stringCamelCase, _stringCapitalize, _stringParseUrl) {
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _camelCase = _interopRequireDefault(_stringCamelCase);

    var _capitalize = _interopRequireDefault(_stringCapitalize);

    var _parseUrl = _interopRequireDefault(_stringParseUrl);

    /*
    * Utility functions for working with strings
    */

    module.exports = {
        // camelCase('To Camel Case') === 'toCamelCase'
        camelCase: _camelCase['default'],

        // capitalize('word') === 'Word'
        capitalize: _capitalize['default'],

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
        parseUrl: _parseUrl['default']
    };
});