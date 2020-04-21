import { text, select, boolean } from '@storybook/addon-knobs';

export default { title: 'Dialog/Modal' };

export const playground = () => {
    const size = select('size', ['sm', 'md', 'lg'], 'md');

    setTimeout(() => {
        let $openButton = document.getElementById('open');
        let $modal = document.getElementById('modal');
        let $closeButtons = document.querySelectorAll('.close');

        $openButton.addEventListener('click', () => $modal.show());
        $closeButtons.forEach(x => x.addEventListener('click', () => $modal.hide()));
    });
    return (`
    <div style="width:300px; height:300px;">
        <c-button class="m-xxl" id="open">Open Modal</c-button>
        <c-modal modal-title="Test Modal" size="${size}" id="modal">
            <h4>It's Belscnicle!</h4>
            <img src="http://vignette1.wikia.nocookie.net/theoffice/images/d/d1/Dwights-special-christmas.jpg" alt="Belscnicle" />
\            <c-modal-footer>
                <c-button class="close" display="clear">Cancel</c-button>
                <c-button class="close">Close Modal!</c-button>
            </c-modal-footer>
        </c-modal>
    </div>
    `);
};
