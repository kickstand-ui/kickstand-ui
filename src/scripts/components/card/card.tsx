import { Component, h, ComponentInterface, Prop, Host} from '@stencil/core';


@Component({
    tag: 'c-card'
})
export class Card implements ComponentInterface {
    // Props for image
    @Prop() imgSrc: string;
    @Prop() alt: string;
    @Prop() lazy: boolean;
    @Prop() threshold: number;

    @Prop() imgDirection: string = 'top';


    render() {
        return (
            <Host class={`card img-${this.imgDirection}`}>
                {this.imgSrc 
                    ? (<div class="card-img">
                            <c-img alt={this.alt} lazy={this.lazy} src={this.imgSrc} threshold={this.threshold} />
                        </div>)
                    : null}
                <div class="card-content">
                    <slot />
                </div>
            </Host>
        );
    }
}