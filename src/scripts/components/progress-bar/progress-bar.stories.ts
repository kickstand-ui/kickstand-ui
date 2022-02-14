import { text, select, boolean, number } from '@storybook/addon-knobs';

export default { title: 'Components/Progress Bar' };

const types = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];

export const playground = () => {
    const color = select('color', types, 'primary');
    const value = number('value', 25);
    const description = text('description', 'Loading...');
    const hideDescription = boolean('hide-description', false);
    const progressLabel = text('progress-label', 'Progress');
    const hideProgressLabel = boolean('hide-progress-label', false);
    return (`<ks-progress-bar class="m-xxl" color="${color}" description="${description}" progress-label="${progressLabel}" hide-progress-label="${hideProgressLabel}" hide-description="${hideDescription}" value="${value}" />`);
};
