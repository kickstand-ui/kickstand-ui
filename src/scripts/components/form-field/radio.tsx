import { Component, h, Prop, Host } from '@stencil/core';

@Component({
    tag: 'ks-radio',
    styleUrl: 'form-field.scss'
})
export class Alert {
    radioButtonId = radioButtonIds++;

    @Prop() label: string;
    @Prop() checked: boolean;
    @Prop() inline: boolean;

    render() {
        let classes = {
            'radio': true,
            'inline': this.inline
        }
        return (
            <Host class={classes}>
                <div class="input-wrapper">
                    <input class="radio-button" id={`radio-${this.radioButtonId}`} type="radio" name="g" />
                    <label class="radio-label" htmlFor={`radio-${this.radioButtonId}`}>Option {this.radioButtonId}</label>
                </div>
            </Host>
        );
    }
}

let radioButtonIds = 0;