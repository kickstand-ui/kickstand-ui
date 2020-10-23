import { text, select, boolean } from "@storybook/addon-knobs";

export default { title: 'Components/Loading' };

const sizes = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];

export const playground = () => {
    const icon = select('icon', ['circle_spinner', 'ring_spinner', 'ellipsis_pulse', 'ellipsis_typing'], 'ring_spinner');
    const message = text('message', 'Loading...');
    const showMessage = boolean('show-message', false);
    const cssClass = text('class', '')

    return (`<div>
        <span class="ml-sm">Some test text at 16px.</span>
        <span>
            <ks-loading class="${cssClass}" message="${message}" show-message="${showMessage}" icon="${icon}" />
        </span>
    </div>`);
}

export const loadingOverlay = () => {
    const absolute = boolean('absolute', false);
    const icon = select('icon', ['circle_spinner', 'ring_spinner', 'ellipsis_pulse', 'ellipsis_typing'], 'ring_spinner');
    const message = text('message', 'Loading...');
    const showMessage = boolean('show-message', false);
    const size = select('size', sizes, 'sm');

    setTimeout(() => {
        let $loading = document.querySelector('ks-loading-overlay');
        $loading.show();
    });
    return (`<div class="position-relative" style="width:300px;">
        <img src="https://curiousgeorge2015.files.wordpress.com/2016/02/rainn-wilson-dwight-schrute-the-office2.jpg?w=680" alt="dwight schrute with blow torch" />
        <ks-loading-overlay size="${size}" absolute="${absolute}" icon="${icon}" message="${message}" show-message="${showMessage}" />
    </div>`);
}