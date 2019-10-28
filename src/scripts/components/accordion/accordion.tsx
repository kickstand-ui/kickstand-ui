import { Component, h, Prop, State, Element } from '@stencil/core';

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
            <div class="accordion" role="tablist">
                <slot />
            </div>
        );
    }
}