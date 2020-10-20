---
{
    "description": "Kickstand UI's Responsive Embed component is design to embed content in your page and maintain the aspect ratio.",
    "meta": [
        {
            "property": "og:title",
            "content": "Responsive Embed Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/responsive-embed.png"
        },
        {
            "property": "og:description",
            "content": "Kickstand UI's Responsive Embed component is design to embed content in your page and maintain the aspect ratio."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/responsive-embed.png"
        }
    ]
}
---

# Responsive Embed

Kickstand UI's Responsive Embed component is design to embed content in your page and maintain the aspect ratio. The component is designed to be used with `iframe`, `video`, `object`, and `embed` elements.

<div class="my-xl">
    <ks-responsive-embed aspect-ratio="21x9">
        <iframe src="https://www.youtube.com/embed/M8KmqaJvgpE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </ks-responsive-embed>
</div>

```html
<ks-responsive-embed aspect-ratio="21x9">
    <iframe src="https://www.youtube.com/embed/M8KmqaJvgpE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</ks-responsive-embed>
```

## Aspect Ratio

The default aspect ratio is `16x9`. Other available values are `21x9`, `4x3`, and `1x1`. You can add additional aspect ratios using a custom [SASS Variables](/theming/design-tokens.html#responsive-embed-aspect-ratios).

## Properties

| Property      | Attribute      | Description | Type     | Default  |
| ------------- | -------------- | ----------- | -------- | -------- |
| `aspectRatio` | `aspect-ratio` | `21x9`, `16x9`, `4x3`, and `1x1` | `string` | `'16x9'` |
