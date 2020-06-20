import { Component, Prop, h, Host } from '@stencil/core';


@Component({
    tag: 'ks-column'
})
export class Column {
    @Prop() align: 'start' | 'center' | 'end' | 'stretch' = 'start';

    render() {
        return (
            <Host class={{
                'col': true,
                [`align-items-${this.align}`]: true
            }}>
                <slot />
            </Host>
        );
    }
}