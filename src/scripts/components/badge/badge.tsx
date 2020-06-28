import { Component, h, Prop, ComponentInterface, Host } from '@stencil/core';

@Component({
    tag: 'ks-badge',
    styleUrl: 'badge.scss'
})
export class Badge implements ComponentInterface {
    @Prop() color: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' = 'primary';
    @Prop() hollow: boolean;

    render() {
        return (
            <Host class={`badge ${this.color}${this.hollow ? ' hollow' :  ''}`}>
                <slot />
            </Host>
        );
    }
}