import { Component, h, Prop, Method, Host } from '@stencil/core';


@Component({
    tag: 'c-overlay'
})
export class overlay {
    @Prop() absolute: boolean = false;
    @Prop() theme: string = 'dark';

    @Prop({ mutable: true }) show: boolean = false;

    @Method()
    async showOverlay() {
        this.show = true;
    }

    @Method()
    async hideOverlay() {
        this.show = false;
    }

    isAbsolute() {
        return this.absolute ? 'absolute' : '';
    }

    render() {
        return (<Host class={`overlay ${this.theme} ${this.absolute && 'absolute'} ${this.show && 'opened'}`}>
            <div class="scrim"></div>
            <div class="content" role="dialog">
                <slot />
            </div>
        </Host>);
    }
}