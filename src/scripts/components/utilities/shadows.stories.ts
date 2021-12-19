export default { title: 'Utilities/Shadows' };

const shadows = ['none', 'outline', 'inner', 'xs', 'sm', 'md', 'lg', 'xl'];

export const shadowDisplay = () => {
    return (`<div>
        <div class="m-xxl d-flex space-between">
            ${shadows.map(s => `<div class="p-sm bs-${s}">bs-${s}</div>`).join('')}
        </div>
        <div class="m-xxl d-flex space-between">
            ${shadows.map(s => `<div class="p-sm hover:bs-${s}">hover:bs-${s}</div>`).join('')}
        </div>
        <div class="m-xxl d-flex space-between">
            ${shadows.map(s => `<div class="p-sm focus:bs-${s}" tabindex="0">focus:bs-${s}</div>`).join('')}
        </div>
    </div>`);
};
