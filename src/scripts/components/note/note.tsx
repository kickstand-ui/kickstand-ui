import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'c-note'
})
export class Note {
    @Prop() cssClass: string;
    @Prop() header: string;
    @Prop() type: string = 'primary';

    render() {
        return (
            <div class={`note ${this.type} ${this.cssClass}`}>
                {this.header
                    ? (<header class="note-header">
                          <h3 class="note-heading">{this.header}</h3>
                       </header>)
                    : null}
                <p class="note-body">
                    <slot />
                </p>
            </div>
        );
    }
}