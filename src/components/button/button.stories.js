import { text, select, boolean } from '@storybook/addon-knobs';

export default { title: 'Button' };

const types = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'link'];
const buttonSizes = [ 'xs', 'sm', 'md', 'lg', 'xl' ];
const iconDirections = ['top', 'right', 'bottom', 'left'];
const sizeOptions = { sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' };
const iconDirectionOptions = { top: 'top', right: 'right', bottom: 'bottom', left: 'left' };



const variations = {
    Primary: 'primary',
    Secondary: 'secondary',
    Success: 'success',
    Info: 'info',
    Warning: 'warning',
    Danger: 'danger',
    Light: 'light',
    Dark: 'dark'
};

export const playground = () => {
    const type = select('Type', variations, 'primary');
    const hollow = boolean('Hollow', false);
    const size = select('Size', sizeOptions, 'md');
    const icon = text('Icon', '');
    const iconDirection = select('Icon Direction', iconDirectionOptions, 'left');
    const linkUrl = text('Link URL', '');
    const cssClass = text('CSS Class', 'm-md');
    const htmlId = text('HTML ID', '');
    return (`<c-button html-id="${htmlId}" 
            css-class="${cssClass}" 
            type="${type}" 
            hollow="${hollow}" 
            size="${size}" 
            icon="${icon}"
            icon-direction="${iconDirection}"
            link-url="${linkUrl}">
            ${type} button
        </c-button>`);
};

export const buttonTypes = () => {
    const hollow = boolean('Hollow', false);
    const size = select('Size', sizeOptions, 'md');
    const icon = text('Icon', '');
    const iconDirection = select('Icon Direction', iconDirectionOptions, 'left');
    const linkUrl = text('Link URL', '');
    const cssClass = text('CSS Class', 'm-md');
    const htmlId = text('HTML ID', '');
    return (types.map(type => 
        `<c-button html-id="${htmlId}" 
            css-class="${cssClass}" 
            type="${type}" 
            hollow="${hollow}" 
            size="${size}" 
            icon="${icon}"
            icon-direction="${iconDirection}"
            link-url="${linkUrl}">
            ${type} button
        </c-button>`).join(""));
};

export const sizeVariations = () => {
    const type = select('Type', variations, 'primary');
    const hollow = boolean('Hollow', false);
    const icon = text('Icon', '');
    const iconDirection = select('Icon Direction', iconDirectionOptions, 'left');
    const linkUrl = text('Link URL', '');
    const cssClass = text('CSS Class', 'm-md');
    const htmlId = text('HTML ID', '');
    return (buttonSizes.map(size => 
        `<c-button html-id="${htmlId}" 
            css-class="${cssClass}" 
            type="${type}" 
            hollow="${hollow}" 
            size="${size}" 
            icon="${icon}"
            icon-direction="${iconDirection}"
            link-url="${linkUrl}">
            ${type} ${size} button
        </c-button>`).join(''));
};
