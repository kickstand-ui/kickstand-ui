import { Component, h, Host, Prop, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'ks-menu-group'
})
export class MenuGroup implements ComponentInterface {
    @Prop() position: 'left' | 'right' = 'right';

    render() {
        return (
            <Host class={`menu-group align-${this.position}`}>
                <slot />
            </Host>
        );
    }
}