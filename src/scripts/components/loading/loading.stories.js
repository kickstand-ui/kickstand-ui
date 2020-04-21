import { text, select, boolean, number } from "@storybook/addon-knobs";

export default { title: 'Loading/Animated Loading' };

const sizes = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

export const playground = () => {
    const type = select('type', ['spinner', 'ellipsis'], 'spinner');
    const message = text('message', 'Loading');
    const showMessage = boolean('show-message', false);
    const cssClass = text('class', '')

    return (`<div>
        <span class="ml-sm">Some test text at 16px.</span>
        <span>
            <c-loading class="${cssClass}" message="${message}" show-message="${showMessage}" type="${type}" />
        </span>
    </div>`);
}

export const loadingOverlay = () => {
    const absolute = boolean('absolute', false);
    const type = select('type', ['spinner', 'ellipsis'], 'spinner')
    const message = text('message', 'Loading');
    const showMessage = boolean('show-message', false);
    const size = select('size', sizes, 'sm');

    setTimeout(() => {
        if (type === 'spinner') {
            let $loading = document.querySelector('c-loading-overlay');
            $loading.show();
        }
    });
    return (`<div style="width:300px; position:relative;">
        <img src="https://curiousgeorge2015.files.wordpress.com/2016/02/rainn-wilson-dwight-schrute-the-office2.jpg?w=680" alt="dwight schrute with blow torch" />
        <c-loading-overlay size="${size}" absolute="${absolute}" type="${type}" message="${message}" show-message="${showMessage}" />
    </div>`);
}