import { Component, Prop, ComponentInterface} from '@stencil/core';

@Component({
    tag: 'ks-crumb'
})
export class Crumbs implements ComponentInterface {
    @Prop() href: string;

    render() {
        return;
    }
}