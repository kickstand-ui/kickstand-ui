import { Component, h, Prop, State, Method } from '@stencil/core';


@Component({
    tag: 'c-overlay'
})
export class overlay {
    @Prop() absolute: boolean = false;
    @Prop() theme: string = 'dark';

    @State() isOpened: boolean = false;

    @Method()
    async show() {
        this.isOpened = true;
    }

    @Method()
    async hide() {
        this.isOpened = false;
    }

    isAbsolute() {
        return this.absolute ? 'absolute' : '';
    }

    render() {
        return (<div class={`overlay ${this.theme} ${this.isAbsolute()} ${this.isOpened ? 'opened' : ''}`}>
            <div class="scrim"></div>
            <div class="content" role="dialog">
                <slot />
            </div>
        </div>);
    }
}