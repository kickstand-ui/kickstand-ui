import { Component, h, Prop, Host, ComponentInterface, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'ks-radio',
    styleUrl: 'radio.scss'
})
export class Radio implements ComponentInterface {
    radioButtonId = `radio_${radioButtonIds++}`;

    @Prop() label: string;
    @Prop() checked: boolean;
    @Prop() inline: boolean = false;
    @Prop() name: string;
    @Prop() disabled: boolean = false;

    @Event() selected!: EventEmitter;

    private handleClick() {
        this.selected.emit(this.label);
    }

    render() {
        let classes = {
            'ks-radio': true,
            'inline': this.inline
        }
        return (
            <Host class={classes}>
                <div class="input-wrapper">
                    <input class="radio-button" id={this.radioButtonId} type="radio" name={this.name} checked={this.checked} disabled={this.disabled} onChange={() => this.handleClick()} />
                    <label class="radio-label" htmlFor={this.radioButtonId}>{this.label}</label>
                </div>
            </Host>
        );
    }
}

let radioButtonIds = 0;