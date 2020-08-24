import { Component, h, Host, Prop } from '@stencil/core';

@Component({
    tag: 'ks-accordion',
    styleUrl: 'accordion.scss'
})
export class Accordion {
    @Prop() size: 'sm' | 'md' | 'lg' = 'md';

    render() {
        return (
            <Host class={`ks-accordion ${this.size}`} role="tablist">
                <slot />
            </Host>
        );
    }
}