/**
 * Documentation
 * A list of focusable HTML elements
 */
export const FOCUSABLE_ELEMENTS =
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]';

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
    SPACE: 32,
};

/**
 * Documentation
 * @param {Function} fn The callback method to execute after the debounce
 * @param {number} delay The time to wait after the action to call the callback method
 */
export const debounce = (fn: Function, delay: number) => {
    let timeOutId: NodeJS.Timeout;
    return function (...args) {
        if (timeOutId) clearTimeout(timeOutId);

        timeOutId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};
