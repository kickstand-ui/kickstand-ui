import { text, select, boolean } from "@storybook/addon-knobs";

export default { title: 'Components/Tooltip' };

const positions = ['top', 'bottom', 'left', 'right'];
const sizes = ['sm', 'md', 'lg', 'xl'];
export const playground = () => {
    const tooltipText = text('text', 'This is a <b>test</b>.');
    const position = select('position', positions, 'top');
    const size = select('size', sizes, 'sm');
    const disable = boolean('disable', false);
    const hideDecoration = boolean('hide-decoration', false);
    return (`<p style="margin-top: 40vh;" class="text-center w-100">
        This is a test <ks-tooltip disable="${disable}" hide-decoration="${hideDecoration}" position="${position}" size="${size}" text="${tooltipText}">tooltip</ks-tooltip>.
    </p>`);
};

export const tooltipPositions = () => {
    return (`<ks-grid style="margin-top: 40vh;">
        <ks-column>
            <ks-tooltip class="m-auto" text="Test Text">Top</ks-tooltip>
        </ks-column>
        <ks-column>
            <ks-tooltip class="m-auto" position="right" text="Test Text">Right</ks-tooltip>
        </ks-column>
        <ks-column>
            <ks-tooltip class="m-auto" position="bottom" text="Test Text">Bottom</ks-tooltip>
        </ks-column>
        <ks-column>
            <ks-tooltip class="m-auto" position="left" text="Test Text">Left</ks-tooltip>
        </ks-column>
    </ks-grid>`);
};
