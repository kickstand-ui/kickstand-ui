import { Component, h, Prop, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'c-button'
})
export class Alert implements ComponentInterface {
    @Prop() cssClass: string;
    @Prop() htmlId: string;
    @Prop() type: string;
    @Prop() hollow: boolean;
    @Prop() size: string;
    @Prop() icon: string;
    @Prop() iconDirection: string = 'left';
    @Prop() linkUrl: string;

    render() {
        let content: HTMLElement;
        if (this.linkUrl) {
            content = <a id={this.htmlId} class={`button ${this.type}${this.hollow ? ' hollow' : ''} ${this.cssClass}`} href={this.linkUrl}>
                {this.icon ? <i class={`button-icon ${this.icon}`}></i> : null}
                <span class="button-text">
                    <slot>
                        Button Text
                </slot>
                </span>
            </a>
        } else {
            content = <button id={this.htmlId} class={`button ${this.type}${this.hollow ? ' hollow' : ''} ${this.cssClass}`}>
                {this.icon ? <i class={`button-icon ${this.icon}`}></i> : null}
                <span class="button-text">
                    <slot>
                        Button Text
                    </slot>
                </span >
            </button >
        }
        return (content);
    }
}