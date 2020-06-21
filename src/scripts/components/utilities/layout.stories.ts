export default { title: 'Utilities/Layouts' };

const widthSizes = [10, 20, 25, 30, 33, 40, 50, 60, 66, 70, 75, 80, 90, 100];
const heightSizes = [25, 50, 75, 100];

export const widths = () => {
    return (`<div class="m-xxl">
        ${widthSizes.map(s => `<div class="my-md p-sm bg-light w-${s}">w-${s}</div>`).join('')}
    </div>`);
};

export const heights = () => {
    return (`<ks-row class="m-xxl bg-light" style="height: 300px;">
        ${heightSizes.map(s => `<ks-column class="mx-md p-sm bg-primary-light h-${s}">h-${s}</ks-column>`).join('')}
    </ks-row>`);
};

export const flex = () => {
    return (`
    <div class="my-xl display-flex space-between align-start md:flex-column md:justify-start p-sm bg-primary" style="height: 250px;">
        <div class="p-sm bg-light border border-dark">Item 1</div>
        <div class="p-sm bg-light border border-dark">Item 2</div>
        <div class="p-sm bg-light border border-dark">Item 3</div>
    </div>
    `);
};