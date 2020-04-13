import { text, select, boolean } from "@storybook/addon-knobs";

export default { title: 'Utilities/Borders' };

const positions = ['', '-t', '-r', '-b', '-l', '-x', '-y'];
const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
const sizes = ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];

export const borders = () => {
    return (`<c-row class="m-xxl">
        ${positions.map(p => `<c-column class="mx-md bg-light-light border${p}">border${p}</c-column>`).join('')}
    </c-row>`);
};

export const borderSizess = () => {
    return (`<c-row class="m-xxl">
        ${sizes.map(p => `<c-column class="mx-md bg-light-light border border-${p}">border-${p}</c-column>`).join('')}
    </c-row>`);
};

export const borderColors = () => {
    return (`<c-row class="m-xxl">
        ${colors.map(p => `<c-column class="mx-md bg-light-light border border-xs border-${p}">border-${p}</c-column>`).join('')}
    </c-row>`);
};