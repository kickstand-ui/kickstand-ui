import { text, select } from "@storybook/addon-knobs";

export default { title: 'Alert' };

const variations = { 'Primary': 'primary', 'Secondary': 'secondary', 'Success': 'success', 'Info': 'info', 'Warning': 'warning', 'Danger': 'danger', 'Light': 'light', 'Dark': 'dark' };

export const withHeading = () => {
    const type = select('Type', variations, 'primary');
    return (`<c-alert css-class="m-md" header="Primary Alert" type="${type}"></c-alert>`);

};
