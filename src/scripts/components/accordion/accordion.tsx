import { Component, h, Host, Prop, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'ks-accordion',
    styleUrl: 'accordion.scss'
})
export class Accordion implements ComponentInterface {
    @Prop() size: 'sm' | 'md' | 'lg' = 'md';

    render() {
        return (
            <Host class={`${this.size}`}>
                <slot />
            </Host>
        );
    }
}