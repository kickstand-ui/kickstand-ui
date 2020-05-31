import { Component, h, Element, Prop, Host, ComponentInterface } from '@stencil/core';


@Component({
    tag: 'ks-carousel-slide'
})
export class CarouselSlide implements ComponentInterface {
    $link: HTMLAnchorElement;
    $content: HTMLElement;

    @Element() el: HTMLElement;

    @Prop() src: string;
    @Prop() alt: string;
    @Prop() href: string;
    @Prop() align: 'start' | 'center' | 'end' = 'center';
    @Prop() position: 'start' | 'center' | 'end' = 'center';
    @Prop() clickable: boolean = false;
    @Prop() lazy: boolean = false;
    @Prop() threshold: number = 300;

    componentDidLoad() {
        if (this.clickable)
            this.$content.addEventListener('click', () => this.$link.click());
    }

    getTextAlignment() {
        switch (this.align) {
            case 'start':
                return 'left';
            case 'center':
                return 'center';
            case 'end':
                return 'right';
            default:
                return 'center';
        }
    }

    render() {
        let slideId = `carousel_slide_${carouselSlideIds++}`
        let classes = {
            'slide': true,
            'pointer': this.clickable && this.href !== '' && this.href !== undefined
        };

        let contentClasses = {
            'content': true,
            'display-flex': true,
            'flex-column': true,
            [`align-${this.align}`]: true,
            [`justify-${this.position}`]: true,
            [`text-${this.getTextAlignment()}`]: true
        };

        return (
            <Host id={slideId} class={classes} role="tabpanel" aria-hidden="true" aria-labelledby={`indicator_for_${slideId}`}>
                {this.src && <ks-img class="slide-image" alt={this.alt} lazy={this.lazy} src={this.src} threshold={this.threshold} />}
                <div class={contentClasses} ref={el => this.$content = el}>
                    <slot />
                </div>
                {(this.clickable && this.href) && <a href={this.href} class="sr-only" ref={el => this.$link = el}>link to {this.href}</a>}
            </Host>
        );
    }
}

let carouselSlideIds = 0;