define(['exports', 'module', '../function/debounce', '../object/extend', './PubSub'], function (exports, module, _functionDebounce, _objectExtend, _PubSub) {
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _debounce = _interopRequireDefault(_functionDebounce);

    var _extend = _interopRequireDefault(_objectExtend);

    var _PubSub2 = _interopRequireDefault(_PubSub);

    // Browser Support: IE9+ (Dependancy on getComputedStyle)

    // detect if query will wrap in quotes
    var quoteRegex = /["']/g;

    // option defaults
    var DEFAULTS = {
        eventDelay: 50, // time resize event is debounced
        element: document.body, // element to read content from
        pseudo: ':after' // pseudo-element to read content from
    };

    // namespace for pubsub
    var BREAKPOINT_NS = 'breakpointchange';

    /*
     * basic constructor, initializes breakpoint listener
     *
     * @constructor
     * @param {Object} options Configuration options
     */
    var BreakpointService = function BreakpointService(options) {
        this._options = (0, _extend['default'])({}, DEFAULTS, options || {});

        this._bindHandlers()._init();
    };

    /*
     * Initializes variables
     *
     * @method _init
     * @private
     */
    BreakpointService.prototype._init = function () {
        var opts = this._options;
        this._styleDeclaration = window.getComputedStyle(opts.element, opts.pseudo);
        this._pubsub = new _PubSub2['default']();

        window.addEventListener('resize', this._handleResize);
        window.addEventListener('orientationchange', this._handleResize);
        this._handleResize();

        return this;
    };

    /*
     * Bind handlers to instance
     *
     * @method _bindHandlers
     * @private
     */
    BreakpointService.prototype._bindHandlers = function () {
        var boundResize = this._onResize.bind(this);
        var eventDelay = this._options.eventDelay;
        this._handleResize = eventDelay ? (0, _debounce['default'])(boundResize, eventDelay) : boundResize;
        return this;
    };

    /*
     * Handle resize event
     *
     * @method _onResize
     * @param {ResizeEvent} event Window resize event
     * @private
     */
    BreakpointService.prototype._onResize = function (event) {
        var cssBreakpoint = this._styleDeclaration.getPropertyValue('content');
        var oldBreakpoint;

        if (cssBreakpoint === this._currentBreakpoint) {
            return;
        }

        oldBreakpoint = this._currentBreakpoint;
        this._currentBreakpoint = cssBreakpoint;

        this._pubsub.publish(BREAKPOINT_NS, cssBreakpoint, oldBreakpoint);
    };

    /*
     * Get the current breakpoint
     *
     * @method getBreakpoint
     * @public
     * @returns {String}
     */
    BreakpointService.prototype.getBreakpoint = function () {
        var bp = this._currentBreakpoint;
        if (bp === 'none') {
            bp = '';
        }
        return bp.replace(quoteRegex, '') || null;
    };

    /*
     * Tests if current breakpoint is in list of arguments
     *
     * @method matches
     * @public
     * @returns {String}
     */
    BreakpointService.prototype.matches = function () {
        var currentBreakpoint = this.getBreakpoint();
        var breakpointNames = Array.prototype.slice.call(arguments, 0);
        return breakpointNames.some(function (name) {
            return name === currentBreakpoint;
        }, this);
    };

    /*
     * Register callback function
     *
     * @method subscribe
     * @param {Function} callback Breakpoint change callback
     * @public
     */
    BreakpointService.prototype.subscribe = function (callback) {
        this._pubsub.subscribe(BREAKPOINT_NS, callback);
    };

    /*
     * Deregister callback function
     *
     * @method unsubscribe
     * @param {Function} callback Breakpoint change callback
     * @public
     */
    BreakpointService.prototype.unsubscribe = function (callback) {
        this._pubsub.unsubscribe(BREAKPOINT_NS, callback);
    };

    /*
     * Destroy instance
     *
     * @method destroy
     * @public
     */
    BreakpointService.prototype.destroy = function () {
        // remove event listeners
        window.removeEventListener('resize', this._handleResize);
        window.removeEventListener('orientationchange', this._handleResize);

        // get rid of any references
        this._pubsub = null;
        this._options = null;
        this._styleDeclaration = null;
    };

    module.exports = BreakpointService;
});