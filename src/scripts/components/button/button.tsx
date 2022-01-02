import { Component, h, Prop, ComponentInterface, Host, Element, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'ks-button',
    styleUrl: 'button.scss'
})
export class LinkButton implements ComponentInterface {
    $loading: HTMLKsLoadingOverlayElement;

    @Element() $el: HTMLElement;

    @Prop() color: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'white' | 'black' = 'primary';
    @Prop() type: 'button' | 'submit' | 'reset' = 'button';
    @Prop() display: 'solid' | 'hollow' | 'clear' | 'link' = 'solid';
    @Prop() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
    @Prop() href: string;
    @Prop() linkTag: string = 'a';
    @Prop() hrefProp: string = 'href';
    @Prop() buttonClass: string = '';
    @Prop() haspopup: boolean = false;
    @Prop() expanded: boolean = false;
    @Prop() loading: boolean;
    @Prop() disabled: boolean;
    @Prop() controls: string;
    @Prop() describedBy: string;
    @Prop() shows: string;
    @Prop() hides: string;
    @Prop() target: string;
    @Prop() download: boolean;

    @Prop() loadingTheme: 'dark' | 'light' = 'light';
    @Prop() loadingMessage: string = 'Loading...';
    @Prop() showLoadingMessage: boolean = false;
    @Prop() loadingIcon: string;

    @Event() clicked!: EventEmitter<MouseEvent>;
    @Event() blurred!: EventEmitter;


    componentDidRender() {
        this.showLoading();
        this.setEventListeners();
    }

    private showLoading() {
        if (this.$loading) {
            this.loading
                ? this.$loading.show()
                : this.$loading.hide();
        }
    }

    private setEventListeners() {
        this.setOpensListener();
        this.setHidesListener();
    }

    private setOpensListener() {
        if (!this.shows)
            return;

        let $showsComponent = document.getElementById(this.shows) as HTMLKsOverlayElement;

        if (!$showsComponent)
            return;

        this.haspopup = true;
        this.controls = this.shows;
        this.$el.addEventListener('click', () => $showsComponent.show());
    }

    private setHidesListener() {
        if (!this.hides)
            return;

        let $hidesComponent = document.getElementById(this.hides) as HTMLKsOverlayElement;

        if (!$hidesComponent)
            return;

        this.haspopup = true;
        this.controls = this.hides;
        this.$el.addEventListener('click', () => $hidesComponent.hide());
    }

    private clickHandler(e: MouseEvent) {
        if (this.loading || this.disabled) {
            e.stopPropagation();
            return;
        }

        this.clicked.emit(e);
    }

    private blurHandler() {
        this.blurred.emit();
    }

    render() {
        let classes = {
            'button': true,
            [this.color]: true,
            [this.display]: true,
            [this.buttonClass]: true,
            [`size-${this.size}`]: true,
        };

        let props = {
            'aria-haspopup': `${this.haspopup}`,
            'aria-expanded': this.controls && `${this.expanded}`,
            'aria-controls': this.controls,
            'aria-described-by': this.describedBy,
            'disabled': this.disabled || this.loading,
            'type': this.type
        };

        let linkProps = {
            'target': this.target || undefined,
            'rel': this.target ? 'noopener' : undefined,
            'download': this.download,
            [this.hrefProp]: this.href
        };

        const CustomTag = this.linkTag;
        
        return (
            <Host>
                {this.href
                    ? <CustomTag class={classes} {...linkProps} onClick={e => this.clickHandler(e)} onBlur={() => this.blurHandler()}>
                        <slot />
                    </CustomTag>
                    : [
                        <ks-loading-overlay theme={this.loadingTheme} message={this.loadingMessage} icon={this.loadingIcon} showMessage={this.showLoadingMessage} absolute  ref={el => this.$loading = el} onClick={e => this.clickHandler(e)}></ks-loading-overlay>,
                        <button {...props} class={classes} onClick={e => this.clickHandler(e)} onBlur={() => this.blurHandler()}>
                            <slot />
                        </button >
                    ]}
            </Host>
        );
    }
}