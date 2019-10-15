import { Component, h, Prop, ComponentInterface } from '@stencil/core';

export interface IBreadcrumbs {
    url: string;
    text: string;
}

@Component({
    tag: 'c-breadcrumbs'
})
export class Breadcrumbs implements ComponentInterface {
    @Prop() breadcrumbs: IBreadcrumbs[];
    @Prop() cssClass: string = '';


    isLastCrumb(index: number): boolean {
        return index === this.breadcrumbs.length -1;
    }

    render() {
        return (
            <nav class={`breadcrumbs ${this.cssClass}`} role="navigation" aria-label="breadcrumbs">
                <ol class="list">
                    {this.breadcrumbs.map((crumb, index) =>
                        <li role="menuitem" class={`breadcrumb ${this.isLastCrumb(index) ? 'current' : ''}`}>
                            {this.isLastCrumb(index)
                                ? <span class="text">{crumb.text}</span>
                                : <a class="text" href={crumb.url}>{crumb.text}</a>
                            }
                        </li>
                    )}
                </ol>
            </nav>
        );
    }
}