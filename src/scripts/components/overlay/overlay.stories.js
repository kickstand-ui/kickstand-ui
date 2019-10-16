import { text, select, boolean, number } from "@storybook/addon-knobs";

export default { title: 'Overlay' };

export const basicOverlay = () => {
    const show = boolean('show', false);
    const absolute = boolean('absolute', false);
    const theme = select('theme', ['dark', 'light'], 'dark');
    const container = document.createElement('div');
    const overlay = document.createElement('c-overlay');
    container.className = 'w-33';
    overlay.absolute = absolute;
    overlay.theme = theme;
    container.innerHTML = `<c-overlay show="${show}" absolute="${absolute}" theme="${theme}">Hello!!!</c-overlay>`;
    return container;
};
