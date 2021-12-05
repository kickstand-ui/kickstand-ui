import { Component, h, Prop, Method, Host, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'ks-accordion-slide'
})
export class AccordionSlide implements ComponentInterface {
    slideId: number = slideIds++;
    controlId: string = `accordion_control_${this.slideId}`;
    panelId: string = `accordion_slide_${this.slideId}`;
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
                    <button id={this.controlId} class="accordion-control" aria-controls={this.panelId} aria-expanded={`${this.expanded}`} onClick={() => this.toggleSlide()}>
                        <span ref={el => el.innerHTML = this.heading}></span>
                        <ks-icon class="accordion-icon" icon="chevron_down" />
                    </button>
                </h3>
                <section id={this.panelId} class="accordion-content" aria-hidden={`${!this.expanded}`} aria-labelledby={this.controlId} ref={el => this.$slideContent = el}>
                    <slot />
                </section>
            </Host>
        );
    }
}

let slideIds = 0;