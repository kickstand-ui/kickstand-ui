import { Component, h, Prop, Host, State, Element, ComponentInterface } from '@stencil/core';
import componentUtils from '../../utils/componentUtils';

@Component({
    tag: 'c-spin-box'
})
export class SpinBox implements ComponentInterface {
    debouncedUpdate: Function;

    @Element() $el: HTMLElement;

    @Prop({mutable: true}) value: number = 0;
    @Prop() label: string;
    @Prop() min: number = 0;
    @Prop() max: number;
    @Prop() step: number = 1;
    @Prop() hideLabel: boolean;
    // @Prop() onChange: Function;

    @State() isUpdating: boolean;

    handleIncrease(): void {
        if (!this.max || this.value < this.max) {
            this.value += this.step;

            if (this.max && this.value > this.max) {
                this.value = this.max;
            }

            // this.onChange();
        }
    }

    handleDecrease(): void {
        if (this.value > this.min) {
            this.value -= this.step;

            if (this.value < this.min) {
                this.value = this.min;
            }

            // this.onChange();
        }
    }

    handleChange(): void {
        this.debouncedUpdate();
    }

    resetInput(): void {
        console.log('Blurred', typeof this.value !== 'number' || this.value > this.max || this.value < this.min);
        if (typeof this.value !== 'number' || this.value > this.max || this.value < this.min) {
            this.value = this.min;

            if (!this.isUpdating) {
                // this.onChange();
            }
        }
    }

    componentDidLoad() {
        this.debouncedUpdate = componentUtils.debounce(() => {
            if (typeof this.value === 'number') {
                this.isUpdating = true;
                // this.onChange();
                this.isUpdating = false;
            }
        }, 1000);
    }

    render() {
        let spinBoxId = `spin-box-${spinBoxIds++}`;
        let labelId = `${spinBoxId}-label`;
        let labelClasses = {
            'form-label': true,
            'sr-only': this.hideLabel
        };

        return (<Host class="spin-box">
            <label htmlFor={spinBoxId} class={labelClasses} id={labelId}>{this.label}</label>
            <div class="controls">
                <c-button
                    icon="fas fa-chevron-left"
                    onClick={() => this.handleDecrease()}
                    described-by={labelId}
                    hide-text>
                    add
                </c-button>
                <input type="number" id={spinBoxId} value={this.value} min={this.min} max={this.max} step={this.step} class="form-input" onChange={() => this.handleChange()} onBlur={() => this.resetInput()} />
                <c-button
                    icon="fas fa-chevron-right"
                    onClick={() => this.handleIncrease()}
                    described-by={labelId}
                    hide-text>
                    remove
                </c-button>
                <div class="sr-only" role="status" aria-live="polite">{this.value}</div>
            </div>
        </Host>);
    }
}

let spinBoxIds = 0;