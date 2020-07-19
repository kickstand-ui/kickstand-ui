import { Component, h, Prop, Host, Event, EventEmitter } from '@stencil/core';
import { IFormFieldData } from './form-field';

@Component({
    tag: 'ks-checkbox',
    styleUrl: 'form-field.scss'
})
export class Alert {
    checkboxId = checkboxIds++;

    @Prop() label: string;
    @Prop() checked: boolean = false;
    @Prop() required: boolean;
    @Prop() tooltipText: string;
    @Prop() requiredText: string = 'Required';

    @Event() updated!: EventEmitter<IFormFieldData>;

    render() {
        let props = {
            'id': `checkbox-${this.checkboxId}`,
            'checked': this.checked,
            'required': this.required
        };

        return (
            <Host class="checkbox">
                <input class="checkbox-input" type="checkbox" {...props} />
                <label class="checkbox-label" htmlFor={`checkbox-${this.checkboxId}`}>
                    <span class="checkbox-icon">
                        <svg width="0.75em" height="0.625em" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                    </span>
                    <span class="checkbox-description">
                        {this.label}
                        {this.required && <abbr class="text-danger text-decoration-none" title={this.requiredText} aria-label={this.requiredText}>*</abbr>}
                        {(this.tooltipText && this.tooltipText !== '') && <ks-tooltip position="right" size="md" text={this.tooltipText} hide-decoration><ks-icon icon="info" class="text-info text-xs" /></ks-tooltip>}    
                    </span>
                </label>
            </Host>
        );
    }
}

let checkboxIds = 0;