import { text, select, boolean, number } from "@storybook/addon-knobs";

export default { title: 'Card' };

const imgDirections = ['top', 'bottom', 'left', 'right', 'behind'];

export const card = () => {
    const imgDir = select('img-direction', imgDirections, 'top');
    const src = text('img-src', 'https://media.boingboing.net/wp-content/uploads/2018/07/screenshot-22.jpg');
    const alt = text('alt', 'Michael Scott');
    const url = text('url', '');
    const clickable = boolean('clickable', false);
    const lazy = boolean('lazy', true);
    const threshold = number('threshold', 300);
    const cardTitle = text('card-title', 'Meditation Moment');
    const cardSubtitle = text('card-subtitle', 'Comfort Food');
    const bodyText = text('body text', `"It's never too early for ice cream, Jim. But we didn't have any ice cream, so this is mayonnaise and black olives. It's comfort food, alright?"`);

    return (`<ks-card img-src="${src}"
                    img-direction="${imgDir}"
                    alt="${alt}"
                    url="${url}"
                    clickable="${clickable}"
                    class="w-33 m-xxl"
                    lazy="${lazy}"
                    threshold="${threshold}">
                <card-body card-title="${cardTitle}"
                           card-subtitle="${cardSubtitle}">
                    ${bodyText}
                </card-body>
                <card-footer></card-footer>
            </c-card>`);
};
