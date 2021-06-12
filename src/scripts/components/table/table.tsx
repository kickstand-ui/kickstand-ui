import { Component, h, Prop, ComponentInterface, Host, Element } from '@stencil/core';

@Component({
    tag: 'ks-table',
    styleUrl: 'table.scss'
})
export class Table implements ComponentInterface {
    @Element() $el: HTMLElement;
    @Prop() fixedColumn: boolean = false;
    @Prop() fixedRow: boolean = false;
    @Prop() responsive: boolean = false;
    @Prop() striped: boolean = false;
    @Prop() hover: boolean = false;

    render() {
        let classes= {
            'ks-table': true,
            'responsive': this.responsive,
            'fixed-column': this.fixedColumn,
            'fixed-row': this.fixedRow,
            'striped': this.striped,
            'hover': this.hover,
        };
        return (
            <Host class={classes}>
                <slot />
            </Host>
        );
    }
}