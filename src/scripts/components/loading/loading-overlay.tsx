import { Component, h, Prop, Method, Element, ComponentInterface, Host, Event, EventEmitter } from '@stencil/core';
import { IDismissible } from '../../utils/componentUtils';

@Component({
    tag: 'ks-loading-overlay',
    styleUrl: 'loading.scss'
})
export class LoadingOverlay implements ComponentInterface, IDismissible {
    $overlay: HTMLKsOverlayElement;

    @Element() $el: HTMLElement;

    @Prop() absolute: boolean = false;
    @Prop() theme: 'dark' | 'light' = 'light';
    @Prop() message: string = 'Loading...';
    @Prop() size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'sm';
    @Prop() showMessage: boolean = false;
    @Prop() icon: string;

    @Event() shown!: EventEmitter;
    @Event() hidden!: EventEmitter;

    @Method()
    async show() {
        await this.$overlay.show();
        this.shown.emit();
    }

    @Method()
    async hide() {
        await this.$overlay.hide();
        this.hidden.emit();
    }

    render() {
        return (
            <Host>
                <ks-overlay theme={this.theme} prevent-close absolute={this.absolute} ref={el => this.$overlay = el}>
                    <ks-loading icon={this.icon} message={this.message} show-message={this.showMessage} class={`text-${this.size}`} />
                </ks-overlay>
            </Host>);
    }
}