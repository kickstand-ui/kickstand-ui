import { Component, h, Prop, Element, ComponentInterface, Host } from '@stencil/core';

@Component({
    tag: 'ks-loading',
    styleUrl: 'loading.scss'
})
export class Loading implements ComponentInterface {
    @Element() $el: HTMLElement;

    @Prop() icon: string = 'ring_spinner';
    @Prop() message: string = 'Loading...';
    @Prop() showMessage: boolean = false;

    render() {
        return (
            <Host class={{ 'ks-loading': true, 'show-message': this.showMessage }}>
                <ks-icon icon={this.icon}></ks-icon>
                <span aria-live="assertive" role="alert" aria-busy="true" class={{ 'message': true, 'sr-only': !this.showMessage}}>{this.message}</span>
            </Host>);
    }
}