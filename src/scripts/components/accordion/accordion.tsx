import { Component, h, Host, Prop } from '@stencil/core';

@Component({
    tag: 'c-accordion'
})
export class Accordion {
    @Prop() size: string = 'md';

    render() {
        return (
            <Host class={`accordion ${this.size}`} role="tablist">
                <slot />
            </Host>
        );
    }
}