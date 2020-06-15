import { select, boolean } from "@storybook/addon-knobs";

export default { title: 'Overlay' };

export const playground = () => {
    const theme = select('theme', ['dark', 'light'], 'dark');
    const absolute = boolean('absolute', false);
    const preventClose = boolean('prevent-close', true);

    setTimeout(() => {
        let $openButton = document.getElementById('open');
        let $overlay = document.querySelector<HTMLKsOverlayElement>('#overlay');
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
        <ks-button class="m-xxl" id="open">Open Overlay</ks-button>
        <ks-overlay absolute="${absolute}" theme="${theme}" prevent-close="${preventClose}" id="overlay">
            <ks-button color="light" id="close">Close Overlay!</ks-button>
        </ks-overlay>
    </div>
    `);
}