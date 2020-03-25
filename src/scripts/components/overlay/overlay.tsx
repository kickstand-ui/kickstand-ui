import { Component, h, Prop, Method, Host, State, Element, Listen } from '@stencil/core';
import componentUtils from '../../utils/componentUtils';

@Component({
    tag: 'c-overlay'
})
export class Overlay {
    $focusableEls: HTMLElement[];
    $focusedElBeforeOpen: HTMLElement;

    @Element() $el: HTMLElement;

    @Prop() titleId: string;
    @Prop() absolute: boolean;
    @Prop() theme: 'dark' | 'light' = 'dark';
    @Prop() dismissible: boolean = true;

    @State() focusIndex: number = 0;
    @State() isShowing: boolean = false;

    @Method()
    async show() {
        this.$focusedElBeforeOpen = document.activeElement as HTMLElement;
        this.$focusedElBeforeOpen.setAttribute("aria-expanded", "true");
        this.isShowing = true;

        if(this.$focusableEls.length > 0)
            setTimeout(() => this.$focusableEls[0].focus(), 100);
    }

    @Method()
    async hide() {
        this.isShowing = false;
        this.focusIndex = 0;
        this.$focusedElBeforeOpen.setAttribute("aria-expanded", "false");
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
                this.handleEsc();
                break;
            default:
                break;
        }
    }

    handleEsc() {
        if (this.dismissible)
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
        if (this.dismissible)
            this.hide();
    }

    componentDidLoad() {
        this.$focusableEls = Array.from(this.$el.querySelectorAll(componentUtils.focusableElements));
    }

    render() {
        let classes = {
            'overlay': true,
            [this.theme]: true,
            'absolute': this.absolute,
            'opened': this.isShowing
        };

        return (<Host class={classes}>
            <div class="scrim" onClick={() => this.handleScrimClick()}></div>
            <div class="content" role="dialog" aria-labelledby={this.titleId}>
                <slot />
            </div>
        </Host>);
    }
}