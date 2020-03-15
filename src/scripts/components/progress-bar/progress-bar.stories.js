import { text, select, boolean } from '@storybook/addon-knobs';

export default { title: 'Progress Bar' };

const types = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
const sizes = ['xs', 'sm', 'md', 'lg'];
const iconDirections = ['left', 'right'];

export const playground = () => {
    const type = select('type', types, 'primary');
    const size = select('size', sizes, 'md');
    const value = text('value', 25);
    return (`<c-progress-bar class="m-xxl" size="${size}" type="${type}" value="${value}" />`);
};

export const buttonTypes = () => {
    const hollow = boolean('hollow', false);
    const clear = boolean('clear', false);
    const size = select('size', sizes, 'md');
    const icon = text('icon', '');
    const iconDirection = select('icon-direction', iconDirections, 'left');
    const linkUrl = text('url', '');
    const cssClass = text('css-class', 'm-md');
    return (types.map(type =>
        `<c-button
            css-class="${cssClass}" 
            type="${type}" 
            hollow="${hollow}" 
            clear="${clear}" 
            size="${size}" 
            icon="${icon}"
            icon-direction="${iconDirection}"
            url="${linkUrl}">
            ${type} button
        </c-button>`).join(""));
};

export const sizeVariations = () => {
    const type = select('type', types, 'primary');
    const hollow = boolean('hollow', false);
    const clear = boolean('clear', false);
    const icon = text('icon', '');
    const iconDirection = select('icon-direction', iconDirections, 'left');
    const linkUrl = text('url', '');
    const cssClass = text('css-class', 'm-md');
    return (sizes.map(size =>
        `<c-button
            css-class="${cssClass}" 
            type="${type}" 
            hollow="${hollow}" 
            clear="${clear}" 
            size="${size}" 
            icon="${icon}"
            icon-direction="${iconDirection}"
            url="${linkUrl}">
            ${type} button
        </c-button>`).join(''));
};

export const clickHandler = () => {
    const type = select('type', types, 'primary');
    const cssClass = text('css-class', 'm-md');
    const button = document.createElement('c-button');
    button.type = type;
    button.cssClass = cssClass;
    button.clickHandler = () => console.log('You just clicked a button...');
    return button;
};
