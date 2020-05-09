import { Component, h, Prop, Host, Element } from '@stencil/core';

@Component({
    tag: 'ks-tab-panel'
})
export class TabPanel {
    @Element() $el: HTMLElement;

    @Prop() tabId: string;

    render() {
        return (
            <Host class="tab-panel" role="tabpanel" id={this.tabId} tabindex="-1" aria-labelledby={`tab-${this.tabId}`}>
                <slot />
            </Host>
        );
    }
}