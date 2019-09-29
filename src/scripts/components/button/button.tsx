import { Component, h, Prop, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'c-button'
})
export class Alert implements ComponentInterface {
    @Prop() cssClass: string;
    @Prop() type: string;
    @Prop() hollow: boolean;
    @Prop() size: string;
    @Prop() icon: string;
    @Prop() iconDirection: string = 'left';
    @Prop() url: string;

    render() {
        let content: HTMLElement;
        if (this.url) {
            content = <a class={`button ${this.type}${this.hollow ? ' hollow' : ''} size-${this.size} ${this.cssClass}`} href={this.url}>
                {this.icon ? <i class={`button-icon ${this.icon}`}></i> : null}
                <span class="button-text">
                    <slot>
                        Button Text
                </slot>
                </span>
            </a>
        } else {
            content = <button class={`button ${this.type}${this.hollow ? ' hollow' : ''} size-${this.size} ${this.cssClass}`}>
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