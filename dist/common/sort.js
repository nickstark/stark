'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _sortAlphabetical = require('./sort/alphabetical');

var _sortAlphabetical2 = _interopRequireDefault(_sortAlphabetical);

var _sortByProperty = require('./sort/byProperty');

var _sortByProperty2 = _interopRequireDefault(_sortByProperty);

var _sortNumeric = require('./sort/numeric');

var _sortNumeric2 = _interopRequireDefault(_sortNumeric);

/*
* Sorting comparators
*
* Tip: to not mutate the array, you can map to identity.
*     var newArray = myArray.map(identity).sort();
*/

exports['default'] = {
    // sort alphabetically (like default comparator)
    // names.sort(alphabetical);
    alphabetical: _sortAlphabetical2['default'],

    // sort by a property instead of the object itself
    // users.sort(byProperty('name'));
    // users.sort(byProperty('id', numeric));
    byProperty: _sortByProperty2['default'],

    // sort numerically
    // numberss.sort(numeric);
    numeric: _sortNumeric2['default']
};
module.exports = exports['default'];