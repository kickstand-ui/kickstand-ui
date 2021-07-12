import { text, select, boolean } from "@storybook/addon-knobs";

export default { title: 'Components/Dropdown' };

const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
const displays = ['solid', 'hollow', 'clear', 'link'];
const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

export const playground = () => {
    const dropdownText = text('text', 'Dropdown Test');
    const dropdownAlignment = select('alignment', ['left', 'right'], 'left');
    const buttonColors = select('color', colors, 'primary');
    const buttonIcon = text('icon', '');
    const display = select('display', displays, 'solid');
    const size = select('size', sizes, 'md');
    const hideButtonText = boolean('hide-text', false);
    const hideIndicator = boolean('hide-indicator', false);
    const megaMenu = boolean('mega-menu', false);
    const loading = boolean('loading', false);
    const disabled = boolean('disabled', false);
    const collapse = select('collapse', ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'], 'xs');

    return (`
        <div class="display-flex pl-xxl ${dropdownAlignment === 'right' ? 'justify-end' : ''}">
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
                collapse="${collapse}"
                loading="${loading}"
                disabled="${disabled}"
                size="${size}"
                >
                <ks-dropdown-item prevent-close><span>Non-clickable drop-down item with very long text</span></ks-dropdown-item>
                <ks-dropdown-item><a href="#">Test 2</a></ks-dropdown-item>
                <ks-dropdown-item><a href="#">Test 3</a></ks-dropdown-item>
                <ks-dropdown-item><ks-button display="link" href="#">Test 4</ks-button></ks-dropdown-item>
                <ks-dropdown-item><ks-button display="link" href="#">Test 5</ks-button></ks-dropdown-item>
                <ks-dropdown-item><ks-button>Test 5</ks-button></ks-dropdown-item>
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

export const collapseTest = () => {
    return (`
        <ks-dropdown text="Prevent Close">
            <ks-dropdown-item>
                <ks-button color="secondary">I will close when you click me!</ks-button>
            </ks-dropdown-item>
            <ks-dropdown-item prevent-close>
                <ks-button>I will not close when you click me!</ks-button>
            </ks-dropdown-item>
        </ks-dropdown>
    `);
}