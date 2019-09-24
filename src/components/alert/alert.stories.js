import { text, select } from "@storybook/addon-knobs";

export default { title: 'Alert' };

const variations = { 'Primary': 'primary', 'Secondary': 'secondary', 'Success': 'success', 'Info': 'info', 'Warning': 'warning', 'Danger': 'danger', 'Light': 'light', 'Dark': 'dark' };

export const defaultHeading = () => {
    const type = select('Type', variations, 'primary');
    const header = text('Header', 'Default Header Text');
    const cssClass = text('CSS Class', 'm-md');
    const htmlId = text('HTML Id', '');
    return (`<c-alert html-id="${htmlId}" css-class="${cssClass}" header="${header}" type="${type}"></c-alert>`);
};
