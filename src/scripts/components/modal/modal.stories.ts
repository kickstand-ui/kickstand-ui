import { select, boolean } from '@storybook/addon-knobs';

export default { title: 'Modal' };

export const playground = () => {
    const size = select('size', ['sm', 'md', 'lg'], 'md');
    const dismissible = boolean('dismissible', true);

    setTimeout(() => {
        let $openButton = document.getElementById('open');
        let $modal = document.querySelector<HTMLCModalElement>('#modal');
        let $closeButtons = document.querySelectorAll('.close');

        $openButton.addEventListener('click', () => $modal.show());
        $closeButtons.forEach(x => x.addEventListener('click', () => $modal.hide()));
    });
    return (`
    <div style="width:300px; height:300px;">
        <c-button class="m-xxl" id="open">Guess What???</c-button>
        <c-modal modal-title="Toby's back!!!" size="${size}" dismissible="${dismissible}" id="modal">
            <img src="https://media.giphy.com/media/d10dMmzqCYqQ0/giphy.gif" alt="michael scott" />
            <c-modal-footer>
                <c-button class="close" display="clear">Cancel</c-button>
                <c-button class="close">Close Modal!</c-button>
            </c-modal-footer>
        </c-modal>
    </div>
    `);
};
