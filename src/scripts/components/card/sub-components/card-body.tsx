import { Component, h, ComponentInterface, Prop } from '@stencil/core';

@Component({
    tag: 'c-card-body'
})
export class CardBody implements ComponentInterface {
    @Prop() cardTitle: string;
    @Prop() cardSubtitle: string;

    render() {
        return (
            <div class="card-body">
                {this.cardTitle ? <h4 class="heading">{this.cardTitle}</h4> : null}
                {this.cardTitle ? <h5 class="subheading">{this.cardSubtitle}</h5> : null}
                <p class="text">
                    <slot />
                </p>
            </div>
        );
    }
}