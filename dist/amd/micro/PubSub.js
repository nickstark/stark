define(['exports', 'module', '../object/extend', '../object/bindAll'], function (exports, module, _objectExtend, _objectBindAll) {
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _extend = _interopRequireDefault(_objectExtend);

    var _bindAll = _interopRequireDefault(_objectBindAll);

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

    /*
     * basic constructor, initializes topics repository
     *
     * @constructor
     */
    var PubSub = function PubSub() {
        this._topics = {};
    };

    /*
     * associate a callback with an event topic
     *
     * @param {String} topic String key to subscribe to (E.g. Event name)
     * @param {Function} callback Function to call when topic is published
     */
    PubSub.prototype.subscribe = function (topic, callback) {
        // make sure arguments are correct
        if (typeof topic === 'undefined') {
            throw new Error('PubSub: trying to subscribe to undefined topic');
        }
        if (typeof callback !== 'function') {
            throw new Error('PubSub: subscribe callback is not a function');
        }

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
    PubSub.prototype.unsubscribe = function (topic, callback) {
        // make sure arguments are correct
        if (typeof topic === 'undefined') {
            throw new Error('PubSub: trying to unsubscribe from undefined topic');
        }
        if (typeof callback !== 'function') {
            throw new Error('PubSub: unsubscribe callback is not a function');
        }

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
    PubSub.prototype.publish = function (topic) {
        if (typeof topic === 'undefined') {
            throw new Error('PubSub: trying to publish with undefined topic');
        }
        var args = Array.prototype.slice.call(arguments, 1);

        if (this._topics.hasOwnProperty(topic)) {
            this._topics[topic].forEach(function (callback) {
                callback.apply(null, args);
            });
        }
    };

    // alias jquery nomenclature
    PubSub.prototype.on = PubSub.prototype.subscribe;
    PubSub.prototype.off = PubSub.prototype.unsubscribe;
    PubSub.prototype.trigger = PubSub.prototype.publish;

    // static method
    //
    // extend pubsub functionality onto external object
    // optionally, pass in an existing pubsub instance to bind to
    //
    // returns core pubsub instance, can be saved to pass into additional calls
    PubSub.extendObject = function (destObj, inst, includeJqueryFns) {
        // create new instance if pubsub isn't passed in
        if (!(inst instanceof PubSub)) {
            inst = new PubSub();
        }

        // define properties to bind to destObj
        var bindableProps = ['subscribe', 'unsubscribe', 'publish'];

        // add jquery-esque functions if appropriate
        if (includeJqueryFns) {
            bindableProps.push('on', 'off', 'trigger');
        }

        // bind pubsub functions to destination object
        (0, _bindAll['default'])(inst, bindableProps, destObj);

        return inst;
    };

    //TODO: make able to subscribe to other PubSub instances?
    //       var globalEvents = new PubSub();
    //       var moduleEvents = new PubSub();
    //       moduleEvents.subscribe(globalEvents);
    //       moduleEvents.subscribe('someglobalevent', handler);
    //       globalEvents.publish('someglobalevent');

    module.exports = PubSub;
});