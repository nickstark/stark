'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _errorsFocusTrapError = require('../errors/FocusTrapError');

var _errorsFocusTrapError2 = _interopRequireDefault(_errorsFocusTrapError);

var _PubSub = require('./PubSub');

var _PubSub2 = _interopRequireDefault(_PubSub);

var _uiFind = require('../ui/find');

var _uiFind2 = _interopRequireDefault(_uiFind);

var _uiMatches = require('../ui/matches');

var _uiMatches2 = _interopRequireDefault(_uiMatches);

// Browser Support IE9+ - dependancy on addEventListener

var TAB_KEY = 9;
var ESC_KEY = 27;

// globally trapped region
var currentTrapRegion = null;

// list of possible selectable elements
var SELECTABLE = ['a[href]', 'area[href]', 'button', 'iframe', 'input', 'select', 'textarea', '[tabindex]'].join(',');

var DOMRegion = function DOMRegion(rootElement, options) {
    if (!(rootElement instanceof Element)) {
        throw new TypeError('DOMRegion must be passed an Element to bind to.');
    }
    _PubSub2['default'].extendObject(this);
    this.rootElement = rootElement;
    this._config = options || {};
    this._init();
};

// static method to TRY focussing element
DOMRegion.focusElement = function (element) {
    if (currentTrapRegion && !currentTrapRegion.contains(element)) {
        return false;
    }

    element.focus();
    return true;
};

DOMRegion.prototype._init = function () {
    this._focusableElements = null;
    this._trapped = false;
    this._handleKeydown = this._onKeydown.bind(this);
};

DOMRegion.prototype._findElements = function () {
    // reset list of focusable elements
    var focusableElements = (0, _uiFind2['default'])(SELECTABLE, this.rootElement).filter(function (el) {
        // filter out items with overwritten tabIndex values or disabled inputs
        return el.tabIndex !== -1 && el.getAttribute('disabled') === null;
    });

    // add wrapper if focusable
    if ((0, _uiMatches2['default'])(this.rootElement, SELECTABLE) && this.rootElement.tabIndex !== -1 && this.rootElement.getAttribute('disabled') === null) {
        focusableElements.unshift(this.rootElement);
    }

    return focusableElements;
};

DOMRegion.prototype.trapFocus = function () {
    if (currentTrapRegion && currentTrapRegion !== this) {
        throw new _errorsFocusTrapError2['default'](currentTrapRegion, this);
    }
    if (this._trapped) {
        return;
    }

    // reset list of focusable elements
    this._focusableElements = this._findElements();

    // add listener and set flag
    document.addEventListener('keydown', this._handleKeydown, true);
    this._trapped = true;
    currentTrapRegion = this;
};

DOMRegion.prototype.releaseFocus = function () {
    if (!this._trapped) {
        return;
    }

    // remove DOM references
    this._focusableElements = null;

    document.removeEventListener('keydown', this._handleKeydown, true);
    this._trapped = false;
    currentTrapRegion = null;
};

DOMRegion.prototype.focus = function () {
    // focus element if focusable or first focusable element
    var firstElement = this._trapped ? this._focusableElements[0] : this.rootElement.querySelector(SELECTABLE);
    if (firstElement) {
        firstElement.focus();
    }
};

DOMRegion.prototype.contains = function (element) {
    return this.rootElement.contains(element);
};

DOMRegion.prototype._onKeydown = function (event) {
    // check for esc and notify subscribers
    if (event.keyCode === ESC_KEY) {
        this.publish('esc', event);
    }

    // listen for tab key
    if (event.keyCode === TAB_KEY) {
        this._onElementBlur(event);
    }
};

DOMRegion.prototype._onElementBlur = function (event) {
    // refresh element list if dynamic option is set
    if (this._config.dynamic) {
        this._focusableElements = this._findElements();
    }

    // don't let anything focus if there are no focusable elements
    if (!this._focusableElements.length) {
        event.preventDefault();
        return;
    }

    // store references
    var firstElement = this._focusableElements[0];
    var lastElement = this._focusableElements[this._focusableElements.length - 1];

    // check if first tab
    if (document.activeElement === document.body && this.rootElement !== document.body) {
        event.preventDefault();
        firstElement.focus();
        return;
    }

    // handle exiting cases
    if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault(); // stop focus
        firstElement.focus();
    } else if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault(); // stop focus
        lastElement.focus();
    }
};

exports['default'] = DOMRegion;
module.exports = exports['default'];