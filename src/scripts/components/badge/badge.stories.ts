import { text, select, boolean } from "@storybook/addon-knobs";

export default { title: 'Badge' };

const variations = { 'Primary': 'primary', 'Secondary': 'secondary', 'Success': 'success', 'Info': 'info', 'Warning': 'warning', 'Danger': 'danger', 'Light': 'light', 'Dark': 'dark' };

export const badges = () => {
    const color = select('color', variations, 'primary');
    const hollow = boolean('hollow', false);
    const badgeText = text('text', '6');
    return (`<h1>Days Since Our Last Nonsense <c-badge 
                       color="${color}" 
                       hollow="${hollow}">
                ${badgeText}
            </c-badge></h1>
            <h2>Days Since Our Last Nonsense <c-badge
                       color="${color}" 
                       hollow="${hollow}">
                ${badgeText}
            </c-badge></h2>
            <p>Days Since Our Last Nonsense <c-badge
                       color="${color}" 
                       hollow="${hollow}">
                ${badgeText}
            </c-badge></p>`);
};
