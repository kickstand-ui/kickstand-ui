export default { title: 'Utilities/Colors' };

const colors = [
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'light',
    'dark',
];
const variations = ['-lighter', '-light', '', '-dark', '-darker'];

export const textColor = () => {
    return `<div class="m-xxl">
        ${colors
            .map(c =>
                variations
                    .map(v => `<div class="text-${c}${v}">text-${c}${v}</div>`)
                    .join('')
            )
            .join('')}
        <div class="text-black">text-black</div>
        <div class="text-white bg-dark">text-white</div>
    </div>`;
};

export const backgroundColor = () => {
    return `<div class="m-xxl">
        ${colors
            .map(c =>
                variations
                    .map(
                        v =>
                            `<div class="my-md p-sm bg-${c}${v} text-${c}">bg-${c}${v}</div>`
                    )
                    .join('')
            )
            .join('')}
        <div class="my-md p-sm bg-black">bg-black</div>
        <div class="my-md p-sm bg-white">bg-white</div>
    </div>`;
};
