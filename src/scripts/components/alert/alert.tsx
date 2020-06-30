import { Component, h, Prop, Host } from '@stencil/core';

@Component({
    tag: 'ks-alert',
    styleUrl: 'alert.scss'
})
export class Alert {
    @Prop() header: string;
    @Prop() note: boolean;
    @Prop() color: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' = 'primary';

    private getAriaLiveSetting() {
        if(this.note)
            return false;
        
        switch (this.color) {
            case 'danger':
            case 'warning':
                return 'assertive';
            default:
                return 'polite';
        }
    }

    render() {
        const props = {
            'role': !this.note && 'alert',
            ['aria-live']: this.getAriaLiveSetting()
        };

        const classes = {
            'alert': true,
            [this.color]: true,
            'note': this.note
        };

        return (
            <Host {...props} class={classes}>
                {this.header &&
                    <header class="alert-header">
                        <h3 class="alert-heading">{this.header}</h3>
                    </header>
                }
                <p class="alert-body">
                    <slot />
                </p>
            </Host>
        );
    }
}