export default { title: 'Utilities/Text' };

const textSizes = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
const textDecorations = ['weight-lighter', 'weight-light', 'weight-normal', 'weight-bold', 'weight-bolder', 'italic', 'underline'];
const align = ['left', 'center', 'right'];

export const sizes = () => {
    return (`<div class="m-xxl">
        ${textSizes.map(s => `<div class="text-${s}">text-${s}</div>`).join('')}
    </div>`);
};

export const responsiveSizes = () => {
    return (`<div class="m-xxl">
        <div class="text-xxl md:text-lg sm:text-sm">This is some dynamic text</div>
    </div>`);
};

export const decorations = () => {
    return (`
    <h2>Static</h2>
    <div class="m-xxl">
        ${textDecorations.map(d => `<div class="my-md text-${d}">text-${d}</div>`).join('')}
    </div>
    <h2>Hover</h2>
    <div class="m-xxl">
        ${textDecorations.map(d => `<div class="my-md hover:text-${d}">hover:text-${d}</div>`).join('')}
    </div>
    `);
};

export const alignment = () => {
    return (`<div class="m-xxl">
        ${align.map(a => `<div class="my-md p-sm bg-light-light text-${a}">text-${a}</div>`).join('')}
    </div>`);
};
