import { Component, Prop, h, Host } from '@stencil/core';


@Component({
    tag: 'ks-column'
})
export class Column {
    @Prop() position: 'start' | 'center' | 'end' | 'stretch';

    render() {
        return (
            <Host class={{
                'col': true,
                [`align-items-${this.position}`]: this.position !== undefined
            }}>
                <slot />
            </Host>
        );
    }
}