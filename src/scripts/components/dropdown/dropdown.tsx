import { Component, h, Prop, Host, Element, State, Listen } from '@stencil/core';
import componentUtils from '../../utils/componentUtils';

@Component({
    tag: 'c-dropdown'
})
export class Dropdown {
    dropdownId = componentUtils.uniqueId();
    $contents: HTMLElement;
    $control: HTMLElement;
    $focusableEls: HTMLElement[];

    @Element() $el: HTMLElement;

    @Prop() dropdownText: string;
    @Prop() dropdownAlignment: string;
    @Prop() buttonIcon: string;
    @Prop() buttonType: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link' = 'primary';
    @Prop() hollowButton: boolean;
    @Prop() clearButton: boolean;
    @Prop() hideButtonText: boolean;
    @Prop() megaMenu: boolean;

    @State() isExpanded: boolean = false;
    @State() focusIndex: number = 0;

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
        this.close();
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


    componentDidRender() {
        this.$focusableEls = Array.from(this.$contents.querySelectorAll(componentUtils.focusableElements));

        window.addEventListener('click', (e: any) => {
            let isChildElement = this.$el.contains(e.target)

            if (isChildElement)
                return;

            this.isExpanded = false;
        });
    }

    toggleDropdown() {
        this.isExpanded = !this.isExpanded;

        if (this.isExpanded && this.$focusableEls.length > 0)
            setTimeout(() => this.$focusableEls[0].focus(), 100);
    }

    close() {
        this.isExpanded = false;
        this.focusIndex = 0;
        this.$control.setAttribute("aria-expanded", "false");
        setTimeout(() => this.$control.focus());
    }

    render() {
        return (
            <Host class={{
                'dropdown': true,
                'mega-menu': this.megaMenu
            }}>
                <c-button onClick={this.toggleDropdown.bind(this)} type={this.buttonType} hollow={this.hollowButton} clear={this.clearButton} class={`button ${this.buttonType} ${this.hollowButton && 'hollow'} dropdown-button`} aria-haspopup="true" aria-expanded={`${this.isExpanded}`} aria-controls={`dropdown-${this.dropdownId}`} ref={el => this.$control = el}>
                    {this.buttonIcon && <i class={`button-icon ${this.buttonIcon}`}></i>}
                    <span class={{
                        'dropdown-text': true,
                        'sr-only': this.hideButtonText
                    }}>{this.dropdownText}</span>
                    <i class="fas fa-chevron-down dropdown-icon"></i>
                </c-button>
                <div id={`dropdown-${this.dropdownId}`} class={this.megaMenu ? 'mega-menu-contents' : `dropdown-contents align-${this.dropdownAlignment}`} role={this.megaMenu ? '' : 'list'} tabindex="-1" ref={el => this.$contents = el}>
                    <slot />
                </div>
            </Host>
        );
    }
}