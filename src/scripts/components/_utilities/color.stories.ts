export default { title: 'Utilities/Colors' };

const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
const variations = ['-lighter', '-light', '', '-dark', '-darker'];

export const textColor = () => {
    return (`<div class="m-xxl">
        ${colors.map(c => variations.map(v => `<div class="text-${c}${v}">text-${c}${v}</div>`).join('')).join('')}
    </div>`);
};

export const backgroundColor = () => {
    return (`<div class="m-xxl">
        ${colors.map(c => variations.map(v => `<div class="my-md p-sm bg-${c}${v} text-${c}">bg-${c}${v}</div>`).join('')).join('')}
    </div>`);
};
