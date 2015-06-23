'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _collectionCreateLookup = require('./collection/createLookup');

var _collectionCreateLookup2 = _interopRequireDefault(_collectionCreateLookup);

var _collectionCategorize = require('./collection/categorize');

var _collectionCategorize2 = _interopRequireDefault(_collectionCategorize);

var _collectionFindByProperty = require('./collection/findByProperty');

var _collectionFindByProperty2 = _interopRequireDefault(_collectionFindByProperty);

/*
 * Utility functions for working with collections or arrays of data
 */

exports['default'] = {
    // useful for multiple lookups by a unique identifier
    // var userLookup = createLookup('id', users)
    createLookup: _collectionCreateLookup2['default'],

    // useful for filtering into categories
    // var userLookupByCity = categorize('city', users);
    categorize: _collectionCategorize2['default'],

    // useful for finding an item by id or other unique property
    // var selectedUser = findByProperty('id', users, selectedId);
    findByProperty: _collectionFindByProperty2['default']
};
module.exports = exports['default'];