import { Component, h, Prop, ComponentInterface, Host, Watch, Event, EventEmitter, State } from '@stencil/core';

@Component({
    tag: 'ks-form-field'
})
export class FormField implements ComponentInterface {
    $input: HTMLInputElement;

    @Prop() label: string;
    @Prop() helpText: string;
    @Prop() tooltipText: string;
    @Prop() placeholder: string;
    @Prop() required: boolean;
    @Prop() requiredText: string = 'Required';
    @Prop({ mutable: true }) invalid: boolean = false;
    @Prop() disabled: boolean;
    @Prop() type: 'text' | 'tel' | 'url' | 'password' | 'date' | 'email' | 'search' | 'number' | 'hidden' = 'text';
    @Prop({ mutable: true }) value?: string | number | null = '';
    @Prop() pattern?: string;
    @Prop() min?: number;
    @Prop() max?: number;
    @Prop() step?: number;
    @Prop() minlength?: number;
    @Prop() maxlength?: number;
    @Prop() autocomplete?: string;
    @Prop() defaultErrorMessage: string = 'The value entered is not valid.';
    @Prop() badInputErrorMessage: string = 'There was a problem processing the value.';
    @Prop() patternErrorMessage: string = 'There was a problem processing the value.';
    @Prop() maxErrorMessage: string = `Your value must be no greater than ${this.max}.`;
    @Prop() minErrorMessage: string = `Your value must be no less than ${this.min}.`;
    @Prop() stepErrorMessage: string = `Your value must be divisible by ${this.step}.`;
    @Prop() maxlengthErrorMessage: string = `Your value must be less than ${this.maxlength} characters.`;
    @Prop() minlengthErrorMessage: string = `Your value must be greater than ${this.minlength} characters.`;
    @Prop() typeErrorMessage: string = `Your value must be a valid ${this.type === 'tel' ? 'telephone number' : this.type}.`;
    @Prop() requiredErrorMessage: string = `This field is required.`;

    @State() validityState: ValidityState;

    @Watch('value')
    protected valueChanged() {
        this.validityState = this.$input.validity;
        this.invalid = !this.$input.checkValidity();
        let detail = {
            validity: this.validityState,
            value: this.value == null ? this.value : this.value.toString()
        };
        this.updated.emit(detail);
        console.log(detail);
    }

    @Event() updated!: EventEmitter;

    private getErrorMessage(): string {
        if (!this.validityState || this.validityState.valid)
            return;

        switch (true) {
            case this.validityState.badInput === true:
                return this.badInputErrorMessage;
            case this.validityState.patternMismatch === true:
                return this.patternErrorMessage;
            case this.validityState.rangeOverflow === true:
                return this.maxErrorMessage;
            case this.validityState.rangeUnderflow === true:
                return this.minErrorMessage;
            case this.validityState.stepMismatch === true:
                return this.stepErrorMessage;
            case this.validityState.tooLong === true:
                return this.maxlengthErrorMessage;
            case this.validityState.tooShort === true:
                return this.minlengthErrorMessage;
            case this.validityState.typeMismatch === true:
                return this.typeErrorMessage;
            case this.validityState.valueMissing === true:
                return this.requiredErrorMessage;
            default:
                return this.defaultErrorMessage;
        }
    }

    private onInput = (ev: Event) => {
        const input = ev.target as HTMLInputElement | null;
        if (input) {
            this.value = input.value || '';
        }
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
    }

    render() {
        let fieldId = `form-input-${formFieldIds}`;
        let labelId = `form-label-${formFieldIds}`;
        let props = {
            'disabled': this.disabled,
            'required': this.required,
            'aria-invalid': this.invalid.toString()
        };
        let classes = {
            'form-field': true,
            'invalid': this.invalid,
        };
        let labelClasses = {
            'form-label': true
        };

        this.setProps(props);

        return (
            <Host class={classes}>
                <label id={labelId} class={labelClasses} htmlFor={fieldId}>
                    <span class="field-label">
                        {this.label}
                        {this.required && <abbr class="text-danger text-decoration-none" title={this.requiredText} aria-label={this.requiredText}>*</abbr>}
                        {(this.tooltipText && this.tooltipText !== '') && <ks-tooltip position="right" text={this.tooltipText} hide-decoration><ks-icon icon="info" class="text-info ml-xs text-xs" /></ks-tooltip>}
                    </span>
                    <span class="help-text">{this.helpText}</span>
                    <span class={`error-message text-danger`} role="alert" aria-live="assertive">
                        {this.invalid && <span class="display-flex align-center mb-xs">
                            <ks-icon icon="danger" class="mr-xs" />
                            {this.getErrorMessage()}
                        </span>}
                    </span>
                </label>
                <input
                    id={fieldId}
                    class="form-input"
                    type={this.type}
                    {...props}
                    value={this.value}
                    onInput={(e) => this.onInput(e)}
                    ref={el => this.$input = el}
                />
            </Host>
        );
    }
}

let formFieldIds = 0;