export default { title: 'Utilities/Text' };

const textSizes = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
const textDecorations = ['lighter', 'light', 'normal', 'bold', 'bolder', 'italic', 'underline'];
const align = ['left', 'center', 'right'];

export const sizes = () => {
    return (`<div class="m-xxl">
        ${textSizes.reverse().map(s => `<div class="t-${s}">t-${s}</div>`).join('')}
    </div>`);
};

export const headings = () => {
    return (`<div class="m-xxl">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
    </div>`);
}

export const responsiveSizes = () => {
    return (`<div class="m-xxl">
        <div class="t-xxl md:t-lg sm:t-sm">This is some dynamic text</div>
    </div>`);
};

export const decorations = () => {
    return (`
    <h2>Static</h2>
    <div class="m-xxl">
        ${textDecorations.map(d => `<div class="my-md t-${d}">t-${d}</div>`).join('')}
    </div>
    <h2>Hover</h2>
    <div class="m-xxl">
        ${textDecorations.map(d => `<div class="my-md hover:t-${d}">hover:t-${d}</div>`).join('')}
    </div>
    `);
};

export const alignment = () => {
    return (`<div class="m-xxl">
        ${align.map(a => `<div class="my-md p-sm bg-light-light t-${a}">t-${a}</div>`).join('')}
    </div>`);
};
