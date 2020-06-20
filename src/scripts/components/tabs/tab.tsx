import { Component, h, Prop, Host, Element } from '@stencil/core';

@Component({
    tag: 'ks-tab'
})
export class Tab {
    @Element() $el: HTMLElement;

    @Prop() controls: string;

    render() {
        return (
            <Host class="tab-item" role="presentation">
                <a class="tab-link" role="tab" href={`#${this.controls}`} id={`tab-${this.controls}`} aria-controls={this.controls}>
                    <slot />
                </a>
            </Host>
        );
    }
}