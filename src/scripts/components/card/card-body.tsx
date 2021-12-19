import { Component, h, ComponentInterface, Prop, Host } from '@stencil/core';

@Component({
    tag: 'ks-card-body'
})
export class CardBody implements ComponentInterface {
    @Prop() heading: string;
    @Prop() subHeading: string;

    render() {
        return (
            <Host class="card-body">
                {(this.heading || this.subHeading) && <header class="body-header">
                    {this.heading && <h3 class="heading">{this.heading}</h3>}
                    {this.subHeading && <h4 class="subheading">{this.subHeading}</h4>}
                </header>}
                <div class="body-text">
                    <slot />
                </div>
            </Host>
        );
    }
}