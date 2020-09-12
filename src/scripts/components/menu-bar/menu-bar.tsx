import { Component, h, Prop, State, Element, Host, ComponentInterface } from '@stencil/core';

@Component({
    tag: 'ks-menu-bar',
    styleUrl: 'menu-bar.scss'
})
export class MenuBar implements ComponentInterface {
    $menuContent: HTMLElement;
    menuId: string = `menu_${menuIds++}`;

    @Element() $el: HTMLElement;

    @Prop() altText: string;
    @Prop() collapse: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'sm';
    @Prop() fixed: 'top' | 'bottom';
    @Prop() color: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' = 'primary';
    @Prop() inverted: boolean = false;
    @Prop() logoUrl: string;
    @Prop() tagline: string;

    @State() expanded = false;

    componentDidRender() {
        this.adjustForFixedMenu();
    }

    private adjustForFixedMenu() {
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

    private toggleMenu() {
        this.expanded = !this.expanded;

        if (this.expanded)
            this.setDropdownFocus();
    }

    private setDropdownFocus() {
        this.$menuContent.focus();
    }

    render() {
        let classes = {
            'ks-menu-bar': true,
            [`collapse-${this.collapse}`]: true,
            [this.color]: true,
            'inverted': this.inverted,
            [`fixed-${this.fixed}`]: !!this.fixed
        };
        console.log('fixed', this.fixed);
        
        return (
            <Host class={classes} role="navigation">
                {(this.logoUrl || this.tagline) &&
                    <a href="/" class="menu-branding">
                        {this.logoUrl && <img class="logo" src={this.logoUrl} alt={this.altText} />}
                        {this.tagline && <span class="tagline">{this.tagline}</span>}
                    </a>
                }
                <button
                    class="button menu-toggler"
                    onClick={this.toggleMenu.bind(this)}
                    aria-haspopup="true"
                    aria-expanded={`${this.expanded}`}
                    aria-controls={`menu-content-${this.menuId}`}
                >
                    <span class="sr-only">toggle menu</span>
                    <ks-icon icon="bars" />
                </button>
                <div class="menu-content" id={`menu-content-${this.menuId}`} ref={el => this.$menuContent = el}>
                    <slot />
                </div>
            </Host>
        );
    }
}

let menuIds = 0;