import { Component, h, ComponentInterface, Host, Element } from '@stencil/core';

@Component({
    tag: 'ks-breadcrumbs',
    styleUrl: 'breadcrumbs.scss'
})
export class Breadcrumbs implements ComponentInterface {
    $crumbs: HTMLKsCrumbElement[];

    @Element() $el: HTMLElement;

    connectedCallback() {
        this.$crumbs = Array.from(this.$el.children) as HTMLKsCrumbElement[];
        this.$crumbs.forEach(x => x.hidden = true);
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
                            <a {...{ class: 'link', ['aria-current']: this.isLastCrumb(index) && 'page', href: crumb.href }}>{crumb.innerHTML}</a>
                        </li>
                    )}
                </ol>
            </Host>
        );
    }
}