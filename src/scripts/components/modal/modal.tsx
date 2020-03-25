import { Component, h, Prop, ComponentInterface, Element, Method } from '@stencil/core';

@Component({
    tag: 'c-modal'
})
export class Modal implements ComponentInterface {
    $overlay: HTMLCOverlayElement;

    @Element() $el: HTMLElement;

    @Prop() titleId: string;
    @Prop() modalTitle: string;
    @Prop() dismissible: boolean = true;

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
            <c-overlay title-id={this.titleId} ref={el => this.$overlay = el} dismissible={this.dismissible}>
                <div class="modal">
                    <header class="modal-header">
                        <h3 class="modal-title" id={this.titleId}>{this.modalTitle}</h3>
                        {this.dismissible && <c-button onClick={() => this.hide()} class="modal-close" clear>
                            <span class="sr-only">Close Modal</span>
                            <i class="fal fa-times"></i>
                        </c-button>}
                    </header>
                    <div class="modal-content">
                        <slot />
                    </div>
                </div>
            </c-overlay>
        );
    }
}