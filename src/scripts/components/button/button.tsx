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
    @Prop() href: string;
    @Prop() linkTag: string = 'a';
    @Prop() hrefProp: string = 'href';
    @Prop() cssClass: string = '';
    @Prop() buttonClass: string = '';
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
    @Prop() download: boolean;

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
        }
    }

    render() {
        let classes = {
            'button': true,
            [this.color]: true,
            [this.display]: true,
            [this.cssClass]: true,
            [this.buttonClass]: true,
            [`size-${this.size}`]: true,
        };

        let props = {
            'aria-haspopup': `${this.haspopup}`,
            'aria-expanded': this.controls && `${this.expanded}`,
            'aria-controls': this.controls,
            'aria-described-by': this.describedBy,
            'disabled': this.disabled || this.loading,
            'type': this.type,
            'tabindex': this.tabIndex
        };

        let linkProps = {
            'target': this.target || undefined,
            'rel': this.target ? 'noopener' : undefined,
            'download': this.download,
            [this.hrefProp]: this.href
        };

        const CustomTag = this.linkTag;
        
        return (
            <Host class="ks-button pointer">
                {this.href
                    ? <CustomTag class={classes} {...linkProps} onClick={e => this.clickHandler(e)}>
                        <slot />
                    </CustomTag>
                    : [
                        <ks-loading-overlay absolute ref={el => this.$loading = el} onClick={e => this.clickHandler(e)}></ks-loading-overlay>,
                        <button {...props} class={classes} onClick={e => this.clickHandler(e)}>
                            <slot />
                        </button >
                    ]}
            </Host>
        );
    }
}