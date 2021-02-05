import { text} from '@storybook/addon-knobs';

export default { title: "Components/Breadcrumbs" };

const breadcrumbs = [
    { url: 'test.com', text: '<ks-icon icon="home"></ks-icon> Home' },
    { url: 'test.com', text: 'Products' },
    { url: 'test.com', text: 'Bacon Flavored <em>Toothpaste</em>' },
    { url: 'test.com', text: 'Details' },
];

export const breadcrumb = () => {
    const linkTag = text('link-tag', 'a');
    const hrefProp = text('href-prop', 'href');

    return (`<ks-breadcrumbs link-tag="${linkTag}" href-prop="${hrefProp}">
        ${breadcrumbs.map(x => `<a href="${x.url}">${x.text}</a>`).join('')}
    </ks-breadcrumbs>`);
};
