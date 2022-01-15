import { Component, h, Prop, Host, State, Element, ComponentInterface, Watch, Event, EventEmitter, Method } from '@stencil/core';
import { FormFieldValue, ICustomInput, IFormFieldData } from '../form-field';

@Component({
    tag: 'ks-spin-box',
    styleUrl: 'spin-box.scss'
})
export class SpinBox implements ComponentInterface, ICustomInput {
    debouncedUpdate: Function;
    $input: HTMLInputElement;

    @Element() $el: HTMLElement;

    @Prop({ mutable: true }) value?: FormFieldValue = 0;
    @Prop() min: number;
    @Prop() max: number;
    @Prop() step: number = 1;
    @Prop() name: string;
    @Prop() inputId: string;
    @Prop() required: boolean = false;
    @Prop() disabled: boolean = false;
    @Prop({ mutable: true }) invalid: boolean = false;
    @Prop() size: 'sm' | 'md' | 'lg' = 'md';
    @Prop() inputClass: string;

    @State() isUpdating: boolean;
    @State() isValid: boolean = true;

    @Watch('value')
    protected valueChanged() {
        this.updated.emit(this.validateField());
    }

    @Event() updated!: EventEmitter;

    @Method()
    async validate() {
        return this.validateField();
    }

    private validateField() {
        this.isValid = this.$input.checkValidity();
        this.invalid = !this.isValid;

        let fieldData: IFormFieldData = {
            name: this.name,
            value: this.value,
            isValid: this.isValid,
            validity: this.$input.validity
        };

        return fieldData;
    }

    private getValue(): string {
        return this.value.toString();
    }

    private decreaseClickHandler() {
        if (this.disabled)
            return;

        this.$input.stepDown();
        this.value = Number(this.$input.value);
    }

    private increaseClickHandler() {
        if (this.disabled)
            return;

        this.$input.stepUp();
        this.value = Number(this.$input.value);
    }

    private inputHandler() {
        if (this.disabled)
            return;

        this.value = Number(this.$input.value);
    }

    private onBlurHandler() {
        this.updated.emit(this.validateField());
    }

    render() {
        let value = this.getValue();

        return (<Host class={`size-${this.size}`}>
            <button
                class="control"
                onClick={() => this.decreaseClickHandler()}
                disabled={this.disabled}
            >
                <ks-icon icon="minus" label="remove" />
            </button>
            <input
                type="number"
                class={`form-input ${this.inputClass ? this.inputClass : ''}`}
                id={this.inputId}
                min={this.min}
                max={this.max}
                step={this.step}
                value={value}
                required={this.required}
                disabled={this.disabled}
                aria-invalid={!this.disabled && this.invalid.toString()}
                onBlur={() => this.onBlurHandler()}
                onInput={() => this.inputHandler()}
                ref={(e) => this.$input = e}
            />
            <button
                class="control"
                onClick={() => this.increaseClickHandler()}
                disabled={this.disabled}
            >
                <ks-icon icon="plus" label="add" />
            </button>
            <div class="sr-only" role="status" aria-live="polite">{this.value}</div>
        </Host>);
    }
}