export default function(fn) {
    return function(promiseResults) {
        fn.apply(this, promiseResults);
    };
};
