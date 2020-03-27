import { text, select, boolean } from "@storybook/addon-knobs";

export default { title: 'Tooltip' };

const positions = ['top', 'bottom', 'left', 'right'];
const sizes = ['sm', 'md', 'lg', 'xl'];
export const playground = () => {
    const tooltipText = text('text', 'This is a <b>test</b>.');
    const position = select('position', positions, 'top');
    const size = select('size', sizes, 'sm');
    const disable = boolean('disable', false);
    const hideDecoration = boolean('hide-decoration', false);
    return (`<p style="margin-top: 40vh;" class="text-center w-100">
        This is a test <c-tooltip disable="${disable}" hide-decoration="${hideDecoration}" position="${position}" size="${size}" text="${tooltipText}">tooltip</c-tooltip>.
    </p>`);
};

export const tooltipPositions = () => {
    return (`<c-row style="margin-top: 40vh;">
        <c-column>
            <c-tooltip class="m-auto" text="Test Text">Top</c-tooltip>
        </c-column>
        <c-column>
            <c-tooltip class="m-auto" position="right" text="Test Text">Right</c-tooltip>
        </c-column>
        <c-column>
            <c-tooltip class="m-auto" position="bottom" text="Test Text">Bottom</c-tooltip>
        </c-column>
        <c-column>
            <c-tooltip class="m-auto" position="left" text="Test Text">Left</c-tooltip>
        </c-column>
    </c-row>`);
};
