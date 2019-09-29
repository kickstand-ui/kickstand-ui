import { Component, h, ComponentInterface, Prop } from '@stencil/core';

@Component({
    tag: 'c-card-body'
})
export class CardBody implements ComponentInterface {
    @Prop() cardTitle: string;
    @Prop() cardSubTitle: string;

    render() {
        return (
            <div class="card-body">
                {this.cardTitle ? <h3 class="heading">{this.cardTitle}</h3> : null}
                {this.cardTitle ? <h4 class="sub-heading">{this.cardSubTitle}</h4> : null}
                <p class="text">
                    <slot />
                </p>
            </div>
        );
    }
}