import { Component, h, Prop, Element, ComponentInterface, Host } from '@stencil/core';

@Component({
    tag: 'ks-loading',
    styleUrl: 'loading.scss'
})
export class Loading implements ComponentInterface {
    @Element() $el: HTMLElement;

    @Prop() icon: string = 'loading_circle_spinner';
    @Prop() message: string = 'Loading...';
    @Prop() showMessage: boolean = false;

    render() {
        let supportsSvgAnimations = !!document.createElementNS && /SVGAnimate/.test((({}).toString).call(document.createElementNS('http://www.w3.org/2000/svg', 'animate')));

        return (
            <Host class={{ 'ks-loading': true, 'show-message': this.showMessage }}>
                <ks-icon class={`${!supportsSvgAnimations ? 'spin-slow' : ''}`} icon={this.icon}></ks-icon>
                <span aria-live="assertive" role="alert" aria-busy="true" class={{ 'message': true, 'sr-only': !this.showMessage}}>{this.message}</span>
            </Host>);
    }
}