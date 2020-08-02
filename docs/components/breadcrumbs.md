# Breadcrumbs

Breadcrumbs are a navigation tool to provide a visual reference to the current page's location within the site hierarchy.

<div class="my-lg">
    <ks-breadcrumbs>
        <ks-crumb href="#">Home</ks-crumb>
        <ks-crumb href="#">Products</ks-crumb>
        <ks-crumb href="#">Bacon Flavored Toothpaste</ks-crumb>
        <ks-crumb href="#">Details</ks-crumb>
    </ks-breadcrumbs>
</div>

```html
<ks-breadcrumbs>
    <ks-crumb href="#">Home</ks-crumb>
    <ks-crumb href="#">Products</ks-crumb>
    <ks-crumb href="#">Bacon Flavored Toothpaste</ks-crumb>
    <ks-crumb href="#">Details</ks-crumb>
</ks-breadcrumbs>
```

## Accessibility

To make the breadcrumb identifiable as a navigational landmark the component is assigned `role="navigation"`. The breadcrumbs are also arranged in an order list (`<ol>`) to make it easier for screen readers to identify it as hierarchical data.

The last item in the breadcrumb will have the attribute `aria-current="page"` to indicate the page they are on, so please be sure that the page the user is currently on is included as the last item in the breadcrumb.

## Properties

### `<ks-breadcrumbs>`

The `<ks-breadcrumbs>` has no custom properties.

### `<ks-crumb>`

| Property | Attribute | Type     | Default     | Description |
| -------- | --------- | -------- | ----------- | ----------- |
| `href`   | `href`    | `string` | `undefined` | url of the page in the hierarchy |
