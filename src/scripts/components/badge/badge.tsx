import { Component, h, Prop, ComponentInterface, Host } from '@stencil/core';

@Component({
    tag: 'c-badge'
})
export class Badge implements ComponentInterface {
    @Prop() type: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link' = 'primary';
    @Prop() hollow: boolean;

    render() {
        return (
            <Host class={`badge ${this.type}${this.hollow ? ' hollow' :  ''}`}>
                <slot />
            </Host>
        );
    }
}