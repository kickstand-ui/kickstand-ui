import { Component, h, ComponentInterface, Host } from '@stencil/core';

@Component({
    tag: 'card-footer'
})
export class CardFooter implements ComponentInterface {
    render() {
        return (
            <Host class="card-footer">
                <slot />
            </Host>
        );
    }
}