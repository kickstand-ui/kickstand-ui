import { Component, h, ComponentInterface, Prop, Host } from '@stencil/core';

@Component({
    tag: 'card-body'
})
export class CardBody implements ComponentInterface {
    @Prop() cardTitle: string;
    @Prop() cardSubtitle: string;

    render() {
        return (
            <Host class="card-body">
                {this.cardTitle ? <h4 class="heading">{this.cardTitle}</h4> : null}
                {this.cardTitle ? <h5 class="subheading">{this.cardSubtitle}</h5> : null}
                <p class="text">
                    <slot />
                </p>
            </Host>
        );
    }
}