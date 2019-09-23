import { Component, h, Prop } from '@stencil/core';
import Base from '../base/base';

@Component({
    tag: 'c-alert',
    styleUrl: '../../scss/styles.scss'
})
export class Alert {
    @Prop() cssClass: string;
    @Prop() htmlId: string;
    @Prop() header: string;
    @Prop() class: string;
    @Prop() type: string = 'primary';

    render() {
        return (
            <div id={this.htmlId} class={`alert ${this.type}${this.cssClass ? ` ${this.cssClass}` : ''}`}>
                {this.header
                    ? (<header class="alert-header">
                          <h3 class="alert-heading">{this.header}</h3>
                       </header>)
                    : null}
                <p class="alert-body">
                    <slot>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eum eaque aperiam maiores rem consequuntur ipsa tenetur quidem architecto fugit facilis corporis illum, expedita voluptas officia blanditiis adipisci quae laborum?
                    </slot>
                </p>
            </div>
        );
    }
}