import { Component, h, Prop, Host, Element, State, Listen } from '@stencil/core';
import componentUtils from '../../utils/componentUtils';

@Component({
    tag: 'c-dropdown'
})
export class Dropdown {
    private dropdownId = componentUtils.uniqueId();

    @Element() $el: HTMLElement;

    @Prop() dropdownText: string;
    @Prop() dropdownAlignment: string;
    @Prop() buttonIcon: string;
    @Prop() buttonType: string = 'primary';
    @Prop() hollow: boolean;
    @Prop() hideButtonText: boolean;
    @Prop() megaMenu: boolean;

    @State() expanded: boolean = false;


    constructor() {
        window.addEventListener('click', (e: any) => {
            let isChildElement = this.$el.contains(e.target)

            if (isChildElement)
                return;

            this.expanded = false;
        });
    }

    @Listen('closeDropdown')
    closeDropdownHandler() {
        this.expanded = false;
    }

    private keyupHandler(e) {
        if (e.keyCode === 27) {
            this.expanded = false;
            this.$el.querySelector('button').focus();
        }
    }

    private toggleDropdown() {
        this.expanded = !this.expanded;

        if (this.expanded)
            this.setDropdownFocus();
    }

    private setDropdownFocus() {
        setTimeout(() => {
            const dropdownContents: any = this.$el.querySelector('.dropdown-contents') || this.$el.querySelector('.mega-menu-contents');
            dropdownContents.focus();
        });
    }

    render() {
        return (
            <Host class={{
                    'dropdown': true,
                    'mega-menu': this.megaMenu
                }}
                onKeyup={this.keyupHandler.bind(this)}>
                <button onClick={this.toggleDropdown.bind(this)} class={`button ${this.buttonType} ${this.hollow && 'hollow'} dropdown-button`} aria-haspopup="true" aria-expanded={`${this.expanded}`} aria-controls={`dropdown-${this.dropdownId}`}>
                    {this.buttonIcon && <i class={`button-icon ${this.buttonIcon}`}></i>}
                    <span class={{
                        'dropdown-text': true,
                        'sr-only': this.hideButtonText
                    }}>{this.dropdownText}</span>
                    <i class="fas fa-chevron-down dropdown-icon"></i>
                </button>
                <div id={`dropdown-${this.dropdownId}`} class={this.megaMenu ? 'mega-menu-contents' : `dropdown-contents align-${this.dropdownAlignment}`} role={this.megaMenu ? '' : 'list'} tabindex="-1">
                    <slot />
                </div>
            </Host>
        );
    }
}