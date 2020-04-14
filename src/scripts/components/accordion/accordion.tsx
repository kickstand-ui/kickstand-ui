import { Component, h, Host } from '@stencil/core';

@Component({
    tag: 'c-accordion'
})
export class Accordion {
    render() {
        return (
            <Host class="accordion" role="tablist">
                <slot />
            </Host>
        );
    }
}