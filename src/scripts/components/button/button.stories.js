import { text, select, boolean } from '@storybook/addon-knobs';

export default { title: 'Forms/Button' };

const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'link'];
const sizes = ['xsmall', 'small', 'medium', 'large', 'xlarge'];
const iconDirections = ['left', 'right'];

export const playground = () => {
    const color = select('color', colors, 'primary');
    const hollow = boolean('hollow', false);
    const clear = boolean('clear', false);
    const loading = boolean('loading', false);
    const disabled = boolean('disabled', false);
    const size = select('size', sizes, 'medium');
    const icon = text('icon', '');
    const iconDirection = select('icon-direction', iconDirections, 'left');
    const linkUrl = text('url', '');
    const cssClass = text('css-class', '');
    return (`<c-button
            css-class="${cssClass}" 
            class="m-md"
            color="${color}" 
            hollow="${hollow}" 
            clear="${clear}" 
            size="${size}" 
            icon="${icon}"
            icon-direction="${iconDirection}"
            url="${linkUrl}"
            loading="${loading}"
            disabled="${disabled}">
            ${color} button
        </c-button>`);
};

export const buttonColors = () => {
    const hollow = boolean('hollow', false);
    const clear = boolean('clear', false);
    const size = select('size', sizes, 'md');
    const icon = text('icon', '');
    const iconDirection = select('icon-direction', iconDirections, 'left');
    const linkUrl = text('url', '');
    const cssClass = text('css-class', 'm-md');
    return (colors.map(color =>
        `<c-button
            css-class="${cssClass}" 
            color="${color}" 
            hollow="${hollow}" 
            clear="${clear}" 
            size="${size}" 
            icon="${icon}"
            icon-direction="${iconDirection}"
            url="${linkUrl}">
            ${color} button
        </c-button>`).join(""));
};

export const sizeVariations = () => {
    const color = select('color', colors, 'primary');
    const hollow = boolean('hollow', false);
    const clear = boolean('clear', false);
    const icon = text('icon', '');
    const iconDirection = select('icon-direction', iconDirections, 'left');
    const linkUrl = text('url', '');
    const cssClass = text('css-class', 'm-md');
    return (sizes.map(size =>
        `<c-button
            css-class="${cssClass}" 
            color="${color}" 
            hollow="${hollow}" 
            clear="${clear}" 
            size="${size}" 
            icon="${icon}"
            icon-direction="${iconDirection}"
            url="${linkUrl}">
            ${color} button
        </c-button>`).join(''));
};
