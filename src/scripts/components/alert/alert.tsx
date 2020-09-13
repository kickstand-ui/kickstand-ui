import { Component, h, Prop, Host, Method, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'ks-alert',
    styleUrl: 'alert.scss'
})
export class Alert {
    alertId = `alert_${alertIds++}`;

    @Prop() header: string;
    @Prop() closeText: string = 'Close';
    @Prop() note: boolean = false;
    @Prop() dismissible: boolean = false;
    @Prop({ mutable: true }) display: boolean = false;
    @Prop() color: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' = 'primary';

    @Event() shown!: EventEmitter;
    @Event() hidden!: EventEmitter;

    @Method()
    async show() {
        this.display = true;
        this.shown.emit();
    }

    @Method()
    async hide() {
        this.display = false;
        this.hidden.emit();
    }

    private getAriaLiveSetting() {
        if (this.note)
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
            'alert-content': true,
            [this.color]: true,
            'note': this.note,
            'hide': this.dismissible && !this.display && !this.note
        };

        return (
            <Host {...props} class="ks-alert">
                <div id={this.alertId} class={classes}>
                    {(this.header || this.dismissible) &&
                        <header class="alert-header">
                            <h3 class="alert-heading">{this.header}</h3>
                            {(this.dismissible && !this.note) && <ks-button class="alert-close" onClick={() => this.hide()} display="clear" size="xs" aria-controls={this.alertId}>
                                <ks-icon icon="close" aria-label={this.closeText}></ks-icon>
                            </ks-button>}
                        </header>
                    }
                    <p class="alert-body">
                        <slot />
                    </p>
                </div>
            </Host>
        );
    }
}

let alertIds = 0;