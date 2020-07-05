export default {
    focusableElements: 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]',

    uniqueId() {
        let template = <any>[1e7] + -1e3 + -4e3 + -8e3 + -1e11;
        return (template).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    },

    debounce(fn: Function, delay: number) {
        let timeOutId: NodeJS.Timeout;
        let debounced = function (...args: any[]) {
            if (timeOutId) {
                clearTimeout(timeOutId);
            }
            timeOutId = setTimeout(() => {
                fn(...args);
            }, delay);
        }

        debounced();
    }
}