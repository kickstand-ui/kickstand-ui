import { Component, h, Prop, Host, Element, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'ks-tooltip',
    styleUrl: 'tooltip.scss'
})
export class Tooltip implements ComponentInterface {
    $message: HTMLElement;

    @Element() $el: HTMLElement;

    @Prop() position: 'top' | 'bottom' | 'left' | 'right' = 'top';
    @Prop() size: 'sm' | 'md' | 'lg' | 'xl' = 'sm';
    @Prop() disable: boolean = false;
    @Prop() hideDecoration: boolean = false;
    @Prop() text: string;

    componentDidRender() {
        if (!this.disable)
            this.$message.innerHTML = this.text;
    }

    render() {
        let classes = {
            'ks-tooltip': true,
            'disabled': this.disable
        };

        let props = {
            tabindex: this.disable ? -1 : 0,
            ['aria-haspopup']: !this.disable
        };

        return (
            <Host class={classes} {...props}>
                <span class={{ 'text': !this.hideDecoration }}>
                    <slot />
                </span>
                {!this.disable && <span class={`message ${this.position} size-${this.size}`} role="tooltip" ref={el => this.$message = el}></span>}
            </Host>
        );
    }
}