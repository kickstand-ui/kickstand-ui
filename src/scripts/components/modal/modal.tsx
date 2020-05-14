import { Component, h, Prop, ComponentInterface, Element, Method } from '@stencil/core';

@Component({
    tag: 'ks-modal'
})
export class Modal implements ComponentInterface {
    $overlay: HTMLKsOverlayElement;

    @Element() $el: HTMLElement;

    @Prop() titleId: string;
    @Prop() modalTitle: string;
    @Prop() dismissible: boolean = true;
    @Prop() size: 'sm' | 'md' | 'lg' = 'md';

    @Method()
    async show() {
        await this.$overlay.show();
    }

    @Method()
    async hide() {
        await this.$overlay.hide();
    }


    render() {
        return (
            <ks-overlay title-id={this.titleId} ref={el => this.$overlay = el} dismissible={this.dismissible}>
                <div class={`modal size-${this.size}`}>
                    <header class="modal-header">
                        <h3 class="modal-title" id={this.titleId}>{this.modalTitle}</h3>
                        {this.dismissible && <ks-button onClick={() => this.hide()} display="clear" class="modal-close">
                            <span class="sr-only">Close Modal</span>
                            <ks-icon icon="close" />
                        </ks-button>}
                    </header>
                    <div class="modal-content">
                        <slot />
                    </div>
                </div>
            </ks-overlay>
        );
    }
}