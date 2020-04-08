import { Component, h, ComponentInterface, Prop, Host, Element } from '@stencil/core';

@Component({
    tag: 'c-card'
})
export class Card implements ComponentInterface {
    $link: HTMLAnchorElement;

    @Element() $el: HTMLElement;

    // Props for image
    @Prop() imgSrc: string;
    @Prop() alt: string;
    @Prop() lazy: boolean;
    @Prop() threshold: number;
    @Prop() imgDirection: string = 'top';
    @Prop() url: string;
    @Prop() clickable: boolean;


    componentDidLoad() {
        if (this.clickable && this.url)
            this.$el.addEventListener('click', (e) => {
                if (this.$link !== e.target)
                    this.$link.click();
            });
    }

    render() {
        let classes = {
            'card': true,
            [`img-${this.imgDirection}`]: true,
            'pointer': this.clickable && this.url !== '' && this.url !== undefined
        };
        return (
            <Host class={classes}>
                {this.imgSrc && <div class="card-img">
                    {this.url
                        ? <a href={this.url} ref={el => this.$link = el}><c-img alt={this.alt} lazy={this.lazy} src={this.imgSrc} threshold={this.threshold} /></a>
                        : <c-img alt={this.alt} lazy={this.lazy} src={this.imgSrc} threshold={this.threshold} />}
                </div>}
                <div class="card-content">
                    <slot />
                </div>
            </Host>
        );
    }
}