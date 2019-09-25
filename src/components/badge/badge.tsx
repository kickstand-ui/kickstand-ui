import { Component, h, Prop, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'c-badge'
})
export class Badge implements ComponentInterface {
    @Prop() cssClass: string;
    @Prop() htmlId: string;
    @Prop() type: string = 'primary';
    @Prop() hollow: boolean;

    render() {
        return (<span id={this.htmlId} class={`badge ${this.type}${this.hollow ? ' hollow' :  ''} ${this.cssClass}`}>
                    <slot />
                </span>);
    }
}