import { Component, h, Prop, Element, ComponentInterface, Method, State } from '@stencil/core';

@Component({
    tag: 'c-side-drawer'
})
export class SideDrawer implements ComponentInterface {
    $overlay: HTMLCOverlayElement;
    $drawer: HTMLElement;

    @Element() $el: HTMLElement;

    @Prop() position: 'left' | 'right' = 'left';
    @Prop() size: 'sm' | 'md' | 'lg' | 'xl' = 'sm';
    @Prop() name: string;
    @Prop() headerText: string;

    @State() isShowing: boolean;

    @Method()
    async hide() {
        this.isShowing = false;
        await this.$overlay.hide()
    }

    @Method()
    async show() {
        await this.$overlay.show();
        this.isShowing = true;
    }

    componentDidRender() {
        const $scrim = this.$overlay.querySelector('.scrim');
        $scrim.addEventListener('click', () => {
            this.hide();
        });
    }

    render() {
        let classes = {
            'side-drawer': true,
            [`size-${this.size}`]: true,
            [this.position]: true,
            'show': this.isShowing
        }
        return (
            <c-overlay ref={el => this.$overlay = el}>
                <aside class={classes} ref={el => this.$drawer = el}>
                    <header class="drawer-header">
                        <h3 class="drawer-title">{this.headerText}</h3>
                        <c-button onClick={() => this.hide()} class="drawer-close" display="clear">
                            <span class="sr-only">Close Drawer</span>
                            <i class="fal fa-times"></i>
                        </c-button>
                    </header>
                    <div class="drawer-body">
                        <slot />
                    </div>
                </aside>
            </c-overlay>
        );
    }
}