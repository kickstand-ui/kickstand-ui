import { Component, h, Host, Prop } from '@stencil/core';

@Component({
    tag: 'c-navbar-group'
})
export class NavbarGroup {
    @Prop() position: string = 'right';

    render() {
        return (
            <Host class={`navbar-group align-${this.position}`}>
                <slot />
            </Host>
        );
    }
}