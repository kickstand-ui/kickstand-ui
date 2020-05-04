import { number } from '@storybook/addon-knobs';

export default { title: 'Spin Box' };

export const playground = () => {
    const value = number('value', 0);
    return (`
    <c-spin-box class="m-xxl" min="-5" value=${value} max="5" />
    `);
}