import camelCase from './string/camelCase';
import capitalize from './string/capitalize';
import parseUrl from './string/parseUrl';

/*
* Utility functions for working with strings
*/

export default {
    // camelCase('To Camel Case') === 'toCamelCase'
    camelCase,

    // capitalize('word') === 'Word'
    capitalize,

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
    parseUrl
};
