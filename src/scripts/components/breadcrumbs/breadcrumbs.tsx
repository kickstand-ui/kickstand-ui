import { Component, h, ComponentInterface, Host, Element } from '@stencil/core';

export interface IBreadcrumbs {
    url: string;
    text: string;
}

@Component({
    tag: 'ks-breadcrumbs'
})
export class Breadcrumbs implements ComponentInterface {
    $crumbs: HTMLKsCrumbElement[];

    @Element() $el: HTMLElement;

    connectedCallback() {
        this.$crumbs = Array.from(this.$el.querySelectorAll('ks-crumb'));
    }

    private isLastCrumb(index: number): boolean {
        return index === this.$crumbs.length - 1;
    }

    render() {
        return (
            <Host role="navigation" aria-label="breadcrumbs">
                <slot />
                <ol class="breadcrumbs">
                    {this.$crumbs.map((crumb, index) =>
                        <li class={{ 'breadcrumb': true, 'current': this.isLastCrumb(index) }}>
                            <a {...{ class: 'link', ['aria-current']: this.isLastCrumb(index) && 'page', href: crumb.url }}>{crumb.text}</a>
                        </li>
                    )}
                </ol>
            </Host>
        );
    }
}