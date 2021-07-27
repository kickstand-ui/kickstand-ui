import { Component, Element, Prop, State, h, ComponentInterface, Host } from '@stencil/core';


@Component({
    tag: 'ks-img',
    styleUrl: 'image.scss'
})
export class Img implements ComponentInterface {
    $image: HTMLImageElement;
    io: IntersectionObserver;

    @Element() $el: HTMLElement;

    @Prop() src: string;
    @Prop() alt: string;
    @Prop() fallbackSrc: string;
    @Prop({ mutable: true }) width: number;
    @Prop({ mutable: true }) height: number;
    @Prop() lazy: boolean;
    @Prop() aspectRatio: string;
    @Prop() threshold: number = 300;

    @State() oldSrc: string;
    @State() hasError: boolean = false;

    componentDidLoad() {
        this.addIntersectionObserver();
    }

    componentDidRender() {
        this.width = this.width || this.$el.scrollWidth;
        this.height = this.height || this.$el.scrollHeight;

        if (this.aspectRatio)
            this.setAspectRatio();
    }

    componentWillUpdate() {
        if (this.src !== this.oldSrc)
            this.addIntersectionObserver();

        this.oldSrc = this.src;
    }

    private handleImageError() {
        if (!this.fallbackSrc || this.hasError)
            return;

        this.$image.setAttribute('src', this.fallbackSrc);
        this.hasError = true;
    }

    private setAspectRatio() {
        let ratios = this.aspectRatio.split(':');

        if (ratios.length > 1)
            this.height = this.width * parseFloat(ratios[1]) / parseFloat(ratios[0]);
    }

    setImgSrc() {
        if(!this.$image.src)
            this.$image.setAttribute('src', this.src);
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

        this.io.observe(this.$image);
    }

    executeFallback() {
        // fall back to setTimeout for Safari and IE
        setTimeout(() => this.setImgSrc(), 300);
    }

    removeIntersectionObserver() {
        if (this.io) {
            this.io.disconnect();
            this.io = null;
        }
    }

    render() {
        let props = {
            'alt': this.alt,
            'width': this.width,
            'height': this.height
        };

        return (
            <Host class="ks-img">
                <img {...props} onError={() => this.handleImageError()} ref={el => this.$image = el} />
            </Host>
        );
    }
}