export default { title: 'Utilities/Borders' };

const positions = ['', '-t', '-r', '-b', '-l', '-x', '-y'];
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
const sizes = ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];

export const borders = () => {
    return `${sizes
        .map(
            s => `<ks-row class="m-xxl">
        ${positions
            .map(
                p =>
                    `<ks-column class="mx-md bg-light-light b${p}-${s}">b${p}-${s}</ks-column>`
            )
            .join('')}
    </ks-row>`
        )
        .join('')}`;
};

export const borderSizes = () => {
    return `<ks-row class="m-xxl">
        ${sizes
            .map(
                p =>
                    `<ks-column class="mx-md bg-light-light b-xs b-${p}">border-${p}</ks-column>`
            )
            .join('')}
    </ks-row>`;
};

export const borderColors = () => {
    return `${colors
        .map(
            c => `
    <h3>${c}</h3>
    <ks-row class="my-xl">
        ${positions
            .map(
                p =>
                    `<ks-column class="mr-md ml-xs bg-light-light b-xxs b${p}-${c}">b${p}-${c}</ks-column>`
            )
            .join('')}
    </ks-row>`
        )
        .join('')}`;
};

export const borderRadiuses = () => {
    return `${['none', 'sm', 'md', 'lg', 'xl', 'pill', 'circle']
        .map(
            x => `<ks-row class="m-xxl text-center">
        ${['', '-t', '-tl', '-tr', '-b', '-bl', '-br', '-l', '-r']
            .map(
                p =>
                    `<ks-column class="mr-sm bg-light-lighter px-sm py-md b-xxs br${p}-${x}">br${p}-${x}</ks-column>`
            )
            .join('')}
    </ks-row>`
        )
        .join('')}`;
};
