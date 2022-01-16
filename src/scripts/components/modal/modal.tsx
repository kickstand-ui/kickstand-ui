import { Component, h, Prop, ComponentInterface, Element, Method, Host, Event, EventEmitter } from '@stencil/core';
import { IDismissible } from '../../utils/componentUtils';

@Component({
    tag: 'ks-modal',
    styleUrl: 'modal.scss'
})
export class Modal implements ComponentInterface, IDismissible {
    $overlay: HTMLKsOverlayElement;
    titleId = `modal_title_${modalIds++}`;

    @Element() $el: HTMLElement;

    @Prop() heading: string;
    @Prop() preventClose: boolean = false;
    @Prop() size: 'sm' | 'md' | 'lg' = 'md';

    @Event() shown!: EventEmitter;
    @Event() hidden!: EventEmitter;

    @Method()
    async show() {
        await this.$overlay.show();
        this.shown.emit();
    }

    @Method()
    async hide() {
        await this.$overlay.hide();
        this.hidden.emit();
    }

    render() {
        return (
            <Host>
                <ks-overlay title-id={this.titleId} ref={el => this.$overlay = el} prevent-close={this.preventClose}>
                    <div class={`modal-wrapper size-${this.size}`}>
                        <header class="modal-header">
                            <h3 class="modal-title" id={this.titleId}>{this.heading}</h3>
                            {!this.preventClose && <ks-button onClick={() => this.hide()} display="clear" color="dark" class="modal-close" button-class="p-xs">
                                <ks-icon icon="times" label="Close Modal" />
                            </ks-button>}
                        </header>
                        <div class="modal-content">
                            <slot />
                        </div>
                    </div>
                </ks-overlay>
            </Host>
        );
    }
}

let modalIds = 0;