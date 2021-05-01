import { Component, h, Prop, Method, Host, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'ks-accordion-slide'
})
export class AccordionSlide implements ComponentInterface {
    slideId: string = `accordion_slide_${slideIds++}`;
    $slideContent: HTMLElement;

    @Prop() heading: string;
    @Prop() expanded: boolean = false;

    @Method()
    async toggleSlide() {
        this.expanded = !this.expanded;
        this.$slideContent.style.maxHeight = this.expanded ? this.$slideContent.scrollHeight + 32 + 'px' : '0px';
    }

    componentDidRender() {
        if(this.expanded)
            this.$slideContent.style.maxHeight = this.expanded ? this.$slideContent.scrollHeight + 32 + 'px' : '0px';
    }

    render() {
        return (
            <Host class="accordion-slide">
                <h3 class="accordion-heading">
                    <button class="accordion-control" aria-controls={this.slideId} aria-expanded={`${this.expanded}`} onClick={() => this.toggleSlide()}>
                        <span>{this.heading}</span>
                        <ks-icon class="accordion-icon" icon="chevron_down" />
                    </button>
                </h3>
                <section class="accordion-content" role="tabpanel" aria-hidden={`${!this.expanded}`} id={this.slideId} ref={el => this.$slideContent = el}>
                    <slot />
                </section>
            </Host>
        );
    }
}

let slideIds = 0;