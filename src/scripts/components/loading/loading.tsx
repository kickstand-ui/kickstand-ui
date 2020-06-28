import { Component, h, Prop, Element, ComponentInterface, Host } from '@stencil/core';

@Component({
    tag: 'ks-loading',
    styleUrl: 'loading.scss'
})
export class Loading implements ComponentInterface {
    @Element() $el: HTMLElement;

    @Prop() type: 'spinner' | 'ellipsis' = 'spinner';
    @Prop() message: string = 'Loading...';
    @Prop() showMessage: boolean = false;

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