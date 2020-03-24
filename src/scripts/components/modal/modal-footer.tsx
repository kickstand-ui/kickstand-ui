import { Component, h, Host, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'c-modal-footer'
})
export class Modal implements ComponentInterface {
    render() {
        return (
            <Host class="modal-footer">
                <slot />
            </Host>
        );
    }
}