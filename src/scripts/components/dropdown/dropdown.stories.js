import { text, select, boolean } from "@storybook/addon-knobs";

export default { title: 'Navigation/Dropdown' };

const types = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
export const playground = () => {
    const dropdownText = text('dropdown text', 'Dropdown Test');
    const dropdownAlignment = select('dropdown alignment', ['left', 'right'], 'left');
    const buttonTypes = select('button type', types, 'primary');
    const buttonIcon = text('button icon', '');
    const hollow = boolean('hollow', false);
    const hideButtonText = boolean('hide button text', false);
    const megaMenu = boolean('mega menu', false);
    return (`
        <div class="flex-layout ${dropdownAlignment === 'right' ? 'justify-end' : ''}">
            <c-dropdown
                class="m-lg"
                dropdown-text="${dropdownText}" 
                dropdown-alignment="${dropdownAlignment}" 
                button-type="${buttonTypes}" 
                button-icon="${buttonIcon}"
                hollow="${hollow}"
                hide-button-text="${hideButtonText}"
                mega-menu="${megaMenu}"
                >
                <dropdown-item><span>Test 1 Test 1 Test 1 Test 1 Test 1 Test 1</span></dropdown-item>
                <dropdown-item><a href="#">Test 2</a></dropdown-item>
                <dropdown-item><a href="#">Test 3</a></dropdown-item>
                <dropdown-item><a href="#">Test 4</a></dropdown-item>
                <dropdown-item><a href="#">Test 5</a></dropdown-item>
            </c-dropdown>
        </div>
        `);
};

export const megaMenu = () => {
    return (`
        <c-dropdown
            class="m-lg"
            dropdown-text="Mega Menu Test" 
            mega-menu="true"
            >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores possimus itaque nulla soluta, mollitia a tempora odit reprehenderit labore excepturi! Odio labore culpa consequuntur tempore iure error cum mollitia iste!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores possimus itaque nulla soluta, mollitia a tempora odit reprehenderit labore excepturi! Odio labore culpa consequuntur tempore iure error cum mollitia iste!
        </c-dropdown>
    `);
}
