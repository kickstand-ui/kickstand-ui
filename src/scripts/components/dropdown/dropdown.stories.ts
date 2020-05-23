import { text, select, boolean } from "@storybook/addon-knobs";

export default { title: 'Dropdown' };

const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
const displays = ['solid', 'hollow', 'clear', 'link'];

export const playground = () => {
    const dropdownText = text('text', 'Dropdown Test');
    const dropdownAlignment = select('alignment', ['left', 'right'], 'left');
    const buttonColors = select('color', colors, 'primary');
    const buttonIcon = text('icon', '');
    const display = select('display', displays, 'solid');
    const hideButtonText = boolean('hide-text', false);
    const hideIndicator = boolean('hide-indicator', false);
    const megaMenu = boolean('mega-menu', false);
    return (`
        <div class="display-flex ${dropdownAlignment === 'right' ? 'justify-end' : ''}">
            <ks-dropdown
                class="m-lg"
                text="${dropdownText}" 
                position="${dropdownAlignment}" 
                color="${buttonColors}" 
                icon="${buttonIcon}"
                display="${display}"
                hide-text="${hideButtonText}"
                hide-indicator="${hideIndicator}"
                mega-menu="${megaMenu}"
                >
                <ks-dropdown-item><span>Non-clickable drop-down item</span></dropdown-item>
                <ks-dropdown-item><a href="#">Test 2</a></dropdown-item>
                <ks-dropdown-item><a href="#">Test 3</a></dropdown-item>
                <ks-dropdown-item><a href="#">Test 4</a></dropdown-item>
                <ks-dropdown-item><a href="#">Test 5</a></dropdown-item>
            </ks-dropdown>
        </div>
        `);
};

export const megaMenu = () => {
    return (`
        <ks-dropdown
            class="m-lg"
            text="Mega Menu Test" 
            mega-menu="true"
            >
            <h3>Mega Menu meets Mega Desk</h3>
            <img src="https://media1.tenor.com/images/812ea59ea0ddcfbc1e2793092538dfde/tenor.gif">
        </ks-dropdown>
    `);
}
