define(['exports', 'module', './sort/alphabetical', './sort/byProperty', './sort/numeric'], function (exports, module, _sortAlphabetical, _sortByProperty, _sortNumeric) {
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _alphabetical = _interopRequireDefault(_sortAlphabetical);

    var _byProperty = _interopRequireDefault(_sortByProperty);

    var _numeric = _interopRequireDefault(_sortNumeric);

    /*
    * Sorting comparators
    *
    * Tip: to not mutate the array, you can map to identity.
    *     var newArray = myArray.map(identity).sort();
    */

    module.exports = {
        // sort alphabetically (like default comparator)
        // names.sort(alphabetical);
        alphabetical: _alphabetical['default'],

        // sort by a property instead of the object itself
        // users.sort(byProperty('name'));
        // users.sort(byProperty('id', numeric));
        byProperty: _byProperty['default'],

        // sort numerically
        // numberss.sort(numeric);
        numeric: _numeric['default']
    };
});