import { Component, h, Prop, State, Element } from '@stencil/core';


@Component({
    tag: 'c-carousel'
})
export class carousel {
    @Element() el: HTMLElement;

    @Prop() timer: number = 6000;
    @Prop() autoplay: boolean = true;
    @Prop() showIndicators: boolean = true;
    @Prop() showControls: boolean = true;
    @Prop() thumbnails: boolean = false;
    @Prop() cssClass: string;

    @State() slideIndex: number = 0;
    @State() slides: Element[];
    @State() indicators: Element[];


    connectedCallback() {
        this.slides = Array.from(this.el.getElementsByClassName('slide'));
    }

    componentDidLoad() {
        this.indicators = Array.from(this.el.getElementsByClassName('indicator'));
        this.goToSlide(this.slideIndex);
    }

    prevSlide() {
        this.slideIndex--;

        if (this.slideIndex < 0)
            this.slideIndex = this.slides.length - 1;

        this.goToSlide(this.slideIndex);
    }

    nextSlide() {
        this.slideIndex++;

        if (this.slideIndex >= this.slides.length)
            this.slideIndex = 0;

        this.goToSlide(this.slideIndex);
    }

    goToSlide(index: number) {
        this.slideIndex = index;
        this.updateSlide();
        this.updateIndicator();

        if (this.autoplay) {
            console.log('slide', this.slideIndex);
            setTimeout(() => this.nextSlide(), this.timer);
        }
    }

    updateSlide() {
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.slides[this.slideIndex].classList.add('active');
    }

    updateIndicator() {
        this.indicators.forEach(slide => slide.classList.remove('active'));
        this.indicators[this.slideIndex].classList.add('active');
    }

    render() {
        let controls = [
            <button class="control prev" onClick={this.prevSlide.bind(this)}><i class="control-icon fas fa-chevron-left"></i></button>,
            <button class="control next" onClick={this.nextSlide.bind(this)}><i class="control-icon fas fa-chevron-right"></i></button>
        ];
        let indicators = (
            <div class="indicators">
                {this.slides.map((slide, index) =>
                    <button class="indicator" onClick={() => this.goToSlide(index)}><span class="sr-only">Got to slide {index + 1}</span></button>
                )}
            </div>
        );
        let thumbnails = (
            <div className="thumbnails">
                {this.slides.map((slide, index) =>
                    <button class="indicator" onClick={() => this.goToSlide(index)}><c-image lazy src=""></c-image>></button>
                )}
            </div>
        )
        return (
            <div class={`carousel ${this.cssClass}`}>
                <div class="slides">
                    <slot />
                </div>
                {this.showControls ? controls : null}
                {this.showIndicators || !this.thumbnails ? indicators : null}
            </div>
        );
    }
}