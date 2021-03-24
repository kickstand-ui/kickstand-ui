declare global {
    interface HTMLElement {
        find<T extends HTMLElement>(selector: string): T;
        findAll<T extends HTMLElement>(selector: string): T[];
        on(event: string, callback: Function): void;
    }

    interface Array<T> {
        on(event: string, callback: Function): void;
    }

    interface NodeList {
        on(event: string, callback: Function): void;
    }
}

export function $<T extends HTMLElement>(selector: string): T {
    return (document.querySelector(selector) as any) as T;
}

export function $$<T extends HTMLElement>(selector: string): T[] {
    return Array.from(document.querySelectorAll(selector) as any) as T[];
}

HTMLElement.prototype.find = function <T extends HTMLElement>(selector: string): T {
    return this.querySelector(selector) as T;
};

HTMLElement.prototype.findAll = function <T extends HTMLElement>(selector: string): T[] {
    return Array.from(document.querySelectorAll(selector) as any) as T[];
};

HTMLElement.prototype.on = function (event: string, callback: Function) {
    this.addEventListener(event, callback);
};

Array.prototype.on = function (event: string, callback: Function) {
    this.forEach(element => element.addEventListener(event, callback));
};

NodeList.prototype.on = function (event: string, callback: Function) {
    this.forEach(element => element.addEventListener(event, callback));
};