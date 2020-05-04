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
    // @Prop() onChange: Function;

    @State() isUpdating: boolean;

    @Watch('value')
    protected valueChanged() {
    //   this.emitStyle();
      this.ionChange.emit({ value: this.value == null ? this.value : this.value.toString() });
    }

    @Event() ionChange!: EventEmitter;

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
            <input type="number" id={this.spinBoxId} value={this.value} min={this.min} max={this.max} step={this.step} class="form-input" onChange={() => this.handleChange()} onBlur={() => this.resetInput()} />
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