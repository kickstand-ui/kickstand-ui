import { text, select, boolean, number } from '@storybook/addon-knobs';

export default { title: 'Components/Progress Bar' };

const types = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
const sizes = ['xs', 'sm', 'md', 'lg'];

export const playground = () => {
    const color = select('color', types, 'primary');
    const value = number('value', 25);
    const size = select('size', sizes, 'md');
    const description = text('description', 'Loading...');
    const hideDescription = boolean('hide-description', false);
    const progressLabel = text('progress-label', 'Progress');
    const hideProgressLabel = boolean('hide-progress-label', false);
    return (`<ks-progress-bar class="m-xxl" color="${color}" description="${description}" progress-label="${progressLabel}" hide-progress-label="${hideProgressLabel}" hide-description="${hideDescription}" size="${size}" value="${value}" />`);
};
