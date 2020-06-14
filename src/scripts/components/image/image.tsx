import { Component, Element, Prop, State, h } from '@stencil/core';


@Component({
    tag: 'ks-img'
})
export class Img {
    @Element() $el: HTMLElement;

    @Prop() src: string;
    @Prop() alt: string;
    @Prop() lazy: boolean;
    @Prop() threshold: number = 300;

    @State() oldSrc: string;

    io: IntersectionObserver;

    componentDidLoad() {
        this.addIntersectionObserver();
    }

    componentWillUpdate() {
        if (this.src !== this.oldSrc) {
            this.addIntersectionObserver();
        }
        this.oldSrc = this.src;
    }

    setImgSrc() {
        const image: HTMLImageElement = this.$el.querySelector('img');
        image.setAttribute('src', image.getAttribute('data-src'));
        image.onload = () => {
            image.removeAttribute('data-src');
        };
    }

    addIntersectionObserver() {
        if (!this.src)
            return;

        if (!this.lazy) {
            this.setImgSrc();
            return;
        }

        if ('IntersectionObserver' in window) {
            this.initializeObserver();
        } else {
            this.executeFallback();
        }
    }

    initializeObserver() {
        this.io = new IntersectionObserver((data: any) => {
            if (data[0].isIntersecting) {
                this.setImgSrc();
                this.removeIntersectionObserver();
            }
        },
            {
                rootMargin: `${this.threshold}px 0px`
            });

        this.io.observe(this.$el.querySelector('img'));
    }

    executeFallback() {
        // fall back to setTimeout for Safari and IE
        setTimeout(() => {
            this.setImgSrc();
        }, 300);
    }

    removeIntersectionObserver() {
        if (this.io) {
            this.io.disconnect();
            this.io = null;
        }
    }

    render() {
        return (
            <img data-src={this.src} alt={this.alt} />
        );
    }
}