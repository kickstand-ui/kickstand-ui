import { text, select } from "@storybook/addon-knobs";
import { iconList } from './icon-list';

export default { title: 'Components/Icons' };

export const icons = () => {
    const icon = text('icon', 'activity');
    const rotate = select('rotate', [0, 45, 90, 135, 180, 225, 270, 360, -45, -90, -135, -180, -225, -270, -360], 0);
    const cssClass = text('class', '');
    return (`<p>This is some text! <ks-icon icon="${icon}" rotate="${rotate}" class="${cssClass}" label="test" /></p>`);
};

export const listOfIcons = () => {
    return (`<div class="display-flex flex-wrap">
        ${iconList.map(x => `<ks-icon class="m-md text-lg text-info" icon="${x.name}" title="${x.name}"></ks-icon>`).join('')}
    </div>`);
}
