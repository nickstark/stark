define(function(require) {
    'use strict';

    // Browser Support IE9+ - dependancy on addEventListener

    var FocusTrapError = require('../errors/FocusTrap');
    var find = require('../ui/find');
    var matches = require('../ui/matches');

    var TAB_KEY = 9;

    // globally trapped region
    var currentTrapRegion = null;

    // list of possible selectable elements
    var SELECTABLE = [
        'a[href]',
        'area[href]',
        'button',
        'iframe',
        'input',
        'select',
        'textarea',
        '[tabindex]'
    ].join(',');

    var DOMRegion = function(rootElement) {
        this.rootElement = rootElement;
        this._init();
    };

    // static method to TRY focussing element
    DOMRegion.focusElement = function(element) {
        if (currentTrapRegion && !currentTrapRegion.contains(element)) {
            return false;
        }

        element.focus();
        return true;
    };

    DOMRegion.prototype._init = function() {
        this._focusableElements = null;
        this._trapped = false;
        this._handleElementBlur = this._onElementBlur.bind(this);
    };

    DOMRegion.prototype.trapFocus = function() {
        if (currentTrapRegion && currentTrapRegion !== this) {
            throw new FocusTrapError(currentTrapRegion, this);
        }
        if (this._trapped) {
            return;
        }

        // reset list of focusable elements
        this._focusableElements = find(SELECTABLE, this.rootElement).filter(function(el) {
            // filter out items with overwritten tabIndex values or disabled inputs
            return el.tabIndex !== -1 && el.getAttribute('disabled') === null;
        });

        // add wrapper if focusable
        if (
            matches(this.rootElement, SELECTABLE) &&
            this.rootElement.tabIndex !== -1 &&
            this.rootElement.getAttribute('disabled') === null
        ) {
            this._focusableElements.unshift(this.rootElement);
        }

        // add listener and set flag
        document.addEventListener('keydown', this._handleElementBlur, true);
        this._trapped = true;
        currentTrapRegion = this;
    };

    DOMRegion.prototype.releaseFocus = function() {
        if (!this._trapped) {
            return;
        }

        // remove DOM references
        this._focusableElements = null;

        document.removeEventListener('keydown', this._handleElementBlur, true);
        this._trapped = false;
        currentTrapRegion = null;
    };

    DOMRegion.prototype.focus = function() {
        // focus element if focusable or first focusable element
        var firstElement = this.rootElement.querySelector(SELECTABLE);
        if (firstElement) {
            firstElement.focus();
        }
    };

    DOMRegion.prototype.contains = function(element) {
        return this.rootElement.contains(element);
    };

    DOMRegion.prototype._onElementBlur = function(event) {
        // only listen for tab key
        if (event.keyCode !== TAB_KEY) {
            return;
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

    return DOMRegion;
});
