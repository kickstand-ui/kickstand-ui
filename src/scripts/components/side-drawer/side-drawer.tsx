import { Component, h, Prop, Element, EventEmitter, Event, ComponentInterface, Method, Host, State } from '@stencil/core';

@Component({
    tag: 'c-side-drawer'
})
export class SideDrawer implements ComponentInterface {
    @Element() $el: HTMLElement;

    @Prop() position: string = 'left';
    @Prop() name: string;
    @Prop() headerText: string;
    @Prop() onOpen: Function;
    @Prop() onClose: Function;

    @State() closeEventName: string = `close-side-drawer:${this.name}`;
    @State() openEventName: string = `open-side-drawer:${this.name}`;

    @Event({ eventName: this.closeEventName, bubbles: true }) closeDrawerCompleted: EventEmitter;
    @Event({ eventName: this.openEventName, bubbles: true }) openDrawerCompleted: EventEmitter;

    clickHandler(e: MouseEvent) {
        let isChildElement = this.$el.querySelector('.contents').contains(e.target as Element);

        if (isChildElement)
            return;

        this.closeDrawer();
    }

    keyUpHandler(e: KeyboardEvent) {
        if (e.keyCode === 27) {
            this.closeDrawer();
        }
    }

    closeDrawer() {
        this.$el.classList.remove('open');
        this.onClose();

        let $control = document.querySelector<HTMLElement>(`[aria-controls="${this.name}"]`);

        if ($control) {
            $control.setAttribute("aria-expanded", "false");
            $control.focus();
        }

        this.closeDrawerCompleted.emit();
    }

    @Method()
    open() {
        this.$el.classList.add('open');
        this.openDrawerCompleted.emit();
        let $control = document.querySelector(`[aria-controls="${this.name}"]`);

        if ($control)
            $control.setAttribute("aria-expanded", "true");

        this.$el.querySelector<HTMLElement>('.drawer-close').focus();
    }

    @Method()
    close() {
        this.closeDrawer();
    }

    render() {
        return (
            <Host id={this.name} class="side-drawer" onClick={this.clickHandler.bind(this)} onKeyup={this.keyUpHandler.bind(this)}>
                <aside class={`contents ${this.position}`} tabindex="-1">
                    <header class="side-drawer-header">
                        <h3>{this.headerText}</h3>
                        <button class="button drawer-close" onClick={this.closeDrawer.bind(this)}>
                            <span class="sr-only">close menu</span>
                            <i class="fal fa-times"></i>
                        </button>
                    </header>
                    <div class="side-drawer-body">
                        <slot />
                    </div>
                </aside>
            </Host>
        );
    }
}