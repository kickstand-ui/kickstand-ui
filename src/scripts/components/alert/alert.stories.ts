import { text, select, boolean } from "@storybook/addon-knobs";

export default { title: 'Alert' };

const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
const dummyText = `“People will never be replaced by machines. In the end, life and business are about human connections. And computers are about trying to murder you in a lake. And to me the choice is easy.”<br><br>Michael Scott`;
export const defaultHeading = () => {
    const color = select('color', colors, 'primary');
    const header = text('header', 'The Facts of Life by Michael Scott');
    const note = boolean('note', false);
    return (`<ks-alert class="m-xl" header="${header}" note="${note}" color="${color}">${dummyText}</ks-alert>`);
};
