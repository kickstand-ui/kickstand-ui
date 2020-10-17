---
{
    "description": "Kickstand UI's loading component is designed to communicate unseen progress to the user.",
    "meta": [
        {
            "property": "og:title",
            "content": "Loading Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/loading.png"
        },
        {
            "property": "og:description",
            "content": "Kickstand UI's loading component is designed to communicate unseen progress to the user."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/loading.png"
        }
    ]
}
---

# Loading

Kickstand UI's loading component is designed to communicate unseen progress to the user. There are two ways to display loading indicators - inline or in an overlay.

## Types

<div class="my-xl">
    <ks-loading icon="ring_spinner"></ks-loading>
    <ks-loading icon="circle_spinner"></ks-loading>
    <ks-loading icon="ellipsis_pulse"></ks-loading>
    <ks-loading icon="ellipsis_typing"></ks-loading>
</div>

```html
<ks-loading icon="ring_spinner"></ks-loading>
<ks-loading icon="circle_spinner"></ks-loading>
<ks-loading icon="ellipsis_pulse"></ks-loading>
<ks-loading icon="ellipsis_typing"></ks-loading>
```

## Messaging

<div class="my-xl">
    <ks-loading icon="ring_spinner" message="Spinner Loading..." show-message />
    <br />
    <ks-loading icon="ellipsis_typing" message="Ellipsis Loading..." show-message />
</div>

```html
<ks-loading icon="ring_spinner" message="Spinner Loading..." show-message />
<ks-loading icon="ellipsis_typing" message="Ellipsis Loading..." show-message />
```

## Loading Overlay

The loading overlay combine the `<ks-loading>` element and the [`<ks-overlay>`](/components/overlay.html) components to provide a flexible and dynamic loading component.

<div class="my-xl">
    <ks-button id="basic_test_button">Show Loading</ks-button>
    <ks-loading-overlay id="basic_test_overlay" icon="circle_spinner" />
    <script>
        (function(){
            let basicTestOverlay = document.getElementById('basic_test_overlay');
            let basicTestButton = document.getElementById('basic_test_button');
            basicTestButton.addEventListener('click', () => {
                basicTestOverlay.show();
                setTimeout(function() {
                    basicTestOverlay.hide();
                }, 3000);
            });
        })();
    </script>
</div>

```html
<ks-loading-overlay icon="circle_spinner" />
```

## Sizes

Changing the size of the `<ks-loading />` is as easy as changing the font size on the element. You can quickly do that without aline of CSS using one of the [text utility classes](/utilities/text.html) (`<ks-loading class="text-lg" />`).

Changing the size of the `<ks-loading-overlay />` can be done using the custom `size` attribute. Sizes include `xxs`-`xxl`.

<div class="my-xl">
    <ks-button id="size_test_button">Show XL Loading</ks-button>
    <ks-loading-overlay id="size_test_overlay" size="xxl" icon="ellipsis_typing" />
    <script>
        (function(){
            let sizeTestOverlay = document.getElementById('size_test_overlay');
            let sizeTestButton = document.getElementById('size_test_button');
            sizeTestButton.addEventListener('click', () => {
                sizeTestOverlay.show();
                setTimeout(function() {
                    sizeTestOverlay.hide();
                }, 3000);
            });
        })();
    </script>
</div>

```html
<ks-loading-overlay size="xxl" />
```

## Positioning

By default the overlay will take up the entire viewport. If you are only loading a portion of the page, you can isolate the loading overlay to that specific area by placing the component within the container you are loading and adding the `absolute` attribute to the component.

:::tip Note
The parent container must have the CSS rule `position: relative;` set. Feel free to take advantage of our `position-relative` [utility class](../utilities/position.md) to make it easy.
:::

<div class="my-xl p-xl position-relative" style="width:300px;height:150px;">
    <ks-button id="absolute_button">Show Absolute Overlay</ks-button>
    <ks-loading-overlay id="absolute_overlay" size="xxl" icon="ellipsis_pulse" absolute />
    <script>
        (function(){
            let absoluteButton = document.getElementById('absolute_button');
            let absoluteOverlay = document.getElementById('absolute_overlay');
            absoluteButton.addEventListener('click', () => {
                absoluteOverlay.show();
                setTimeout(function() {
                    absoluteOverlay.hide();
                }, 3000);
            });
        })();
    </script>
</div>

```html
<div class="position-relative" style="width:300px;height:150px;">
    <ks-button id="absolute_button">Show Absolute Overlay</ks-button>
    <ks-loading-overlay id="absolute_overlay" size="xxl" absolute />
    <script>
        let absoluteButton = document.getElementById('absolute_button');
        let absoluteOverlay = document.getElementById('absolute_overlay');
        absoluteButton.addEventListener('click', () => {
            absoluteOverlay.show();
            setTimeout(function() {
                absoluteOverlay.hide();
            }, 3000);
        });
    </script>
</div>
```

## Showing and Hiding

Showing and hiding the loading overlay is as simple as using JavaScript to select the element and call the `show()` or `hide()` methods. Here is a simple example that will show the overlay when the button is clicked and hide it after 3 seconds.

<div class="my-xl">
    <ks-button id="test_button">Show Overlay</ks-button>
    <ks-loading-overlay id="test_overlay" size="xxl" icon="circle_spinner" />
    <script>
        (function(){
            let testOverlay = document.getElementById('test_overlay');
            let testButton = document.getElementById('test_button');
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
<ks-loading-overlay id="test_overlay" size="xxl" />
<script>
    let testOverlay = document.getElementById('test_overlay');
    let testButton = document.getElementById('test_button');

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

### Button Attributes

If you are using the [`<ks-button>` element](/components/button.html) you can take advantage of the `shows` and `hides` properties to open and close any of the components built using the [overlay](/components/overlay.html) component.

<div class="my-xl display-flex">
    <div class="p-xl position-relative" style="width:300px;height:150px;">
        <ks-button shows="show_overlay">Show Overlay</ks-button>
        <ks-loading-overlay id="show_overlay" size="lg" absolute />
    </div>
    <ks-button class="mt-xl ml-sm" hides="show_overlay">Hide Overlay</ks-button>
</div>

```html
<div class="position-relative" style="width:300px;height:150px;">
    <ks-button shows="show_overlay">Show Overlay</ks-button>
    <ks-loading-overlay id="show_overlay" size="lg" absolute />
</div>
<ks-button hides="show_overlay">Hide Overlay</ks-button>
```

## Accessibility

The loading icon itself is hidden to screen readers using `aria-hidden="true"` attribute, but the message is announced when the icons is displayed using the `role="alert"` and `aria-live="polite"` attributes.

The loading overlay has the same features, but is also built with the [`<ks-overlay>`](/components/overlay.html) component and takes advantage of its accessibility features. The main feature is that it uses the `role="dialog"` attribute to notify screen readers that a dialog is open when the loading overlay is displayed.

## Properties

### Loading

| Property      | Attribute      | Description | Type                                                     | Default        |
| ------------- | -------------- | ----------- | -------------------------------------------------------- | -------------- |
| `message`     | `message`      | text to display with loading icon            | `string`                                                 | `'Loading...'` |
| `showMessage` | `show-message` | toggle message visibility            | `boolean`                                                | `false`    |
| `type`        | `type`         | type of icon            | `"ellipsis"` or `"spinner"` | `'spinner'`         |

### Loading Overlay

| Property      | Attribute      | Description | Type                                                     | Default        |
| ------------- | -------------- | ----------- | -------------------------------------------------------- | -------------- |
| `absolute`    | `absolute`     | controls where overlay displays            | `boolean`                                                | `false`        |
| `message`     | `message`      | text to display with loading icon             | `string`                                                 | `'Loading...'` |
| `showMessage` | `show-message` | toggle message visibility            | `boolean`                                                | `false`    |
| `size`        | `size`         | size of icon            | `"lg"`, `"md"`, `"sm"`, `"xl"`, `"xs"`, `"xxl"`, or `"xxs"` | `'sm'`         |
| `type`        | `type`         | type of icon            | `"ellipsis"` or `"spinner"` | `'spinner'`         |

## Events

| Event    | Description                    | Type               |
| -------- | ------------------------------ | ------------------ |
| `hidden` | emitted when overlay is hidden | `CustomEvent<any>` |
| `shown`  | emitted when overlay is shown  | `CustomEvent<any>` |

```html
<ks-loading-overlay id="my_overlay">
    ...
</ks-loading-overlay>

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
