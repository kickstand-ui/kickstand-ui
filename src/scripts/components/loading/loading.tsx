import { Component, h, Prop, Element, ComponentInterface, Host } from '@stencil/core';

@Component({
    tag: 'c-loading'
})
export class Loading implements ComponentInterface {
    @Element() $el: HTMLElement;

    @Prop() type: 'spinner' | 'ellipsis' = 'spinner';
    @Prop() message: string = 'Loading';
    @Prop() showMessage: boolean;

    render() {
        return (
            <Host class={{ 'loading': true, 'show-message': this.showMessage }}>
                <div aria-hidden="true" class={this.type}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <span aria-live="polite" role="alert" class={{ 'message': true, 'sr-only': !this.showMessage}}>{this.message}</span>
            </Host>);
    }
}