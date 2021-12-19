import { Component, h, Prop, Element, ComponentInterface, Method, State, Event, EventEmitter } from '@stencil/core';
import { IDismissible } from '../../utils/componentUtils';

@Component({
    tag: 'ks-side-drawer',
    styleUrl: 'side-drawer.scss'
})
export class SideDrawer implements ComponentInterface, IDismissible {
    $overlay: HTMLKsOverlayElement;
    $drawer: HTMLElement;

    @Element() $el: HTMLElement;

    @Prop() heading: string;
    @Prop() position: 'left' | 'right' = 'left';
    @Prop() size: 'sm' | 'md' | 'lg' | 'xl' = 'sm';

    @Event() shown!: EventEmitter;
    @Event() hidden!: EventEmitter;

    @State() isShowing: boolean;

    @Method()
    async hide() {
        this.isShowing = false;
        await this.$overlay.hide();
        this.hidden.emit();
    }

    @Method()
    async show() {
        await this.$overlay.show();
        this.isShowing = true;
        this.shown.emit();
    }

    componentDidRender() {
        const $scrim = this.$overlay.querySelector('.scrim');
        $scrim.addEventListener('click', () => this.hide());
    }

    overlayHiddenHandler() {
        this.isShowing = false;
    }

    render() {
        let classes = {
            'ks-side-drawer': true,
            [`size-${this.size}`]: true,
            [this.position]: true,
            'show': this.isShowing
        }
        return (
            <ks-overlay onHidden={() => this.overlayHiddenHandler()} ref={el => this.$overlay = el}>
                <aside class={classes} ref={el => this.$drawer = el}>
                    <header class="drawer-header">
                        <h3 class="drawer-title">{this.heading}</h3>
                        <ks-button onClick={() => this.hide()} class="drawer-close" color="dark" display="clear" button-class="p-xs">
                            <ks-icon icon="times" label="Close Modal" />
                        </ks-button>
                    </header>
                    <div class="drawer-body">
                        <slot />
                    </div>
                </aside>
            </ks-overlay>
        );
    }
}