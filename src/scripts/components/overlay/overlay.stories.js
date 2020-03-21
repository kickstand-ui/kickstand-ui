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

export const test = () => {
    const theme = select('theme', ['dark', 'light'], 'dark');
    const absolute = boolean('absolute', false);
    const requireResponse = boolean('require-response', false);

    setTimeout(() => {
        let $openButton = document.getElementById('open');
        let $overlay = document.getElementById('overlay');
        let $closeButton = document.getElementById('close');

        $openButton.addEventListener('click', () => {
            $overlay.show();
        });
        $closeButton.addEventListener('click', () => {
            $overlay.hide();
        });
    });
    return (`
    <div style="width:300px; height:300px;">
        <button class="m-xxl" id="open">Open Overlay</button>
        <c-overlay absolute="${absolute}" theme="${theme}" require-response="${requireResponse}" id="overlay">
            <button id="close">Close Overlay!</button>
        </c-overlay>
    </div>
    `);
}