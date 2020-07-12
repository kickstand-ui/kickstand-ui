// import { text, select } from "@storybook/addon-knobs";

export default { title: 'Form' };

export const form = () => {
    // const icon = select('icon', ['bars', 'chevron', 'close', 'danger', 'info'], 'bars');
    // const rotate = select('rotate', [0, 45, 90, 135, 180, 225, 270, 360, -45, -90, -135, -180, -225, -270, -360], 0);
    // const cssClass = text('class', '');
    return (`<ks-form class="m-xl">
        <ks-form-field label="Name" required></ks-form-field>
        <ks-button type="submit">Submit</ks-button>
    </ks-form>`);
};
