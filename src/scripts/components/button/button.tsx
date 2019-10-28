import { Component, h, Prop, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'c-button'
})
export class LinkButton implements ComponentInterface {
    @Prop() type: string = 'primary';
    @Prop() hollow: boolean;
    @Prop() size: string;
    @Prop() icon: string;
    @Prop() iconDirection: string = 'left';
    @Prop() href: string;
    @Prop() clickHandler: Function;
    @Prop() cssClass: string = '';


    _clickHandler() {
        if(this.clickHandler)
            this.clickHandler();
    }

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
            this.href
                ? <a class={`button ${this.type} ${this.hollow ? 'hollow' : ''} icon-${this.iconDirection} ${this.size} ${this.cssClass}`} href={this.href}>{content}</a>
                : <button class={`button ${this.type} ${this.hollow ? 'hollow' : ''} icon-${this.iconDirection} ${this.size} ${this.cssClass}`} onClick={this._clickHandler.bind(this)}>{content}</button >
        );
    }
}