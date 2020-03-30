import { text, select, boolean } from '@storybook/addon-knobs';

export default { title: 'Loading/Progress Bar' };

const types = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
const sizes = ['xs', 'sm', 'md', 'lg'];
const iconDirections = ['left', 'right'];

export const playground = () => {
    const type = select('type', types, 'primary');
    const value = text('value', 25);
    const size = select('size', sizes, 'md');
    const description = text('description', 'Loading...');
    const hideDescription = boolean('hide-description', false);
    const progressLabel = text('progress-label', 'Progress');
    const hideProgressLabel = boolean('hide-progress-label', false);
    return (`<c-progress-bar class="m-xxl" description="${description}" progress-label="${progressLabel}" hide-progress-label="${hideProgressLabel}" hide-description="${hideDescription}" size="${size}" type="${type}" value="${value}" />`);
};
