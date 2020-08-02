import { Component, h, Prop, Host } from '@stencil/core';

@Component({
    tag: 'ks-tab'
})
export class Tab {
    @Prop() tabText: string;

    render() {
        return (
            <Host class="tab-panel" role="tabpanel" tabIndex="0">
                <slot />
            </Host>
        );
    }
}