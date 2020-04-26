export default { title: 'Utilities/Spacing' };

const sizes = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
const directions = ['', 't', 'r', 'b', 'l', 'x', 'y'];

export const padding = () => {
    return (`<div class="m-xxl">
            <h2>Padding</h2>
            ${sizes.map(s => `
                <h3>${s}</h3>
                <div class="display-flex align-start w-100 my-md">
                    ${directions.map(d => `<div class="w-100 mx-sm bg-info-lighter p${d}-${s}">
                        <div class="bg-light">p${d}-${s}</div>
                    </div>`).join('')}
                </div>
                <br>`).join('')}
        </div>`);
};

export const margin = () => {
    return (`<div class="m-xxl">
            <h2>Margin</h2>
            ${sizes.map(s => `
            <h3>${s}</h3>
            <div class="display-flex align-start w-100 my-md">
                ${directions.map(d => `<div class="w-100 mx-sm bg-info-lighter">
                    <div class="bg-light m${d}-${s}">m${d}-${s}</div>
                </div>`).join('')}
            </div>
            <br>`).join('')}
        </div>`);
};
