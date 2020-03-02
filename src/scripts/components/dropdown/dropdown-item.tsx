import { Component, h, Prop, Host, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'dropdown-item'
})
export class DropdownItem {
    @Prop() closeOnClick: boolean = true;

    @Event() closeDropdown: EventEmitter;

    clickHandler() {
        console.log('close on click', this.closeOnClick);
        if(this.closeOnClick)
            this.closeDropdown.emit();
    }

    render() {
        return (
            <Host role="listitem" onClick={this.clickHandler.bind(this)} class="dropdown-item">
                <slot />
            </Host>
        );
    }
}