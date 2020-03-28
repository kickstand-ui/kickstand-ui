import { text, select, boolean, number } from "@storybook/addon-knobs";

export default { title: 'Loading' };

export const playground = () => {
    const absolute = boolean('absolute', false);
    const type = select('type', ['spinner', 'ellipsis'], 'spinner')
    const requireResponse = boolean('require-response', false);

    setTimeout(() => {
        if (type === 'spinner') {
            let $loading = document.querySelector('c-loading');
            $loading.show();
        }
    });
    return (`<div style="width:300px; height:300px; position:relative;">
        <c-loading absolute="${absolute}" type="${type}" />
    </div>`);
}