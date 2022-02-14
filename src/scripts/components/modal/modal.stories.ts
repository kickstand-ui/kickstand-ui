import { select, boolean } from '@storybook/addon-knobs';

export default { title: 'Components/Modal' };

export const playground = () => {
    const size = select('size', ['sm', 'md', 'lg'], 'md');
    const preventClose = boolean('prevent-close', false);

    return `
    <div style="width:300px; height:300px;">
        <ks-button class="m-xxl" shows="modal" id="open">Guess What???</ks-button>
        <ks-modal modal-title="Toby's back!!!" size="${size}" prevent-close="${preventClose}" id="modal">
            <img src="https://media.giphy.com/media/d10dMmzqCYqQ0/giphy.gif" alt="michael scott" />
            <ks-modal-footer>
                <ks-button class="close" hides="modal" display="clear">Cancel</ks-button>
                <ks-button class="close" hides="modal">Close Modal!</ks-button>
            </ks-modal-footer>
        </ks-modal>
    </div>
    `;
};
