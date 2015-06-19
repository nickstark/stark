import bindAll from './object/bindAll';
import mask from './object/mask';
import extend from './object/extend';

/*
* Utility functions for working with objects
*/

export default {
    // bind all functions to object, takes optional target for creating private interfaces
    // bindAll(myLib) // bind all properties
    // bindAll(myLib, ['method1', 'method2']); // bind specific properties
    // bindAll(myLib, ['method1', 'method2'], myPublicExport); // expose to a different object
    bindAll,

    // creates an new object with subset of properties
    // var publicProfile = mask(fullUser, ['name', 'email', 'country']);
    mask,

    // copies properties onto destination object
    // var options = extend({}, defaults, configuration));
    extend,
};
