import { Component, Prop, h, Host } from '@stencil/core';


@Component({
    tag: 'ks-row'
})
export class Row {
    @Prop() noGutter: boolean = false;
    @Prop() position: 'start' | 'center' | 'end' = 'start';

    render() {
        return (
            <Host class={{
                'row': true,
                'display-flex': true,
                'no-gutter': this.noGutter,
                [`align-content-${this.position}`]: this.position !== undefined
            }}>
                <slot />
            </Host>
        );
    }
}