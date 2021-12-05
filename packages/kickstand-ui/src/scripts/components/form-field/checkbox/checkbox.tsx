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
    @Prop() tooltipLabel: string;
    @Prop() tooltipSize: 'sm' | 'md' | 'lg' | 'xl' = 'sm';;
    @Prop() requiredText: string = 'Required';
    @Prop() name: string;
    @Prop() disabled: boolean = false;
    @Prop() indeterminate: boolean = false;

    @Event() changed!: EventEmitter<IFormFieldData>;

    @Method()
    async validate() {
        return this.validateField();
    }

    componentDidRender() {
        this.$checkbox.indeterminate = !this.checked && this.indeterminate;
    }

    private changeHandler() {
        this.indeterminate = false;
        this.$checkbox.indeterminate = false;
        let detail = this.validateField();

        this.changed.emit(detail);
    }

    private validateField() {
        this.checked = this.$checkbox.checked;

        let fieldData: IFormFieldData = {
            name: this.name,
            value: this.checked,
            isValid: this.$checkbox.checkValidity(),
            validity: this.$checkbox.validity
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
                <input class="checkbox-input" type="checkbox" {...props} onChange={() => this.changeHandler()} disabled={this.disabled} ref={el => this.$checkbox = el} />
                <label class="checkbox-label" htmlFor={this.checkboxId}>
                    <span class="checkbox-icon">
                        <svg width="0.75em" height="0.625em" viewBox="0 0 12 10">
                            {this.indeterminate && !this.checked
                                ? <rect width="0.7em" height="0.1em" />
                                : <polyline points="1.5 6 4.5 9 10.5 1"></polyline>}
                        </svg>
                    </span>
                    <span class="checkbox-description">
                        {this.label}
                        {this.required && <abbr class="text-danger text-decoration-none" title={this.requiredText} aria-hidden="true">*</abbr>}
                        {(this.tooltipText && this.tooltipText !== '') && <ks-tooltip position="right" size={this.tooltipSize} text={this.tooltipText} hide-decoration><ks-icon icon="info" class="text-info" label={this.tooltipLabel} /></ks-tooltip>}
                    </span>
                </label>
            </Host>
        );
    }
}

let checkboxIds = 0;