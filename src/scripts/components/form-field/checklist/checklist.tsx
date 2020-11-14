import { Component, h, Prop, Host, Event, EventEmitter, Method, Element, State, ComponentInterface } from '@stencil/core';
import { IFormFieldData } from '../form-field';

@Component({
    tag: 'ks-checklist',
    styleUrl: 'checklist.scss'
})
export class Checklist implements ComponentInterface {
    $checkbox: HTMLInputElement;
    $options: HTMLOptionElement[];

    @Element() $el: HTMLElement;

    @Prop() type: 'checkbox' | 'radio' = 'checkbox';
    @Prop() label: string;
    @Prop() required: boolean;
    @Prop() tooltipText: string;
    @Prop() tooltipSize: 'sm' | 'md' | 'lg' | 'xl' = 'sm';;
    @Prop() requiredText: string = 'Required';
    @Prop() requiredErrorMessage: string = `This field is required.`;
    @Prop() name: string;
    @Prop() helpText: string;
    @Prop() invalid: boolean = false;
    @Prop() disabled: boolean = false;

    @State() value: string;
    @State() values = [];

    @Event() checked!: EventEmitter<IFormFieldData>;

    @Method()
    async validate() {
        return this.getFieldData();
    }

    componentWillLoad() {
        this.$options = Array.from(this.$el.querySelectorAll('option'));

        this.$options.forEach(option => {
            option.hidden = true;
            if (this.type === 'checkbox') {
                option.selected && this.values.push(option.value || option.innerText);
            } else {
                option.selected && (this.value = option.value || option.innerText);
            }
        });
    }

    private handleValueChanged() {
        let detail = this.getFieldData();

        this.checked.emit(detail);
    }

    getValidity() {
        let isMissingValue = this.required && (!this.value && this.values.length === 0);
        let validationObject: ValidityState = {
            badInput: false,
            customError: false,
            patternMismatch: false,
            rangeOverflow: false,
            rangeUnderflow: false,
            stepMismatch: false,
            tooLong: false,
            tooShort: false,
            typeMismatch: false,
            valid: !isMissingValue,
            valueMissing: isMissingValue
        };

        return validationObject;
    }

    updateValue(value: string) {
        if (this.type === 'checkbox') {
            if (this.values.includes(value))
                this.values = this.values.filter(x => x !== value);
            else
                this.values.push(value);
        } else {
            this.value = value;
        }

        this.handleValueChanged();
    }

    private getFieldData() {
        let validity = this.getValidity();
        this.invalid = !validity.valid;
        let fieldData: IFormFieldData = {
            isValid: validity.valid,
            value: this.type === 'checkbox' ? this.values : this.value,
            validity: validity,
            name: this.name
        };

        return fieldData;
    }

    render() {
        return (
            <Host class="ks-checklist">
                <fieldset>
                    <legend class="form-label">
                        <span class="field-label">
                            {this.label}
                            {this.required && <abbr class="text-danger text-decoration-none" title={this.requiredText} aria-label={this.requiredText}>*</abbr>}
                            {(this.tooltipText && this.tooltipText !== '') && <ks-tooltip position="right" size={this.tooltipSize} text={this.tooltipText} hide-decoration><ks-icon icon="info" class="text-info" /></ks-tooltip>}
                        </span>
                        <span class="help-text">{this.helpText}</span>
                        <span class="error-message text-danger" role="alert" aria-live="assertive">
                            {(this.invalid && !this.disabled) && <span class="error-text">
                                <ks-icon icon="warning" class="mr-xs" />
                                <span>{this.requiredErrorMessage}</span>
                            </span>}
                        </span>
                    </legend>
                    <slot />
                    {
                        this.$options.map(option => this.type === 'checkbox'
                            ? <ks-checkbox label={option.innerHTML} checked={option.selected} onChanged={() => this.updateValue(option.value || option.innerText)} />
                            : <ks-radio label={option.innerHTML} checked={option.selected} name={this.name} onSelected={() => this.updateValue(option.value || option.innerText)} />)
                    }
                </fieldset>
            </Host>
        );
    }
}