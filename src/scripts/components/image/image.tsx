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
    @Prop({mutable: true}) width: number;
    @Prop({mutable: true}) height: number;
    @Prop() lazy: boolean;
    @Prop() aspectRatio: string;
    @Prop() threshold: number = 300;

    @State() oldSrc: string;

    componentDidLoad() {
        this.addIntersectionObserver();
    }

    componentWillRender() {
        if(!this.width)
            this.width = this.$el.scrollWidth;
        
        if(!this.height && !this.lazy)
            this.height = this.$el.scrollHeight;
                
        if(this.aspectRatio)
            this.setAspectRatio();
    }

    componentWillUpdate() {
        if (this.src !== this.oldSrc)
            this.addIntersectionObserver();

        this.oldSrc = this.src;
    }

    private setAspectRatio() {
        let ratios = this.aspectRatio.split(':');

        if(ratios.length > 1)
            this.height = this.width * parseFloat(ratios[1]) / parseFloat(ratios[0]);
    }

    setImgSrc() {
        this.$image.setAttribute('src', this.$image.getAttribute('data-src'));
        this.$image.onload = () => this.$image.removeAttribute('data-src');
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
        let props ={
            ['data-src']: this.src,
            'alt': this.alt,
            'width': this.width !== undefined && this.width.toString(),
            'height': this.height !== undefined && this.height.toString()
        };

        return (
            <Host class="ks-img">
                <img {...props} ref={el => this.$image = el} />
            </Host>
        );
    }
}