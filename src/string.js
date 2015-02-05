define(function(require) {

    /*
    * Utility functions for working with strings
    */

    return {
        // camelCase('To Camel Case') === 'toCamelCase'
        camelCase: require('./string/camelCase'),

        // capitalize('word') === 'Word'
        capitalize: require('./string/capitalize')
    };

});
