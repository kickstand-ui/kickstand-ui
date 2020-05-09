import { Component, h, Prop, Host, State, Element, ComponentInterface, Watch, Event, EventEmitter } from '@stencil/core';
import componentUtils from '../../utils/componentUtils';

@Component({
    tag: 'ks-spin-box'
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

    private onInput = (ev: Event) => {
        this.debouncedUpdate();
        this.validateInput(ev);
    }

    private handleIncrease(): void {
        if (!this.max || this.value < this.max) {
            this.value += this.step;

            if (this.max && this.value > this.max) {
                this.value = this.max;
            }
        }
    }

    private handleDecrease(): void {
        if (this.value > this.min) {
            this.value -= this.step;

            if (this.value < this.min) {
                this.value = this.min;
            }
        }
    }

    private validateInput(e: Event): void {
        const input = e.target as HTMLInputElement | null;

        if (input) {
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
                    this.value = Number(input.value) || 0;
                    break;
            }
        }
    }

    private getValue(): string {
        return typeof this.value === 'number' ? this.value.toString() :
            (this.value || '').toString();
    }

    componentDidLoad() {
        this.debouncedUpdate = componentUtils.debounce(() => {
            if (typeof this.value === 'number') {
                this.isUpdating = true;
                this.isUpdating = false;
            }
        }, 1000);
    }

    render() {
        let value = this.getValue();

        return (<Host class="spin-box">
            <ks-button
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
                value={value}
                onInput={(e) => this.onInput(e)}
                onKeyUp={(e) => this.validateInput(e)}
                onBlur={(e) => this.validateInput(e)}
            />
            <ks-button
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