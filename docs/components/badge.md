# Badge

A badge is a special label used to call out specific information.

## Colors

<div class="my-lg text-md">
    <ks-badge color="primary">primary</ks-badge>
    <ks-badge color="secondary">secondary</ks-badge>
    <ks-badge color="success">success</ks-badge>
    <ks-badge color="info">info</ks-badge>
    <ks-badge color="warning">warning</ks-badge>
    <ks-badge color="danger">danger</ks-badge>
    <ks-badge color="light">light</ks-badge>
    <ks-badge color="dark">dark</ks-badge>
</div>

```html
<ks-badge color="primary">primary</ks-badge>
<ks-badge color="secondary">secondary</ks-badge>
<ks-badge color="success">success</ks-badge>
<ks-badge color="info">info</ks-badge>
<ks-badge color="warning">warning</ks-badge>
<ks-badge color="danger">danger</ks-badge>
<ks-badge color="light">light</ks-badge>
<ks-badge color="dark">dark</ks-badge>
```

## Hollow

<div class="my-lg text-md">
    <ks-badge color="primary" hollow>primary</ks-badge>
    <ks-badge color="secondary" hollow>secondary</ks-badge>
    <ks-badge color="success" hollow>success</ks-badge>
    <ks-badge color="info" hollow>info</ks-badge>
    <ks-badge color="warning" hollow>warning</ks-badge>
    <ks-badge color="danger" hollow>danger</ks-badge>
    <ks-badge color="light" hollow>light</ks-badge>
    <ks-badge color="dark" hollow>dark</ks-badge>
</div>

```html
<ks-badge color="primary" hollow>primary</ks-badge>
<ks-badge color="secondary" hollow>secondary</ks-badge>
<ks-badge color="success" hollow>success</ks-badge>
<ks-badge color="info" hollow>info</ks-badge>
<ks-badge color="warning" hollow>warning</ks-badge>
<ks-badge color="danger" hollow>danger</ks-badge>
<ks-badge color="light" hollow>light</ks-badge>
<ks-badge color="dark" hollow>dark</ks-badge>
```

:::warning
As you can see, some of the `hollow` badges above are hard to see against a white background. Please make sure you use these cautiously and test them for sufficient color contrast.
:::

## Accessibility

When using the default badge, the background and text colors should have sufficient contrast to meet the WCAG 2.0 AA standard. As noted above, please use caution when using the `hollow` badge and validate the contrast ratio are accessible.

## Properties

| Property | Attribute | Type   | Default | Description |
| -------- | --------- | ------ | ------- | ----------- |
| `color`  | `color`   | `"danger"`, `"dark"`, `"info"`, `"light"`, `"link"`, `"primary"`, `"secondary"`, `"success"`, or `"warning"` | `'primary'` | the color of the badge based on the theme color palette           |
| `hollow` | `hollow`  | `boolean` | `undefined` | display badge with color border and text with a transparent background |
