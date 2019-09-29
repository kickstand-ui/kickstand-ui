import { Component, h, ComponentInterface, Prop, } from '@stencil/core';


@Component({
    tag: 'c-card'
})
export class Card implements ComponentInterface {
    @Prop() cssClass: string;

    // Props for image
    @Prop() src: string;
    @Prop() alt: string;
    @Prop() lazy: boolean;
    @Prop() threshold: number;



    render() {
        return (
            <article class={`card ${this.cssClass}`}>
                <div class="card-img">
                    <c-img alt={this.alt} lazy={this.lazy} src={this.src} threshold={this.threshold} />
                </div>
                <div class="card-content">
                    <slot />
                </div>
            </article>
        );
    }
}