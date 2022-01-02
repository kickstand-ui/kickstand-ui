import { Component, h, ComponentInterface, Host, Element, Prop, State } from '@stencil/core';
import { sanitizeHTML } from "../../utils/htmlSanitizer";

@Component({
    tag: 'ks-breadcrumbs',
    styleUrl: 'breadcrumbs.scss'
})
export class Breadcrumbs implements ComponentInterface {
    @Element() $el: HTMLElement;
    
    @Prop() linkTag: string = 'a';
    @Prop() hrefProp: string = 'href';

    @State() $links: HTMLAnchorElement[];
    
    connectedCallback() {
        this.$links = Array.from(this.$el.children) as HTMLAnchorElement[];
    }

    componentDidLoad() {
        const mo = new MutationObserver(() => this.$links = Array.from(this.$el.querySelectorAll('a:not(.link)')) as HTMLAnchorElement[]);
        mo.observe(this.$el, { childList: true });
    }

    private isLastCrumb(index: number): boolean {
        return index === this.$links.length - 1;
    }

    private setProps($el: HTMLAnchorElement, $link: HTMLAnchorElement, index: number) {
        $el.setAttribute(this.hrefProp, $link.getAttribute('href'));
        $el.innerHTML = sanitizeHTML($link.innerHTML) as string;
        $el.classList.add('link');
        if(this.isLastCrumb(index))
            $el.setAttribute('aria-current', 'page');
        else
            $el.removeAttribute('aria-current');
    }

    render() {
        const CustomTag = this.linkTag;

        return (
            <Host role="navigation" aria-label="breadcrumbs">
                <div class="slot">
                    <slot />
                </div>
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