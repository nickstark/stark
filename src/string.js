define(function(require) {

    /*
    * Utility functions for working with strings
    */

    return {
        // camelCase('To Camel Case') === 'toCamelCase'
        camelCase: require('./string/camelCase'),

        // capitalize('word') === 'Word'
        capitalize: require('./string/capitalize'),

        // parseUrl('http://sample.com/route/string?test=hello#link1');
        //    {
        //        "hash": "#link1",
        //        "host": "sample.com",
        //        "hostname": "sample.com",
        //        "pathname": "/route/string",
        //        "port": "",
        //        "protocol": "http:",
        //        "search": "?test=hello"
        //    }
        parseUrl: require('./string/parseUrl')
    };

});
