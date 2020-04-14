import { Component, h, Prop, ComponentInterface, Host, Watch, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'c-form-field'
})
export class FormField implements ComponentInterface {

    @Prop() label: string;
    @Prop() helpText: string;
    @Prop() tooltipText: string;
    @Prop() errorMessage: string;
    @Prop() placeholder: string;
    @Prop() required: boolean;
    @Prop() requiredText: string = 'Required';
    @Prop() invalid: boolean = false;
    @Prop() disabled: boolean;
    @Prop() type: 'text' | 'tel' | 'url' | 'password' | 'date' | 'email' | 'search' | 'number' | 'hidden' = 'text';
    @Prop({ mutable: true }) value?: string | number | null = '';

    @Event() cOnChange!: EventEmitter;
    @Event() cOnInput!: EventEmitter;

    @Watch('value')
    protected valueChanged() {
        this.cOnChange.emit({ value: this.value == null ? this.value : this.value.toString() });
    }

    private onInput = (ev: Event) => {
        const input = ev.target as HTMLInputElement | null;
        if (input) {
            this.value = input.value || '';
        }
        this.cOnInput.emit(ev as KeyboardEvent);
    }

    private getValue(): string {
        return typeof this.value === 'number' ? this.value.toString() :
            (this.value || '').toString();
    }

    render() {
        let value = this.getValue();
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

        return (        
            <Host class={classes}>
                <label id={labelId} class="form-label" htmlFor={fieldId}>
                    <span class="field-label">
                        {this.label}
                        {this.required && <abbr class="text-danger text-decoration-none" title={this.requiredText}>*</abbr>}
                        {(this.tooltipText && this.tooltipText !== '') && <c-tooltip position="right" text={this.tooltipText} hide-decoration><i class="fas fa-question-circle text-info ml-sm"></i></c-tooltip>}
                    </span>
                    <span class="help-text">{this.helpText}</span>
                    <span class="error-message text-danger" role="alert" aria-live="assertive">
                        {(this.invalid && this.errorMessage) && <span><i class="fas fa-exclamation-triangle mr-xs"></i>{this.errorMessage}</span>}
                    </span>
                </label>
                <input
                    id={fieldId}
                    class="form-input"
                    type={this.type}
                    placeholder={this.placeholder}
                    {...props}
                    value={value}
                    onInput={this.onInput}
                />
            </Host>
        );
    }
}

let formFieldIds = 0;