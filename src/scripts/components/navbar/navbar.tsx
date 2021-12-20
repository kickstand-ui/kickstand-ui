import { Component, h, Prop, State, Element, Host, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'ks-navbar',
    styleUrl: 'navbar.scss'
})
export class NavbarBar implements ComponentInterface {
    $navbarContent: HTMLElement;
    navbarId: string = `navbar_${navbarIds++}`;

    @Element() $el: HTMLElement;

    @Prop() altText: string;
    @Prop() collapse: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'sm';
    @Prop() fixed: 'top' | 'bottom';
    @Prop() color: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' = 'primary';
    @Prop() inverted: boolean = false;
    @Prop() logoUrl: string;
    @Prop() tagline: string;
    @Prop() linkTag: string = 'a';
    @Prop() hrefProp: string = 'href';
    @Prop() menuButtonText: string = 'toggle menu';

    @State() expanded = false;

    componentDidRender() {
        this.adjustForFixedNavbar();
    }

    private adjustForFixedNavbar() {
        if (!this.fixed)
            return;

        const height = this.$el.offsetHeight;

        switch (this.fixed) {
            case 'top':
                document.querySelector('body').style.paddingTop = `${height}px`;
                break;
            case 'bottom':
                document.querySelector('body').style.paddingBottom = `${height}px`;
                break;
            default:
                break;
        }
    }

    private toggleNavbar() {
        this.expanded = !this.expanded;
        this.$navbarContent.style.maxHeight = this.expanded ? this.$navbarContent.scrollHeight + 'px' : '0px';

        if (this.expanded) {
            this.setDropdownFocus();

            Array.from(this.$el.querySelectorAll('ks-dropdown')).forEach(d => {
                const $button = d.querySelector('ks-button') as HTMLKsButtonElement;
                const $contents = d.querySelector('.dropdown-contents') as HTMLElement;
                let isContentsShown = false;
                
                d.style.maxHeight = $button.scrollHeight + 'px';

                $button.addEventListener('click', () => {
                    isContentsShown = !isContentsShown;

                    if (isContentsShown) {
                        d.style.maxHeight = $contents.scrollHeight + $button.scrollHeight + 'px';
                        this.$navbarContent.style.maxHeight = this.$navbarContent.scrollHeight + $contents.scrollHeight + 'px';
                    } else {
                        d.style.maxHeight = $button.scrollHeight + 'px';
                    }
                });
            })
        }
    }

    private setDropdownFocus() {
        this.$navbarContent.focus();
    }

    render() {
        let classes = {
            'ks-navbar': true,
            [`collapse-${this.collapse}`]: true,
            [this.color]: true,
            'inverted': this.inverted,
            [`fixed-${this.fixed}`]: !!this.fixed
        };

        const CustomTag = this.linkTag;

        return (
            <Host class={classes} role="navigation">
                {(this.logoUrl || this.tagline) &&
                    <CustomTag class="navbar-branding" ref={el => el.setAttribute(this.hrefProp, '/')}>
                        {this.logoUrl && <img class="logo" src={this.logoUrl} alt={this.altText} />}
                        {this.tagline && <span class="tagline">{this.tagline}</span>}
                    </CustomTag>
                }
                <button
                    class="button navbar-toggler"
                    onClick={() => this.toggleNavbar()}
                    aria-haspopup="true"
                    aria-expanded={`${this.expanded}`}
                    aria-controls={`navbar-content-${this.navbarId}`}
                >
                    <span class="sr-only">{this.menuButtonText}</span>
                    <ks-icon icon="menu" />
                </button>
                <div class="navbar-content" id={`navbar-content-${this.navbarId}`} ref={el => this.$navbarContent = el}>
                    <slot />
                </div>
            </Host>
        );
    }
}

let navbarIds = 0;