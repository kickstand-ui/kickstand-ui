import { Component, h, Prop, Host, State, Element, ComponentInterface, Watch, Event, EventEmitter, Method } from '@stencil/core';
import { ICustomInput, IFormFieldData } from '../form-field';

@Component({
    tag: 'ks-spin-box',
    styleUrl: 'spin-box.scss'
})
export class SpinBox implements ComponentInterface, ICustomInput {
    debouncedUpdate: Function;
    $input: HTMLInputElement;

    @Element() $el: HTMLElement;

    @Prop({ mutable: true }) value?: string | number | boolean | any[] | null = 0;
    @Prop() min: number = 0;
    @Prop() max: number;
    @Prop() step: number = 1;
    @Prop() name: string;
    @Prop() inputId: string;
    @Prop() required: boolean = false;
    @Prop() disabled: boolean = false;
    @Prop({ mutable: true }) invalid: boolean = false;

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
            isValid: this.isValid,
            value: this.value,
            validity: this.$input.validity,
            name: this.name
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

    private onBlurHandler() {
        this.updated.emit(this.validateField());
    }

    render() {
        let value = this.getValue();

        return (<Host class="ks-spin-box">
            <ks-button
                display="clear"
                onClick={() => this.decreaseClickHandler()}
                disabled={this.disabled}
            >
                <ks-icon icon="minus" label="remove" />
            </ks-button>
            <input
                type="number"
                class="form-input"
                id={this.inputId}
                min={this.min}
                max={this.max}
                step={this.step}
                value={value}
                required={this.required}
                disabled={this.disabled}
                aria-invalid={!this.disabled && this.invalid.toString()}
                onBlur={() => this.onBlurHandler()}
                ref={(e) => this.$input = e}
            />
            <ks-button
                display="clear"
                onClick={() => this.increaseClickHandler()}
                disabled={this.disabled}
            >
                <ks-icon icon="plus" label="add" />
            </ks-button>
            <div class="sr-only" role="status" aria-live="polite">{this.value}</div>
        </Host>);
    }
}