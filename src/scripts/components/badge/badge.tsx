import { Component, h, Prop, ComponentInterface, Host } from '@stencil/core';

@Component({
    tag: 'ks-badge',
    styleUrl: 'badge.scss'
})
export class Badge implements ComponentInterface {
    @Prop() color: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' = 'primary';
    @Prop() hollow: boolean;

    render() {
        let classes= {
            'ks-badge': true,
            [`${this.color}`]: true,
            'hollow': this.hollow
        };
        return (
            <Host class={classes}>
                <slot />
            </Host>
        );
    }
}