import { Component, h, Prop, Method, Host, State, Element, Listen, Event, EventEmitter, ComponentInterface } from '@stencil/core';
import { FOCUSABLE_ELEMENTS, IDismissible } from '../../utils/componentUtils';

@Component({
    tag: 'ks-overlay',
    styleUrl: 'overlay.scss'
})
export class Overlay implements ComponentInterface, IDismissible {
    $focusableEls: HTMLElement[];
    $focusedElBeforeOpen: HTMLElement;
    $content: HTMLElement;

    @Element() $el: HTMLElement;

    @Prop() titleId: string;
    @Prop() absolute: boolean;
    @Prop() preventClose: boolean = false;

    @Event() shown!: EventEmitter;
    @Event() hidden!: EventEmitter;

    @State() focusIndex: number = 0;
    @State() isShowing: boolean = false;

    @Method()
    async show() {
        this.$focusedElBeforeOpen = document.activeElement as HTMLElement;
        this.$focusedElBeforeOpen && this.$focusedElBeforeOpen.setAttribute("aria-expanded", "true");
        this.isShowing = true;

        if(this.$focusableEls.length > 0)
            setTimeout(() => this.$focusableEls[0].focus(), 100);
        else
            setTimeout(() => this.$content.focus(), 100);

        this.shown.emit();
    }

    @Method()
    async hide() {
        this.isShowing = false;
        this.focusIndex = 0;

        if (this.$focusedElBeforeOpen) {
            this.$focusedElBeforeOpen.setAttribute("aria-expanded", "false");
            this.$focusedElBeforeOpen.focus();
        }

        this.hidden.emit();
    }

    @Listen('keydown')
    handleKeyDown(e: KeyboardEvent) {
        const KEY_TAB = 9;
        const KEY_ESC = 27;

        switch (e.keyCode) {
            case KEY_TAB:
                this.handleTab(e);
                break;
            case KEY_ESC:
                this.handleEsc();
                break;
            default:
                break;
        }
    }

    handleEsc() {
        if (!this.preventClose)
            this.hide();
    }

    handleTab(e: KeyboardEvent) {
        e.preventDefault();

        if (e.shiftKey) {
            this.handleBackwardTab();
        } else {
            this.handleForwardTab();
        }
    }

    handleBackwardTab() {
        this.focusIndex = this.focusIndex === 0 ? this.$focusableEls.length - 1 : --this.focusIndex;
        this.$focusableEls[this.focusIndex].focus();
    }

    handleForwardTab() {
        this.focusIndex = this.$focusableEls.length - 1 === this.focusIndex ? 0 : ++this.focusIndex;
        this.$focusableEls[this.focusIndex].focus();
    }

    handleScrimClick() {
        if (!this.preventClose)
            this.hide();
    }

    componentDidLoad() {
        this.$focusableEls = Array.from(this.$el.querySelectorAll(FOCUSABLE_ELEMENTS));
    }

    render() {
        let classes = {
            'absolute': this.absolute,
            'opened': this.isShowing
        };

        return (<Host class={classes}>
            <div class="scrim" onClick={() => this.handleScrimClick()}></div>
            <div class="content" role="dialog" aria-labelledby={this.titleId} aria-modal={`${this.isShowing}`} tabindex="-1" ref={el => this.$content = el}>
                <slot />
            </div>
        </Host>);
    }
}