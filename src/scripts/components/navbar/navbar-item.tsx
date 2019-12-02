import { Component, h, Host, Prop } from '@stencil/core';

@Component({
    tag: 'navbar-item'
})
export class NavbarItem {
    @Prop() position: string = 'right';

    render() {
        return (
            <Host class={`navbar-group align-${this.position}`}>
                <slot />
            </Host>
        );
    }
}