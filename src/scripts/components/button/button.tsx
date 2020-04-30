import { Component, h, Prop, ComponentInterface, Host } from '@stencil/core';

@Component({
    tag: 'c-button'
})
export class LinkButton implements ComponentInterface {
    $loading: HTMLCLoadingOverlayElement;

    @Prop() color: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' = 'primary';
    @Prop() type: 'button' | 'submit' | 'reset' = 'button';
    @Prop() display: 'solid' | 'hollow' | 'clear' | 'link' = 'solid';
    @Prop() size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' = 'medium';
    @Prop() icon: string = '';
    @Prop() iconDirection: 'left' | 'right' = 'left';
    @Prop() href: string;
    @Prop() hideText: boolean = false;
    @Prop() cssClass: string = '';
    @Prop() haspopup: boolean = false;
    @Prop() expanded: boolean = false;
    @Prop() loading: boolean;
    @Prop() disabled: boolean;
    @Prop() controls: string;
    @Prop() describedBy: string;
    @Prop() tabIndex: number;

    componentDidRender() {
        this.loading
            ? this.$loading.show()
            : this.$loading.hide();
    }

    render() {
        let content = [
            this.icon && <i class={{'button-icon': true, [this.icon]: true, 'm-none': this.hideText}}></i>,
            <span class={{
                'button-text': true,
                'sr-only': this.hideText
            }}>
                <slot />
            </span>
        ];

        let classes = {
            'button': true,
            [this.color]: true,
            [this.display]: true,
            [`icon-${this.iconDirection}`]: true,
            [this.cssClass]: true,
            [this.size]: true,
        };

        let props = {
            'aria-haspopup': `${this.haspopup}`,
            'aria-expanded': this.controls && `${this.expanded}`,
            'aria-controls': this.controls,
            'aria-described-by': this.describedBy,
            'disabled': this.disabled || this.loading,
            'type': this.type,
            'tabindex': this.tabIndex
        }

        return (
            <Host class="pointer">
                <c-loading-overlay absolute ref={el => this.$loading = el}></c-loading-overlay>
                {this.href
                    ? <a class={classes} href={this.href}>{content}</a>
                    : <button {...props} class={classes}>{content}</button >}
            </Host>
        );
    }
}