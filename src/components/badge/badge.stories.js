import { text, select, boolean } from "@storybook/addon-knobs";

export default { title: 'Badge' };

const variations = { 'Primary': 'primary', 'Secondary': 'secondary', 'Success': 'success', 'Info': 'info', 'Warning': 'warning', 'Danger': 'danger', 'Light': 'light', 'Dark': 'dark' };

export const badges = () => {
    const type = select('type', variations, 'primary');
    const hollow = boolean('hollow', false);
    const badgeText = text('text', '3');
    const cssClass = text('css-class', '');
    return (`<h1>Test H1 Header <c-badge 
                       css-class="${cssClass}" 
                       type="${type}" 
                       hollow="${hollow}">
                ${badgeText}
            </c-badge></h1>
            <h2>Test H2 Header <c-badge
                       css-class="${cssClass}" 
                       type="${type}" 
                       hollow="${hollow}">
                ${badgeText}
            </c-badge></h2>
            <p>Test Paragraph <c-badge
                       css-class="${cssClass}" 
                       type="${type}" 
                       hollow="${hollow}">
                ${badgeText}
            </c-badge></p>`);
};
