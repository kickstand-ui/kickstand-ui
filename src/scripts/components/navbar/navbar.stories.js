import { text, select, boolean } from "@storybook/addon-knobs";

export default { title: 'Navigation/Navbar' };

const types = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
export const navbarProperties = () => {
    const logoUrl = text('logo-url', '');
    const altText = text('alt-text', '');
    const tagline = text('tagline', 'Navbar Props');
    const collapseAt = select('collapse-at', ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'], 'sm')
    return (`
    <c-navbar
        logo-url="${logoUrl}" 
        alt-text="${altText}" 
        tagline="${tagline}"
        collapse-at="${collapseAt}"
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
                        alignment="right" 
                        display="link" 
                        >
                        <dropdown-item><span>Test 1 Test 1 Test 1 Test 1 Test 1 Test 1</span></dropdown-item>
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
