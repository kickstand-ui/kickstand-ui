import { text, select, boolean } from "@storybook/addon-knobs";

export default { title: "Breadcrumbs" };

const breadcrumbs = [
    {url: '#', text: 'Home'},
    {url: '#', text: 'Products'},
    {url: '#', text: 'Product 1'},
    {url: '#', text: 'Details'},
];

export const breadcrumb = () => {
    const cssClass = text("CSS Class", "");
    const htmlId = text("HTML ID", "");
    return (`<c-breadcrumbs html-id="${htmlId}" css-class="${cssClass}" breadcrumbs="${breadcrumbs}"></c-breadcrumbs>`);
};
