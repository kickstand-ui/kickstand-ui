import { Component, h, Prop, State, Element, Host, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'ks-carousel',
    styleUrl: 'carousel.scss'
})
export class Carousel implements ComponentInterface {
    @Element() $el: HTMLElement;

    @Prop() timer: number = 6000;
    @Prop({ mutable: false }) autoplay: boolean = false;
    @Prop() hideIndicators: boolean = false;
    @Prop() hideControls: boolean = false;
    @Prop() thumbnails: boolean = false;

    @State() slideIndex: number = 0;
    @State() slideTimer: any;
    @State() isPaused: boolean = false;

    $slides: HTMLKsCarouselSlideElement[];
    $indicators: Element[] = [];
    carouselId = `carousel_${carouselIds++}`;

    connectedCallback() {
        this.initSlides();
    }

    componentDidLoad() {
        this.goToSlide();
    }

    initSlides() {
        this.$slides = Array.from(this.$el.querySelectorAll('ks-carousel-slide'));

        this.$slides.forEach((slide, index) => {
            slide.id = slide.id || `${this.carouselId}_slide_${index}`;
            slide.setAttribute('aria-labelledby', `${slide.id}_indicator`);
        });
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
        this.initAutoplay();
    }

    toggleAutoplay() {
        this.isPaused = !this.isPaused;
        clearTimeout(this.slideTimer);
        this.initAutoplay();
    }

    initAutoplay() {
        if (this.autoplay && !this.isPaused) {
            this.slideTimer = setTimeout(() => this.nextSlide(), this.timer);
        }
    }

    resetSlideTimer() {
        clearTimeout(this.slideTimer);
    }

    updateSlide() {
        this.$slides.forEach(slide => slide.setAttribute('aria-hidden', 'true'));
        this.$slides[this.slideIndex].setAttribute('aria-hidden', 'false');
    }

    updateIndicator() {
        if (this.hideIndicators)
            return;

        this.$indicators.forEach(slide => slide.setAttribute('aria-selected', 'false'));
        this.$indicators[this.slideIndex].setAttribute('aria-selected', 'true');
    }

    render() {
        let indicatorClasses = {
            'indicators': true,
            'sr-only': this.hideIndicators
        };
        let indicators = (
            <div class={indicatorClasses} role="tablist">
                {this.$slides.map((slide, index) =>
                    <button
                        id={`${slide.id}_indicator`}
                        class="indicator"
                        type="button"
                        role="tab"
                        aria-selected="false"
                        aria-controls={slide.id}
                        ref={el => this.$indicators.push(el)}
                        onClick={() => this.selectSlide(index)}
                    >
                        <span class="sr-only">Got to slide {slide ? index + 1 : ''}</span>
                    </button>
                )}
                {this.autoplay
                    ? <button type="button" class="autoplay-toggle" onClick={() => this.toggleAutoplay()}>
                        {!this.isPaused
                            ? <ks-icon icon="pause_fill" label="pause autoplay"></ks-icon>
                            : <ks-icon icon="play_fill" label="play autoplay"></ks-icon>}
                    </button>
                    : ''
                }
            </div>
        );
        let controls = [
            !this.hideControls && <ks-button display="link" color="light" class="control prev" onClick={this.prevSlide.bind(this)}>
                <ks-icon class="control-icon text-xl" icon="chevron_left"></ks-icon>
                <span class="sr-only">previous slide</span>
            </ks-button>,
            !this.thumbnails && indicators,
            !this.hideControls && <ks-button display="link" color="light" class="control next" onClick={this.nextSlide.bind(this)}>
                <ks-icon class="control-icon text-xl" icon="chevron_right"></ks-icon>
                <span class="sr-only">next slide</span>
            </ks-button>,
        ];
        let thumbnailList = (
            <div class="thumbnails" role="tablist">
                {this.$slides.map((slide, index) =>
                    <button id={`${slide.id}_indicator`} class="thumbnail" onClick={() => this.selectSlide(index)} role="tab" aria-selected="false" aria-controls={slide.id} ref={el => this.$indicators.push(el)}>
                        <span class="sr-only">Got to slide {slide ? index + 1 : ''}</span>
                        <ks-img lazy src={slide.src} alt={`slide ${slide ? index + 1 : ''} image`} />
                    </button>
                )}
            </div>
        );

        return (
            <Host class="ks-carousel">
                <div class="slide-wrapper">
                    <div class="slides">
                        <slot />
                    </div>
                    {controls}
                </div>
                {this.thumbnails && thumbnailList}
            </Host>
        );
    }
}

let carouselIds = 0;