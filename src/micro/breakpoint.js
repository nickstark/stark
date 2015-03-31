define(function(require) {
    'use strict';

    // Browser Support: IE9+ (Dependancy on getComputedStyle)

    var debounce = require('../function/debounce');
    var extend = require('../object/extend');
    var PubSub = require('./pubsub');

    // option defaults
    var DEFAULTS = {
        eventDelay: 50, // time resize event is debounced
        element: document.body // element to read content from
    };

    /*
     * basic constructor, initializes breakpoint listener
     *
     * @constructor
     * @param {Object} options Configuration options
     */
    var BreakpointService = function(options) {
        this._options = extend({}, DEFAULTS, options || {});

        this._bindHandlers()
            ._init();
    };

    /*
     * Initializes variables
     *
     * @method _init
     * @private
     */
    BreakpointService.prototype._init = function() {
        this.styleDeclaration = window.getComputedStyle(this._options.element);
        this.pubsub = new PubSub();

        window.addEventListener('resize', this.handleResize);
        this.handleResize();

        return this;
    };

    /*
     * Bind handlers to instance
     *
     * @method _bindHandlers
     * @private
     */
    BreakpointService.prototype._bindHandlers = function() {
        var boundResize = this._onResize.bind(this);
        var eventDelay = this._options.eventDelay;
        this.handleResize = eventDelay ? debounce(boundResize, eventDelay) : boundResize;
        return this;
    };

    /*
     * Handle resize event
     *
     * @method _onResize
     * @param {ResizeEvent} event Window resize event
     * @private
     */
    BreakpointService.prototype._onResize = function(event) {
        var cssBreakpoint = this.styleDeclaration.getPropertyValue('content');
        var oldBreakpoint;
        if (cssBreakpoint === this.currentBreakpoint) {
            return;
        }

        oldBreakpoint = this.currentBreakpoint;
        this.currentBreakpoint = cssBreakpoint;

        this.pubsub.publish('breakpointchange', cssBreakpoint, oldBreakpoint);
    };

    /*
     * Get the current breakpoint
     *
     * @method getBreakpoint
     * @public
     * @returns {String}
     */
    BreakpointService.prototype.getBreakpoint = function() {
        return this.currentBreakpoint;
    };

    /*
     * Register callback function
     *
     * @method subscribe
     * @param {Function} callback Breakpoint change callback
     * @public
     */
    BreakpointService.prototype.subscribe = function(callback) {
        this.pubsub.subscribe('breakpointchange', callback);
    };

    /*
     * Deregister callback function
     *
     * @method unsubscribe
     * @param {Function} callback Breakpoint change callback
     * @public
     */
    BreakpointService.prototype.unsubscribe = function(callback) {
        this.pubsub.unsubscribe('breakpointchange', callback);
    };

    /*
     * Destroy instance
     *
     * @method destroy
     * @public
     */
    BreakpointService.prototype.destroy = function() {
        // remove event listeners
        window.removeEventListener('resize', this.handleResize);

        // get rid of any references
        this.pubsub = null;
        this._options = null;
        this.styleDeclaration = null;
    };

    return BreakpointService;
});
