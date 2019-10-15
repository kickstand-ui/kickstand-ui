import { Component, h, Element, Prop } from '@stencil/core';


@Component({
    tag: 'c-carousel-slide'
})
export class CarouselSlide {
    @Element() el: HTMLElement;

    @Prop() cssClass: string = '';
    @Prop() src: string;
    @Prop() alt: string;
    @Prop() lazy: boolean;
    @Prop() threshold: number = 300;

    render() {
        return (
            <div class={`slide ${this.cssClass}`}>
                <slot>
                    {this. src && <c-img alt={this.alt} lazy={this.lazy} src={this.src} threshold={this.threshold} />}
                </slot>
            </div>
        );
    }
}