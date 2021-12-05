import { text, boolean } from "@storybook/addon-knobs";

export default { title: 'Components/Switch' };

export const playground = () => {
    const label = text('label', 'Show Pricing');
    const checked = boolean('checked', false);
    const disable = boolean('disable', false);
    return (`<div class="m-xxl">
        <ks-switch label="${label}" checked="${checked}" disable="${disable}" />
    </div>`);
};