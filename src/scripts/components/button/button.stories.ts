import { text, select, boolean } from '@storybook/addon-knobs';

export default { title: 'Components/Button' };

const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
const displays = ['solid', 'hollow', 'clear', 'link'];
const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

export const playground = () => {
    const color = select('color', colors, 'primary');
    const display = select('display', displays, 'solid');
    const loading = boolean('loading', false);
    const disabled = boolean('disabled', false);
    const size = select('size', sizes, 'md');
    const linkUrl = text('href', '');
    const target = text('target', '');
    const cssClass = text('css-class', '');
    const css2class = text('class', '');
    return (`<ks-button
            class="${css2class}"
            css-class="${cssClass}" 
            class="m-md"
            color="${color}" 
            display="${display}" 
            size="${size}" 
            href="${linkUrl}"
            loading="${loading}"
            disabled="${disabled}"
            target="${target}">
            ${color} button
        </ks-button>`);
};

export const iconButton = () => {
    const color = select('color', colors, 'primary');
    const display = select('display', displays, 'solid');
    const loading = boolean('loading', false);
    const disabled = boolean('disabled', false);
    const size = select('size', sizes, 'md');
    const linkUrl = text('href', '');
    const target = text('target', '');
    const cssClass = text('css-class', '');
    const css2class = text('class', '');
    return (`<ks-button
            class="${css2class}"
            css-class="${cssClass}" 
            class="m-md"
            color="${color}" 
            display="${display}" 
            size="${size}" 
            href="${linkUrl}"
            loading="${loading}"
            disabled="${disabled}"
            target="${target}"
            hide-text
            >
            ${color} button
        </ks-button>`);
};

export const buttonColors = () => {
    const display = select('display', displays, 'solid');
    const size = select('size', sizes, 'md');
    const linkUrl = text('url', '');
    const cssClass = text('css-class', '');
    return (colors.map(color =>
        `<ks-button
            css-class="${cssClass}" 
            color="${color}" 
            display="${display}" 
            size="${size}" 
            url="${linkUrl}">
            ${color} button
        </ks-button>`).join(""));
};

export const buttonDisplay = () => {
    return (displays.map(d =>
        `<ks-button
            class="ml-md mt-md" 
            display="${d}">
            ${d} button
        </ks-button>`).join(""));
};

export const sizeVariations = () => {
    const color = select('color', colors, 'primary');
    const display = select('display', displays, 'solid');
    const linkUrl = text('url', '');
    const cssClass = text('css-class', '');
    return (sizes.map(size =>
        `<ks-button
            class="m-md"
            css-class="${cssClass}" 
            color="${color}" 
            display="${display}" 
            size="${size}" 
            url="${linkUrl}">
            ${size} button
        </ks-button>`).join(''));
};
