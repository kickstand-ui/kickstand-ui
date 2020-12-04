import { Component, h, Prop, Host, Event, EventEmitter, Method, ComponentInterface } from '@stencil/core';
import { IFormFieldData, ICustomInput } from '../form-field';

@Component({
    tag: 'ks-checkbox',
    styleUrl: 'checkbox.scss'
})
export class Checkbox implements ComponentInterface, ICustomInput {
    checkboxId = `checkbox_${checkboxIds++}`;
    $checkbox: HTMLInputElement;

    @Prop() label: string;
    @Prop({ mutable: true, reflect: true }) checked: boolean = false;
    @Prop() required: boolean;
    @Prop() tooltipText: string;
    @Prop() tooltipSize: 'sm' | 'md' | 'lg' | 'xl' = 'sm';;
    @Prop() requiredText: string = 'Required';
    @Prop() name: string;

    @Event() changed!: EventEmitter<IFormFieldData>;

    @Method()
    async validate() {
        return this.validateField();
    }


    private changeHandler() {
        let detail = this.validateField();

        this.changed.emit(detail);
    }

    private validateField() {
        this.checked = this.$checkbox.checked;

        let fieldData: IFormFieldData = {
            isValid: this.$checkbox.checkValidity(),
            value: this.checked,
            validity: this.$checkbox.validity,
            name: this.name
        };

        return fieldData;
    }

    render() {
        let props = {
            'id': this.checkboxId,
            'checked': this.checked,
            'required': this.required
        };

        return (
            <Host class="ks-checkbox">
                <input class="checkbox-input" type="checkbox" {...props} onChange={() => this.changeHandler()} ref={el => this.$checkbox = el} />
                <label class="checkbox-label" htmlFor={this.checkboxId}>
                    <span class="checkbox-icon">
                        <svg width="0.75em" height="0.625em" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                    </span>
                    <span class="checkbox-description">
                        {this.label}
                        {this.required && <abbr class="text-danger text-decoration-none" title={this.requiredText} aria-hidden="true">*</abbr>}
                        {(this.tooltipText && this.tooltipText !== '') && <ks-tooltip position="right" size={this.tooltipSize} text={this.tooltipText} hide-decoration><ks-icon icon="info" class="text-info" /></ks-tooltip>}    
                    </span>
                </label>
            </Host>
        );
    }
}

let checkboxIds = 0;