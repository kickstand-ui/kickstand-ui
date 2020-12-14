import { Component, h, ComponentInterface, Host, Prop } from '@stencil/core';

@Component({
    tag: 'ks-button-bar',
    styleUrl: 'button-bar.scss'
})
export class ButtonBar implements ComponentInterface {
    @Prop() stacked: boolean = false;

    render() {
        return (
            <Host class={`ks-button-bar ${this.stacked ? 'stacked' : 'inline'}`}>
                <slot />
            </Host>
        );
    }
}