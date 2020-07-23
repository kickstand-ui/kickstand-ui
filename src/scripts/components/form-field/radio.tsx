import { Component, h, Prop, Host, ComponentInterface, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'ks-radio',
    styleUrl: 'form-field.scss'
})
export class Radio implements ComponentInterface {
    radioButtonId = radioButtonIds++;

    @Prop() label: string;
    @Prop() checked: boolean;
    @Prop() inline: boolean = false;
    @Prop() name: string;

    @Event() selected!: EventEmitter;

    private handleClick() {
        this.selected.emit(this.label);
    }

    render() {
        let classes = {
            'radio': true,
            'inline': this.inline
        }
        return (
            <Host class={classes}>
                <div class="input-wrapper">
                    <input class="radio-button" id={`radio-${this.radioButtonId}`} type="radio" name={this.name} checked={this.checked} onChange={() => this.handleClick()} />
                    <label class="radio-label" htmlFor={`radio-${this.radioButtonId}`}>{this.label}</label>
                </div>
            </Host>
        );
    }
}

let radioButtonIds = 0;