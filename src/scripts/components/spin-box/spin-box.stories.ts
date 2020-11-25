import { number } from '@storybook/addon-knobs';

export default { title: 'Components/Spin Box' };

export const playground = () => {
    const value = number('value', 0);
    const min = number('min', undefined);
    const max = number('max', undefined);
    return (`
    <div class="form-field">
        <ks-spin-box class="m-xxl" min="${min}" value=${value} max="${max}" />
    </div>
    `);
}