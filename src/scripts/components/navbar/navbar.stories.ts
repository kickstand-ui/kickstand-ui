import { text, select, boolean } from "@storybook/addon-knobs";

export default { title: 'Navigation/Navbar' };

const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
export const navbarProperties = () => {
    const logoUrl = text('logo-url', '');
    const altText = text('alt-text', '');
    const tagline = text('tagline', 'Navbar Props');
    const collapseAt = select('collapse-at', ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'], 'sm')
    const color = select('color', colors, 'primary')
    const inverted = boolean('inverted', false);
    return (`
    <c-navbar
        logo-url="${logoUrl}" 
        alt-text="${altText}" 
        tagline="${tagline}"
        collapse-at="${collapseAt}"
        color="${color}"
        inverted="${inverted}"
        >
        <c-navbar-row>
            <c-navbar-group>
                <c-navbar-item>
                    <a href="#">Test</a>
                </c-navbar-item>
                <c-navbar-item>
                    <a href="#">Test 1</a>
                </c-navbar-item>
                <c-navbar-item>
                    <c-dropdown
                        text="Drop-Down" 
                        position="right" 
                        display="link" 
                        >
                        <dropdown-item><span>Non-clickable drop-down item</span></dropdown-item>
                        <dropdown-item><a href="#">Test 2</a></dropdown-item>
                        <dropdown-item><a href="#">Test 3</a></dropdown-item>
                        <dropdown-item><a href="#">Test 4</a></dropdown-item>
                        <dropdown-item><a href="#">Test 5</a></dropdown-item>
                    </c-dropdown>
                </c-navbar-item>
            </c-navbar-group>
        </c-navbar-row>
    </c-navbar>
    `);
};

export const navbarGroupProperties = () => {
    const position = select('position', ['left', 'right'], 'right');
    return (`
    <c-navbar tagline="Group Props">
        <c-navbar-row>
            <c-navbar-group position="${position}">
                <c-navbar-item>
                    <a href="#">Test</a>
                </c-navbar-item>
                <c-navbar-item>
                    <a href="#">Test 1</a>
                </c-navbar-item>
                <c-navbar-item>
                    <c-dropdown
                        text="Drop-Down" 
                        position="right" 
                        display="link" 
                        >
                        <dropdown-item><a href="#">First Option - Test 1</a></dropdown-item>
                        <dropdown-item><a href="#">Test 2</a></dropdown-item>
                        <dropdown-item><a href="#">Test 3</a></dropdown-item>
                        <dropdown-item><a href="#">Test 4</a></dropdown-item>
                        <dropdown-item><a href="#">Test 5</a></dropdown-item>
                    </c-dropdown>
                </c-navbar-item>
            </c-navbar-group>
        </c-navbar-row>
    </c-navbar>
    `);
};

export const navbarWithMultipleRows = () => {
    return (`
    <c-navbar tagline="Multiple Rows">
        <c-navbar-row>
            <c-navbar-group>
                <c-navbar-item>
                    <a href="#">Sign Up</a>
                </c-navbar-item>
                <c-navbar-item class="pl-none">
                    <c-button size="sm" color="secondary">Sign In</c-button>
                </c-navbar-item>
            </c-navbar-group>
        </c-navbar-row>
        <c-navbar-row>
            <c-navbar-group>
                <c-navbar-item>
                    <a href="#">Test</a>
                </c-navbar-item>
                <c-navbar-item>
                    <a href="#">Test 1</a>
                </c-navbar-item>
                <c-navbar-item>
                    <c-dropdown
                        text="Drop-Down" 
                        position="right" 
                        display="link" 
                        >
                        <dropdown-item><a href="#">First Option - Test 1</a></dropdown-item>
                        <dropdown-item><a href="#">Test 2</a></dropdown-item>
                        <dropdown-item><a href="#">Test 3</a></dropdown-item>
                        <dropdown-item><a href="#">Test 4</a></dropdown-item>
                        <dropdown-item><a href="#">Test 5</a></dropdown-item>
                    </c-dropdown>
                </c-navbar-item>
            </c-navbar-group>
        </c-navbar-row>
    </c-navbar>
    `);
};

export const navbarWithMultipleGroups = () => {
    return (`
    <c-navbar tagline="Multiple Groups">
        <c-navbar-row>
            <c-navbar-group position="left">
                <c-navbar-item>
                    <a href="#">Test</a>
                </c-navbar-item>
                <c-navbar-item>
                    <a href="#">Test 1</a>
                </c-navbar-item>
                <c-navbar-item>
                    <c-dropdown
                        text="Drop-Down" 
                        position="left" 
                        display="link" 
                        >
                        <dropdown-item><a href="#">First Option - Test 1</a></dropdown-item>
                        <dropdown-item><a href="#">Test 2</a></dropdown-item>
                        <dropdown-item><a href="#">Test 3</a></dropdown-item>
                        <dropdown-item><a href="#">Test 4</a></dropdown-item>
                        <dropdown-item><a href="#">Test 5</a></dropdown-item>
                    </c-dropdown>
                </c-navbar-item>
            </c-navbar-group>
            <c-navbar-group>
                <c-navbar-item>
                    <c-navbar-item>
                        <a href="#">Sign Up</a>
                    </c-navbar-item>
                    <c-navbar-item class="p-none">
                        <c-button color="secondary" size="sm">Sign In</c-button>
                    </c-navbar-item>
                </c-navbar-item>
            </c-navbar-group>
        </c-navbar-row>
    </c-navbar>
    `);
};
