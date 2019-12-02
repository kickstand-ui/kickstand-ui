import { Component, h, Prop, Method, State, Host } from '@stencil/core';
import componentUtils from '../../utils/componentUtils';

@Component({
    tag: 'c-accordion-slide'
})
export class AccordionSlide {
    @Prop() heading: string;
    @Prop() expanded: boolean = false;

    @State() slideId = componentUtils.uniqueId();

    @Method()
    async toggleSlide() {
        this.expanded = !this.expanded;
    }

    render() {
        return (
            <Host class="accordion-slide">
                <button class="accordion-heading" role="tab" aria-controls={this.slideId} aria-expanded={`${this.expanded}`} onClick={this.toggleSlide.bind(this)}>
                    <span>{this.heading}</span>
                    <i class="accordion-icon fas fa-chevron-down"></i>
                </button>
                <div class="accordion-content" role="tabpanel" aria-hidden={`${!this.expanded}`} id={this.slideId}>
                    <slot />
                </div>
            </Host>
        );
    }
}