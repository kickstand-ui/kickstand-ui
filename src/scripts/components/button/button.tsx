import { Component, h, Prop, ComponentInterface, Host, Element } from '@stencil/core';

@Component({
    tag: 'ks-button',
    styleUrl: 'button.scss'
})
export class LinkButton implements ComponentInterface {
    $loading: HTMLKsLoadingOverlayElement;

    @Element() $el: HTMLElement;

    @Prop() color: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' = 'primary';
    @Prop() type: 'button' | 'submit' | 'reset' = 'button';
    @Prop() display: 'solid' | 'hollow' | 'clear' | 'link' = 'solid';
    @Prop() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
    @Prop() icon: string = '';
    @Prop() iconDirection: 'left' | 'right' = 'left';
    @Prop() href: string;
    @Prop() hideText: boolean = false;
    @Prop() cssClass: string = '';
    @Prop() haspopup: boolean = false;
    @Prop() expanded: boolean = false;
    @Prop() loading: boolean;
    @Prop() disabled: boolean;
    @Prop() controls: string;
    @Prop() describedBy: string;
    @Prop() tabIndex: number;
    @Prop() shows: string;
    @Prop() hides: string;
    @Prop() target: string;

    componentDidRender() {
        this.loading
            ? this.$loading.show()
            : this.$loading.hide();

        this.setEventListeners();
    }

    private setEventListeners() {
        this.setOpensListener();
        this.setHidesListener();
    }

    private setOpensListener() {
        if(!this.shows)
            return;

        let $showsComponent = document.getElementById(this.shows) as HTMLKsOverlayElement;

        if(!$showsComponent)
            return;

        this.haspopup = true;
        this.controls = this.shows;
        this.$el.addEventListener('click', () => $showsComponent.show());
    }

    private setHidesListener() {
        if(!this.hides)
            return;

        let $hidesComponent = document.getElementById(this.hides) as HTMLKsOverlayElement;

        if(!$hidesComponent)
            return;

        this.haspopup = true;
        this.controls = this.hides;
        this.$el.addEventListener('click', () => $hidesComponent.hide());
    }

    private getAnchorProps() {
        let props = {};

        (this.href && this.target) && (props['target'] = this.target); 
        (this.target && this.href) && (props['rel'] = 'noreferrer noopener');

        return props;
    }

    render() {
        let content = [
            this.icon && <ks-icon icon={this.icon} class={{'button-icon': true, 'mx-none': this.hideText}} />,
            <span class={{
                'button-text': true,
                'sr-only': this.hideText
            }}>
                <slot />
            </span>
        ];

        let classes = {
            'ks-button': true,
            [this.color]: true,
            [this.display]: true,
            [`icon-${this.iconDirection}`]: true,
            [this.cssClass]: true,
            [this.size]: true,
        };

        let props = {
            'aria-haspopup': `${this.haspopup}`,
            'aria-expanded': this.controls && `${this.expanded}`,
            'aria-controls': this.controls,
            'aria-described-by': this.describedBy,
            'disabled': this.disabled || this.loading,
            'type': this.type,
            'tabindex': this.tabIndex
        }

        return (
            <Host class="pointer">
                <ks-loading-overlay absolute ref={el => this.$loading = el}></ks-loading-overlay>
                {this.href
                    ? <a class={classes} {...this.getAnchorProps()} href={this.href}>{content}</a>
                    : <button {...props} class={classes}>{content}</button >}
            </Host>
        );
    }
}