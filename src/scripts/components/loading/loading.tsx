import { Component, h, Prop, Method, Element, ComponentInterface, Host } from '@stencil/core';

@Component({
    tag: 'c-loading'
})
export class Loading implements ComponentInterface {
    $overlay: HTMLCOverlayElement;

    @Element() $el: HTMLElement;

    @Prop() type: 'spinner' | 'ellipsis' = 'spinner';
    @Prop() absolute: boolean = false;

    @Method()
    async show() {
        await this.$overlay.show();
    }

    @Method()
    async hide() {
        await this.$overlay.hide();
    }

    render() {
        let $loader: HTMLElement;

        switch (this.type) {
            case 'ellipsis':
                $loader = <div class="ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                break;
            default:
                $loader = <c-overlay theme="light" dismissible={false} absolute={this.absolute} ref={el => this.$overlay = el}>
                    <div class="spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </c-overlay>
                break;
        }

        return (
            <Host class="loading">
                {$loader}
            </Host>);
    }
}