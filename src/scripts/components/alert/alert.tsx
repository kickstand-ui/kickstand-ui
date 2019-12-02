import { Component, h, Prop, Host } from '@stencil/core';

@Component({
    tag: 'c-alert'
})
export class Alert {
    @Prop() header: string;
    @Prop() note: boolean;
    @Prop() type: string = 'primary';

    render() {
        return (
            <Host class={`alert ${this.type} ${this.note ? 'note' : ''}`}>
                {this.header && 
                    <header class="alert-header">
                        <h3 class="alert-heading">{this.header}</h3>
                    </header>
                }
                <p class="alert-body">
                    <slot />
                </p>
            </Host>
        );
    }
}