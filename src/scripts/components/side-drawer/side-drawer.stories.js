import { text, select, boolean } from '@storybook/addon-knobs';

export default { title: 'Side Drawer' };

export const playground = () => {
    setTimeout(() => {
        let $openButton = document.getElementById('open');
        let $modal = document.getElementById('modal');

        $openButton.addEventListener('click', () => {
            $modal.show();
        });
    });
    return (`
    <div>
        <c-button class="m-xxl" id="open">Open Modal</c-button>
        <c-side-drawer header-text="Test Drawer" id="modal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nihil ipsum voluptates consectetur sint voluptatum dolores molestias aut possimus, ipsa veritatis qui placeat ea ducimus sapiente atque soluta explicabo! Repellat.
        </c-side-drawer>
    </div>
    `);
};