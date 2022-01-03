import { Component, h, ComponentInterface, Host } from '@stencil/core';

@Component({
    tag: 'ks-card-footer'
})
export class CardFooter implements ComponentInterface {
    render() {
        return (
            <Host>
                <slot />
            </Host>
        );
    }
}