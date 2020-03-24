import { Component, h, Prop, Host, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'c-progress-bar'
})
export class ProgressBar implements ComponentInterface {
    @Prop() type: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link' = 'primary';
    @Prop() value: number = 0;
    @Prop() size: string = 'md';

    render() {
        return (
            <Host class={`progress-bar ${this.size}`} aria-valuemin="0" aria-valuemax="100" aria-valuenow={this.value.toString()} role="progressbar">
                <span class={`value ${this.type}`} style={{ width: `${this.value}%` }}>
                    <span class="sr-only">Progress: {this.value}%</span>
                </span>
            </Host>
        );
    }
}