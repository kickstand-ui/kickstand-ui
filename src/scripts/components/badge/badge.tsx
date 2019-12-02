import { Component, h, Prop, ComponentInterface, Host } from '@stencil/core';

@Component({
    tag: 'c-badge'
})
export class Badge implements ComponentInterface {
    @Prop() type: string = 'primary';
    @Prop() hollow: boolean;

    render() {
        return (
            <Host class={`badge ${this.type}${this.hollow ? ' hollow' :  ''}`}>
                <slot />
            </Host>
        );
    }
}