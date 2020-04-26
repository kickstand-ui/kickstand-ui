export default { title: 'Utilities/Layouts' };

const widths = [10, 20, 25, 30, 33, 40, 50, 60, 66, 70, 75, 80, 90, 100];

export const sizes = () => {
    return (`<div class="m-xxl">
        ${widths.map(s => `<div class="my-md p-sm bg-light w-${s}">w-${s}</div>`).join('')}
    </div>`);
};
