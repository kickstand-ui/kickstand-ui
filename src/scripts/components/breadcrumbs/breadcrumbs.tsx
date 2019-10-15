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
                        <li class={`breadcrumb ${this.isLastCrumb(index) ? 'current' : ''}`}>
                            {this.isLastCrumb(index)
                                ? <a class="link" aria-current="page" href={crumb.url}>{crumb.text}</a>
                                : <a class="link" href={crumb.url}>{crumb.text}</a>
                            }
                        </li>
                    )}
                </ol>
            </nav>
        );
    }
}