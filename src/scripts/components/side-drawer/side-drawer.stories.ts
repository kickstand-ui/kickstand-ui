import { select } from '@storybook/addon-knobs';

export default { title: 'Side Drawer' };

export const playground = () => {
    const size = select('size', ['sm', 'md', 'lg', 'xl'], 'sm');
    const position = select('position', ['left', 'right'], 'left');

    setTimeout(() => {
        let $openButton = document.getElementById('open');
        let $drawer = document.querySelector<HTMLKsSideDrawerElement>('#drawer');

        $openButton.addEventListener('click', () => {
            $drawer.show();
        });
    });
    return (`
    <div>
        <ks-button class="m-xxl" id="open">Open Drawer</ks-button>
        <ks-side-drawer size="${size}" position="${position}" header-text="Test Drawer" id="drawer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nihil ipsum voluptates consectetur sint voluptatum dolores molestias aut possimus, ipsa veritatis qui placeat ea ducimus sapiente atque soluta explicabo! Repellat.
        </ks-side-drawer>
    </div>
    `);
};