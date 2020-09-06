---
{
    "description": "Kickstand UI's carousel component is designed to provide users with a way to cycle through content such as images, text, and links.",
    "meta": [
        {
            "property": "og:title",
            "content": "Carousel Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/carousel.png"
        },
        {
            "property": "og:description",
            "content": "Kickstand UI's carousel component is designed to provide users with a way to cycle through content such as images, text, and links."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/carousel.png"
        }
    ]
}
---

# Carousel

Kickstand UI's carousel component is designed to provide users with a way to cycle through content such as images, text, and links.

<div class="my-xl">
    <ks-carousel>
        <ks-carousel-slide
            alt="Jim Pranks Dwight"
            src="/images/demo/stapler_in_jello.jpg"
            position="top"
            >
            <h2>Stapler in Jello</h2>
        </ks-carousel-slide>
        <ks-carousel-slide
            alt="Jim Pranks Dwight"
            src="/images/demo/jim_as_dwight.jpeg"
            position="bottom"
            >
            <h2>Jim Dressed as Dwight</h2>
            <ks-button>Find Out More</ks-button>
        </ks-carousel-slide>
        <ks-carousel-slide
            alt="Jim Pranks Dwight"
            src="/images/demo/asian_jim.png"
            align="left"
            >
            <h2>Asian Jim</h2>
            <p>(Not really Jim)</p>
        </ks-carousel-slide>
        <ks-carousel-slide
            alt="Jim Pranks Dwight"
            src="/images/demo/dwight_fights_himself.png"
            position="bottom"
            >
            <h2>Dwight Fights Himself</h2>
        </ks-carousel-slide>
    </ks-carousel>
</div>

```html
<ks-carousel>
    <ks-carousel-slide
        alt="Jim Pranks Dwight"
        src="/images/demo/stapler_in_jello.jpg"
        position="top"
        >
        <h2>Stapler in Jello</h2>
    </ks-carousel-slide>
    <ks-carousel-slide
        alt="Jim Pranks Dwight"
        src="/images/demo/jim_as_dwight.jpeg"
        position="bottom"
        >
        <h2>Jim Dressed as Dwight</h2>
        <ks-button>Find Out More</ks-button>
    </ks-carousel-slide>
    <ks-carousel-slide
        alt="Jim Pranks Dwight"
        src="/images/demo/asian_jim.png"
        align="left"
        >
        <h2>Asian Jim</h2>
        <p>(Not really Jim)</p>
    </ks-carousel-slide>
    <ks-carousel-slide
        alt="Jim Pranks Dwight"
        src="/images/demo/dwight_fights_himself.png"
        position="bottom"
        >
        <h2>Dwight Fights Himself</h2>
    </ks-carousel-slide>
</ks-carousel>
```

:::tip Note
Before using a carousel, please consider an alternate way of displaying content to your users. Carousel engagement is incredibly low, accessibility is difficult to get right, and can be distracting from your message. For more information, check out [shouldiuseacarousel.com](http://shouldiuseacarousel.com/).
:::

## Hide Indicators

<div class="my-xl">
    <ks-carousel hide-indicators>
        <ks-carousel-slide
            alt="Jim Pranks Dwight"
            src="/images/demo/stapler_in_jello.jpg"
            position="top"
            >
            <h2>Stapler in Jello</h2>
        </ks-carousel-slide>
        <ks-carousel-slide
            alt="Jim Pranks Dwight"
            src="/images/demo/jim_as_dwight.jpeg"
            position="bottom"
            >
            <h2>Jim Dressed as Dwight</h2>
            <ks-button>Find Out More</ks-button>
        </ks-carousel-slide>
        <ks-carousel-slide
            alt="Jim Pranks Dwight"
            src="/images/demo/asian_jim.png"
            align="left"
            >
            <h2>Asian Jim</h2>
            <p>(Not really Jim)</p>
        </ks-carousel-slide>
        <ks-carousel-slide
            alt="Jim Pranks Dwight"
            src="/images/demo/dwight_fights_himself.png"
            position="bottom"
            >
            <h2>Dwight Fights Himself</h2>
        </ks-carousel-slide>
    </ks-carousel>
</div>

```html
<ks-carousel hide-indicators>
    ...
</ks-carousel>
```

## Hide Controls

<div class="my-xl">
    <ks-carousel hide-controls>
        <ks-carousel-slide
            alt="Jim Pranks Dwight"
            src="/images/demo/stapler_in_jello.jpg"
            position="top"
            >
            <h2>Stapler in Jello</h2>
        </ks-carousel-slide>
        <ks-carousel-slide
            alt="Jim Pranks Dwight"
            src="/images/demo/jim_as_dwight.jpeg"
            position="bottom"
            >
            <h2>Jim Dressed as Dwight</h2>
            <ks-button>Find Out More</ks-button>
        </ks-carousel-slide>
        <ks-carousel-slide
            alt="Jim Pranks Dwight"
            src="/images/demo/asian_jim.png"
            align="left"
            >
            <h2>Asian Jim</h2>
            <p>(Not really Jim)</p>
        </ks-carousel-slide>
        <ks-carousel-slide
            alt="Jim Pranks Dwight"
            src="/images/demo/dwight_fights_himself.png"
            position="bottom"
            >
            <h2>Dwight Fights Himself</h2>
        </ks-carousel-slide>
    </ks-carousel>
</div>

```html
<ks-carousel hide-controls>
    ...
</ks-carousel>
```

## Thumbnails

<div class="my-xl">
    <ks-carousel thumbnails>
        <ks-carousel-slide
            alt="Jim Pranks Dwight"
            src="/images/demo/stapler_in_jello.jpg"
            position="top"
            >
            <h2>Stapler in Jello</h2>
        </ks-carousel-slide>
        <ks-carousel-slide
            alt="Jim Pranks Dwight"
            src="/images/demo/jim_as_dwight.jpeg"
            position="bottom"
            >
            <h2>Jim Dressed as Dwight</h2>
            <ks-button>Find Out More</ks-button>
        </ks-carousel-slide>
        <ks-carousel-slide
            alt="Jim Pranks Dwight"
            src="/images/demo/asian_jim.png"
            align="left"
            >
            <h2>Asian Jim</h2>
            <p>(Not really Jim)</p>
        </ks-carousel-slide>
        <ks-carousel-slide
            alt="Jim Pranks Dwight"
            src="/images/demo/dwight_fights_himself.png"
            position="bottom"
            >
            <h2>Dwight Fights Himself</h2>
        </ks-carousel-slide>
    </ks-carousel>
</div>

```html
<ks-carousel thumbnails>
    ...
</ks-carousel>
```

## Autoplay

<div class="my-xl">
    <ks-carousel autoplay>
        <ks-carousel-slide
            alt="Jim Pranks Dwight"
            src="/images/demo/stapler_in_jello.jpg"
            position="top"
            >
            <h2>Stapler in Jello</h2>
        </ks-carousel-slide>
        <ks-carousel-slide
            alt="Jim Pranks Dwight"
            src="/images/demo/jim_as_dwight.jpeg"
            position="bottom"
            >
            <h2>Jim Dressed as Dwight</h2>
            <ks-button>Find Out More</ks-button>
        </ks-carousel-slide>
        <ks-carousel-slide
            alt="Jim Pranks Dwight"
            src="/images/demo/asian_jim.png"
            align="left"
            >
            <h2>Asian Jim</h2>
            <p>(Not really Jim)</p>
        </ks-carousel-slide>
        <ks-carousel-slide
            alt="Jim Pranks Dwight"
            src="/images/demo/dwight_fights_himself.png"
            position="bottom"
            >
            <h2>Dwight Fights Himself</h2>
        </ks-carousel-slide>
    </ks-carousel>
</div>

```html
<ks-carousel autoplay>
    ...
</ks-carousel>
```

### Timer

If `autoplay` is true, you can adjust the time interval between each slide using the `timer` property (value is in milliseconds).

```html
<ks-carousel autoplay timer="10000">
    ...
</ks-carousel>
```

## Slide Content

There are a number of great properties available for `<ks-carousel-slide>`, but one of the nicest features is the ability to place content wherever you want on the slide using the `align` and `position` properties. the table below represents a slide and the available positions for slide content and the property values that will make it happen.

<table>
    <tr>
        <td>
            align="left"<br />
            position="top"
        </td>
        <td>
            align="center"<br />
            position="top"
        </td>
        <td>
            align="right"<br />
            position="top"
        </td>
    </tr>
    <tr>
        <td>
            align="left"<br />
            position="center"
        </td>
        <td>
            align="center"<br />
            position="center"
        </td>
        <td>
            align="right"<br />
            position="center"
        </td>
    </tr>
    <tr>
        <td>
            align="left"<br />
            position="bottom"
        </td>
        <td>
            align="center"<br />
            position="bottom"
        </td>
        <td>
            align="right"<br />
            position="bottom"
        </td>
    </tr>
</table>

## Accessibility

:::warning
Carousels, in general, are not very accessible and are not actually very effective ways of displaying content. They should be avoided as much as possible in favor of static relevant images with meaningful content.
:::

In order to make the carousel _more_ accessible, it is treated like a tab component and the following roles and states have been implemented:

- The slides are assigned `role="tabpanel"` and the indicators are assigned `role="tablist"` and `role="tab"` respectively.
- The slides are hidden by default (`aria-hidden="true"`) and are set to `false` when they are selected
- Indicators are not selected by default (`aria-selected="false"`) and are set to `true` when the related slide has been selected

## Properties

### Carousel Props

| Property         | Attribute         | Type      | Default     | Description |
| ---------------- | ----------------- | --------- | ----------- | ----------- |
| `hideIndicators` | `hide-indicators` | `boolean` | `false`     | hide indicators displaying current and number of slides |
| `hideControls`   | `hide-controls`   | `boolean` | `false`     | hide controls for moving between slides |
| `thumbnails`     | `thumbnails`      | `boolean` | `false`     | replaces indicators with image thumbnails |
| `autoplay`       | `autoplay`        | `boolean` | `false`     | automatically rotate through slides |
| `timer`          | `timer`           | `number`  | `6000`      | time interval between each slide (in milliseconds) |

### Carousel Slide Props

| Property    | Attribute   | Type                              | Default     | Description |
| ----------- | ----------- | --------------------------------- | ----------- | ----------- |
| `align`     | `align`     | `"start"`, `"center"`, or `"end"` | `'center'`  | horizontal alignment of slide content |
| `position`  | `position`  | `"start"`, `"center"`, or `"end"` |             | vertical alignment of slide content   |
| `alt`       | `alt`       | `string`                          | `undefined` | alt text for slide image            |
| `lazy`      | `lazy`      | `boolean`                         | `false`     | lazy-load slide image            |
| `src`       | `src`       | `string`                          | `undefined` | image source            |
| `threshold` | `threshold` | `number`                          | `300`       | how soon the lazy-loaded image should load before the component enters the viewport (in pixels)            |
| `clickable` | `clickable` | `boolean`                         | `false`     | makes entire slide clickable |
| `href`      | `href`      | `string`                          | `undefined` | where to link the slide to |
