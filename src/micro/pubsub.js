define(function(require) {
    'use strict';

    // Strategies
    //   1) As a constructor, an instance of PubSub can be created to provide
    //      clarity and avoid namespacing issues.
    //   2) Function.prototype.bind can be used to create a publishing function
    //      independent of the topic.
    //        E.g. triggerProgress = PubSub.prototype.publish.bind(myPubSub, 'progress');
    //   3) Share events between all instances of a class with a shared instance.
    //        E.g.
    //          var events = new PubSub();
    //          var MyClass = function() { PubSub.extendObject(this, events); };
    //          var instance = new MyClass();
    //          instance.publish('my_event');

    var extend = require('../object/extend');

    /*
     * basic constructor, initializes topics repository
     *
     * @constructor
     */
    var PubSub = function() {
        this._topics = {};
    };

    var proto = PubSub.prototype;

    /*
     * associate a callback with an event topic
     *
     * @param {String} topic String key to subscribe to (E.g. Event name)
     * @param {Function} callback Function to call when topic is published
     */
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

        // find callback and remove from array
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

    // alias jquery nomenclature
    proto.on = proto.subscribe;
    proto.off = proto.unsubscribe;
    proto.trigger = proto.publish;

    // extend pubsub functionality onto external object
    // optionally, pass in an existing pubsub instance to bind to
    PubSub.extendObject = function(destObj, inst) {
        if ( !(inst instanceof PubSub) ) {
            inst = new PubSub();
        }

        destObj._pubsub = inst;
        destObj.on = destObj.subscribe = proto.subscribe.bind(inst);
        destObj.off = destObj.unsubscribe = proto.unsubscribe.bind(inst);
        destObj.trigger = destObj.publish = proto.publish.bind(inst);
    };

    return PubSub;
});
