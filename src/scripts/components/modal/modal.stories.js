import { text, select, boolean } from '@storybook/addon-knobs';

export default { title: 'Modal' };

export const playground = () => {
    setTimeout(() => {
        let $openButton = document.getElementById('open');
        let $modal = document.getElementById('modal');
        let $closeButton = document.getElementById('close');

        $openButton.addEventListener('click', () => {
            $modal.show();
        });
        $closeButton.addEventListener('click', () => {
            $modal.hide();
        });
    });
    return (`
    <div style="width:300px; height:300px;">
        <c-button class="m-xxl" id="open">Open Modal</c-button>
        <c-modal modal-title="Test Modal" id="modal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nihil ipsum voluptates consectetur sint voluptatum dolores molestias aut possimus, ipsa veritatis qui placeat ea ducimus sapiente atque soluta explicabo! Repellat.
            <c-modal-footer>
                <c-button id="close1" clear>Cancel</c-button>
                <c-button id="close">Close Modal!</c-button>
            </c-modal-footer>
        </c-modal>
    </div>
    `);
};
