import { Component, h, ComponentInterface, Prop, Host, Element } from '@stencil/core';

@Component({
    tag: 'ks-card',
    styleUrl: 'card.scss'
})
export class Card implements ComponentInterface {
    $link: HTMLAnchorElement;

    @Element() $el: HTMLElement;

    // Props for image
    @Prop() imgSrc: string;
    @Prop() alt: string;
    @Prop() fallbackSrc: string;
    @Prop() lazy: boolean;
    @Prop() threshold: number;
    @Prop() imgDirection: 'top' | 'bottom' | 'left' | 'right' | 'behind' = 'top';
    @Prop() href: string;
    @Prop() clickable: boolean = false;
    @Prop() collapse: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'xs';
    @Prop() imgWidth: number;
    @Prop() imgHeight: number;
    @Prop() linkTag: string = 'a';
    @Prop() hrefProp: string = 'href';

    componentDidLoad() {
        if (this.clickable && this.href)
            this.$el.addEventListener('click', (e) => {
                if (this.$link !== e.target)
                    this.$link.click();
            });
    }

    render() {
        let classes = {
            [`img-${this.imgDirection}`]: true,
            'pointer': this.clickable && this.href !== '' && this.href !== undefined,
            [`collapse-${this.collapse}`]: this.imgDirection !== 'behind'
        };

        let linkProps = {
            [this.hrefProp]: this.href
        }

        const CustomTag = this.linkTag;

        return (
            <Host class={classes}>
                {this.imgSrc && <div class="card-img">
                    {this.href
                        ? <CustomTag {...linkProps} ref={el => this.$link = el}>
                            <ks-img alt={this.alt} lazy={this.lazy} src={this.imgSrc} fallback-src={this.fallbackSrc} threshold={this.threshold} width={this.imgWidth} height={this.imgHeight} />
                        </CustomTag>
                        : <ks-img alt={this.alt} lazy={this.lazy} src={this.imgSrc} fallback-src={this.fallbackSrc} threshold={this.threshold} width={this.imgWidth} height={this.imgHeight} />}
                </div>}
                <div class="card-content">
                    <slot />
                </div>
            </Host>
        );
    }
}