import { Component, h, Prop, Host, Element, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'ks-dropdown-item'
})
export class DropdownItem {
    @Element() $el: HTMLElement;

    @Prop() preventClose: boolean = false;

    @Event() closeDropdown: EventEmitter;

    clickHandler() {
        if(!this.preventClose)
            this.closeDropdown.emit();
    }

    render() {
        return (
            <Host role="listitem" onClick={() => this.clickHandler()} class="dropdown-item">
                <slot />
            </Host>
        );
    }
}