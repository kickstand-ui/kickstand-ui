---
{
    "description": "Kickstand UI's tooltips are used to provide a way for users to find contextual information in your application.",
    "meta": [
        {
            "property": "og:title",
            "content": "Tooltip Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/tooltip.png"
        },
        {
            "property": "og:description",
            "content": "Kickstand UI's tooltips are used to provide a way for users to find contextual information in your application."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/tooltip.png"
        }
    ]
}
---

# Tooltip

Kickstand UI's tooltips are used to provide a way for users to find contextual information in your user interface.

<div class="my-xl p-md bg-light-light">
    <p>This is a basic <ks-tooltip text="TAH-DAH!!!">tooltip</ks-tooltip>.</p>
</div>

```html
<p>This is a basic <ks-tooltip text="TAH-DAH!!!">tooltip</ks-tooltip>.</p>
```

## Disable

There may be times where you need to temporarily disable a tooltip. You can do this easily using the `disable` property. If `true`, then the content wrapped in the tooltip will behave as if there were no tooltip.

<div class="my-xl p-md bg-light-light">
    <p>I have been  <ks-tooltip disable text="You will never see me...">disabled</ks-tooltip>.</p>
</div>

```html
<p>I have been  <ks-tooltip disable text="You will never see me...">disabled</ks-tooltip>.</p>
```

## Hide Decoration

You may not need an indicator that there is a tooltip. This works especially well with icons.

<div class="my-xl p-md bg-light-light">
    <p>Some cryptic message.  <ks-tooltip hide-decoration text="This info will clear things up!"><ks-icon class="text-info" icon="info" /></ks-tooltip></p>
</div>

```html
<p>Some cryptic message.  <ks-tooltip hide-decoration text="This info will clear things up!"><ks-icon class="text-info" icon="info" /></ks-tooltip></p>
```

## Position

You can control the direction the tooltip displays using the `position` property.

<div class="my-xl p-md bg-light-light display-flex space-between">
    <ks-tooltip position="top" text="I'm on top!">top</ks-tooltip>
    <ks-tooltip position="right" text="I'm to the right!">right</ks-tooltip>
    <ks-tooltip position="bottom" text="I'm on the bottom!">bottom</ks-tooltip>
    <ks-tooltip position="left" text="I'm to the left!">left</ks-tooltip>
</div>

```html
<div class="my-xl display-flex space-between">
    <ks-tooltip position="top" text="I'm on top!">top</ks-tooltip>
    <ks-tooltip position="right" text="I'm to the right!">right</ks-tooltip>
    <ks-tooltip position="bottom" text="I'm on the bottom!">bottom</ks-tooltip>
    <ks-tooltip position="left" text="I'm to the left!">left</ks-tooltip>
</div>
```

## Sizes

Depending on the amount of content, you may need to adjust the size of your tooltips.

<div class="my-xl p-md bg-light-light display-flex space-between">
    <ks-tooltip size="sm" text="Small Tooltip">small</ks-tooltip>
    <ks-tooltip size="md" text="Medium Tooltip">medium</ks-tooltip>
    <ks-tooltip size="lg" text="Large Tooltip">large</ks-tooltip>
    <ks-tooltip size="xl" text="X-Large Tooltip">x-large</ks-tooltip>
</div>

```html
<div class="my-xl display-flex space-between">
    <ks-tooltip size="sm" text="Small Tooltip">small</ks-tooltip>
    <ks-tooltip size="md" text="Medium Tooltip">medium</ks-tooltip>
    <ks-tooltip size="lg" text="Large Tooltip">large</ks-tooltip>
    <ks-tooltip size="xl" text="X-Large Tooltip">x-large</ks-tooltip>
</div>
```

## Text

The `text` property sets the content within the tooltip. Something unique about this property is that it supports markup.

<div class="my-xl p-md bg-light-light">
    <p>I have fancy <ks-tooltip text="This is <em>really</em> important!">content</ks-tooltip>.</p>
</div>

```html
<p>I have fancy <ks-tooltip text="This is <em>really</em> important!">content</ks-tooltip>.</p>
```

## Accessibility

The tooltip uses `role="tooltip"` so that the content is automatically read to the user when the tooltip is revealed. The element wrapped in the tooltip that the user hovers or focuses on uses the `aria-describedby` attribute to associate the content with the tooltip.

## Properties

| Property         | Attribute         | Description | Type                                        | Default     |
| ---------------- | ----------------- | ----------- | ------------------------------------------- | ----------- |
| `disable`        | `disable`         | toggle the functionality of the tooltip            | `boolean`                                   | `false` |
| `hideDecoration` | `hide-decoration` | hides the underline to indicate there is a tooltip | `boolean`                                   | `false` |
| `position`       | `position`        | the direction in which the tooltip will display            | `"bottom"`, `"left"`, `"right"`, or `"top"` | `'top'`     |
| `size`           | `size`            | controls the tooltip size            | `"lg"`, `"md"`, `"sm"`, `"xl"`           | `'sm'`      |
| `text`           | `text`            | the content of the tooltip            | `string`                                 | `undefined` |
