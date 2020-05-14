import { Component, h, Prop, ComponentInterface, Host, Watch, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'ks-form-field'
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
    @Prop() type: 'text' | 'tel' | 'url' | 'password' | 'date' | 'email' | 'search' | 'number' | 'hidden' | 'spin-box' = 'text';
    @Prop({ mutable: true }) value?: string | number | null = '';
    @Prop() min?: number;
    @Prop() max?: number;
    @Prop() step?: number;

    @Watch('value')
    protected valueChanged() {
        this.updated.emit({ value: this.value == null ? this.value : this.value.toString() });
        console.log(this.value)
    }

    @Event() updated!: EventEmitter;

    private onInput = (ev: Event) => {
        const input = ev.target as HTMLInputElement | null;
        if (input) {
            this.value = input.value || '';
        }
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
            'form-label': true,
            'pl-none': this.type === 'spin-box'
        };

        return (        
            <Host class={classes}>
                <label id={labelId} class={labelClasses} htmlFor={fieldId}>
                    <span class="field-label">
                        {this.label}
                        {this.required && <abbr class="text-danger text-decoration-none" title={this.requiredText}>*</abbr>}
                        {(this.tooltipText && this.tooltipText !== '') && <ks-tooltip position="right" text={this.tooltipText} hide-decoration><ks-icon icon="info" class="text-info ml-sm text-xs" /></ks-tooltip>}
                    </span>
                    <span class="help-text">{this.helpText}</span>
                    <span class="error-message text-danger" role="alert" aria-live="assertive">
                        {(this.invalid && this.errorMessage) && <span><ks-icon icon="danger" class="mr-xs" />{this.errorMessage}</span>}
                    </span>
                </label>
                {this.type === 'spin-box'
                    ? <ks-spin-box
                        value={Number(this.value)}
                        min={this.min}
                        max={this.max}
                        step={this.step}
                        label-id={labelId}
                        spin-box-id={fieldId}
                    >
                    </ks-spin-box>
                    : <input
                        id={fieldId}
                        class="form-input"
                        type={this.type}
                        placeholder={this.placeholder}
                        min={this.min}
                        max={this.max}
                        step={this.step}
                        {...props}
                        value={this.value}
                        onInput={(e) => this.onInput(e)}
                    />
                }
            </Host>
        );
    }
}

let formFieldIds = 0;