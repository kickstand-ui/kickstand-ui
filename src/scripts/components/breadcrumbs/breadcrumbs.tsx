import { Component, h, Prop, ComponentInterface, Host } from '@stencil/core';

export interface IBreadcrumbs {
    url: string;
    text: string;
}

@Component({
    tag: 'ks-breadcrumbs'
})
export class Breadcrumbs implements ComponentInterface {
    @Prop() breadcrumbs: IBreadcrumbs[];


    isLastCrumb(index: number): boolean {
        return index === this.breadcrumbs.length -1;
    }

    render() {
        return (
            <Host class="breadcrumbs" role="navigation" aria-label="breadcrumbs">
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
            </Host>
        );
    }
}