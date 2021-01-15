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
    @Prop() lazy: boolean;
    @Prop() threshold: number;
    @Prop() imgDirection: 'top' | 'bottom' | 'left' | 'right' | 'behind' = 'top';
    @Prop() href: string;
    @Prop() clickable: boolean = false;
    @Prop() collapse: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'xs';
    @Prop() imgWidth: number;
    @Prop() imgHeight: number;
    @Prop() imgAspectRatio: string;
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
            'ks-card': true,
            [`img-${this.imgDirection}`]: true,
            'pointer': this.clickable && this.href !== '' && this.href !== undefined,
            [`collapse-${this.collapse}`]: this.imgDirection !== 'behind'
        };

        let linkProps = {
            [this.hrefProp]: this.href
        }
        
        const CustomTag = this.linkTag;

        return (
            <Host class={classes} role="article">
                {this.imgSrc && <div class="card-img">
                    {this.href
                        ? <CustomTag {...linkProps} ref={el => this.$link = el}>
                            <ks-img alt={this.alt} lazy={this.lazy} src={this.imgSrc} threshold={this.threshold} width={this.imgWidth} height={this.imgHeight} aspect-ratio={this.imgAspectRatio} />
                        </CustomTag>
                        : <ks-img alt={this.alt} lazy={this.lazy} src={this.imgSrc} threshold={this.threshold} width={this.imgWidth} height={this.imgHeight} aspect-ratio={this.imgAspectRatio} />}
                </div>}
                <div class="card-content">
                    <slot />
                </div>
            </Host>
        );
    }
}