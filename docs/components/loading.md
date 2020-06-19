# Loading

There are two ways to display loading indicators - inline or in an overlay.

## Types

<div class="my-xl">
    <ks-loading type="spinner" />
    <ks-loading type="ellipsis" />
</div>

```html
<ks-loading type="spinner" />
<ks-loading type="ellipsis" />
```

## Messaging

<div class="my-xl">
    <ks-loading type="spinner" message="Spinner Loading..." show-message />
    <br />
    <ks-loading type="ellipsis" message="Ellipsis Loading..." show-message />
</div>

```html
<ks-loading type="spinner" message="Spinner Loading..." show-message />
<ks-loading type="ellipsis" message="Ellipsis Loading..." show-message />
```

## Loading Overlay

The loading overlay combine the `<ks-loading>` element and the [`<ks-overlay>`](/components/overlay.html) components to provide a flexible and dynamic loading component.

<div class="my-xl">
    <ks-button id="basic_test_button">Show Loading</ks-button>
    <ks-loading-overlay id="basic_test_overlay" />
    <script>
        let basicTestOverlay = document.getElementById('basic_test_overlay');
        let basicTestButton = document.getElementById('basic_test_button');
        basicTestButton.addEventListener('click', () => {
            basicTestOverlay.show();
            setTimeout(function() {
                basicTestOverlay.hide();
            }, 3000);
        });
    </script>
</div>

```html
<ks-loading-overlay />
```

## Sizes

Changing the size of the `<ks-loading />` is as easy as changing the font size on the element. You can quickly do that without aline of CSS using one of the [text utility classes](/utilities/text.html) (`<ks-loading class="text-lg" />`).

Changing the size of the `<ks-loading-overlay />` can be done using the custom `size` attribute. Sizes include `xxs`-`xxl`.

<div class="my-xl">
    <ks-button id="size_test_button">Show XL Loading</ks-button>
    <ks-loading-overlay id="size_test_overlay" size="xxl" />
    <script>
        let sizeTestOverlay = document.getElementById('size_test_overlay');
        let sizeTestButton = document.getElementById('size_test_button');
        sizeTestButton.addEventListener('click', () => {
            sizeTestOverlay.show();
            setTimeout(function() {
                sizeTestOverlay.hide();
            }, 3000);
        });
    </script>
</div>

```html
<ks-loading-overlay size="xxl" />
```

## Positioning

By default the overlay will take up the entire viewport. If you are only loading a portion of the page, you can isolate the loading overlay to that specific area by placing the component within the container you are loading and adding the `absolute` attribute to the component.

:::tip Note
The parent container must have the CSS rule `position: relative;` set.
:::

<div class="my-xl p-xl" style="position:relative;width:300px;height:150px;">
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

```html
<div style="position:relative;width:300px;height:150px;">
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
    <ks-loading-overlay id="test_overlay" size="xxl" />
    <script>
        let testOverlay = document.getElementById('test_overlay');
        let testButton = document.getElementById('test_button');
        testButton.addEventListener('click', () => {
            testOverlay.show();
            setTimeout(function() {
                testOverlay.hide();
            }, 3000);
        });
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
    <div class="p-xl" style="position:relative;width:300px;height:150px;">
        <ks-button shows="show_overlay">Show Overlay</ks-button>
        <ks-loading-overlay id="show_overlay" size="lg" absolute />
    </div>
    <ks-button class="mt-xl ml-sm" hides="show_overlay">Hide Overlay</ks-button>
</div>

```html
<div style="position:relative;width:300px;height:150px;">
    <ks-button shows="show_overlay">Show Overlay</ks-button>
    <ks-loading-overlay id="show_overlay" size="lg" absolute />
</div>
<ks-button hides="show_overlay">Hide Overlay</ks-button>
```

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

## Methods

### `hide() => Promise<void>`

#### Returns

Type: `Promise<void>`

### `show() => Promise<void>`

#### Returns

Type: `Promise<void>`
