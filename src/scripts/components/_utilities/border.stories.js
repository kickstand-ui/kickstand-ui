import { text, select, boolean } from "@storybook/addon-knobs";

export default { title: 'Utilities/Borders' };

const positions = ['t', 'r', 'b', 'l', 'x', 'y'];

export const borders = () => {
    return (`<c-row class="m-xxl">
        ${positions.map(p => `<c-column class="mx-md bg-light-light border-${p}">border-${p}</c-column>`).join('')}
    </c-row>`);
};