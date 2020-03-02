import { Component, h, Host, Prop } from '@stencil/core';

@Component({
    tag: 'c-navbar-item'
})
export class NavbarItem {
    @Prop() position: string = 'right';

    render() {
        return (
            <Host class={`navbar-item`}>
                <slot />
            </Host>
        );
    }
}