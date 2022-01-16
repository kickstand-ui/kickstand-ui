import { Component, h, Host, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'ks-modal-footer'
})
export class Modal implements ComponentInterface {
    render() {
        return (
            <Host>
                <slot />
            </Host>
        );
    }
}