import { Component, h, Prop, Host, ComponentInterface, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'ks-switch',
    styleUrl: 'switch.scss'
})
export class Switch implements ComponentInterface {
    switchId = `switch_${switchIds++}`;

    @Prop() label: string;
    @Prop() name: string;
    @Prop() disabled: boolean = false;
    @Prop({ mutable: true }) checked: boolean = false;

    @Event() updated!: EventEmitter;

    private clickHandler() {
        this.checked = !this.checked;

        this.updated.emit({
            name: this.getName(),
            value: this.checked
        });
    }

    private getName() {
        return this.name || this.label ? this.label.toLowerCase().replace(/ /g, '-') : '';
    }

    render() {
        let classes = {
            'ks-switch': true,
            'disabled': this.disabled
        };

        return (
            <Host class={classes}>
                <label id={`${this.switchId}_label`} htmlFor={this.switchId} class="label">{this.label}</label>
                <button type="button" id={this.switchId} class="control" role="switch" aria-checked={`${this.checked}`} aria-labelledby={`${this.switchId}_label`} onClick={() => this.clickHandler()} disabled={this.disabled}>
                    <span class="track"></span>
                    <span class="toggle"></span>
                </button>
            </Host>
        );
    }
}

let switchIds = 0;