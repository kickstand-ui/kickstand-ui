import { text, select, boolean } from "@storybook/addon-knobs";

export default { title: 'Navigation/Navbar' };

const types = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
const dummyText = `“People will never be replaced by machines. In the end, life and business are about human connections. And computers are about trying to murder you in a lake. And to me the choice is easy.”<br><br>Michael Scott`;
export const defaultHeading = () => {
    return (`
    <c-navbar tagline="Navbar Test">
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
                        dropdown-text="Drop-Down" 
                        dropdown-alignment="right" 
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
