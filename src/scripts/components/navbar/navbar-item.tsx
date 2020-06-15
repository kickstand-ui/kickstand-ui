import { Component, h, Host } from '@stencil/core';

@Component({
    tag: 'ks-navbar-item'
})
export class NavbarItem {
    render() {
        return (
            <Host class={`navbar-item`}>
                <slot />
            </Host>
        );
    }
}