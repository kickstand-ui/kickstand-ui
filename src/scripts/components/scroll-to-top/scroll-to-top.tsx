import { Component, h, Prop, ComponentInterface, Host, Element } from '@stencil/core';

@Component({
    tag: 'ks-scroll-to-top',
    styleUrl: 'scroll-to-top.scss'
})
export class ScrollToTop implements ComponentInterface {
    @Element() $el: HTMLElement;

    @Prop() color: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' = 'primary';
    @Prop() display: 'solid' | 'hollow' | 'clear' | 'link' = 'solid';
    @Prop() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
    @Prop() threshold: number = 100;

    componentWillLoad() {
        this.$el.hidden = true;
        document.addEventListener("scroll", () => {
            this.toggleVisibility();
        });
    }

    private toggleVisibility() {
        this.$el.hidden = !(window.pageYOffset > this.threshold);
    }

    private clickHandler() {
        this.scrollToTop();
    }

    private scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        return (
            <Host>
                <ks-button color={this.color} display={this.display} size={this.size} onClick={() => this.clickHandler()}>
                    <slot />
                </ks-button>
            </Host>
        );
    }
}