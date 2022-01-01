import { Component, Prop, h, Host } from '@stencil/core';


@Component({
    tag: 'ks-grid',
    styleUrl: 'grid.scss'
})
export class Row {
    @Prop() position: 'start' | 'center' | 'end' | 'stretch' = 'start';
    @Prop() gutter: 'none' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' = 'sm';

    render() {
        return (
            <Host class={{
                'ks-grid': true,
                [`gutter-${this.gutter}`]: true,
                [`align-content-${this.position}`]: this.position !== undefined
            }}>
                <slot />
            </Host>
        );
    }
}