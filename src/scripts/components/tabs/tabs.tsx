import { Component, h, Prop, Host, Element } from '@stencil/core';

@Component({
    tag: 'c-tabs'
})
export class Tabs {
    $panels: HTMLElement[];
    $tabs: HTMLElement[];
    $tabList: HTMLElement;
    $firstTab: HTMLElement;
    $firstPanel: HTMLElement;
    $selectedTab: HTMLElement = null;
    selectedIndex: number = 0;
    
    @Element() $el: HTMLElement;

    @Prop() position: string = 'top';

    componentDidLoad() { 
        this.initElements();
        this.initTabs();
    }

    initElements() {
        this.$panels = Array.from(this.$el.querySelectorAll('.tab-panel'));
        this.$tabs = Array.from(this.$el.querySelectorAll('.tab-link'));
        this.$tabList = this.$el.querySelector('.tab-list');
        this.$firstTab = this.$el.querySelector('.tab-link');
        this.$firstPanel = this.$el.querySelector('.tab-panel');
    }

    initTabs() {
        if (this.$tabs.length === 0)
            return;
        
        this.$panels.forEach(x => x.hidden = true);
        this.setFirstTab();

        this.$tabs.forEach(x => {
            x.addEventListener('keydown', (e) => this.keyupHandler(e));
            x.addEventListener('click', (e) => this.clickHandler(e));
        });
    }

    setFirstTab() {
        this.$firstTab.setAttribute('tabindex', '0');
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

    keyupHandler(e) {
        e.preventDefault();

        let direction = this.getKeyDirection(e);
        if (direction !== null) {
            if (direction === -1)
                this.$panels[this.selectedIndex].focus();
            else if (this.$tabs[direction])
                this.switchTab(e.currentTarget, this.$tabs[direction]);
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

        this.selectedIndex = this.$tabs.indexOf($newTab);
        this.$panels[this.selectedIndex].hidden = false;
    }

    resetOldTab($oldTab) {
        $oldTab.removeAttribute('aria-selected');
        $oldTab.setAttribute('tabindex', '-1');

        let index = this.$tabs.indexOf($oldTab);
        this.$panels[index].hidden = true;
    }

    getKeyDirection(e) {
        let index = this.$tabs.indexOf(e.currentTarget);

        switch (e.which) {
            case 37:
                return index - 1 < 0 ? this.$tabs.length - 1 : index - 1;
            case 39:
                return index + 1 > this.$tabs.length - 1 ? 0 : index + 1;
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