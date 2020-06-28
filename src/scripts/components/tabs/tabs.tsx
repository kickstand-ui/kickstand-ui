import { Component, h, Prop, Host, Element } from '@stencil/core';

@Component({
    tag: 'ks-tabs',
    styleUrl: 'tabs.scss'
})
export class Tabs {
    $panels: HTMLKsTabPanelElement[];
    $tabs: HTMLKsTabElement[];
    $tabLinks: HTMLAnchorElement[];
    $tabList: HTMLElement;
    $firstTab: HTMLElement;
    $firstPanel: HTMLElement;
    $selectedTab: HTMLElement = null;
    selectedIndex: number = 0;
    tabId: string = `tabs-${tabsIds++}`;
    
    @Element() $el: HTMLElement;

    @Prop() position: 'top' | 'bottom' | 'left' | 'right' = 'top';

    componentDidLoad() { 
        this.initElements();
        this.initTabs();
    }

    initElements() {
        this.$panels = Array.from(this.$el.querySelectorAll('ks-tab-panel')) as HTMLKsTabPanelElement[];
        this.$tabs = Array.from(this.$el.querySelectorAll('ks-tab')) as HTMLKsTabElement[];
        this.$tabLinks = Array.from(this.$el.querySelectorAll('.tab-link'));
        this.$tabList = this.$el.querySelector('.tab-list');
        this.$firstTab = this.$el.querySelector('.tab-link');
        this.$firstPanel = this.$el.querySelector('.tab-panel');
    }

    initTabs() {
        if (this.$tabLinks.length === 0)
            return;
        
        this.$panels.forEach((panel, index) => {
            panel.hidden = true;
            panel.tabId = `${this.tabId}-${index}`;
        });

        this.setFirstTab();

        this.$tabLinks.forEach((x) => {
            x.addEventListener('click', (e) => this.clickHandler(e));
        });

        this.$tabs.forEach((tab, index) => {
            tab.controls = `${this.tabId}-${index}`;
        });
    }

    setFirstTab() {
        this.$firstTab.setAttribute('aria-selected', 'true');
        this.$firstPanel.hidden = false;
    }

    clickHandler(e) {
        e.preventDefault();

        this.$selectedTab = this.$tabList.querySelector('[aria-selected="true"]');

        if (e.currentTarget !== this.$selectedTab) {
            this.switchTab(this.$selectedTab, e.currentTarget);
        }
    }

    switchTab($oldTab, $newTab) {
        this.resetOldTab($oldTab);
        this.setNewTab($newTab);
    }

    setNewTab($newTab) {
        $newTab.focus();
        $newTab.setAttribute('tabindex', '0');
        $newTab.setAttribute('aria-selected', 'true');

        this.selectedIndex = this.$tabLinks.indexOf($newTab);
        this.$panels[this.selectedIndex].hidden = false;
    }

    resetOldTab($oldTab) {
        $oldTab.removeAttribute('aria-selected');

        let index = this.$tabLinks.indexOf($oldTab);
        this.$panels[index].hidden = true;
    }

    getKeyDirection(e) {
        let index = this.$tabLinks.indexOf(e.currentTarget);

        switch (e.which) {
            case 37:
                return index - 1 < 0 ? this.$tabLinks.length - 1 : index - 1;
            case 39:
                return index + 1 > this.$tabLinks.length - 1 ? 0 : index + 1;
            case 40:
                return -1;
            default:
                return null;
        }
    }

    render() {
        return (
            <Host class={`tabs align-${this.position}`}>
                <slot />
            </Host>
        );
    }
}

let tabsIds = 0;