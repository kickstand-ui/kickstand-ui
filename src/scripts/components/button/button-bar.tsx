import { Component, h, ComponentInterface, Host, Prop } from '@stencil/core';

@Component({
    tag: 'ks-button-bar'
})
export class ButtonBar implements ComponentInterface {
    @Prop() direction: 'inline' | 'stacked' = 'inline';

    render() {
        return (
            <Host class={`ks-button-bar ${this.direction}`}>
                <slot />
            </Host>
        );
    }
}