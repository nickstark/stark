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
     * A basic publish-subscribe pattern that emulates events namespaced by
     * a string keyword.
     *
     * @constructor
     * @class PubSub
     * @requires extend
     * @requires bindAll
     */
    var PubSub = function PubSub() {
        this._topics = {};
    };

    /*
     * associate a callback with an event topic
     *
     * @method subscribe
     * @param {String} topic String key to subscribe to (E.g. Event name)
     * @param {Function} callback Function to call when topic is published
     * @return {object} object containing topic and deregister function
     * @throws {TypeError} if topic is undefined or callback is not a function
     * @example
     *     // subscribe to 'mytopic' event
     *     var token = pubsub.subscribe('mytopic', handleTheTopicEvent);
     *     // remove subscription
     *     token.remove();
     */
    PubSub.prototype.subscribe = function (topic, callback) {
        // make sure arguments are correct
        if (typeof topic === 'undefined') {
            throw new TypeError('PubSub: trying to subscribe to undefined topic');
        }
        if (typeof callback !== 'function') {
            throw new TypeError('PubSub: subscribe callback is not a function');
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

    PubSub.prototype.on = PubSub.prototype.subscribe;

    /*
     * disassociate a callback from a topic
     *
     * @method unsubscribe
     * @param {String} topic String key function is subscribed to (E.g. Event name)
     * @param {Function} callback Function to unsubscribe
     * @return {Boolean} success flag
     * @throws {TypeError} if topic is undefined or callback is not a function
     * @example
     *     var wasSubscibedInFirstPlace = pubsub.unsubscribe('mytopic', myHandlerFunc);
     */
    PubSub.prototype.unsubscribe = function (topic, callback) {
        // make sure arguments are correct
        if (typeof topic === 'undefined') {
            throw new TypeError('PubSub: trying to unsubscribe from undefined topic');
        }
        if (typeof callback !== 'function') {
            throw new TypeError('PubSub: unsubscribe callback is not a function');
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

    PubSub.prototype.off = PubSub.prototype.unsubscribe;

    /*
     * publish an event to a topic. Additional parameters will be passed to the
     * subscibed callback.
     *
     * @method publish
     * @param {String} topic String key to publish to
     * @throws {TypeError} if topic is undefined
     * @example
     *     pubsub.publish('mytopic', firstArg, secondArg, moreData);
     */
    PubSub.prototype.publish = function (topic) {
        if (typeof topic === 'undefined') {
            throw new TypeError('PubSub: trying to publish with undefined topic');
        }
        var args = Array.prototype.slice.call(arguments, 1);

        if (this._topics.hasOwnProperty(topic)) {
            this._topics[topic].forEach(function (callback) {
                callback.apply(null, args);
            });
        }
    };

    PubSub.prototype.trigger = PubSub.prototype.publish;

    /*
     * extend pubsub functionality onto external object
     *
     * @method extendObject
     * @static
     * @param {object} destObj Object to augment with PubSub functionality
     * @param {PubSub} [inst] Instance of PubSub to use behind the scenes
     * @param {Boolean} [includeJqueryFns=false] Include on, off, and trigger syntax
     * @return {PubSub} The underlying PubSub index powering events
     * @example
     *     PubSub.extendObject(myClassInstance); // Basic functionality
     *     myClassInstance.subscribe('classInstanceEvent', handler);
     *
     *     PubSub.extendObject(myClassInstance, globalPubSub); // shared events
     *
     *     var viewEvents = PubSub.extend(myView);
     *     var secondViewEvents = PubSub.extend(secondView, viewEvents);
     *     console.log(viewEvents === secondViewEvents); // true
     *     viewEvents.publish('test', 'hello, both views');
     *
     */
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

    module.exports = PubSub;
});