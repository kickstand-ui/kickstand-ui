import { Component, h, Host } from '@stencil/core';

@Component({
    tag: 'ks-navbar-row'
})
export class NavbarRow {
    render() {
        return (
            <Host class="navbar-row">
                <slot />
            </Host>
        );
    }
}