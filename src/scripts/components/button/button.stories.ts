import { text, select, boolean } from '@storybook/addon-knobs';

export default { title: 'Components/Button' };

const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
const displays = ['solid', 'hollow', 'clear', 'link'];
const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

export const playground = () => {
    const color = select('color', colors, 'primary');
    const display = select('display', displays, 'solid');
    const loading = boolean('loading', false);
    const disabled = boolean('disabled', false);
    const size = select('size', sizes, 'md');
    const linkUrl = text('href', '');
    const target = text('target', '');
    const buttonClass = text('button-class', '');
    const css2class = text('class', '');
    const linkTag = text('link-tag', 'a');
    const hrefProp = text('href-prop', 'href');
    return (`<ks-button
            class="${css2class}"
            button-class="${buttonClass}" 
            class="m-md"
            color="${color}" 
            display="${display}" 
            size="${size}" 
            href="${linkUrl}"
            loading="${loading}"
            disabled="${disabled}"
            target="${target}"
            link-tag="${linkTag}"
            href-prop="${hrefProp}">
            ${color} button
        </ks-button>`);
};

export const iconButton = () => {
    const color = select('color', colors, 'primary');
    const display = select('display', displays, 'solid');
    const loading = boolean('loading', false);
    const disabled = boolean('disabled', false);
    const size = select('size', sizes, 'md');
    const linkUrl = text('href', '');
    const target = text('target', '');
    const buttonClass = text('button-class', '');
    const cssClass = text('class', '');
    return (`<ks-button
            class="${cssClass}"
            button-class="${buttonClass}" 
            class="m-md"
            color="${color}" 
            display="${display}" 
            size="${size}" 
            href="${linkUrl}"
            loading="${loading}"
            disabled="${disabled}"
            target="${target}"
            hide-text
            >
            ${color} button
        </ks-button>`);
};

export const buttonColors = () => {
    const display = select('display', displays, 'solid');
    const size = select('size', sizes, 'md');
    const linkUrl = text('url', '');
    const buttonClass = text('button-class', '');
    return (colors.map(color =>
        `<ks-button
            button-class="${buttonClass}" 
            color="${color}" 
            display="${display}" 
            size="${size}" 
            url="${linkUrl}">
            ${color} button
        </ks-button>`).join(""));
};

export const buttonDisplay = () => {
    return (displays.map(d =>
        `<ks-button
            class="ml-md mt-md" 
            display="${d}" href="#">
            ${d} button
        </ks-button>`).join(""));
};

export const sizeVariations = () => {
    const color = select('color', colors, 'primary');
    const display = select('display', displays, 'solid');
    const linkUrl = text('url', '');
    const buttonClass = text('button-class', '');
    return (sizes.map(size =>
        `<ks-button
            class="m-md"
            button-class="${buttonClass}" 
            color="${color}" 
            display="${display}" 
            size="${size}" 
            url="${linkUrl}">
            ${size} button
        </ks-button>`).join(''));
};


export const buttonBar = () => {
    const stacked = boolean('stacked', false);
    const buttonDisplay = text('button display', 'hollow');
    const buttonClass = text('class', '');

    return (`<div class="m-xl">
        <ks-button-bar stacked="${stacked}" class="${buttonClass}">
            <ks-button display="${buttonDisplay}">Button 1</ks-button>
            <ks-button display="${buttonDisplay}">Button 2</ks-button>
            <ks-button display="${buttonDisplay}">Button 3</ks-button>
            <ks-button display="${buttonDisplay}">Button 4</ks-button>
            <ks-dropdown text="Account" display="${buttonDisplay}" position="right">
                <ks-dropdown-item prevent-close><span>Welcome, Agent Michael Scarn!</span></ks-dropdown-item>
                <ks-dropdown-item>
                    <a href="#">Order History</a>
                </ks-dropdown-item>
                <ks-dropdown-item>
                    <a href="#">Account Settings</a>
                </ks-dropdown-item>
                <ks-dropdown-item>
                    <a href="#">Wish Lists</a>
                </ks-dropdown-item>
                <ks-dropdown-item>
                    <ks-button>Sign Out</ks-button>
                </ks-dropdown-item>
            </ks-dropdown>
    
        </ks-button-bar>
    </div>`)
}

export const inlineButton = () => {
    return (`This is <a href="#">some</a> text with a <ks-button display="link">inline button</ks-button> in a sentence.`);
};
