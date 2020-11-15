import { Component, h, Prop, Host, ComponentInterface, Element, State } from '@stencil/core';

@Component({
    tag: 'ks-gallery',
    styleUrl: 'gallery.scss'
})
export class Gallery implements ComponentInterface {
    container: HTMLElement;
    position: number = 0;
    containerWidth: number = 0;
    childWidth: number = 0;
    margin: number = 0;

    @Element() $el: HTMLElement;
    @Prop() heading: string;
    @Prop() src: string;
    @Prop() gutter: 'none' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' = 'md';
    @Prop() itemWidth: string;

    @State() isStart = true;
    @State() isEnd = false;

    componentDidRender() {
        this.setScrollValues();
        this.container.addEventListener('scroll', (e) => {
            let scroll = e.target as HTMLElement;
            let position = scroll.scrollLeft + scroll.offsetWidth
            this.isStart = position === scroll.offsetWidth;
            this.isEnd = position >= scroll.scrollWidth;
        });
        if (this.itemWidth)
            Array.from(this.$el.querySelector('.scrolling-content').children)
                .forEach((x: HTMLElement) => x.style.width = this.itemWidth);
    }

    private scrollRight() {
        this.setScrollValues();
        let maxScrollPosition = this.container.scrollWidth - this.containerWidth;

        this.position = this.container.scrollLeft + this.getScrollWidth();
        this.position = this.position >= maxScrollPosition ? maxScrollPosition + 1 : this.position;
        this.scroll();
    }

    private scrollLeft() {
        this.setScrollValues();

        this.position = this.container.scrollLeft - this.getScrollWidth();
        this.position = this.position <= 0 ? 0 : this.position;
        this.scroll();
    }

    private scroll() {
        if (this.supportsSmoothScrolling()) {
            this.container.scroll({
                left: this.position,
                behavior: 'smooth'
            });
        } else {
            this.scrollTo(this.container, this.container.scrollLeft, this.position)
        }
    }

    private scrollTo(element: HTMLElement, from: number, to: number, duration = 1000, currentTime = 0) {
        from = from <= 0 ? 0 : from;
        to = to <= 0 ? 0 : to;

        if (currentTime >= duration)
            return;

        let delta = to - from;
        let progress = currentTime / duration * Math.PI / 2;
        let position = delta * (Math.sin(progress));
        setTimeout(() => {
            element.scrollLeft = from + position;
            this.scrollTo(element, from, to, duration, currentTime + 10);
        });
    }

    private supportsSmoothScrolling() {
        const body = document.body;
        const scrollSave = body.style.scrollBehavior;
        body.style.scrollBehavior = 'smooth';
        const hasSmooth = getComputedStyle(body).scrollBehavior === 'smooth';
        body.style.scrollBehavior = scrollSave;
        return hasSmooth;
    };

    private setScrollValues() {
        this.container = this.$el.querySelector('.content-wrapper') as HTMLElement;
        this.containerWidth = this.container.offsetWidth;
        let child = this.$el.querySelector('.scrolling-content > *') as HTMLElement;
        this.childWidth = child.offsetWidth;
        let styles = window.getComputedStyle(child);
        this.margin = parseFloat(styles.marginRight);
    }

    getScrollWidth() {
        return Math.floor(this.containerWidth / (this.childWidth + this.margin)) * (this.childWidth + this.margin);
    }

    render() {
        let classes = {
            'ks-gallery': true,
            [`gutter-${this.gutter}`]: true
        };

        let wrapperClasses = {
            'content-wrapper': true,
            'border-l': !this.isStart,
            'border-r': !this.isEnd
        }

        return (
            <Host class={classes}>
                <header class="header">
                    <h2 class="heading">{this.src ? <a href={this.src}>{this.heading}</a> : this.heading}</h2>
                    <div class="controls">
                        <ks-button class="scroll-left" size="xs" display="clear" disabled={this.isStart} onClick={() => this.scrollLeft()}>
                            <ks-icon class="text-lg" icon="chevron_left"></ks-icon>
                        </ks-button>
                        <ks-button class="scroll-right" size="xs" display="clear" disabled={this.isEnd} onClick={() => this.scrollRight()}>
                            <ks-icon class="text-lg" icon="chevron_right"></ks-icon>
                        </ks-button>
                    </div>
                </header>
                <div class={wrapperClasses}>
                    <div class="scrolling-content">
                        <slot />
                    </div>
                </div>
            </Host>
        );
    }
}