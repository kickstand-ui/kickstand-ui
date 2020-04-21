import { text, select, boolean, number } from "@storybook/addon-knobs";

export default { title: 'Dialog/Overlay' };

export const playground = () => {
    const theme = select('theme', ['dark', 'light'], 'dark');
    const absolute = boolean('absolute', false);
    const dismissible = boolean('dismissible', true);

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
    <div style="width:300px; height:300px; position:relative;">
        <c-button class="m-xxl" id="open">Open Overlay</c-button>
        <c-overlay absolute="${absolute}" theme="${theme}" dismissible="${dismissible}" id="overlay">
            <c-button color="light" id="close">Close Overlay!</c-button>
        </c-overlay>
    </div>
    `);
}