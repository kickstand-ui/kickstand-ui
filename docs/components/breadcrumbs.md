# Breadcrumbs

Breadcrumbs are a navigation tool to provide a visual reference to the current page's location within the site hierarchy.

<div class="my-lg">
    <ks-breadcrumbs>
        <ks-crumb url="#" text="Home"></ks-crumb>
        <ks-crumb url="#" text="Products"></ks-crumb>
        <ks-crumb url="#" text="Bacon Flavored Toothpaste"></ks-crumb>
        <ks-crumb url="#" text="Details"></ks-crumb>
    </ks-breadcrumbs>
</div>

```html
<ks-breadcrumbs>
    <ks-crumb url="#" text="Home"></ks-crumb>
    <ks-crumb url="#" text="Products"></ks-crumb>
    <ks-crumb url="#" text="Bacon Flavored Toothpaste"></ks-crumb>
    <ks-crumb url="#" text="Details"></ks-crumb>
</ks-breadcrumbs>
```

## Properties

### ks-breadcrumbs

The `<ks-breadcrumbs>` has no custom properties.

### ks-crumb

| Property | Attribute | Type     | Default     | Description |
| -------- | --------- | -------- | ----------- | ----------- |
| `text`   | `text`    | `string` | `undefined` | link text   |
| `url`    | `url`     | `string` | `undefined` | url of the page in the hierarchy |

## Accessibility

The last item in the breadcrumb will have the attribute `aria-current="page"` to indicate the page they are on, so be sure that the page the user is currently on is included as the last item in the breadcrumb.
