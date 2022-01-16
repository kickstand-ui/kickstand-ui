import { Component, Prop, h, Host } from '@stencil/core';


@Component({
    tag: 'ks-grid',
    styleUrl: 'grid.scss'
})
export class Grid {
    @Prop() align: 'start' | 'center' | 'end' | 'stretch' = 'start';

    render() {
        return (
            <Host class={this.align ? `align-content-${this.align}` : ''}>
                <slot />
            </Host>
        );
    }
}