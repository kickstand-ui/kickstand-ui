import { Component, h, Prop, Host, Element, State, ComponentInterface } from '@stencil/core';
import { keyCodes } from '../../utils/componentUtils';

@Component({
    tag: 'ks-tabs',
    styleUrl: 'tabs.scss'
})
export class Tabs implements ComponentInterface {
    $tabPanels: HTMLKsTabElement[];
    $tabs: HTMLButtonElement[];
    $tabList: HTMLElement;
    $selectedTab: HTMLElement = null;
    tabId: string = `tabs_${tabsIds++}`;

    @Element() $el: HTMLElement;

    @Prop() position: 'top' | 'bottom' | 'left' | 'right' = 'top';
    @Prop() align: 'start' | 'center' | 'end' | 'justified' = 'start';
    @Prop() label: string;

    @State() selectedIndex: number = 0;

    connectedCallback() {
        this.initElements();
        this.initTabs();
    }

    componentDidLoad() {
        this.$tabs = Array.from(this.$el.querySelectorAll('[role="tab"]')) as HTMLButtonElement[];
    }

    initElements() {
        this.$tabPanels = Array.from(this.$el.querySelectorAll('ks-tab')) as HTMLKsTabElement[];
    }

    initTabs() {
        if (this.$tabPanels.length === 0)
            return;

        this.$tabPanels.forEach((tab, index) => {
            tab.hidden = index > 0;
            tab.id = tab.id || `${this.tabId}_tab_${index}`;
            tab.setAttribute('aria-labelledby', `${tab.id || `${this.tabId}_tab_${index}`}_button`);
        });
    }

    clickHandler(e: UIEvent, index: number) {
        let $tab = e.target as HTMLButtonElement;
        this.selectedIndex = index;

        // Remove all current selected tabs
        this.$tabList
            .querySelectorAll('[aria-selected="true"]')
            .forEach(t => t.setAttribute("aria-selected", 'false'));

        // Set this tab as selected
        $tab.setAttribute("aria-selected", 'true');

        // Hide all tab panels
        this.$tabPanels.forEach(p => p.setAttribute("hidden", 'true'));

        // Show the selected panel
        this.$tabPanels[index].removeAttribute('hidden');
    }

    keydownHandler(e) {
        if (e.keyCode !== keyCodes.RIGHT_ARROW && e.keyCode !== keyCodes.LEFT_ARROW)
            return;

        this.deselectTab();

        e.keyCode === keyCodes.RIGHT_ARROW 
            ? this.goToNextTab() 
            : this.goToPreviousTab();

        this.selectTab();
    }

    goToNextTab() {
        this.selectedIndex++;
        // If it's the last tab, go to the first
        if (this.selectedIndex >= this.$tabs.length) {
            this.selectedIndex = 0;
        }
    }

    goToPreviousTab() {
        this.selectedIndex--;
        // If it's the first tab, move to the last
        if (this.selectedIndex < 0) {
            this.selectedIndex = this.$tabs.length - 1;
        }
    }

    deselectTab() {
        this.$tabs[this.selectedIndex].setAttribute("tabindex", '-1');
        this.$tabs[this.selectedIndex].setAttribute("aria-selected", 'false');
        this.$tabPanels[this.selectedIndex].setAttribute("hidden", 'true');
    }

    selectTab() {
        this.$tabs[this.selectedIndex].setAttribute("tabindex", '0');
        this.$tabs[this.selectedIndex].setAttribute("aria-selected", 'true');
        this.$tabPanels[this.selectedIndex].removeAttribute("hidden");
        this.$tabs[this.selectedIndex].focus();
    }

    render() {
        return (
            <Host class={`ks-tabs align-${this.position}`}>
                <div
                    role="tablist"
                    class={`tab-list justify-${this.align}`}
                    aria-label={this.label}
                    ref={el => this.$tabList = el}
                    onKeyDown={e => this.keydownHandler(e)}
                >
                    {this.$tabPanels.map((tab, index) =>
                        <button
                            role="tab"
                            class="tab-item"
                            aria-selected={`${index === 0}`}
                            aria-controls={tab.id || `${this.tabId}_tab_${index}`}
                            id={`${tab.id || `${this.tabId}_${index}`}_button`}
                            tabIndex={index === 0 ? 0 : -1}
                            onClick={e => this.clickHandler(e, index)}
                        >
                            {tab.tabText}
                        </button>
                    )}
                </div>
                <slot />
            </Host>
        );
    }
}

let tabsIds = 0;