import { Component, h, Prop, ComponentInterface, Host, Watch, Event, EventEmitter, State, Element, Method } from '@stencil/core';
import { debounce } from '../../utils/componentUtils';

export interface IFormFieldData {
    name: string;
    value: FormFieldValue;
    isValid: boolean;
    validity: ValidityState;
}

export type FormFieldValue = string | number | boolean | FileList | Array<any> | null;

export interface ICustomInput {
    validate(): Promise<IFormFieldData>
}

export interface ICustomInputElement extends HTMLElement, ICustomInput { }

@Component({
    tag: 'ks-form-field',
    styleUrl: 'form-field.scss'
})
export class FormField implements ComponentInterface {
    formFieldId = formFieldIds++;
    fieldId = `form_input_${this.formFieldId}`;
    labelId = `form_label_${this.formFieldId}`;
    listId = `form_list_${this.formFieldId}`;
    inputHandler: any;

    $input: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    $customInput: ICustomInputElement;

    @Element() $el: any;

    @Prop() label: string;
    @Prop() hideLabel: boolean = false;
    @Prop() helpText: string;
    @Prop() tooltipText: string;
    @Prop() tooltipSize: 'sm' | 'md' | 'lg' | 'xl' = 'sm';;
    @Prop() placeholder: string;
    @Prop() name: string;
    @Prop() required: boolean;
    @Prop() requiredText: string = 'Required';
    @Prop({ mutable: true }) invalid: boolean = false;
    @Prop() disabled: boolean;
    @Prop({ mutable: true }) value?: FormFieldValue;
    @Prop() pattern?: string;
    @Prop() min?: number = undefined;
    @Prop() max?: number = undefined;
    @Prop() step?: number = 1;
    @Prop() minlength?: number = undefined;
    @Prop() maxlength?: number = undefined;
    @Prop() autocomplete?: string;
    @Prop() type: 'autocomplete'
        | 'checkbox'
        | 'checklist'
        | 'color'
        | 'date'
        | 'email'
        | 'file'
        | 'hidden'
        | 'month'
        | 'number'
        | 'password'
        | 'radiolist'
        | 'range'
        | 'search'
        | 'select'
        | 'spin-box'
        | 'tel'
        | 'text'
        | 'textarea'
        | 'url' = 'text';
    @Prop({ mutable: true }) validateOnInput: boolean = false;
    @Prop() debounce: number = 0;
    @Prop() inline: boolean = false;
    @Prop() datalist: boolean = false;
    @Prop() checked: boolean = false;
    @Prop() indeterminate: boolean = false;
    @Prop() icon?: string;
    @Prop() iconDirection: 'left' | 'right' = 'right';
    @Prop() size: 'sm' | 'md' | 'lg' = 'md';
    @Prop() inputClass?: string;
    @Prop() autoExpand: boolean = false;

    // File Input
    @Prop() accept?: string;
    @Prop() multiple?: boolean;
    @Prop() webkitdirectory?: boolean;
    @Prop() capture: 'user' | 'environment';

    // Error Messages
    @Prop() defaultErrorMessage: string = 'The value entered is not valid.';
    @Prop() badInputErrorMessage: string = 'There was a problem processing the value.';
    @Prop() patternErrorMessage: string = 'The value was not in the right format.';
    @Prop() maxErrorMessage: string = `Your value must be no greater than ${this.max}.`;
    @Prop() minErrorMessage: string = `Your value must be no less than ${this.min}.`;
    @Prop() stepErrorMessage: string = `Your value must be divisible by ${this.step || 1}.`;
    @Prop() maxlengthErrorMessage: string = `Your value must be no more than ${this.maxlength} characters.`;
    @Prop() minlengthErrorMessage: string = `Your value must be at least ${this.minlength} characters.`;
    @Prop() typeErrorMessage: string = `Your value must be a valid ${this.type === 'tel' ? 'telephone number' : this.type}.`;
    @Prop() requiredErrorMessage: string = this.type === 'autocomplete' ? 'The value entered is not one of the available options.' : 'This field is required.';

    @Event() updated!: EventEmitter<IFormFieldData>;
    @Event() blurred!: EventEmitter;
    @Event() cleared!: EventEmitter;

    @State() validityState: ValidityState;
    @State() showPassword: boolean = false;

    @Method()
    async validate() {
        if (!this.$customInput) {
            this.invalid = !this.$input.checkValidity();
            this.validateOnInput = true;
        }

        return this.validateField();
    }

    @Watch('value')
    protected async valueChanged() {
        if (this.type === 'autocomplete')
            return;

        if (this.type !== 'file' && this.$input && this.$input.value !== this.value)
            this.$input.value = this.value?.toString();

        if (this.validateOnInput)
            this.invalid = !this.$input.checkValidity();

        let detail = await this.validateField();

        this.updated.emit(detail);
    }

    componentDidLoad() {
        if (this.type !== 'select' || this.datalist) {
            const $options = Array.from(this.$el.querySelectorAll('option')) as HTMLElement[];
            $options.forEach(x => x.hidden = true);
        }

        this.setRangeStyles();

        this.inputHandler = debounce(() => {
            this.value = this.type === 'file'
                ? this.$input['files']
                : this.$input.value || '';

            this.setRangeStyles();
        }, this.debounce);
    }

    private setRangeStyles() {
        if (this.type === 'range') {
            const range: any = this.$input;
            const min = this.min || 0;
            const max = this.max || 100;

            this.$input.style.background = `linear-gradient(to right, rgb(var(--ks-color-primary-base)) 0%, rgb(var(--ks-color-primary-base)) ${(range.value - min) / (max - min) * 100}%, rgb(var(--ks-color-light-light)) ${(range.value - min) / (max - min) * 100}%, rgb(var(--ks-color-light-light)) 100%)`;
        }
    }

    private handleComponentChange(e) {
        let inputData: IFormFieldData = e.detail;
        this.invalid = !inputData.isValid;
        this.validityState = inputData.validity
        this.value = inputData.value;
        this.updated.emit(inputData);
    }

    private async validateField(): Promise<IFormFieldData> {
        if (this.$customInput) {
            const input = await this.$customInput.validate();
            this.invalid = !input.isValid;
            this.value = input.value;
            this.validityState = input.validity
            return input;
        }

        this.validityState = this.$input.validity;
        return {
            name: this.$input.name,
            value: typeof this.value === 'number' ? this.value.toString() : this.value,
            isValid: this.$input.checkValidity(),
            validity: this.validityState
        };
    }

    private getValue(): string {
        return typeof this.value === 'number'
            ? this.value.toString()
            : (this.value || '').toString();
    }

    private getErrorMessage(): string {
        switch (true) {
            case this.validityState?.valueMissing:
                return this.requiredErrorMessage;
            case this.validityState?.rangeOverflow:
                return this.maxErrorMessage;
            case this.validityState?.rangeUnderflow:
                return this.minErrorMessage;
            case this.validityState?.stepMismatch:
                return this.stepErrorMessage;
            case this.validityState?.tooLong:
                return this.maxlengthErrorMessage;
            case this.validityState?.tooShort:
                return this.minlengthErrorMessage;
            case this.validityState?.typeMismatch:
                return this.typeErrorMessage;
            case this.validityState?.patternMismatch:
                return this.patternErrorMessage;
            case this.validityState?.badInput:
                return this.badInputErrorMessage;
            default:
                return this.defaultErrorMessage;
        }
    }

    private getInputName() {
        return this.name || this.label ? this.label.toLowerCase().replace(/ /g, '-') : '';
    }

    private async onBlur() {
        if (!this.validateOnInput) {
            await this.validate();

            if (this.invalid)
                this.validateOnInput = true;
        }

        this.blurred.emit();
    }

    private setProps(props: any) {
        this.placeholder && (props.placeholder = this.placeholder);
        this.autocomplete && (props.autocomplete = this.autocomplete);
        this.minlength && (props.minlength = this.minlength);
        this.maxlength && (props.maxlength = this.maxlength);
        this.pattern && (props.pattern = this.pattern);
        this.min && (props.min = this.min);
        this.max && (props.max = this.max);
        this.step && (props.step = this.step);
        this.type === 'range' && (props.title = this.getValue());

        return props;
    }

    private handleTogglePasswordClick() {
        this.showPassword = !this.showPassword;
        this.$input.setAttribute('type', this.showPassword ? 'text' : 'password');
    }

    private handleClearContentsClick() {
        this.value = '';
        this.cleared.emit();
        this.$input.focus();
    }

    render() {
        let value = this.getValue();
        let props = {
            'id': this.fieldId,
            'class': `form-input size-${this.size} ${this.icon ? `display-icon-${this.iconDirection}` : ''} ${this.inputClass ? this.inputClass : ''}`,
            'name': this.getInputName(),
            'value': value,
            'disabled': this.disabled,
            'required': this.required,
            'aria-invalid': !this.disabled && this.invalid.toString(),
            'list': this.datalist && this.listId,
            'accept': this.accept,
            'multiple': this.multiple,
            'webkitdirectory': this.webkitdirectory,
            'capture': this.capture
        };
        props = this.setProps(props);
        let classes = {
            'ks-form-field': true,
            'invalid': this.invalid && !this.disabled,
            'inline': this.inline
        };
        let fieldInput = {
            'textarea': (
                <textarea
                    {...props}
                    onInput={() => this.inputHandler()}
                    onBlur={() => this.onBlur()}
                    ref={el => this.$input = el}
                >
                    {value}
                </textarea>
            ),
            'select': (
                <div class="select-wrapper">
                    <select
                        {...props}
                        onInput={() => this.inputHandler()}
                        onBlur={() => this.onBlur()}
                        ref={el => this.$input = el}
                    >
                        <slot />
                    </select>
                    <ks-icon class="select-icon" icon="chevron_down" />
                </div>
            ),
            'autocomplete': (
                <ks-autocomplete
                    value={this.value}
                    name={this.getInputName()}
                    input-id={this.fieldId}
                    required={this.required}
                    disabled={this.disabled}
                    size={this.size}
                    input-class={this.inputClass}
                    auto-expand={this.autoExpand}
                    onChanged={e => this.handleComponentChange(e)}
                    ref={e => this.$customInput = e}
                >
                    <slot />
                </ks-autocomplete>
            ),
            'spin-box': (
                <ks-spin-box
                    value={this.value}
                    min={this.min}
                    max={this.max}
                    step={this.step}
                    name={this.name}
                    size={this.size}
                    input-id={this.fieldId}
                    required={this.required}
                    disabled={this.disabled}
                    invalid={this.invalid}
                    input-class={this.inputClass}
                    onUpdated={e => this.handleComponentChange(e)}
                    ref={el => this.$customInput = el}
                >
                </ks-spin-box>
            )
        }[this.type] || [
                <div class="input-wrapper">
                    {this.icon && this.iconDirection === 'left' && <span class="icon-left">
                        <ks-icon class="input-icon" icon={this.icon}></ks-icon>
                    </span>}
                    <input
                        {...props}
                        type={this.type}
                        onInput={() => this.inputHandler()}
                        onBlur={() => this.onBlur()}
                        ref={el => this.$input = el}
                    />
                    <span class="icon-right">
                        {this.type === 'password' && <ks-button
                            class="input-button"
                            display="clear"
                            size="xs"
                            button-class="text-md"
                            color="dark"
                            hide-text
                            onClick={() => this.handleTogglePasswordClick()}
                        >
                            <ks-icon icon={this.showPassword ? 'hide' : 'view'} label={this.showPassword ? 'hide' : 'hide'}></ks-icon>
                        </ks-button>}
                        {this.type === 'search' && this.value && <ks-button
                            class="input-button"
                            display="clear"
                            size="xs"
                            button-class="text-md"
                            color="dark"
                            hide-text
                            onClick={() => this.handleClearContentsClick()}
                        >
                            <ks-icon icon="times" label="clear"></ks-icon>
                        </ks-button>}
                        {this.icon && this.iconDirection === 'right' && <ks-icon class="input-icon" icon={this.icon}></ks-icon>}
                    </span>
                </div>,
                this.datalist && <datalist id={this.listId}>
                    <slot />
                </datalist>
            ];

        let formField = {
            'checkbox': [
                <div class="error-message text-danger" role="alert" aria-live="assertive">
                    {(this.invalid && !this.disabled) && <div class="error-text">
                        <ks-icon icon="warning" class="mr-xs" />
                        <span>{this.getErrorMessage()}</span>
                    </div>}
                </div>,
                <ks-checkbox
                    label={this.label}
                    checked={this.checked}
                    tooltip-text={this.tooltipText}
                    required={this.required}
                    required-text={this.requiredText}
                    name={this.getInputName()}
                    disabled={this.disabled}
                    indeterminate={this.indeterminate}
                    onChanged={e => this.handleComponentChange(e)}
                    ref={el => this.$customInput = el}
                />
            ],
            'checklist': (
                <ks-checklist
                    label={this.label}
                    tooltip-text={this.tooltipText}
                    required={this.required}
                    required-text={this.requiredText}
                    required-error-message={this.requiredErrorMessage}
                    type="checkbox"
                    name={this.getInputName()}
                    help-text={this.helpText}
                    invalid={this.invalid}
                    disabled={this.disabled}
                    ref={el => this.$customInput = el}
                    onChecked={e => this.handleComponentChange(e)}
                >
                    <slot />
                </ks-checklist>
            ),
            'radiolist': (
                <ks-checklist
                    label={this.label}
                    tooltip-text={this.tooltipText}
                    required={this.required}
                    required-text={this.requiredText}
                    required-error-message={this.requiredErrorMessage}
                    type="radio"
                    name={this.getInputName()}
                    help-text={this.helpText}
                    invalid={this.invalid}
                    disabled={this.disabled}
                    ref={el => this.$customInput = el}
                    onChecked={e => this.handleComponentChange(e)}
                >
                    <slot />
                </ks-checklist>
            )
        }[this.type] || (
                [
                    <label id={this.labelId} class="form-label" htmlFor={this.fieldId}>
                        <span class={`field-label ${this.hideLabel && 'sr-only'}`}>
                            {this.label}
                            {this.required && <abbr class="text-danger text-decoration-none" title={this.requiredText} aria-label={this.requiredText} aria-hidden="true">*</abbr>}
                            {(this.tooltipText && this.tooltipText !== '') && <ks-tooltip position="right" size={this.tooltipSize} text={this.tooltipText} hide-decoration><ks-icon icon="info" class="text-info" /></ks-tooltip>}
                        </span>
                        <span class="help-text">{this.helpText}</span>
                        <span class="error-message text-danger" role="alert" aria-live="assertive">
                            {(this.invalid && !this.disabled) && <span class="error-text">
                                <ks-icon icon="warning" class="mr-xs" />
                                <span>{this.getErrorMessage()}</span>
                            </span>}
                        </span>
                    </label>,
                    (fieldInput)
                ]
            );

        return (
            <Host class={classes}>
                {formField}
            </Host>
        );
    }
}

let formFieldIds = 0;