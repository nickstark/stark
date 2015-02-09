define(function(require) {
    'use strict';

    // basic constructor, initializes topics repository
    var PubSub = function() {
        this._topics = {};
    };

    var proto = PubSub.prototype;

    // associate a callback with an event topic
    proto.subscribe = function(topic, callback) {
        // add array of topic subscribers if new topic
        if (!this._topics.hasOwnProperty(topic)) {
            this._topics[topic] = [];
        }

        // push callback into topics array
        this._topics[topic].push(callback);

        return {
            topic: topic,
            remove: this.unsubscribe.bind(this, topic, callback)
        };
    };

    // disassociate a callback from a topic
    // returns boolean indicating success
    proto.unsubscribe = function(topic, callback) {
        // check topic exists
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

    // publish an event to a topic
    // takes any number of arguments
    proto.publish = function(topic) {
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

    // Strategies
    //   1) As a constructor, an instance of PubSub can be creative to provide
    //      clarity and avoid namespacing issues.
    //   2) Function.prototype.bind can be used to create a publishing function
    //      independent of the topic.
    //      E.g. triggerProgress = PubSub.prototype.publish.bind(myPubSub, 'progress');

    return PubSub;
});
