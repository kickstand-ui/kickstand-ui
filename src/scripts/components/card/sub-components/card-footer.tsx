import { Component, h, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'c-card-footer'
})
export class CardFooter implements ComponentInterface {
    render() {
        return (
            <div class="card-footer">
                <slot />
            </div>
        );
    }
}