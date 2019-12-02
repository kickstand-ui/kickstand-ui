import { Component, h, Prop, State, Element, Host } from '@stencil/core';

@Component({
    tag: 'c-accordion'
})
export class Accordion {
    @Element() el: HTMLElement;

    @Prop() cssClass: string = '';

    @State() slides: HTMLCAccordionSlideElement[];

    connectedCallback() {
        this.slides = Array.from(this.el.querySelectorAll('c-accordion-slide'));
    }

    render() {
        return (
            <Host class="accordion" role="tablist">
                <slot />
            </Host>
        );
    }
}