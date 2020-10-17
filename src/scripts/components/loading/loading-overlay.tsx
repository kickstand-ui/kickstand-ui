import { Component, h, Prop, Method, Element, ComponentInterface, Host } from '@stencil/core';

@Component({
    tag: 'ks-loading-overlay',
    styleUrl: 'loading.scss'
})
export class LoadingOverlay implements ComponentInterface {
    $overlay: HTMLKsOverlayElement;

    @Element() $el: HTMLElement;

    @Prop() absolute: boolean = false;
    @Prop() message: string = 'Loading...';
    @Prop() size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'sm';
    @Prop() showMessage: boolean = false;
    @Prop() icon: string;

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
            <Host class="ks-loading-overlay">
                <ks-overlay theme="light" prevent-close absolute={this.absolute} ref={el => this.$overlay = el}>
                    <ks-loading icon={this.icon} message={this.message} show-message={this.showMessage} class={`text-${this.size}`} />
                </ks-overlay>
            </Host>);
    }
}