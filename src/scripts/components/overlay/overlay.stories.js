import { text, select, boolean, number } from "@storybook/addon-knobs";

export default { title: 'Overlay' };

export const playground = () => {
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
        <c-overlay absolute="${absolute}" theme="${theme}" dismissible="${requireResponse}" id="overlay">
            <button id="close">Close Overlay!</button>
        </c-overlay>
    </div>
    `);
}