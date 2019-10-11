import { text, select, boolean } from "@storybook/addon-knobs";

export default { title: 'Alert' };

const types = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
const dummyText = `“People will never be replaced by machines. In the end, life and business are about human connections. And computers are about trying to murder you in a lake. And to me the choice is easy.”<br><br>Michael Scott`;
export const defaultHeading = () => {
    const type = select('type', types, 'primary');
    const header = text('header', 'The Facts of Life by Michael Scott');
    const note = boolean('note', false);
    const cssClass = text('css-class', 'm-md');
    return (`<c-alert css-class="${cssClass}" header="${header}" note="${note}" type="${type}">${dummyText}</c-alert>`);
};
