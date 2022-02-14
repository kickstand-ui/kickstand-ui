export default { title: 'Utilities/Spacing' };

const sizes = ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];
const directions = ['', 't', 'r', 'b', 'l', 'x', 'y'];

export const padding = () => {
    return `<div class="m-xxl">
            <h2>Padding</h2>
            ${sizes
                .map(
                    s => `
                <h3>${s}</h3>
                <div class="display-flex align-start w-100 my-md">
                    ${directions
                        .map(
                            d => `<div class="w-100 mr-md bg-info-lighter p${d}-${s}">
                        <div class="bg-light">p${d}-${s}</div>
                    </div>`
                        )
                        .join('')}
                </div>
                <br>`
                )
                .join('')}
        </div>`;
};

export const margin = () => {
    return `<div class="m-xxl">
            <h2>Margin</h2>
            ${sizes
                .map(
                    s => `
            <h3>${s}</h3>
            <div class="display-flex align-start w-100 my-md">
                ${directions
                    .map(
                        d => `<div class="w-100 mr-md bg-info-lighter">
                    <div class="bg-light m${d}-${s}">m${d}-${s}</div>
                </div>`
                    )
                    .join('')}
            </div>
            <br>`
                )
                .join('')}
        </div>`;
};

export const responsive = () => `
    <div class="m-xl">
        <span class="p-md md:p-xl sm:p-md bg-info-lighter">
            <span class="bg-light">I have a "md" padding normally, but an "xl" padding on small screens</span>
        </span>
    </div>
`;

export const negativeMargins = () => `
    <div class="m-xxl">
        <span class="p-xxl bg-info-lighter">
        </span>
        <span class="p-lg -ml-xl bg-warning">
            -ml-xl
        </span>
    </div>
`;
