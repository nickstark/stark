define(['exports', 'module', './collection/createLookup', './collection/categorize', './collection/findByProperty'], function (exports, module, _collectionCreateLookup, _collectionCategorize, _collectionFindByProperty) {
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _createLookup = _interopRequireDefault(_collectionCreateLookup);

    var _categorize = _interopRequireDefault(_collectionCategorize);

    var _findByProperty = _interopRequireDefault(_collectionFindByProperty);

    /*
     * Utility functions for working with collections or arrays of data
     */

    module.exports = {
        // useful for multiple lookups by a unique identifier
        // var userLookup = createLookup('id', users)
        createLookup: _createLookup['default'],

        // useful for filtering into categories
        // var userLookupByCity = categorize('city', users);
        categorize: _categorize['default'],

        // useful for finding an item by id or other unique property
        // var selectedUser = findByProperty('id', users, selectedId);
        findByProperty: _findByProperty['default']
    };
});