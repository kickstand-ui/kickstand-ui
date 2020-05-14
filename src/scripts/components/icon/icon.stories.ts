import { text, select } from "@storybook/addon-knobs";

export default { title: 'Icons' };

export const icons = () => {
    const icon = select('icon', ['bars', 'chevron', 'close', 'danger', 'info'], 'bars');
    const rotate = select('rotate', [0, 45, 90, 135, 180, 225, 270, 360, -45, -90, -135, -180, -225, -270, -360], 0);
    const cssClass = text('class', '');
    return (`<ks-icon icon="${icon}" rotate="${rotate}" class="${cssClass}" />`);
};
