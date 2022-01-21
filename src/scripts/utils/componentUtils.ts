import { EventEmitter } from "@stencil/core";

/**
 * Common methods for dismissible components
 */
export interface IDismissible {
    shown: EventEmitter;
    hidden: EventEmitter;
    show(): Promise<void>;
    hide(): Promise<void>;
}


/**
 * Documentation
 * A list of focusable HTML elements
 */
export const FOCUSABLE_ELEMENTS = '*:not([hidden]), a[href], area[href], input:not([disabled]), select:not([disabled]), ' +
    'textarea:not([disabled]), button:not([disabled]), [aria-disabled]:not([aria-disabled="true"]), ' + 
    '[tabindex]:not([tabindex="-1"]), audio[controls], video[controls], ' + 
    '[contenteditable]:not([contenteditable="false"]), details>summary:first-of-type, details';

/**
 * Documentation
 * An object with developer-friendly names for key-codes
 */
export const keyCodes = {
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ESC: 27,
    LEFT_ARROW: 37,
    UP_ARROW: 38,
    RIGHT_ARROW: 39,
    DOWN_ARROW: 40,
    SPACE: 32
};

/**
 * Documentation
 * @param {Function} fn The callback method to execute after the debounce
 * @param {number} delay The time to wait after the action to call the callback method
 */
export const debounce = (fn: Function, delay: number) => {
    let timeOutId: NodeJS.Timeout;
    return function (...args) {
        if (timeOutId)
            clearTimeout(timeOutId);

        timeOutId = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}
