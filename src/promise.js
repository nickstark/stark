define(function() {

    /*
    * Utility functions for working with promises
    */

    return {
        // spread out arguments returned via promise.all
        // Promise.all([a, b]).then(spread(function(a, b) {}));
        spread: require('./promise/spread'),

        // tap into then chain without altering output
        // myPromise.then(tap(function(val) { console.log(val); })).then...
        tap: require('./promise/tap')
    };

});
