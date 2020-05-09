import { text, select, boolean } from "@storybook/addon-knobs";

export default { title: 'Navbar' };

const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
export const navbarProperties = () => {
    const logoUrl = text('logo-url', '');
    const altText = text('alt-text', '');
    const tagline = text('tagline', 'Navbar Props');
    const collapseAt = select('collapse-at', ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'], 'sm')
    const color = select('color', colors, 'primary')
    const inverted = boolean('inverted', false);
    return (`
    <ks-navbar
        logo-url="${logoUrl}" 
        alt-text="${altText}" 
        tagline="${tagline}"
        collapse-at="${collapseAt}"
        color="${color}"
        inverted="${inverted}"
        >
        <ks-navbar-row>
            <ks-navbar-group>
                <ks-navbar-item>
                    <a href="#">Test</a>
                </ks-navbar-item>
                <ks-navbar-item>
                    <a href="#">Test 1</a>
                </ks-navbar-item>
                <ks-navbar-item>
                    <ks-dropdown
                        text="Drop-Down" 
                        position="right" 
                        display="link" 
                        >
                        <dropdown-item><span>Non-clickable drop-down item</span></dropdown-item>
                        <dropdown-item><a href="#">Test 2</a></dropdown-item>
                        <dropdown-item><a href="#">Test 3</a></dropdown-item>
                        <dropdown-item><a href="#">Test 4</a></dropdown-item>
                        <dropdown-item><a href="#">Test 5</a></dropdown-item>
                    </ks-dropdown>
                </ks-navbar-item>
            </ks-navbar-group>
        </ks-navbar-row>
    </ks-navbar>
    `);
};

export const navbarGroupProperties = () => {
    const position = select('position', ['left', 'right'], 'right');
    return (`
    <ks-navbar tagline="Group Props">
        <ks-navbar-row>
            <ks-navbar-group position="${position}">
                <ks-navbar-item>
                    <a href="#">Test</a>
                </ks-navbar-item>
                <ks-navbar-item>
                    <a href="#">Test 1</a>
                </ks-navbar-item>
                <ks-navbar-item>
                    <ks-dropdown
                        text="Drop-Down" 
                        position="right" 
                        display="link" 
                        >
                        <dropdown-item><a href="#">First Option - Test 1</a></dropdown-item>
                        <dropdown-item><a href="#">Test 2</a></dropdown-item>
                        <dropdown-item><a href="#">Test 3</a></dropdown-item>
                        <dropdown-item><a href="#">Test 4</a></dropdown-item>
                        <dropdown-item><a href="#">Test 5</a></dropdown-item>
                    </ks-dropdown>
                </ks-navbar-item>
            </ks-navbar-group>
        </ks-navbar-row>
    </ks-navbar>
    `);
};

export const navbarWithMultipleRows = () => {
    return (`
    <ks-navbar tagline="Multiple Rows">
        <ks-navbar-row>
            <ks-navbar-group>
                <ks-navbar-item>
                    <a href="#">Sign Up</a>
                </ks-navbar-item>
                <ks-navbar-item class="pl-none">
                    <ks-button size="sm" color="secondary">Sign In</ks-button>
                </ks-navbar-item>
            </ks-navbar-group>
        </ks-navbar-row>
        <ks-navbar-row>
            <ks-navbar-group>
                <ks-navbar-item>
                    <a href="#">Test</a>
                </ks-navbar-item>
                <ks-navbar-item>
                    <a href="#">Test 1</a>
                </ks-navbar-item>
                <ks-navbar-item>
                    <ks-dropdown
                        text="Drop-Down" 
                        position="right" 
                        display="link" 
                        >
                        <dropdown-item><a href="#">First Option - Test 1</a></dropdown-item>
                        <dropdown-item><a href="#">Test 2</a></dropdown-item>
                        <dropdown-item><a href="#">Test 3</a></dropdown-item>
                        <dropdown-item><a href="#">Test 4</a></dropdown-item>
                        <dropdown-item><a href="#">Test 5</a></dropdown-item>
                    </ks-dropdown>
                </ks-navbar-item>
            </ks-navbar-group>
        </ks-navbar-row>
    </ks-navbar>
    `);
};

export const navbarWithMultipleGroups = () => {
    return (`
    <ks-navbar tagline="Multiple Groups">
        <ks-navbar-row>
            <ks-navbar-group position="left">
                <ks-navbar-item>
                    <a href="#">Test</a>
                </ks-navbar-item>
                <ks-navbar-item>
                    <a href="#">Test 1</a>
                </ks-navbar-item>
                <ks-navbar-item>
                    <ks-dropdown
                        text="Drop-Down" 
                        position="left" 
                        display="link" 
                        >
                        <dropdown-item><a href="#">First Option - Test 1</a></dropdown-item>
                        <dropdown-item><a href="#">Test 2</a></dropdown-item>
                        <dropdown-item><a href="#">Test 3</a></dropdown-item>
                        <dropdown-item><a href="#">Test 4</a></dropdown-item>
                        <dropdown-item><a href="#">Test 5</a></dropdown-item>
                    </ks-dropdown>
                </ks-navbar-item>
            </ks-navbar-group>
            <ks-navbar-group>
                <ks-navbar-item>
                    <a href="#">Sign Up</a>
                </ks-navbar-item>
                <ks-navbar-item class="p-none">
                    <ks-button color="secondary" size="sm">Sign In</ks-button>
                </ks-navbar-item>
            </ks-navbar-group>
        </ks-navbar-row>
    </ks-navbar>
    `);
};
