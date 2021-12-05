export default { title: 'Utilities/Shadows' };

const shadows = ['none', 'outline', 'inner', 'xs', 'sm', 'md', 'lg', 'xl'];

export const shadowDisplay = () => {
    return (`<div>
        <div class="m-xxl display-flex space-between">
            ${shadows.map(s => `<div class="p-sm shadow-${s}">shadow-${s}</div>`).join('')}
        </div>
        <div class="m-xxl display-flex space-between">
            ${shadows.map(s => `<div class="p-sm hover:shadow-${s}">hover:shadow-${s}</div>`).join('')}
        </div>
        <div class="m-xxl display-flex space-between">
            ${shadows.map(s => `<div class="p-sm focus:shadow-${s}" tabindex="0">focus:shadow-${s}</div>`).join('')}
        </div>
    </div>`);
};
