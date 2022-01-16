import { Component, h, Host, Prop, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'ks-navbar-group'
})
export class NavbarGroup implements ComponentInterface {
    @Prop() position: 'left' | 'right' = 'right';

    render() {
        return (
            <Host class={`align-${this.position}`}>
                <slot />
            </Host>
        );
    }
}