define(function(require) {
    'use strict';

    // Browser Support: IE9+ (Dependancy on getComputedStyle)

    var debounce = require('../function/debounce');
    var extend = require('../object/extend');

    // option defaults
    var DEFAULTS = {
        eventDelay: 200,
        element: document.body
    };

    var BreakpointService = function(options) {
        this._options = extend({}, DEFAULTS, options);

        this.bindHandlers()
            .init();
    };

    BreakpointService.prototype.init = function() {
        this.element = this._options.element;
        this.styleDeclaration = window.getComputedStyle(this.element);
        this.subscribers = [];

        this.element.addEventListener('resize', this.handleResize);
        this.handleResize();

        return this;
    };

    BreakpointService.prototype.bindHandlers = function() {
        var boundResize = this._onResize.bind(this);
        var eventDelay = this._options.eventDelay;
        this.handleResize = debounce(boundResize, eventDelay);
        return this;
    };

    BreakpointService.prototype._onResize = function(event) {
        var cssBreakpoint = this.styleDeclaration.getPropertyValue('content');
        var oldBreakpoint;
        if (cssBreakpoint === this.currentBreakpoint) {
            return;
        }

        oldBreakpoint = this.currentBreakpoint;
        this.currentBreakpoint = cssBreakpoint;

        this.subscribers.forEach(function(callback) {
            callback(cssBreakpoint, oldBreakpoint);
        });
    };

    BreakpointService.prototype.getBreakpoint = function() {
        return this.currentBreakpoint;
    };

    BreakpointService.prototype.subscribe = function(callback) {
        this.subscribers.push(callback);
    };

    BreakpointService.prototype.unsubscribe = function(callback) {
        var subscriberIdx = this.subscribers.indexOf(callback);
        if (subscriberIdx > -1) {
            this.subscribers.splice(subscriberIdx, 1);
        }
    };

    BreakpointService.prototype.destroy = function() {
        // remove event listeners
        this.element.removeEventListener('resize', this.handleResize);

        // get rid of any reference to DOM
        this.subscribers = null;
        this.element = null;
        this._options = null;
    };

    //TODO: document script
    //TODO: test
    //TODO: use pubsub for eventing

    return BreakpointService;
});
