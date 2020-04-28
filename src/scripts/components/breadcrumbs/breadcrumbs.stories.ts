export default { title: "Breadcrumbs" };

const breadcrumbs = [
    { url: '#', text: 'Home' },
    { url: '#', text: 'Products' },
    { url: '#', text: 'Bacon Flavored Toothpaste' },
    { url: '#', text: 'Details' },
];

export const breadcrumb = () => {
    const element = document.createElement('c-breadcrumbs');
    element.breadcrumbs = breadcrumbs;
    return element;
};
