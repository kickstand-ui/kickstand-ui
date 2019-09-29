import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'c-alert'
})
export class Alert {
    
  /**
   * Animation to use when the alert is dismissed.
   */
    @Prop() cssClass: string;
    @Prop() header: string;
    @Prop() type: string = 'primary';

    render() {
        return (
            <div class={`alert ${this.type} ${this.cssClass}`}>
                {this.header
                    ? (<header class="alert-header">
                          <h3 class="alert-heading">{this.header}</h3>
                       </header>)
                    : null}
                <p class="alert-body">
                    <slot />
                </p>
            </div>
        );
    }
}