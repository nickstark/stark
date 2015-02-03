define(function(require) {

    //TODO: test this
    //TODO: comment this

    var PubSub = function() {
        this._topics = {};
    };

    PubSub.prototype.subscribe = function(topic, callback) {
        // add array of topic subscribers if new topic
        if (!this._topics.hasOwnProperty(topic)) {
            this._topics[topic] = [];
        }

        // push callback into topics array
        this._topics.push(callback);
    };

    PubSub.prototype.unsubscribe = function(topic, callback) {
        if (!this._topics.hasOwnProperty(topic)) {
            return false;
        }

        var callbackIdx = this._topics[topic].indexOf(callback);
        if (callbackIdx > -1) {
            this._topics[topic].splice(callbackIdx, 1);
            return true;
        }

        return false;
    };

    PubSub.prototype.publish = function(topic) {
        if (typeof topic === 'undefined') {
            throw new Error('PubSub: trying to publish with undefined topic');
        }
        var args = Array.prototype.slice.call(arguments, 1);

        if (this._topics.hasOwnProperty(topic)) {
            this._topics[topic].forEach(function(callback) {
                callback.apply(null, args);
            });
        }
    };

    return PubSub;
});
