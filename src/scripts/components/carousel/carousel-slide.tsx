import { Component, h, Element, Prop, Host, ComponentInterface } from '@stencil/core';


@Component({
    tag: 'ks-carousel-slide'
})
export class CarouselSlide implements ComponentInterface {
    $link: HTMLAnchorElement;
    $content: HTMLElement;
    slideId = `carousel_slide_${carouselSlideIds++}`

    @Element() el: HTMLElement;

    @Prop() src: string;
    @Prop() alt: string;
    @Prop() href: string;
    @Prop() align: 'left' | 'center' | 'right' = 'center';
    @Prop() position: 'top' | 'center' | 'bottom' = 'center';
    @Prop() clickable: boolean = false;
    @Prop() lazy: boolean = false;
    @Prop() threshold: number = 300;

    componentDidLoad() {
        if (this.clickable)
            this.$content.addEventListener('click', () => this.$link.click());
    }

    getAlignment() {
        switch (this.align) {
            case 'left':
                return 'start';
            case 'right':
                return 'end';
            default:
                return 'center';
        }
    }

    getPosition() {
        switch (this.position) {
            case 'top':
                return 'start';
            case 'bottom':
                return 'end';
            default:
                return 'center';
        }
    }

    render() {
        let classes = {
            'slide': true,
            'pointer': this.clickable && this.href !== '' && this.href !== undefined
        };

        let contentClasses = {
            'content': true,
            'display-flex': true,
            'flex-column': true,
            [`align-${this.getAlignment()}`]: true,
            [`justify-${this.getPosition()}`]: true,
            [`text-${this.align}`]: true
        };

        return (
            <Host id={this.slideId} class={classes} role="tabpanel" aria-hidden="true" aria-labelledby={`indicator_for_${this.slideId}`}>
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