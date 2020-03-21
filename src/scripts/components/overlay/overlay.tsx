import { Component, h, Prop, Method, Host, State, Element, Listen } from '@stencil/core';
import componentUtils from '../../utils/componentUtils';

@Component({
    tag: 'c-overlay'
})
export class Overlay {
    $focusableEls: HTMLElement[];
    $firstFocusableEl: HTMLElement;
    $lastFocusableEl: HTMLElement;
    $focusedElBeforeOpen: HTMLElement;

    @Element() $el: HTMLElement;

    @Prop() titleId: string;
    @Prop() descriptionId: string;
    @Prop() absolute: boolean;
    @Prop() theme: 'dark' | 'light' = 'dark';
    @Prop() requireResponse: boolean;

    @State() isShowing: boolean = false;

    @Method()
    async show() {
        this.$focusedElBeforeOpen = document.activeElement as HTMLElement;
        this.isShowing = true;
        setTimeout(() => this.$firstFocusableEl.focus(), 100);
        console.log(document.activeElement);
    }

    @Method()
    async hide() {
        this.isShowing = false;
        this.$focusedElBeforeOpen.focus();
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
                if (!this.requireResponse)
                    this.hide();
                break;
            default:
                break;
        }
    }

    isAbsolute() {
        return this.absolute ? 'absolute' : '';
    }

    handleTab(e: KeyboardEvent) {
        if (this.$focusableEls.length === 1) {
            e.preventDefault();
            return;
        }

        if (e.shiftKey) {
            this.handleBackwardTab(e);
        } else {
            this.handleForwardTab(e);
        }
    }

    handleBackwardTab(e: KeyboardEvent) {
        if (document.activeElement === this.$firstFocusableEl) {
            e.preventDefault();
            this.$lastFocusableEl.focus();
        }
    }

    handleForwardTab(e: KeyboardEvent) {
        if (document.activeElement === this.$lastFocusableEl) {
            e.preventDefault();
            this.$firstFocusableEl.focus();
        }
    }

    handleScrimClick() {
        if (!this.requireResponse)
            this.hide();
    }

    componentDidLoad() {
        this.$focusableEls = Array.from(this.$el.querySelectorAll(componentUtils.focusableElements));
        this.$firstFocusableEl = this.$focusableEls[0];
        this.$firstFocusableEl = this.$focusableEls.pop();
    }

    render() {
        return (<Host class={`overlay ${this.theme} ${this.absolute && 'absolute'} ${this.isShowing && 'opened'}`}>
            <div class="scrim" onClick={() => this.handleScrimClick()}></div>
            <div class="content" role="dialog" aria-labelledby={this.titleId} aria-describedby={this.descriptionId}>
                <slot />
            </div>
        </Host>);
    }
}