import { Component, Prop, h, Host } from '@stencil/core';


@Component({
    tag: 'c-column'
})
export class Column {
    @Prop() align: 'start' | 'center' | 'end' = 'start';

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