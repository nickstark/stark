import debounce from './function/debounce';
import identity from './function/identity';
import negate from './function/negate';
import noop from './function/noop';
import toProp from './function/toProp';
import toMax from './function/toMax';
import toMin from './function/toMin';
import toSum from './function/toSum';
import toUnique from './function/toUnique';

/*
* Utility functions for generating helper functions
*/

export default {
    // debounce function calls to reduce impact of event spamming
    debounce,

    // return first argument, useful for filtering out falsy values
    // identity(myObject) === myObject
    identity,

    // converts a functions to one that returns its opposite
    // isAuthenticated(userId); // false
    // var isUnauthenticated = negate(isAuthenticated);
    // isUnauthenticated(userId); // true
    negate,

    // do nothing, useful for function placeholders or functional programming
    // (callback || noop)(callbackArgs);
    noop,

    // useful for passing into mapping functions
    // var userIds = users.map(toProp('id'));
    toProp,

    // useful for finding max in array
    // var total = [0, 1, 2, 3].reduce(toMax());
    // returns 3
    toMax,

    // useful for finding max in array
    // var total = [0, 1, 2, 3].reduce(toMin());
    // returns 0
    toMin,

    // useful for adding up properties of an array
    // var total = [0, 1, 2, 3].reduce(toSum());
    // returns 6
    toSum,

    // useful for filtering out duplicates
    // var activeUsers = recentLoginIds.filter(toUnique());
    toUnique
};
