import { Component, h, Prop, State, Element, Host, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'ks-carousel'
})
export class Carousel implements ComponentInterface {
    @Element() $el: HTMLElement;

    @Prop() timer: number = 6000;
    @Prop() autoplay: boolean;
    @Prop() hideIndicators: boolean;
    @Prop() hideControls: boolean;
    @Prop() thumbnails: boolean = false;

    @State() slideIndex: number = 0;
    @State() $slides: HTMLKsCarouselSlideElement[];
    @State() $indicators: Element[];
    @State() slideTimer: any;
    @State() slideDirection: string = 'slide-left';


    connectedCallback() {
        this.$slides = Array.from(this.$el.querySelectorAll('ks-carousel-slide'));
    }

    componentDidLoad() {
        this.$indicators = Array.from(this.$el.getElementsByClassName('indicator'));
        this.goToSlide();
    }

    prevSlide() {
        this.resetSlideTimer();
        this.slideIndex--;

        if (this.slideIndex < 0)
            this.slideIndex = this.$slides.length - 1;

        this.goToSlide();
    }

    nextSlide() {
        this.resetSlideTimer();
        this.slideIndex++;

        if (this.slideIndex >= this.$slides.length)
            this.slideIndex = 0;

        this.goToSlide();
    }

    selectSlide(index: number) {
        this.slideIndex = index;
        this.resetSlideTimer();
        this.goToSlide();
    }

    goToSlide() {
        this.updateSlide();
        this.updateIndicator();

        if (this.autoplay) {
            this.slideTimer = setTimeout(() => this.nextSlide(), this.timer);
        }
    }

    resetSlideTimer() {
        clearTimeout(this.slideTimer);
    }

    updateSlide() {
        this.$slides.forEach(slide => slide.classList.remove('active'));
        this.$slides[this.slideIndex].classList.add('active');
    }

    updateIndicator() {
        if (this.hideIndicators)
            return;

        this.$indicators.forEach(slide => slide.classList.remove('active'));
        this.$indicators[this.slideIndex].classList.add('active');
    }

    render() {
        let controls = [
            <ks-button display="link" color="light" class="control prev" onClick={this.prevSlide.bind(this)}>
                <ks-icon class="control-icon text-xl" icon="chevron" rotate="90" />
                <span class="sr-only">previous slide</span>
            </ks-button>,
            <ks-button display="link" color="light" class="control next" onClick={this.nextSlide.bind(this)}>
                <ks-icon class="control-icon text-xl" icon="chevron" rotate="-90" />
                <span class="sr-only">next slide</span>
            </ks-button>
        ];
        let indicators = (
            <div class="indicators">
                {this.$slides.map((slide, index) =>
                    <button class="indicator" onClick={() => this.selectSlide(index)}>
                        <span class="sr-only">Got to slide {slide ? index + 1 : ''}</span>
                    </button>
                )}
            </div>
        );
        let thumbnailList = (
            <div class="thumbnails">
                {this.$slides.map((slide, index) =>
                    <button class="indicator" onClick={() => this.selectSlide(index)}>
                        <span class="sr-only">Got to slide {slide ? index + 1 : ''}</span>
                        <ks-img lazy src={slide.src} />
                    </button>
                )}
            </div>
        );

        return (
            <Host class={`carousel`}>
                <div class="slides">
                    <slot />
                    {!this.hideControls && controls}
                </div>
                {(!this.hideIndicators && !this.thumbnails) && indicators}
                {this.thumbnails && thumbnailList}
            </Host>
        );
    }
}