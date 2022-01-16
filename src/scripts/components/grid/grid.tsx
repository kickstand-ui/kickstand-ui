import { Component, Prop, h, Host } from '@stencil/core';


@Component({
    tag: 'ks-grid',
    styleUrl: 'grid.scss'
})
export class Grid {
    @Prop() position: 'start' | 'center' | 'end' | 'stretch' = 'start';

    render() {
        return (
            <Host class={this.position ? `align-content-${this.position}` : ''}>
                <slot />
            </Host>
        );
    }
}