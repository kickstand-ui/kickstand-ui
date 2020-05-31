# Card

<div class="my-xl w-50 sm:w-75">
    <ks-card
        img-src="/images/michael_scott.jpg"
        alt="Michael Scott"
        >
        <ks-card-body
            card-title="Meditation Moment"
            card-subtitle="Comfort Food"
            >
            "It's never too early for ice cream, Jim. But we didn't have any ice cream, so this is mayonnaise and black olives. It's comfort food, alright?"
        </ks-card-body>
        <ks-card-footer>
            <ks-button>Get One</ks-button>
        </ks-card-footer>
    </ks-card>
</div>

```html
<ks-card
    img-src="/images/michael_scott.jpg"
    alt="Michael Scott"
    >
    <ks-card-body
        card-title="Meditation Moment"
        card-subtitle="Comfort Food"
        >
        "It's never too early for ice cream, Jim. But we didn't have any ice cream, so this is mayonnaise and black olives. It's comfort food, alright?"
    </ks-card-body>
    <ks-card-footer>
        <ks-button>Get One</ks-button>
    </ks-card-footer>
</ks-card>
```

The Kickstand UI Card component is comprised of three tags: `<ks-card>`, `<ks-card-body>`, and `<ks-card-footer>`. Both the `<ks-card-body>` and `<ks-card-footer>` are completely optional but come with some nice features your users will appreciate including semantics and accessibility roles.

## Image Direction

### Top (default)

<div>
    <ks-card img-src="/images/michael_scott.jpg" alt="Michael Scott" class="w-40 mr-sm mb-sm">
        <ks-card-body card-title="Meditation Moment" card-subtitle="Comfort Food">
        </ks-card-body>
        <ks-card-footer>
            <ks-button>Get One</ks-button>
        </ks-card-footer>
    </ks-card>
</div>

```html
<ks-card 
    img-src="/images/michael_scott.jpg"
    alt="Michael Scott"
    img-direction="top"
    >
...
</ks-card>
```

### Bottom

<div>
    <ks-card img-src="/images/michael_scott.jpg" alt="Michael Scott" class="w-40 mr-sm mb-sm" img-direction="bottom">
        <ks-card-body card-title="Meditation Moment" card-subtitle="Comfort Food" img-display="bottom">
        </ks-card-body>
        <ks-card-footer>
            <ks-button>Get One</ks-button>
        </ks-card-footer>
    </ks-card>
</div>

```html
<ks-card
    img-src="/images/michael_scott.jpg"
    alt="Michael Scott"
    img-direction="bottom"
    >
...
</ks-card>
```

:::tip
Since images are very good about drawing the user's attention, it is usually best practice to lead with an image to attract them to your content, rather than end with an image.
:::

### Left

<div>
    <ks-card img-src="/images/michael_scott.jpg" alt="Michael Scott" class="mr-sm mb-sm" img-direction="left">
        <ks-card-body card-title="Meditation Moment" card-subtitle="Comfort Food">
        </ks-card-body>
        <ks-card-footer>
            <ks-button>Get One</ks-button>
        </ks-card-footer>
    </ks-card>
</div>

```html
<ks-card
    img-src="/images/michael_scott.jpg"
    alt="Michael Scott"
    img-direction="left"
    >
...
</ks-card>
```

### Right

<div>
    <ks-card img-src="/images/michael_scott.jpg" alt="Michael Scott" class="mr-sm mb-sm" img-direction="right">
        <ks-card-body card-title="Meditation Moment" card-subtitle="Comfort Food">
        </ks-card-body>
        <ks-card-footer>
            <ks-button>Get One</ks-button>
        </ks-card-footer>
    </ks-card>
</div>

```html
<ks-card
    img-src="/images/michael_scott.jpg"
    alt="Michael Scott"
    img-direction="right"
    >
...
</ks-card>
```

### Behind

<div>
    <ks-card img-src="/images/michael_scott.jpg" alt="Michael Scott" class="w-70 mr-sm mb-sm" img-direction="behind">
        <ks-card-body card-title="Meditation Moment" card-subtitle="Comfort Food" img-display="bottom">
            "It's never too early for ice cream, Jim. But we didn't have any ice cream, so this is mayonnaise and black olives. It's comfort food, alright?"
        </ks-card-body>
        <ks-card-footer>
            <ks-button>Get One</ks-button>
        </ks-card-footer>
    </ks-card>
</div>

```html
<ks-card
    img-src="/images/michael_scott.jpg"
    alt="Michael Scott"
    img-direction="behind"
    >
...
</ks-card>
```

:::warning
As you can see, having text directly over an image can make the text difficult to read. Additional text shadowing has been added to the text to make the text more legible, but you will still need to be careful as you use this feature.
:::

## Href

Adding this attribute will make the image clickable.

<div>
    <ks-card img-src="/images/michael_scott.jpg" alt="Michael Scott" class="w-50 mr-sm mb-sm" href="#">
        <ks-card-body card-title="Meditation Moment" card-subtitle="Comfort Food" img-display="bottom">
            "It's never too early for ice cream, Jim. But we didn't have any ice cream, so this is mayonnaise and black olives. It's comfort food, alright?"
        </ks-card-body>
        <ks-card-footer>
            <ks-button>Get One</ks-button>
        </ks-card-footer>
    </ks-card>
</div>

```html
<ks-card
    href="#"
    img-src="/images/michael_scott.jpg"
    alt="Michael Scott"
    >
...
</ks-card>
```

## Clickable

When the `clickable` attribute is added, the entire card will now be clickable

<div>
    <ks-card img-src="/images/michael_scott.jpg" alt="Michael Scott" class="w-50 mr-sm mb-sm" href="/components/images.html" clickable>
        <ks-card-body card-title="Meditation Moment" card-subtitle="Comfort Food" img-display="bottom">
            "It's never too early for ice cream, Jim. But we didn't have any ice cream, so this is mayonnaise and black olives. It's comfort food, alright?"
        </ks-card-body>
    </ks-card>
</div>

```html
<ks-card
    href="/components/images.html"
    clickable img-src="/images/michael_scott.jpg"
    alt="Michael Scott"
    >
...
</ks-card>
```

## Title and Subtitle

<div class="w-50 mt-lg">
    <ks-card>
        <ks-card-body card-title="Meditation Moment" card-subtitle="Comfort Food"></ks-card-body>
    </ks-card>
</div>

```html
<ks-card>
    <ks-card-body
        card-title="Meditation Moment"
        card-subtitle="Comfort Food"
        >
    </ks-card-body>
</ks-card>
```

Adding these attributes will add a `<header>` element to the body of the card to wrap the title and subtitle.

## Properties

### `<ks-card>`

| Property | Attribute | Type     | Default     | Description |
| -------- | --------- | -------- | ----------- | ----------- |
| `imgSrc`   | `img-src`    | `string` | `undefined` | URL for card image  |
| `alt`    | `alt`     | `string` | `undefined` | alt text for image |
| `lazy`    | `lazy`     | `boolean` | `undefined` | whether or not the card image is lazy-loaded |
| `threshold`    | `threshold`     | `number` | `300` | how soon the lazy-loaded image should load before the component enters the viewport (in pixels) |
| `imgDirection`    | `img-direction`     | `top`, `bottom`, `left`, `right`, or `behind` | `top` | position of image in relation to the content |
| `href`    | `href`     | `string` | `undefined` | if url is added, the image will become clickable |
| `clickable`    | `clickable`     | `boolean` | `undefined` | if true,the entire card will become clickable and link to the location defined in the `href` attribute |

### `<ks-card-body>`

| Property   | Attribute  | Type      | Default     | Description |
| ---------- | ---------- | --------- | ----------- | ----------- |
| `cardTitle` | `card-title` | `string` | `undefined`     | sets the card title |
| `cardSubtitle`  | `card-subtitle`  | `string`  | `undefined` | sets the card subtitle |

### `<ks-card-footer>`

There are no custom properties for the `<ks-card-footer>` element.

## Accessibility

### ks-card

Since cards tend to be stand-alone content from the main content, the `<ks-card>` element has the `role="article"` attribute.

### ks-card-body

When using the `card-title` and `card-subtitle` attributes, they will be wrapped in a `<heading>` tag to provide good semantics and structure for assistive technologies.

### ks-card-footer

The footer has the `role="contentinfo"` attribute added to it to provide assistive technologies with a landmark to let it know they have reached the end of the article and there is additional information or links that pertain to it.
