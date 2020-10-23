import { select } from '@storybook/addon-knobs';

export default { title: 'Components/Side Drawer' };

export const playground = () => {
    const size = select('size', ['sm', 'md', 'lg', 'xl'], 'sm');
    const position = select('position', ['left', 'right'], 'left');
    return (`
        <div>
            <ks-button class="m-xxl" shows="drawer">Open Drawer</ks-button>
            <ks-side-drawer size="${size}" position="${position}" header-text="Test Drawer" id="drawer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nihil ipsum voluptates consectetur sint voluptatum dolores molestias aut possimus, ipsa veritatis qui placeat ea ducimus sapiente atque soluta explicabo! Repellat.
            </ks-side-drawer>
        </div>
    `);
};