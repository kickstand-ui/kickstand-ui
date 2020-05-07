import { Component, h, Prop, Host, State, Element, ComponentInterface, Watch, Event, EventEmitter } from '@stencil/core';
import componentUtils from '../../utils/componentUtils';

@Component({
    tag: 'c-spin-box'
})
export class SpinBox implements ComponentInterface {
    debouncedUpdate: Function;

    @Element() $el: HTMLElement;

    @Prop({ mutable: true }) value: number = 0;
    @Prop() min: number = 0;
    @Prop() max: number;
    @Prop() step: number = 1;
    @Prop() labelId: string;
    @Prop() spinBoxId: string;

    @State() isUpdating: boolean;

    @Watch('value')
    protected valueChanged() {
        this.updated.emit({ value: this.value == null ? this.value : this.value.toString() });
    }

    @Event() updated!: EventEmitter;

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

    resetInput(e): void {
        switch (true) {
            case typeof this.value !== 'number':
                this.value = 0;
                break;
            case this.max && this.value > this.max:
                this.value = this.max;
                break;
            case this.min && this.value < this.min:
                this.value = this.min;
                break;
            default:
                this.value = e.target.value;
                break;
        }
        console.log('Blurred', this.value);
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
        return (<Host class="spin-box">
            <c-button
                color="light"
                icon="fas fa-chevron-left"
                onClick={() => this.handleDecrease()}
                described-by={this.labelId}
                hide-text
                tab-index="-1"
            >
                add
                </c-button>
            <input
                type="number"
                class="form-input"
                id={this.spinBoxId}
                min={this.min}
                max={this.max}
                step={this.step}
                value={this.value}
                onChange={() => this.handleChange()}
                onBlur={(e) => this.resetInput(e)}
            />
            <c-button
                color="light"
                icon="fas fa-chevron-right"
                onClick={() => this.handleIncrease()}
                described-by={this.labelId}
                hide-text
                tab-index="-1"
            >
                remove
                </c-button>
            <div class="sr-only" role="status" aria-live="polite">{this.value}</div>
        </Host>);
    }
}