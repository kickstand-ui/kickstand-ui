---
{
    "description": "Positioning content and displaying it consistently can be very tricky. Kickstand UI's position utility classes can be used to quickly position content without custom styles.",
    "meta": [
        {
            "property": "og:title",
            "content": "Text Utilities - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/position.png"
        },
        {
            "property": "og:description",
            "content": "Positioning content and displaying it consistently can be very tricky. Kickstand UI's position utility classes can be used to quickly position content without custom styles."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/position.png"
        }
    ]
}
---

# Position

Positioning content and displaying it consistently can be very tricky. Kickstand UI's position utility classes can be used to quickly position content without custom styles.

<div class="my-xxl text-center">
    <ks-button>
        <ks-badge color="danger" class="position-absolute top-0 right-0 offset-x -offset-y">12</ks-badge>
        Notification Button
    </ks-button>
</div>

```html
<ks-button>
    <ks-badge color="danger" class="position-absolute top-0 right-0 offset-x -offset-y">12</ks-badge>
    Notification Button
</ks-button>
```

The utility classes are designed to provide you with the flexibility of positioning content in a number of positions.

<div class="bg-light border-dark mx-auto my-xxl w-50 position-relative" style="height:100px;">
    <span class="bg-danger p-sm position-absolute -offset-x -offset-y top-0 left-0"></span>
    <span class="bg-danger p-sm position-absolute -offset-x -offset-y top-50 left-0"></span>
    <span class="bg-danger p-sm position-absolute -offset-x offset-y bottom-0 left-0"></span>
    <span class="bg-danger p-sm position-absolute -offset-x -offset-y top-0 left-50"></span>
    <span class="bg-danger p-sm position-absolute -offset-x -offset-y top-50 left-50"></span>
    <span class="bg-danger p-sm position-absolute -offset-x offset-y bottom-0 left-50"></span>
    <span class="bg-danger p-sm position-absolute offset-x -offset-y top-0 right-0"></span>
    <span class="bg-danger p-sm position-absolute offset-x -offset-y top-50 right-0"></span>
    <span class="bg-danger p-sm position-absolute offset-x offset-y bottom-0 right-0"></span>
</div>

## Position Utilities

The position utility class specifies the type of [positioning method](https://developer.mozilla.org/en-US/docs/Web/CSS/position) used for an element.

| Utility Class | CSS Rule |
| ------------- | -------- |
| `position-absolute` | `position: absolute` |
| `position-relative` | `position: relative` |
| `position-fixed` | `position: fixed` |
| `position-sticky` | `position: sticky` |
| `position-static` | `position: static` |

## Location Utilities

Elements are then positioned using the `top`, `bottom`, `left`, and `right` utility classes. The available locations are `0`, `50`, and `100` - representing `0%`, `50%`, and `100%` (ex - `top-0`, `bottom-50`, `right-0`, etc.).

<div class="bg-light border-dark w-50 mx-auto my-xxl position-relative" style="height:100px;">
    <span class="bg-danger p-sm position-absolute top-0 left-0"></span>
    <span class="bg-danger p-sm position-absolute top-50 left-0"></span>
    <span class="bg-danger p-sm position-absolute bottom-0 left-0"></span>
    <span class="bg-danger p-sm position-absolute top-0 left-50"></span>
    <span class="bg-danger p-sm position-absolute top-50 left-50"></span>
    <span class="bg-danger p-sm position-absolute bottom-0 left-50"></span>
    <span class="bg-danger p-sm position-absolute top-0 right-0"></span>
    <span class="bg-danger p-sm position-absolute top-50 right-0"></span>
    <span class="bg-danger p-sm position-absolute bottom-0 right-0"></span>
</div>

```html
<div class="position-relative" style="height:100px;">
    <span class="position-absolute top-0 left-0"></span>
    <span class="position-absolute top-50 left-0"></span>
    <span class="position-absolute bottom-0 left-0"></span>
    <span class="position-absolute top-0 left-50"></span>
    <span class="position-absolute top-50 left-50"></span>
    <span class="position-absolute bottom-0 left-50"></span>
    <span class="position-absolute top-0 right-0"></span>
    <span class="position-absolute top-50 right-0"></span>
    <span class="position-absolute bottom-0 right-0"></span>
</div>
```

## Offset

As you ca see from the example above, things may not always line up exactly the way you want them to or you may want content extend beyond the the container. That's where the `offset` utility classes come in.

<div class="bg-light border-dark w-50 mx-auto my-xxl position-relative" style="height:100px;">
    <span class="bg-danger p-sm position-absolute -offset-x -offset-y top-0 left-0"></span>
    <span class="bg-danger p-sm position-absolute -offset-x -offset-y top-50 left-0"></span>
    <span class="bg-danger p-sm position-absolute -offset-x offset-y bottom-0 left-0"></span>
    <span class="bg-danger p-sm position-absolute -offset-x -offset-y top-0 left-50"></span>
    <span class="bg-danger p-sm position-absolute -offset-x -offset-y top-50 left-50"></span>
    <span class="bg-danger p-sm position-absolute -offset-x offset-y bottom-0 left-50"></span>
    <span class="bg-danger p-sm position-absolute offset-x -offset-y top-0 right-0"></span>
    <span class="bg-danger p-sm position-absolute offset-x -offset-y top-50 right-0"></span>
    <span class="bg-danger p-sm position-absolute offset-x offset-y bottom-0 right-0"></span>
</div>

```html
<div class="position-relative" style="height:100px;">
    <span class="position-absolute -offset-x -offset-y top-0 left-0"></span>
    <span class="position-absolute -offset-x -offset-y top-50 left-0"></span>
    <span class="position-absolute -offset-x offset-y bottom-0 left-0"></span>
    <span class="position-absolute -offset-x -offset-y top-0 left-50"></span>
    <span class="position-absolute -offset-x -offset-y top-50 left-50"></span>
    <span class="position-absolute -offset-x offset-y bottom-0 left-50"></span>
    <span class="position-absolute offset-x -offset-y top-0 right-0"></span>
    <span class="position-absolute offset-x -offset-y top-50 right-0"></span>
    <span class="position-absolute offset-x offset-y bottom-0 right-0"></span>
</div>
```

The offset utilities allow you to adjust the position by `50%` of the elements width.

| Class | Result |
| --- | --- |
| `offset-x` | will shift it 50% of the element's width to the right. |
| `offset-y` | will shift it 50% of the element's width down. |

Alternately you can shift it the opposite direction by prefixing the it with a dash (`-`) to indicate `-50%`:

| Class | Result |
| --- | --- |
| `-offset-x` | shift to the left. |
| `-offset-y` | shift up. |

If you would like to move it both vertically and horizontally, you can combine the classes to get the desired result:

| Class | Result |
| --- | --- |
| `offset-x offset-y` | shift to the right and up. |
| `-offset-x offset-y` | shift to the left and up. |
| `offset-x -offset-y` | shift to the right and down. |
| `-offset-x -offset-y` | shift to the left and down. |
