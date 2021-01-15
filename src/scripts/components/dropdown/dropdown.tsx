import { Component, h, Prop, Host, Element, State, Listen, Method, Event, EventEmitter } from '@stencil/core';
import { FOCUSABLE_ELEMENTS } from '../../utils/componentUtils';

@Component({
    tag: 'ks-dropdown',
    styleUrl: 'dropdown.scss'
})
export class Dropdown {
    $contents: HTMLElement;
    $control: HTMLElement;
    $focusableEls: HTMLElement[];
    dropdownId = `dropdown_${dropdownIds++}`;

    @Element() $el: HTMLElement;

    @Prop() text: string;
    @Prop() position: 'left' | 'right' = 'left';
    @Prop() icon: string;
    @Prop() color: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' = 'primary';
    @Prop() display: 'solid' | 'hollow' | 'clear' | 'link' = 'solid';
    @Prop() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
    @Prop() loading: boolean;
    @Prop() disabled: boolean;
    @Prop() hideText: boolean = false;
    @Prop() hideIndicator: boolean = false;
    @Prop() megaMenu: boolean = false;
    @Prop() collapse: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'xs';

    @Event() shown: EventEmitter;
    @Event() hidden: EventEmitter;

    @State() isExpanded: boolean = false;
    @State() focusIndex: number = 0;

    @Method()
    async hide() {
        this.isExpanded = false;
        this.focusIndex = 0;
        this.hidden.emit();
        setTimeout(() => this.$control.focus());
    }

    @Method()
    async show() {
        this.isExpanded = true;
        this.shown.emit();

        if (this.$focusableEls.length > 0)
            setTimeout(() => this.$focusableEls[0].focus(), 100);
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

    @Listen('closeDropdown')
    handleCloseDropdown() {
        this.hide();
    }

    handleEsc() {
        this.hide();
    }

    handleTab(e: KeyboardEvent) {
        if (!this.isExpanded)
            return;

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
        this.$focusableEls = Array.from(this.$contents.querySelectorAll(FOCUSABLE_ELEMENTS));

        window.addEventListener('click', (e: MouseEvent) => {
            let $preventCloseElements = Array.from(document.querySelectorAll('.prevent-dropdown-close'));
            let isPreventClose = this.$el.contains(e.target as HTMLElement)
                || $preventCloseElements.some(x => x.contains(e.target as HTMLElement));

            if (isPreventClose)
                return;

            this.hide();
        });
    }

    toggleDropdown() {
        if (this.loading || this.disabled)
            return;

        if (this.isExpanded) {
            this.hide();
        } else {
            this.show();
        }
    }

    render() {
        let dropDownClasses = {
            'ks-dropdown': true,
            'show-contents': this.isExpanded,
            'mega-menu': this.megaMenu
        };

        let contentClasses = {
            'contents': true,
            'mega-menu-contents': this.megaMenu,
            'dropdown-contents': !this.megaMenu,
            [`align-${this.position}`]: !this.megaMenu,
            [`collapse-${this.collapse}`]: !this.megaMenu
        };

        return (
            <Host class={dropDownClasses}>
                <ks-button
                    id={`${this.dropdownId}-button`}
                    color={this.color}
                    display={this.display}
                    size={this.size}
                    loading={this.loading}
                    disabled={this.disabled}
                    button-class="dropdown-button"
                    haspopup={true}
                    expanded={this.isExpanded}
                    controls={this.dropdownId}
                    onClick={() => this.toggleDropdown()}
                    ref={el => this.$control = el.querySelector('button')}
                >
                    {this.icon && <ks-icon icon={this.icon} />}
                    <span class={`dropdown-text ${this.hideText ? 'sr-only' : ''}`}>{this.text}</span>
                    {!this.hideIndicator && <ks-icon icon="chevron_down" class="dropdown-icon" />}
                </ks-button>
                <div
                    id={this.dropdownId}
                    class={contentClasses}
                    role={this.megaMenu ? undefined : 'list'}
                    aria-labelledby={`${this.dropdownId}-button`}
                    ref={el => this.$contents = el}
                >
                    <slot />
                </div>
            </Host>
        );
    }
}

let dropdownIds = 0;