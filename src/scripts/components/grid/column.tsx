import { Component, Prop, h, Host } from '@stencil/core';


@Component({
    tag: 'ks-column'
})
export class Column {
    @Prop() align: 'start' | 'center' | 'end' | 'stretch';

    render() {
        return (
            <Host class={this.align ? `align-items-${this.align}` : ''}>
                <slot />
            </Host>
        );
    }
}