import { Component, h, ComponentInterface, Prop, Host } from '@stencil/core';

@Component({
    tag: 'ks-card-body'
})
export class CardBody implements ComponentInterface {
    @Prop() cardTitle: string;
    @Prop() cardSubtitle: string;

    render() {
        return (
            <Host class="card-body">
                {this.cardTitle ? <h3 class="heading">{this.cardTitle}</h3> : null}
                {this.cardTitle ? <h4 class="subheading">{this.cardSubtitle}</h4> : null}
                <p class="text">
                    <slot />
                </p>
            </Host>
        );
    }
}