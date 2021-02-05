import { Component, h, ComponentInterface, Host, Element, Prop } from '@stencil/core';

@Component({
    tag: 'ks-breadcrumbs',
    styleUrl: 'breadcrumbs.scss'
})
export class Breadcrumbs implements ComponentInterface {
    $links: HTMLAnchorElement[];

    @Element() $el: HTMLElement;

    @Prop() linkTag: string = 'a';
    @Prop() hrefProp: string = 'href';

    connectedCallback() {
        this.$links = Array.from(this.$el.children) as HTMLAnchorElement[];
        this.$links.forEach(x => x.hidden = true);
    }

    private isLastCrumb(index: number): boolean {
        return index === this.$links.length - 1;
    }

    private setProps($el: HTMLAnchorElement, $link: HTMLAnchorElement, index: number) {
        $el.setAttribute(this.hrefProp, $link.getAttribute('href'));
        $el.innerHTML = $link.innerHTML;
        $el.classList.add('link');
        if(this.isLastCrumb(index))
            $el.setAttribute('aria-current', 'page');
    }

    render() {
        const CustomTag = this.linkTag;

        return (
            <Host role="navigation" aria-label="breadcrumbs" class="ks-breadcrumbs">
                <slot />
                <ol class="links">
                    {this.$links.map(($link, index) =>
                        <li class={{ 'breadcrumb': true, 'current': this.isLastCrumb(index) }}>
                            <CustomTag ref={$el => this.setProps($el, $link, index)}></CustomTag>
                        </li>
                    )}
                </ol>
            </Host>
        );
    }
}