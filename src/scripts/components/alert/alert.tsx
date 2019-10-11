import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'c-alert'
})
export class Note {
    @Prop() cssClass: string;
    @Prop() header: string;
    @Prop() note: boolean;
    @Prop() type: string = 'primary';

    render() {
        return (
            <div class={`alert ${this.type} ${this.note ? 'note' : ''} ${this.cssClass}`}>
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