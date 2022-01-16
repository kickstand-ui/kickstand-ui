import { Component, h, Host, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'ks-navbar-row'
})
export class NavbarRow implements ComponentInterface {
    render() {
        return (
            <Host>
                <slot />
            </Host>
        );
    }
}