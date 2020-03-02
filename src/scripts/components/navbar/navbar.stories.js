import { text, select, boolean } from "@storybook/addon-knobs";

export default { title: 'Navbar' };

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
                    <a href="#">Test 2</a>
                </c-navbar-item>
            </c-navbar-group>
        </c-navbar-row>
    </c-navbar>
    `);
};
