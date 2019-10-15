import { Component, h, Prop, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'c-button'
})
export class Alert implements ComponentInterface {
    @Prop() type: string;
    @Prop() hollow: boolean;
    @Prop() size: string;
    @Prop() icon: string;
    @Prop() iconDirection: string = 'left';
    @Prop() url: string;
    @Prop() cssClass: string = '';

    render() {
        let content = [
            this.icon && <i class={`button-icon ${this.icon}`}></i>,
            <span class="button-text">
                <slot>
                    Button Text
                </slot>
            </span>
        ];

        return (
            this.url
                ? <a class={`button ${this.type}${this.hollow ? ' hollow' : ''} button-${this.size} ${this.cssClass}`} href={this.url}>{content}</a>
                : <button class={`button ${this.type}${this.hollow ? ' hollow' : ''} button-${this.size} ${this.cssClass}`}>{content}</button >
        );
    }
}