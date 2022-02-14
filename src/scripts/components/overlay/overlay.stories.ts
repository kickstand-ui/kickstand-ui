import { select, boolean } from '@storybook/addon-knobs';

export default { title: 'Components/Overlay' };

export const playground = () => {
    const theme = select('theme', ['dark', 'light'], 'dark');
    const absolute = boolean('absolute', false);
    const preventClose = boolean('prevent-close', true);
    return `
        <div style="width:300px; height:300px; position:relative;">
            <ks-button class="m-xxl" shows="overlay">Open Overlay</ks-button>
            <ks-overlay absolute="${absolute}" theme="${theme}" prevent-close="${preventClose}" id="overlay">
                <ks-button color="light" hides="overlay">Close Overlay!</ks-button>
            </ks-overlay>
        </div>
    `;
};

export const themes = () => {
    return `
    <div class="m-xl">
        <ks-button shows="light_overlay">Show Light Overlay</ks-button>
        <ks-button shows="dark_overlay">Show Dark Overlay</ks-button>
        <ks-overlay theme="light" id="light_overlay">
            <ks-img style="max-width:500px;" lazy src="/images/demo/michael_scott_jesus.jpg" alt="Michael Scott dressed as Jesus" />
        </ks-overlay>
        <ks-overlay theme="dark" id="dark_overlay">
            <ks-img lazy src="/images/demo/prison_mike.jpeg" alt="Prison Mike" />
        </ks-overlay>
    </div>
    `;
};
