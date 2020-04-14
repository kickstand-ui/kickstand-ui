import { Component, h, Prop, State, Element, Host } from '@stencil/core';

@Component({
    tag: 'c-navbar'
})
export class Navbar {
    $navbarContent: HTMLElement;
    navbarId: string = `navbar-${navbarIds++}`;

    @Element() $el: HTMLElement;

    @Prop() logoUrl: string;
    @Prop() altText: string;
    @Prop() tagline: string;
    @Prop() collapseAt: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'sm';
    @Prop() color: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' = 'primary';
    @Prop() inverted: boolean;

    @State() expanded = false;

    private toggleMenu() {
        this.expanded = !this.expanded;

        if (this.expanded)
            this.setDropdownFocus();
    }

    private setDropdownFocus() {
        this.$navbarContent.focus();
    }

    render() {
        let classes = {
            'navbar': true,
            [`collapse-${this.collapseAt}`]: true,
            [this.color]: true,
            'inverted': this.inverted
        }
        return (
            <Host class={classes} role="navigation">
                {(this.logoUrl || this.tagline) &&
                    <a href="/" class="navbar-branding">
                        {this.logoUrl && <img class="logo" src={this.logoUrl} alt={this.altText} />}
                        {this.tagline && <span class="tagline">{this.tagline}</span>}
                    </a>
                }
                <button
                    class="button navbar-toggler"
                    onClick={this.toggleMenu.bind(this)}
                    aria-haspopup="true"
                    aria-expanded={`${this.expanded}`}
                    aria-controls={`navbar-content-${this.navbarId}`}
                >
                    <span class="sr-only">toggle menu</span>
                    <i class="fas fa-bars"></i>
                </button>
                <div class="navbar-content" id={`navbar-content-${this.navbarId}`} ref={el => this.$navbarContent = el} tabindex="-1">
                    <slot />
                </div>
            </Host>
        );
    }
}

let navbarIds = 0;