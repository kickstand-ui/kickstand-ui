# Button

Buttons are used to perform actions in forms, modals, and more. Kickstand UI buttons come with additional features that include button states, color and style variations, and best practices when dealing with links vs buttons.

<ks-button class="mb-sm">Default Button</ks-button>

## Colors

<div class="my-xl">
    <ks-button color="primary" class="mb-sm">primary</ks-button>
    <ks-button color="secondary" class="mb-sm">secondary</ks-button>
    <ks-button color="success" class="mb-sm">success</ks-button>
    <ks-button color="info" class="mb-sm">info</ks-button>
    <ks-button color="warning" class="mb-sm">warning</ks-button>
    <ks-button color="danger" class="mb-sm">danger</ks-button>
    <ks-button color="light" class="mb-sm">light</ks-button>
    <ks-button color="dark" class="mb-sm">dark</ks-button>
</div>

```html
<ks-button color="primary">primary</ks-button>
<ks-button color="secondary">secondary</ks-button>
<ks-button color="success">success</ks-button>
<ks-button color="info">info</ks-button>
<ks-button color="warning">warning</ks-button>
<ks-button color="danger">danger</ks-button>
<ks-button color="light">light</ks-button>
<ks-button color="dark">dark</ks-button>
```

## Sizes

<div class="my-xl">
    <ks-button size="xs">xs button</ks-button>
    <ks-button size="sm">sm button</ks-button>
    <ks-button size="md">md button</ks-button>
    <ks-button size="lg">lg button</ks-button>
    <ks-button size="xl">xl button</ks-button>
</div>

```html
<ks-button size="xs">xs button</ks-button>
<ks-button size="sm">sm button</ks-button>
<ks-button size="md">md button</ks-button>
<ks-button size="lg">lg button</ks-button>
<ks-button size="xl">xl button</ks-button>
```

## Display

<div class="my-xl">
    <ks-button display="solid">solid button</ks-button>
    <ks-button display="hollow">hollow button</ks-button>
    <ks-button display="clear">clear button</ks-button>
    <ks-button display="link">link button</ks-button>
</div>

```html
<ks-button display="solid">solid button</ks-button>
<ks-button display="hollow">hollow button</ks-button>
<ks-button display="clear">clear button</ks-button>
<ks-button display="link">link button</ks-button>
```

## States

### Disabled

<ks-button disabled class="mt-xxl">Disabled Button</ks-button>

```html
<ks-button disabled>Disabled Button</ks-button>
```

### Loading

<div class="my-xl">
    <ks-button id="loading_button">Click To Load</ks-button>
    <script>
        let loadingButton = document.getElementById('loading_button');
        loadingButton.addEventListener('click', function () {
            loadingButton.loading = true;
            setTimeout(function () {
                loadingButton.loading = false;
            }, 3000);
        });
    </script>
</div>

```html
<ks-button id="loading_button">Click To Load</ks-button>

<script>
    let loadingButton = document.getElementById('loading_button');

    loadingButton.addEventListener('click', function () {
        loadingButton.loading = true;

        setTimeout(function () {
            loadingButton.loading = false;
        }, 3000);
    });
</script>
```
**Note:** If a button is loading, it is also disabled.

## Icons

<ks-button icon="info" class="mt-xxl">Button With An Icon</ks-button>

```html
<ks-button icon="info">Button With An Icon</ks-button>
```

### Direction

<ks-button icon="info" icon-direction="right" class="mt-xxl">Button With An Icon</ks-button>

```html
<ks-button icon="info" icon-direction="right">Button With An Icon</ks-button>
```

### Hide Text

<ks-button icon="info" hide-text class="mt-xxl">Button With An Icon</ks-button>

```html
<ks-button icon="info" hide-text>Button With An Icon</ks-button>
```

## HREF

If the `href` property is populated, it will change the behavior of therefore change semantics of the markup. Buttons are for performing actions and anchors are for linking to content.

<ks-button class="mt-xxl">I do something</ks-button>

```html
<ks-button>I do something</ks-button>

<!-- the rendered HTML -->
<ks-button class="pointer hydrated">
    ...
    <button aria-haspopup="false" type="button" class="button primary solid icon-left md">
        <span class="button-text">I do something</span>
    </button>
</ks-button>
```

<ks-button href="#" class="mt-xxl">I go somewhere</ks-button>

```html
<ks-button href="#">I go somewhere</ks-button>

<!-- the rendered HTML -->
<ks-button href="#" class="pointer hydrated">
    ...
    <a class="button primary solid icon-left md" href="#">
        <span class="button-text">I go somewhere</span>
    </a>
</ks-button>
```

## Properties

| Property        | Attribute        | Description | Type         | Default     |
| --------------- | ---------------- | ----------- | ------------ | ----------- |
| `color`         | `color`          | button color based on theme palette            | `"danger"`, `"dark"`, `"info"`, `"light"`, `"primary"`, `"secondary"`, `"success"`, or `"warning"` | `'primary'` |
| `controls`      | `controls`       | adds `aria-controls` attribute to button element           | `string` | `undefined` |
| `cssClass`      | `css-class`      | passes class directly to button element | `string` | `''` |
| `describedBy`   | `described-by`   | adds `aria-describedby` attribute to button element            | `string` | `undefined` |
| `disabled`      | `disabled`       | enables/disables button            | `boolean` | `undefined` |
| `display`       | `display`        | controls the display type            | `"clear"`, `"hollow"`, `"link"`, or `"solid"` | `'solid'`   |
| `expanded`      | `expanded`       | controls `aria-expanded` attribute on the button element | `boolean` | `false`     |
| `haspopup`      | `haspopup`       | adds `aria-haspopup` attribute to button element | `boolean` | `false` |
| `hideText`      | `hide-text`      | controls whether or not text is displayed (hidden text will still be visible to screen readers) | `boolean`  | `false`     |
| `href`          | `href`           | adding this value will convert the button to a link | `string` | `undefined` |
| `icon`          | `icon`           | the name of the icon you would like to display            | `string` | `''`        |
| `iconDirection` | `icon-direction` | the direction of the icon            | `"left"` or `"right"` | `'left'`    |
| `loading`       | `loading`        | enabling this will show the loading icon and disable the button            | `boolean` | `undefined` |
| `size`          | `size`           | controls the size of the button            | `"md"`, `"lg"`, `"sm"`, `"xl"`, or `"xs"` | `'md'`      |
| `tabIndex`      | `tab-index`      | adds a `tabindex` attribute on the button element            | `number`                                                                                        | `undefined` |
| `type`          | `type`           | controls the button `type` attribute            | `"button"`, `"reset"`, or `"submit"` | `'button'`  |
