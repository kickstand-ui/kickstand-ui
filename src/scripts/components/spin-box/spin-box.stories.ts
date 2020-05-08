import { number } from '@storybook/addon-knobs';

export default { title: 'Spin Box' };

export const playground = () => {
    const value = number('value', 0);
    return (`
    <div class="form-field">
        <c-spin-box class="m-xxl" min="-5" value=${value} max="5" />
    </div>
    `);
}