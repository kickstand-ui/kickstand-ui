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
        if (this.fixed === 'top')
            document.querySelector('body').style.paddingTop = `${height}px`;

        if (this.fixed === 'bottom')
            document.querySelector('body').style.paddingBottom = `${height}px`;
    }

    private toggleNavbar() {
        this.expanded = !this.expanded;
        this.$navbarContent.style.maxHeight = this.expanded ? this.$navbarContent.scrollHeight + 'px' : '0px';

        if (!this.expanded) {
            Array.from(this.$el.querySelectorAll('ks-dropdown')).forEach($dropdown => $dropdown.hide());
            return;
        }

        this.setDropdownFocus();

        Array.from(this.$el.querySelectorAll('ks-dropdown')).forEach($dropdown => {
            const $button = $dropdown.querySelector('ks-button') as HTMLKsButtonElement;
            const $contents = $dropdown.querySelector('.dropdown-contents') as HTMLElement;
            let isContentsShown = false;

            $dropdown.style.maxHeight = $button.scrollHeight + 'px';
            $dropdown.addEventListener('shown', (e) => {
                (e.target as HTMLKsDropdownElement).style.maxHeight = $contents.scrollHeight + $button.scrollHeight + 'px';
                this.$navbarContent.style.maxHeight = this.$navbarContent.scrollHeight + $contents.scrollHeight + 'px';
            });
            $dropdown.addEventListener('hidden', (e) => {
                (e.target as HTMLKsDropdownElement).style.maxHeight = $button.scrollHeight + 'px';
            });

            $button.addEventListener('click', () => this.dropdownClickHandler(isContentsShown, $dropdown, $button, $contents));
        })
    }

    private dropdownClickHandler(isContentsShown: boolean, $dropdown: HTMLKsDropdownElement, $button: HTMLKsButtonElement, $contents: HTMLElement) {
        isContentsShown = !isContentsShown;

        if (isContentsShown) {
            $dropdown.style.maxHeight = $contents.scrollHeight + $button.scrollHeight + 'px';
            this.$navbarContent.style.maxHeight = this.$navbarContent.scrollHeight + $contents.scrollHeight + 'px';
        } else {
            $dropdown.style.maxHeight = $button.scrollHeight + 'px';
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