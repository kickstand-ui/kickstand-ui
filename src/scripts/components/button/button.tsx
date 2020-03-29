import { Component, h, Prop, ComponentInterface, Host } from '@stencil/core';

@Component({
    tag: 'c-button'
})
export class LinkButton implements ComponentInterface {
    $loading: HTMLCLoadingElement;

    @Prop() type: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link' = 'primary';
    @Prop() hollow: boolean;
    @Prop() clear: boolean;
    @Prop() size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' = 'medium';
    @Prop() icon: string = '';
    @Prop() iconDirection: 'left' | 'right' = 'left';
    @Prop() href: string;
    @Prop() hideText: boolean = false;
    @Prop() cssClass: string = '';
    @Prop() haspopup: boolean;
    @Prop() expanded: boolean;
    @Prop() loading: boolean;
    @Prop() controls: string;

    componentDidRender() {
        this.loading
            ? this.$loading.show()
            : this.$loading.hide();
    }

    render() {
        let content = [
            this.icon && <i class={`button-icon ${this.icon}`}></i>,
            <span class={{
                'button-text': true,
                'sr-only': this.hideText
            }}>
                <slot />
            </span>
        ];

        let classes = {
            'button': true,
            [this.type]: true,
            [`icon-${this.iconDirection}`]: true,
            [this.cssClass]: true,
            [this.size]: true,
            'hollow': this.hollow,
            'clear': this.clear
        };

        let props = {
            'aria-haspopup': this.haspopup,
            'aria-expanded': this.expanded,
            'aria-controls': this.controls
        }

        return (
            <Host>
                <c-loading-overlay absolute ref={el => this.$loading = el}></c-loading-overlay>
                {this.href
                    ? <a class={classes} href={this.href}>{content}</a>
                    : <button {...props} class={classes}>{content}</button >}
            </Host>
        );
    }
}