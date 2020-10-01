---
{
    "description": "Kickstand UI's position utility classes can be used to quickly position content without custom styles.",
    "meta": [
        {
            "property": "og:title",
            "content": "Text Utilities - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/text.png"
        },
        {
            "property": "og:description",
            "content": "Kickstand UI's text utility classes can be used to quickly style text throughout your application without custom styles."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/text.png"
        }
    ]
}
---

# Position

Kickstand UI's position utility classes can be used to quickly position content without custom styles.

<div class="bg-light border-dark w-50 position-relative" style="height:100px;">
    <span class="bg-danger p-sm position-absolute offset-nxny top-0 left-0"></span>
    <span class="bg-danger p-sm position-absolute offset-nxny top-50 left-0"></span>
    <span class="bg-danger p-sm position-absolute offset-nxy bottom-0 left-0"></span>
    <span class="bg-danger p-sm position-absolute offset-nxny top-0 left-50"></span>
    <span class="bg-danger p-sm position-absolute offset-nxny top-50 left-50"></span>
    <span class="bg-danger p-sm position-absolute offset-nxy bottom-0 left-50"></span>
    <span class="bg-danger p-sm position-absolute offset-xny top-0 right-0"></span>
    <span class="bg-danger p-sm position-absolute offset-xny top-50 right-0"></span>
    <span class="bg-danger p-sm position-absolute offset-xy bottom-0 right-0"></span>
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

<div class="bg-light border-dark w-25 position-relative" style="height:100px;">
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

<div class="bg-light border-dark w-50 position-relative" style="height:100px;">
    <span class="bg-danger p-sm position-absolute offset-nxny top-0 left-0"></span>
    <span class="bg-danger p-sm position-absolute offset-nxny top-50 left-0"></span>
    <span class="bg-danger p-sm position-absolute offset-nxy bottom-0 left-0"></span>
    <span class="bg-danger p-sm position-absolute offset-nxny top-0 left-50"></span>
    <span class="bg-danger p-sm position-absolute offset-nxny top-50 left-50"></span>
    <span class="bg-danger p-sm position-absolute offset-nxy bottom-0 left-50"></span>
    <span class="bg-danger p-sm position-absolute offset-xny top-0 right-0"></span>
    <span class="bg-danger p-sm position-absolute offset-xny top-50 right-0"></span>
    <span class="bg-danger p-sm position-absolute offset-xy bottom-0 right-0"></span>
</div>

```html
<div class="position-relative" style="height:100px;">
    <span class="position-absolute offset-nxny top-0 left-0"></span>
    <span class="position-absolute offset-nxny top-50 left-0"></span>
    <span class="position-absolute offset-nxy bottom-0 left-0"></span>
    <span class="position-absolute offset-nxny top-0 left-50"></span>
    <span class="position-absolute offset-nxny top-50 left-50"></span>
    <span class="position-absolute offset-nxy bottom-0 left-50"></span>
    <span class="position-absolute offset-xny top-0 right-0"></span>
    <span class="position-absolute offset-xny top-50 right-0"></span>
    <span class="position-absolute offset-xy bottom-0 right-0"></span>
</div>
```

The offset utilities allow you to adjust the position by 50% of the elements width.

| Class | Result |
| --- | --- |
| `offset-x` | will shift it 50% of the element's width to the right. |
| `offset-y` | will shift it 50% of the element's width down. |

Alternately you can shift it the opposite direction by prefixing the it with the letter `n` to indicate `-50%`:

| Class | Result |
| --- | --- |
| `offset-nx` | shift to the left. |
| `offset-ny` | shift up. |

If you would like to move it both vertically and horizontally, you can combine the syntax to get the desired result:

| Class | Result |
| --- | --- |
| `offset-xy` | shift to the right and up. |
| `offset-nxy` | shift to the left and up. |
| `offset-xny` | shift to the right and down. |
| `offset-nxny` | shift to the left and down. |

:::tip Note
You cannot combine two utility classes to shift the element both vertically and horizontally: `offset-x offset-y`. The browser will only chose one of them. In order to get the desired result.
:::
