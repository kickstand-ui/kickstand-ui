import { Component, h, Prop, Host, Method, Event, EventEmitter, ComponentInterface } from '@stencil/core';
import { IDismissible } from '../../utils/componentUtils';

@Component({
    tag: 'ks-alert',
    styleUrl: 'alert.scss'
})
export class Alert implements ComponentInterface, IDismissible {
    alertId = `alert_${alertIds++}`;

    @Prop() heading: string;
    @Prop() closeText: string = 'Close';
    @Prop() note: boolean = false;
    @Prop() dismissible: boolean = false;
    @Prop() icon: string = 'warning';
    @Prop() hideIcon: boolean = false;
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
            <Host {...props}>
                <div id={this.alertId} class={classes}>
                    {!this.hideIcon && <ks-icon class="alert-icon" icon={this.icon}></ks-icon>}
                    <div class="content">
                        {(this.heading || this.dismissible) &&
                            <header class="alert-header">
                                <h3 class="alert-heading">{this.heading}</h3>
                                {(this.dismissible && !this.note) && <ks-button class="alert-close" onClick={() => this.hide()} display="clear" size="xs" aria-controls={this.alertId}>
                                    <ks-icon icon="times" label={this.closeText}></ks-icon>
                                </ks-button>}
                            </header>
                        }
                        <p class="alert-body">
                            <slot />
                        </p>
                    </div>
                </div>
            </Host>
        );
    }
}

let alertIds = 0;