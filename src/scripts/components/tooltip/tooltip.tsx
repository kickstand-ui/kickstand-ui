import { Component, h, Prop, Host, Element, ComponentInterface } from '@stencil/core';
import { sanitizeHTML } from "../../utils/htmlSanitizer";

@Component({
    tag: 'ks-tooltip',
    styleUrl: 'tooltip.scss'
})
export class Tooltip implements ComponentInterface {
    $message: HTMLElement;
    tooltipId = `tooltip_${tooltipIds++}`;

    @Element() $el: HTMLElement;

    @Prop() position: 'top' | 'bottom' | 'left' | 'right' = 'top';
    @Prop() size: 'sm' | 'md' | 'lg' | 'xl' = 'sm';
    @Prop() disabled: boolean = false;
    @Prop() hideDecoration: boolean = false;
    @Prop() text: string;

    componentDidRender() {
        this.addRichContent();
    }

    private addRichContent() {
        if (!this.disabled)
            this.$message.innerHTML = sanitizeHTML(this.text) as string;
    }

    render() {
        let classes = {
            'ks-tooltip': true,
            'disabled': this.disabled
        };

        let wrapperProps = {
            ['aria-describedby']: !this.disabled && this.tooltipId,
            'class': {
                'text': true,
                'decoration': !this.hideDecoration

            },
            'tabIndex': !this.disabled ? 0 : null
        }

        return (
            <Host class={classes}>
                <span {...wrapperProps}>
                    <slot />
                </span>
                {!this.disabled && <span id={this.tooltipId} class={`message ${this.position} size-${this.size}`} role="tooltip" ref={el => this.$message = el}></span>}
            </Host>
        );
    }
}

let tooltipIds = 0;