import { Component, h, Host, Prop } from '@stencil/core';

@Component({
    tag: 'ks-navbar-group'
})
export class NavbarGroup {
    @Prop() position: 'left' | 'right' = 'right';

    render() {
        return (
            <Host class={`navbar-group align-${this.position}`}>
                <slot />
            </Host>
        );
    }
}