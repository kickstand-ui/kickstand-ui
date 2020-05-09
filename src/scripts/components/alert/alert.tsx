import { Component, h, Prop, Host } from '@stencil/core';

@Component({
    tag: 'ks-alert'
})
export class Alert {
    @Prop() header: string;
    @Prop() note: boolean;
    @Prop() color: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link' = 'primary';

    render() {
        return (
            <Host class={`alert ${this.color} ${this.note ? 'note' : ''}`}>
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