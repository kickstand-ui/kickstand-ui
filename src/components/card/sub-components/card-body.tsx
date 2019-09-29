import { Component, h, ComponentInterface, Prop } from '@stencil/core';

@Component({
    tag: 'c-card-body'
})
export class CardBody implements ComponentInterface {
    @Prop() title: string;
    @Prop() subTitle: string;

    render() {
        return (
            <div class="card-body">
                {this.title ? <h3 class="heading">{this.title}</h3> : null}
                {this.title ? <h4 class="sub-heading">{this.subTitle}</h4> : null}
                <p class="text">
                    <slot />
                </p>
            </div>
        );
    }
}