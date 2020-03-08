import { Component, h, Prop, Host, Element } from '@stencil/core';

@Component({
    tag: 'c-tab-list'
})
export class TabList {
    @Element() $el: HTMLElement;

    @Prop() name: string;
    @Prop() content: boolean;
    @Prop() position: string = 'top';
    @Prop() size: string;
    @Prop() show: boolean;
    @Prop() disable: boolean;
    @Prop() hideDecoration: boolean;


    render() {
        return (
            <Host class="tab-list" role="tablist">
                <slot />
            </Host>
        );
    }
}