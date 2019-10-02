import { text, select, boolean, number } from "@storybook/addon-knobs";

export default { title: 'Overlay' };

export const basicOverlay = () => {
    const absolute = boolean('absolute', false);
    const theme = select('theme', ['dark', 'light'], 'dark');
    return (`<button onClick="overlay.show()">Show Overlay</button>
            <div class="w-33">
                <c-overlay absolute=${absolute} theme="${theme}">
                    <button onClick="overlay.hide()">Hide Overlay</button>
                </c-overlay>
            </div>
    `);
};
