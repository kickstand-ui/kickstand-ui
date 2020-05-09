import { Component, h, Prop, Method, Host } from '@stencil/core';

@Component({
    tag: 'ks-accordion-slide'
})
export class AccordionSlide {
    slideId: string = `accordion-slide-${slideIds++}`;

    @Prop() heading: string;
    @Prop() expanded: boolean = false;

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

let slideIds = 0;