import { Component, Prop, h, Host } from '@stencil/core';


@Component({
    tag: 'ks-row',
    styleUrl: 'grid.scss'
})
export class Row {
    @Prop() noGutter: boolean = false;
    @Prop() position: 'start' | 'center' | 'end' = 'start';

    render() {
        return (
            <Host class={{
                'ks-row': true,
                'display-flex': true,
                'no-gutter': this.noGutter,
                [`align-content-${this.position}`]: this.position !== undefined
            }}>
                <slot />
            </Host>
        );
    }
}