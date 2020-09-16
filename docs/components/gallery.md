---
{
    "description": "The Kickstand UI gallery component is a horizontal scrolling component designed to reduce the density and complexity of pages.",
    "meta": [
        {
            "property": "og:title",
            "content": "Gallery Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/gallery.png"
        },
        {
            "property": "og:description",
            "content": "The Kickstand UI gallery component is a horizontal scrolling component designed to reduce the density and complexity of pages."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/gallery.png"
        }
    ]
}
---

# Gallery

The Kickstand UI gallery component is a a horizontal scrolling component. This is incredibly useful on mobile to help reduce the vertical height of dense pages.

The gallery component is designed to work well on both desktop and mobile. The scrolling behavior can be triggered using the arrow buttons above as well as with standard scrolling behavior on track pads, scroll wheels, and swiping.

<div class="my-lg">
    <style>
        .card-img ks-img {
            height: 140px;
            overflow-y: hidden;
        }
    </style>
    <ks-gallery heading="Costume Contest" item-width="250px">
        <ks-card img-src="/images/demo/costumes/lady_gaga.jpg" alt="Gabe dressed as Lady Gaga">
            <h3>Lady Gaga</h3>
        </ks-card>
        <ks-card img-src="/images/demo/costumes/black_widow.jpg" alt="Merideth dressed as Black Widow">
            <h3>Black Widow</h3>
        </ks-card>
        <ks-card img-src="/images/demo/costumes/dwight_joker.jpg" alt="Dwight dressed as The Joker">
            <h3>The Joker</h3>
        </ks-card>
        <ks-card img-src="/images/demo/costumes/dracula.jpg" alt="Darrel dressed as Dracula">
            <h3>Dracula</h3>
        </ks-card>
        <ks-card img-src="/images/demo/costumes/nancy_reagan.jpg" alt="Angela dressed as Nancy Reagan">
            <h3>Nancy Reagan</h3>
        </ks-card>
    </ks-gallery>
</div>

```html
<ks-gallery heading="Costume Contest" item-width="250px">
    <ks-card img-src="/images/demo/costumes/lady_gaga.jpg" alt="Gabe dressed as Lady Gaga">
        <h3>Lady Gaga</h3>
    </ks-card>
    <ks-card img-src="/images/demo/costumes/black_widow.jpg" alt="Merideth dressed as Black Widow">
        <h3>Black Widow</h3>
    </ks-card>
    <ks-card img-src="/images/demo/costumes/dwight_joker.jpg" alt="Dwight dressed as The Joker">
        <h3>The Joker</h3>
    </ks-card>
    <ks-card img-src="/images/demo/costumes/dracula.jpg" alt="Darrel dressed as Dracula">
        <h3>Dracula</h3>
    </ks-card>
    <ks-card img-src="/images/demo/costumes/nancy_reagan.jpg" alt="Angela dressed as Nancy Reagan">
        <h3>Nancy Reagan</h3>
    </ks-card>
</ks-gallery>
```

## Heading

You can control the hading text above the gallery using the `heading` property. If you would like the heading to link to another page, you can do so by adding the URL to the `src` attribute.

```html
<ks-gallery heading="Costume Contest" src="/pages/all-costumes">
    ...
</ks-gallery>
```

## Gutters

The `gutter` property is used to control the distance between the gallery items. The available options consist of `none`, `xxxs`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, or `xxxl` and correlate with the [spacing design tokens](http://localhost:8080/theming/design-tokens.html#sizes). The default gutter size is `md`.

```html
<ks-gallery gutter="xxl">
    ...
</ks-gallery>
```

## Item Width

The `item-width` property is used to make the width of each of the gallery items consistent in one easy place. You always have the option of setting it in CSS, but not all developers and content creators have access to the CSS files.

```html
<ks-gallery item-width="250px">
    ...
</ks-gallery>
```

## Properties

| Property    | Attribute    | Description | Type                                                                                   | Default     |
| ----------- | ------------ | ----------- | -------------------------------------------------------------------------------------- | ----------- |
| `gutter`   | `gutter`   | controls the space between gallery items | `none`, `xxxs`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, or `xxxl`                                   | `md` |
| `heading`   | `heading`    | The heading displayed above the gallery items            | `string`                                                                               | `undefined` |
| `itemWidth` | `item-width` | the width of the gallery items            | `string`                                                                               | `undefined` |
