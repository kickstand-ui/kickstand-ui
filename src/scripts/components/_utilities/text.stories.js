import { text, select, boolean } from "@storybook/addon-knobs";

export default { title: 'Utilities/Text' };

const textSizes = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
const textDecorations = ['normal', 'bold', 'italic', 'underline'];
const align = ['left', 'center', 'right'];

export const sizes = () => {
    return (`<div class="m-xxl">
        ${textSizes.map(s => `<div class="text-${s}">text-${s}</div>`).join('')}
    </div>`);
};

export const decorations = () => {
    return (`<div class="m-xxl">
        ${textDecorations.map(d => `<div class="my-md text-${d}">text-${d}</div>`).join('')}
    </div>`);
};

export const alignment = () => {
    return (`<div class="m-xxl">
        ${align.map(a => `<div class="my-md p-sm bg-light-light text-${a}">text-${a}</div>`).join('')}
    </div>`);
};
