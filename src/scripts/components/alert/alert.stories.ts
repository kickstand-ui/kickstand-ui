import { text, select, boolean } from "@storybook/addon-knobs";

export default { title: 'Alert' };

const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
const dummyText = `“People will never be replaced by machines. In the end, life and business are about human connections. And computers are about trying to murder you in a lake. And to me the choice is easy.”<br><br>-- Michael Scott`;
export const defaultHeading = () => {
    const color = select('color', colors, 'primary');
    const header = text('header', 'The Facts of Life by Michael Scott');
    const note = boolean('note', false);
    const dismissible = boolean('dismissible', false);
    const display = boolean('display', false);
    return (`
        <div class="m-xxl">
            <ks-alert id="alert_test" header="${header}" note="${note}" color="${color}" dismissible="${dismissible}" display="${display}">${dummyText}</ks-alert>
            <p>Some random text.</p>
            <div>
                <ks-button shows="alert_test">Show Alert</ks-button>
            </div>
        </div>
    `);
};
