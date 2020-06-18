import { Component, h, Host, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'ks-menu-row'
})
export class MenuRow implements ComponentInterface {
    render() {
        return (
            <Host class="menu-row">
                <slot />
            </Host>
        );
    }
}