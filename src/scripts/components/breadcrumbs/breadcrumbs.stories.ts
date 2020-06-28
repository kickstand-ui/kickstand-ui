export default { title: "Breadcrumbs" };

const breadcrumbs = [
    { url: '#', text: 'Home' },
    { url: '#', text: 'Products' },
    { url: '#', text: 'Bacon Flavored Toothpaste' },
    { url: '#', text: 'Details' },
];

export const breadcrumb = () => {
    return (`<ks-breadcrumbs>
        ${breadcrumbs.map(x => `<ks-crumb href="${x.url}">${x.text}</ks-crumb>`).join('')}
    </ks-breadcrumbs>`);
};
