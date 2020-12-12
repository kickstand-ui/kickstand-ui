import { Component, h, ComponentInterface, Host, Element } from '@stencil/core';

@Component({
    tag: 'ks-breadcrumbs',
    styleUrl: 'breadcrumbs.scss'
})
export class Breadcrumbs implements ComponentInterface {
    $links: HTMLAnchorElement[];

    @Element() $el: HTMLElement;

    connectedCallback() {
        this.$links = Array.from(this.$el.children) as HTMLAnchorElement[];
        this.$links.forEach(x => x.hidden = true);
    }

    private isLastCrumb(index: number): boolean {
        return index === this.$links.length - 1;
    }

    // private getProps(index: number, $link: HTMLAnchorElement) {
    //     return { 
    //         'class': 'link', 
    //         ['aria-current']: this.isLastCrumb(index) && 'page', 
    //         'href': $link.href 
    //     }
    // }

    private setProps($el: HTMLAnchorElement, $link: HTMLAnchorElement, index: number) {
        $el.href = $link.href;
        $el.innerHTML = $link.innerHTML;
        $el.classList.add('link');
        if(this.isLastCrumb(index))
            $el.setAttribute('aria-current', 'page');
    }

    render() {
        return (
            <Host role="navigation" aria-label="breadcrumbs" class="ks-breadcrumbs">
                <slot />
                <ol class="links">
                    {this.$links.map(($link, index) =>
                        <li class={{ 'breadcrumb': true, 'current': this.isLastCrumb(index) }}>
                            <a ref={$el => this.setProps($el, $link, index)}></a>
                        </li>
                    )}
                </ol>
            </Host>
        );
    }
}