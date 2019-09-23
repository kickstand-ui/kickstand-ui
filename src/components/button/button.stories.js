import { text, select } from "@storybook/addon-knobs";

export default { title: 'Button' };

const variations = { 'Primary': 'primary', 'Secondary': 'secondary', 'Success': 'success', 'Info': 'info', 'Warning': 'warning', 'Danger': 'danger', 'Light': 'light', 'Dark': 'dark' };

export const buttonTypes = () => {
    const type = select('Type', variations, 'primary');
    return (`<c-button css-class="m-md" type="${type}"></c-button><br>`)
};

export const hollowButton = () => {
    const type = select('Type', variations, 'primary');
    return (`<c-button css-class="m-md" type="${type}" hollow></c-button><br>`)
};
