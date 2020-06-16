import { Component, Element, h, Host, State, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'ks-menu-item'
})
export class MenuItem implements ComponentInterface {
    @Element() $el: HTMLElement;

    @State() isActive: boolean;

    getActiveStatus() {
        let $link = this.$el.querySelector('a');

        let isActive = $link 
            ? $link.href == window.location.pathname 
            : false;

        if(isActive)
            $link.setAttribute('aria-current', 'page');

        return isActive;
    }

    render() {
        let classes = {
            'main-menu': true,
            'active': this.getActiveStatus()
        };

        return (
            <Host class={classes}>
                <slot />
            </Host>
        );
    }
}