export default { title: "Components/Breadcrumbs" };

const breadcrumbs = [
    { url: '#', text: '<ks-icon icon="home"></ks-icon> Home' },
    { url: '#', text: 'Products' },
    { url: '#', text: 'Bacon Flavored <em>Toothpaste</em>' },
    { url: '#', text: 'Details' },
];

export const breadcrumb = () => {
    return (`<ks-breadcrumbs>
        ${breadcrumbs.map(x => `<a href="${x.url}">${x.text}</a>`).join('')}
    </ks-breadcrumbs>`);
};
