import { Component, h, Host, Prop, ComponentInterface, State, Element } from '@stencil/core';
import { iconList } from './icon-list';

@Component({
    tag: 'ks-icon',
    styleUrl: 'icon.scss'
})
export class Icon implements ComponentInterface {
    svgBase: SVGElement;
    @Element() $el: HTMLElement;

    @Prop() label: string;
    @Prop() labelledBy: string;
    @Prop() icon: string;

    @State() iconContent: Document;

    componentDidRender() {
        this.getIcon();
    }

    private getIcon() {
        let iconContents: string = iconList[this.icon] || iconList.question;
            
        let icon = `<svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ${this.labelledBy ? `aria-labelledby="${this.labelledBy}"`: ''} ${this.label ? `aria-label="${this.label}"`: ''} ${!this.label && !this.labelledBy ? 'aria-hidden="true"': ''}>${iconContents}</svg>`
        this.$el.innerHTML = icon;
    }

    render() {
        return (
            <Host class={`ks-icon`}></Host>
        );
    }
}
