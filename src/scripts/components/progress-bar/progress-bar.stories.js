import { text, select, boolean } from '@storybook/addon-knobs';

export default { title: 'Loading/Progress Bar' };

const types = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
const sizes = ['xs', 'sm', 'md', 'lg'];
const iconDirections = ['left', 'right'];

export const playground = () => {
    const type = select('type', types, 'primary');
    const size = select('size', sizes, 'md');
    const value = text('value', 25);
    return (`<c-progress-bar class="m-xxl" size="${size}" type="${type}" value="${value}" />`);
};
