import { Component, h, Prop, Method, Element, ComponentInterface, Host } from '@stencil/core';

@Component({
    tag: 'ks-loading-overlay'
})
export class LoadingOverlay implements ComponentInterface {
    $overlay: HTMLCOverlayElement;

    @Element() $el: HTMLElement;

    @Prop() absolute: boolean = false;
    @Prop() message: string = 'Loading...';
    @Prop() size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'sm';
    @Prop() showMessage: boolean;

    @Method()
    async show() {
        await this.$overlay.show();
    }

    @Method()
    async hide() {
        await this.$overlay.hide();
    }

    render() {
        return (
            <Host class="loading-overlay">
                <ks-overlay theme="light" dismissible={false} absolute={this.absolute} ref={el => this.$overlay = el}>
                    <ks-loading message={this.message} show-message={this.showMessage} class={`text-${this.size}`} />
                </c-overlay>
            </Host>);
    }
}