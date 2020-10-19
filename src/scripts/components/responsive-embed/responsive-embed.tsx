import { Component, h, Prop, Host } from '@stencil/core';

@Component({
    tag: 'ks-responsive-embed',
    styleUrl: 'responsive-embed.scss'
})
export class ResponsiveEmbed {
    @Prop() aspectRatio: string = '16x9';

    render() {
        return (
            <Host class={`ks-responsive-embed ratio-${this.aspectRatio}`}>
                <slot />
            </Host>
        );
    }
}
