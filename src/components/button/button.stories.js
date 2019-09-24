import { text, select, boolean } from "@storybook/addon-knobs";

export default { title: 'Button' };

const variations = { 'Primary': 'primary', 'Secondary': 'secondary', 'Success': 'success', 'Info': 'info', 'Warning': 'warning', 'Danger': 'danger', 'Light': 'light', 'Dark': 'dark' };
const sizes = {sm: 'sm', md: 'md', lg: 'lg', xl: 'xl'};

export const buttonTypes = () => {
    const type = select('Type', variations, 'primary');
    const hollow = boolean('Hollow', false);
    const size = select('Size', sizes, 'md');
    const icon = text('Icon', '');
    const iconDirection = select('Icon Direction', {top: 'top', right: 'right', bottom: 'bottom', left: 'left'}, 'left');
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
            </c-button>`)
};

export const hollowButton = () => {
    const type = select('Type', variations, 'primary');
    return (`<c-button css-class="m-md" type="${type}" hollow></c-button><br>`)
};
