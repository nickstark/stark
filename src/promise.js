import spread from './promise/spread';
import tap from './promise/tap';

/*
* Utility functions for working with promises
*/

export default {
    // spread out arguments returned via promise.all
    // Promise.all([a, b]).then(spread(function(a, b) {}));
    spread,

    // tap into then chain without altering output
    // myPromise.then(tap(function(val) { console.log(val); })).then...
    tap
};
