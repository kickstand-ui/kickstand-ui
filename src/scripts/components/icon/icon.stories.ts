import { text, select } from "@storybook/addon-knobs";
import { iconList } from './icon-list';

export default { title: 'Components/Icons' };

export const icons = () => {
    const icon = text('icon', 'activity');
    const rotate = select('rotate', [0, 45, 90, 135, 180, 225, 270, 360, -45, -90, -135, -180, -225, -270, -360], 0);
    const label = text('label', '');
    const labelledBy = text('labelled-by', '');
    const cssClass = text('class', '');
    return (`<p>This is some text! <ks-icon icon="${icon}" rotate="${rotate}" label="${label}" labelled-by="${labelledBy}" class="${cssClass}" label="test" /></p>`);
};

export const listOfIcons = () => {
    const icons = Object.keys(iconList);
    return (`<div class="d-flex flex-wrap">
        ${icons.map(x => `<ks-icon class="m-md text-lg text-info" icon="${x}" title="${x}"></ks-icon>`).join('')}
    </div>`);
}
