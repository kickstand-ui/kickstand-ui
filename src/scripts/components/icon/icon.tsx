import { Component, h, Host, Prop, ComponentInterface } from '@stencil/core';
import { iconList } from './icon-list';

@Component({
    tag: 'ks-icon',
    styleUrl: 'icon.scss'
})
export class Icons implements ComponentInterface {
    svgBase: SVGElement;
    @Prop() label: string;
    @Prop() labelledBy: string;
    @Prop() icon: string;
    @Prop() rotate: '0' | '45' | '90' | '135' | '180' | '225' | '270' | '360' | '-45' | '-90' | '-135' | '-180' | '-225' | '-270' | '-360' = '0';

    componentDidRender() {
        let icon: string = iconList.find(x => x.name === this.icon)?.icon 
            || iconList.find(x => x.name === 'question').icon;
        this.svgBase.innerHTML = icon;
    }

    render() {
        let props = {
            ['aria-labelledby']: this.labelledBy,
            ['aria-label']: this.label,
            ['aria-hidden']: (!this.label && !this.labelledBy) && 'true'
        };

        return (
            <Host class={`rotate-${this.rotate}`}>
                <svg class="icon" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props} ref={e => this.svgBase = e}></svg>
            </Host>
        );
    }
}
