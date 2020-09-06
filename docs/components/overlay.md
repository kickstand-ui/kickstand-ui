---
{
    "description": "Kickstand UI's Overlay component is designed to display content in a layer above your existing content and is a flexible component used to build other components in UI library.",
    "meta": [
        {
            "property": "og:title",
            "content": "Overlay Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/overlay.png"
        },
        {
            "property": "og:description",
            "content": "Kickstand UI's Overlay component is designed to display content in a layer above your existing content and is a flexible component used to build other components in UI library."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/overlay.png"
        }
    ]
}
---

# Overlay

Kickstand UI's Overlay component is designed to display content in a layer above your existing content and is a flexible component used to build other components in UI library like the [loading](/components/loading.html), [modal](/components/modal.html), and [side drawer](/components/side-drawer.html) components.

<div class="my-xl">
    <ks-button shows="basic_overlay">Show Overlay</ks-button>
    <ks-overlay id="basic_overlay">
        <ks-button color="light" hides="basic_overlay">Hide Overlay</ks-button>
    </ks-overlay>
</div>

```html
<ks-button shows="basic_overlay">Show Overlay</ks-button>

<ks-overlay id="basic_overlay">
    <ks-button color="light" hides="basic_overlay">Hide Overlay</ks-button>
</ks-overlay>
```

## Positioning

By default the overlay will take up the entire viewport. You can isolate the overlay to that specific area by placing the component within the container you are loading and adding the `absolute` attribute to the component.

:::tip Note
The parent container must have the CSS rule `position: relative;` set.
:::

<div class="my-xl p-xl" style="position:relative;width:300px;height:150px;">
    <ks-button shows="absolute_overlay">Show Absolute Overlay</ks-button>
    <ks-overlay id="absolute_overlay" absolute>
        <ks-button color="light" hides="absolute_overlay">Hide Absolute Overlay</ks-button>
    </ks-overlay>
</div>

```html
<div style="position:relative; width:300px; height:150px;">
    <ks-button shows="absolute_overlay">Show Absolute Overlay</ks-button>

    <ks-overlay id="absolute_overlay" absolute>
        <ks-button color="light" hides="absolute_overlay">Hide Absolute Overlay</ks-button>
    </ks-overlay>
</div>
```

## Prevent Close

By default, Kickstand UI's overlay can be dismissed using the escape key or clicking the overlay. You have the ability to require users to take a specific action before your modal will close using the `prevent-close` property. When it is set to `true`, clicking the overlay or pressing the escape key will not dismiss the modal.

<div class="my-xl">
    <ks-button shows="prevent_close_overlay">Show Overlay</ks-button>
    <ks-overlay prevent-close id="prevent_close_overlay">
        <ks-button color="light" hides="prevent_close_overlay">You must click me to close the overlay!</ks-button>
    </ks-overlay>
</div>

```html
<ks-button shows="prevent_close_overlay">Show Overlay</ks-button>

<ks-overlay prevent-close id="prevent_close_overlay">
    <ks-button color="light" hides="prevent_close_overlay">You must click me to close the overlay!</ks-button>
</ks-overlay>
```

## Theme

There are both a light and dark theme available for displaying overlays.

<div class="my-xl">
    <ks-button shows="light_overlay">Show Light Overlay</ks-button>
    <ks-button shows="dark_overlay">Show Dark Overlay</ks-button>
    <ks-overlay theme="light" id="light_overlay">
        <ks-img style="max-width:500px;" lazy src="/images/demo/michael_scott_jesus.jpg" alt="Michael Scott dressed as Jesus" />
    </ks-overlay>
    <ks-overlay theme="dark" id="dark_overlay">
        <ks-img lazy src="/images/demo/prison_mike.jpeg" alt="Prison Mike" />
    </ks-overlay>
</div>

```html
<ks-button shows="basic_overlay">Show Overlay</ks-button>

<ks-overlay id="basic_overlay">
    <ks-button color="light" hides="basic_overlay">Hide Overlay</ks-button>
</ks-overlay>
```

## Showing and Hiding

If you are using the [`<ks-button>` element](/components/button.html) you can take advantage of the `shows` and `hides` properties to open and close any of the components built using the [overlay](/components/overlay.html) component.

<div class="my-xl display-flex">
    <ks-button shows="button_overlay">Show Overlay using Button</ks-button>
    <ks-overlay id="button_overlay">
        <ks-button color="light" hides="button_overlay">Hide Overlay using Button</ks-button>
    </ks-overlay>
</div>

```html
<ks-button shows="button_overlay">Show Overlay using Button</ks-button>
<ks-overlay id="button_overlay">
    <ks-button color="light" hides="button_overlay">Hide Overlay using Button</ks-button>
</ks-overlay>
```

You can also programmatically show and hide overlays. It is as simple as using JavaScript to select the element and call the `show()` or `hide()` methods. Here is a simple example that will show the overlay when the button is clicked and hide it after 3 seconds.

<div class="my-xl">
    <ks-button id="test_button">Show Overlay</ks-button>
    <ks-overlay id="test_overlay">
        <div class="bg-light text-center">
            <ks-img lazy src="/images/demo/100-percent-michael-scott.png" alt="michael scott thinking" style="max-width:500px;" /><br>
            <span>This will close in 3 seconds.</span>
        </div>
    </ks-overlay>
    <script>
        (function(){
            let testButton = document.getElementById('test_button');
            let testOverlay = document.getElementById('test_overlay');
            testButton.addEventListener('click', () => {
                testOverlay.show();
                setTimeout(function() {
                    testOverlay.hide();
                }, 3000);
            });
        })();
    </script>
</div>

```html
<ks-button id="test_button">Show Overlay</ks-button>
<ks-overlay id="test_overlay">
    <ks-img lazy src="/images/demo/100-percent-michael-scott.png" alt="michael scott thinking">
</ks-overlay>
<script>
    let testButton = document.getElementById('test_button');
    let testOverlay = document.getElementById('test_overlay');

    // add click event listener to button
    testButton.addEventListener('click', () => {
        // show loading overlay
        testOverlay.show();

        // hide after 3 seconds
        setTimeout(function() {
            testOverlay.hide();
        }, 3000);
    });
</script>
```

## Accessibility

The overlay component has a number of built-in accessibility features to make overlay management easier for you:

- The overlay has the `role="dialog"` to help assistive technology identify the overlay's content as being grouped and separated from the rest of the page content.
- When opened, the focus will be set on the first clickable element within the overlay.
- The element that triggered the overlay will have the attribute `aria-expanded="true"` automatically added.
- When the user tabs, the focus will stay isolated within the overlay to prevent elements outside the overlay from being selected.
- When the overlay is closed, the focus will go back to the element the user was on before the overlay was opened so they do not lose their place in the document.
- Once the overlay is closed, the element that triggered the overlay will have the attribute `aria-expanded="true"` automatically added.
- The overlay title will be used to label the overlay using the `aria-labelledby` attribute.
- The overlay can be closed using the `esc` key for keyboard users.
- If you are using the `shows` and `hides` controls on the `<ks-button>` component, the button will automatically be populated with the appropriate `aria-haspopup`, `aria-expanded`, and `aria-controls` attributes on the button.


## Properties

| Property       | Attribute       | Type                | Default     | Description |
| -------------- | --------------- | ------------------- | ----------- | ----------- |
| `absolute`     | `absolute`      | `boolean`           | `false`     | Determines whether the overlay is confined to a specific area of the page            |
| `preventClose` | `prevent-close` | `boolean`           | `false`     | prevents the overlay from closing when it is clicked            |
| `theme`        | `theme`         | `"dark"` or `"light"` | `'dark'`    | the color of the overlay            |
| `titleId`      | `title-id`      | `string`            | `undefined` | associates a header or label as a description for the overlay             |

## Events

| Event    | Description                    | Type               |
| -------- | ------------------------------ | ------------------ |
| `hidden` | emitted when overlay is hidden | `CustomEvent<any>` |
| `shown`  | emitted when overlay is shown  | `CustomEvent<any>` |

```html
<ks-overlay id="my_overlay">
    ...
</ks-overlay>

<script>
    let myOverlay = document.getElementById('my_overlay');

    myOverlay.addEventListener('hidden', () => {
        // do something...
    });
</script>
```

## Methods

### `hide() => Promise<void>`

#### Returns

Type: `Promise<void>`

### `show() => Promise<void>`

#### Returns

Type: `Promise<void>`
