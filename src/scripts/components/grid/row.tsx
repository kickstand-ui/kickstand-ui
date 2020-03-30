import { Component, Prop, h, Host } from '@stencil/core';


@Component({
    tag: 'c-row'
})
export class Row {
    @Prop() noGutter: boolean;
    @Prop() align: 'start' | 'center' | 'end' = 'start';

    render() {
        return (
            <Host class={{
                'grid-row': true,
                'flex-layout': true,
                'no-gutter': this.noGutter,
                [`align-content-${this.align}`]: true
            }}>
                <slot />
            </Host>
        );
    }
}