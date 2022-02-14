import { Component, h, Prop, Host, ComponentInterface, Element } from '@stencil/core';

@Component({
    tag: 'ks-progress-bar',
    styleUrl: 'progress-bar.scss'
})
export class ProgressBar implements ComponentInterface {
    @Element() $el: HTMLElement;

    @Prop() color: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link';
    @Prop() value: number = 0;
    @Prop() description: string = 'Loading...';
    @Prop() hideDescription: boolean;
    @Prop() progressLabel: string = 'Progress';
    @Prop() hideProgressLabel: boolean;

    componentWillRender() {
        if(this.color)
            this.$el.style.setProperty('--progress-color', `var(--ks-color-${this.color}-base)`);
    }

    validateValue() {
        return isNaN(this.value)
            ? 0
            : this.value < 0
                ? 0
                : this.value > 100
                    ? 100
                    : this.value;
    }


    render() {
        this.value = this.validateValue();

        return (
            <Host>
                <div class="labels">
                    {!this.hideDescription && <span class="description">{this.description}</span>}
                    <span class={{
                        'progress-label': true,
                        'sr-only': this.hideProgressLabel
                    }}>{this.progressLabel}: {this.value}%</span>
                </div>
                <div class="progress-bar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={this.value.toString()} role="progressbar">
                    <div class="value" style={{ width: `${this.value}%` }}></div>
                </div>
            </Host>
        );
    }
}