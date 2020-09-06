---
{
    "description": "Custom icons for the Kickstand UI design system",
    "meta": [
        {
            "property": "og:title",
            "content": "Icon Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/icons.png"
        },
        {
            "property": "og:description",
            "content": "Custom icons for the Kickstand UI design system"
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/icons.png"
        }
    ]
}
---

# Icons

<div class="my-xl">
    <ks-icon icon="bars" />
    <ks-icon icon="chevron" />
    <ks-icon icon="close" />
    <ks-icon icon="danger" />
    <ks-icon icon="info" />
</div>

```html
<ks-icon icon="bars" />
<ks-icon icon="chevron" />
<ks-icon icon="close" />
<ks-icon icon="danger" />
<ks-icon icon="info" />
```

The Kickstand UI library has been limited to what we _need_. There are plans to expand it, but in order to meet your needs, it can accommodated other icon libraries.

```html
<!-- example using Font Awesome -->
<ks-icon icon="fas fa-anchor" />
```

## Rotate

You have the ability to rotate the direction of the component.

<div class="my-xl">
    <ks-icon icon="chevron" rotate="0" />
    <ks-icon icon="chevron" rotate="45" />
    <ks-icon icon="chevron" rotate="90" />
    <ks-icon icon="chevron" rotate="135" />
    <ks-icon icon="chevron" rotate="180" />
    <ks-icon icon="chevron" rotate="225" />
    <ks-icon icon="chevron" rotate="270" />
    <ks-icon icon="chevron" rotate="360" />
</div>

```html
<ks-icon icon="chevron" rotate="0" />
<ks-icon icon="chevron" rotate="45" />
<ks-icon icon="chevron" rotate="90" />
<ks-icon icon="chevron" rotate="135" />
<ks-icon icon="chevron" rotate="180" />
<ks-icon icon="chevron" rotate="225" />
<ks-icon icon="chevron" rotate="270" />
<ks-icon icon="chevron" rotate="360" />
```

The component can also accommodate negative values to rotate counter-clockwise.

<div class="my-xl">
    <ks-icon icon="chevron" rotate="0" />
    <ks-icon icon="chevron" rotate="-45" />
    <ks-icon icon="chevron" rotate="-90" />
    <ks-icon icon="chevron" rotate="-135" />
    <ks-icon icon="chevron" rotate="-180" />
    <ks-icon icon="chevron" rotate="-225" />
    <ks-icon icon="chevron" rotate="-270" />
    <ks-icon icon="chevron" rotate="-360" />
</div>

```html
<ks-icon icon="chevron" rotate="0" />
<ks-icon icon="chevron" rotate="-45" />
<ks-icon icon="chevron" rotate="-90" />
<ks-icon icon="chevron" rotate="-135" />
<ks-icon icon="chevron" rotate="-180" />
<ks-icon icon="chevron" rotate="-225" />
<ks-icon icon="chevron" rotate="-270" />
<ks-icon icon="chevron" rotate="-360" />
```

## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `icon`   | `icon`    |             | `string` | `undefined` |
| `rotate` | `rotate`  |             | `0`, `45`, `-45`, `90`, `-90`, `135`, `-135`, `180`, `-180`, `225`, `-225`, `270`, `-270`, `360`, or `-360` | `0`       |
