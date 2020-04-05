import { text, select, boolean, number } from "@storybook/addon-knobs";

export default { title: 'Forms/Spin Box' };

export const playground = () => {
    const theme = select('theme', ['dark', 'light'], 'dark');
    const absolute = boolean('absolute', false);
    const dismissible = boolean('dismissible', true);
    return (`
    <c-spin-box min="-5" max="5" />
    `);
}