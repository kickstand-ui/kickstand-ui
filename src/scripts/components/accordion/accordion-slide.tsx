import { Component, h, Prop, Method, Host, Event, ComponentInterface, EventEmitter } from '@stencil/core';
import { IDismissible } from '../../utils/componentUtils';
import { sanitizeHTML } from "../../utils/htmlSanitizer";

@Component({
    tag: 'ks-accordion-slide'
})
export class AccordionSlide implements ComponentInterface, IDismissible {
    slideId: number = slideIds++;
    controlId: string = `accordion_control_${this.slideId}`;
    panelId: string = `accordion_slide_${this.slideId}`;
    $slideContent: HTMLElement;

    @Prop() heading: string;
    @Prop() expanded: boolean = false;

    @Event() shown!: EventEmitter;
    @Event() hidden!: EventEmitter;
    
    @Method()
    async hide() {
        this.expanded = false;
        this.$slideContent.style.maxHeight = '0px';
        this.hidden.emit();
    }

    @Method()
    async show() {
        this.expanded = true;
        this.$slideContent.style.maxHeight = this.$slideContent.scrollHeight + 32 + 'px';
        this.shown.emit();
    }

    @Method()
    async toggleSlide() {
        this.expanded ? this.hide() : this.show();
    }

    componentDidRender() {
        if (this.expanded)
            this.$slideContent.style.maxHeight = this.expanded ? this.$slideContent.scrollHeight + 32 + 'px' : '0px';
    }

    render() {
        return (
            <Host class="accordion-slide">
                <h3 class="accordion-heading">
                    <button id={this.controlId} class="accordion-control" aria-controls={this.panelId} aria-expanded={`${this.expanded}`} onClick={() => this.toggleSlide()}>
                        <span ref={el => el.innerHTML = sanitizeHTML(this.heading) as string}></span>
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