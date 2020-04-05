import { text, select, boolean, number } from "@storybook/addon-knobs";

export default { title: 'Containers/Card' };

const imgDirections = ['top', 'bottom', 'left', 'right', 'behind'];

export const card = () => { 
    const imgDir = select('img-direction', imgDirections, 'top');
    const src = text('img-src', 'https://imgix.bustle.com/rehost/2016/9/13/ffa8cec2-85d9-40ad-b386-906b75bf5610.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70');
    const alt = text('alt', 'Days of no nonsense');
    const url = text('url', '');
    const clickable = boolean('clickable', false);
    const lazy = boolean('lazy', true);
    const threshold = number('threshold', 300);
    const cardTitle = text('card-title', 'Card Title');
    const cardSubtitle = text('card-subtitle', 'Card Subtitle');
    const bodyText = text('body text', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat nulla error inventore dolore iusto sit. Et soluta ipsum optio illum vero voluptatem? Aperiam fugit maxime animi. Iusto eius dignissimos ipsum.');
    
    return(`<c-card img-src="${src}"
                    img-direction="${imgDir}"
                    alt="${alt}"
                    url="${url}"
                    clickable="${clickable}"
                    class="w-25 m-xxl"
                    lazy="${lazy}"
                    threshold="${threshold}">
                <card-body card-title="${cardTitle}"
                           card-subtitle="${cardSubtitle}">
                    ${bodyText}
                </card-body>
                <card-footer></card-footer>
            </c-card>`);
};
