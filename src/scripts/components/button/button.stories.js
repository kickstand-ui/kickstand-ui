import { text, select, boolean } from '@storybook/addon-knobs';

export default { title: 'Button' };

const types = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'link', 'none'];
const sizes = [ 'xs', 'sm', 'md', 'lg', 'xl' ];
const iconDirections = ['left', 'right'];

export const playground = () => {
    const type = select('type', types, 'primary');
    const hollow = boolean('hollow', false);
    const size = select('size', sizes, 'md');
    const icon = text('icon', '');
    const iconDirection = select('icon-direction', iconDirections, 'left');
    const linkUrl = text('url', '');
    const cssClass = text('css-class', 'm-md');
    return (`<c-button
            css-class="${cssClass}" 
            type="${type}" 
            hollow="${hollow}" 
            size="${size}" 
            icon="${icon}"
            icon-direction="${iconDirection}"
            url="${linkUrl}">
            ${type} button
        </c-button>`);
};

export const buttonTypes = () => {
    const hollow = boolean('hollow', false);
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
    const icon = text('icon', '');
    const iconDirection = select('icon-direction', iconDirections, 'left');
    const linkUrl = text('url', '');
    const cssClass = text('css-class', 'm-md');
    return (sizes.map(size => 
        `<c-button
            css-class="${cssClass}" 
            type="${type}" 
            hollow="${hollow}" 
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
