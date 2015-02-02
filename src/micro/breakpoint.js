define(function() {

    // Browser Support: IE9+ (Dependancy on getComputedStyle)

    var debounce = require('../function/debounce');

    var DEFAULTS = {
        eventDelay: 200,
        element: document.body
    };

    var BreakpointListener = function(options) {
        this._options = options || {};

        this.bindHandlers()
            .init();
    };

    BreakpointListener.prototype.init = function() {
        this.element = this._options.element || DEFAULTS.element;
        this.styleDeclaration = window.getComputedStyle(this.element);
        this.subscribers = [];

        this.element.addEventListener('resize', this.handleResize);
        this.handleResize();

        return this;
    };

    BreakpointListener.prototype.bindHandlers = function() {
        var boundResize = this._onResize.bind(this);
        var eventDelay = typeof this._options.eventDelay === 'number' ?
            this._options.eventDelay :
            DEFAULTS.eventDelay;
        this.handleResize = debounce(boundResize, eventDelay);
        return this;
    };

    BreakpointListener.prototype._onResize = function(event) {
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

    BreakpointListener.prototype.getBreakpoint = function() {
        return this.currentBreakpoint;
    };

    BreakpointListener.prototype.subscribe = function(callback) {
        this.subscribers.push(callback);
    };

    BreakpointListener.prototype.unsubscribe = function(callback) {
        var subscriberIdx = this.subscribers.indexOf(callback);
        if (subscriberIdx > -1) {
            this.subscribers.splice(subscriberIdx, 1);
        }
    };

    BreakpointListener.prototype.destroy = function() {
        // remove event listeners
        this.element.removeEventListener('resize', this.handleResize);

        // get rid of any reference to DOM
        this.element = null;
        this._options = null;
    };

    //TODO: document script
    //TODO: test

    return BreakpointListener;
});
