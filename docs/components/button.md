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

<ks-button disabled>Disabled Button</ks-button>

```html
<ks-button disabled>Disabled Button</ks-button>
```

### Loading

<ks-button loading>Loading Button</ks-button>

```html
<ks-button loading>Loading Button</ks-button>
```

## Icons

<ks-button icon="info">Button With An Icon</ks-button>

```html
<ks-button icon="info">Button With An Icon</ks-button>
```

### Direction

<ks-button icon="info" icon-direction="right">Button With An Icon</ks-button>

```html
<ks-button icon="info" icon-direction="right">Button With An Icon</ks-button>
```

### Hide Text

<ks-button icon="info" hide-text>Button With An Icon</ks-button>

```html
<ks-button icon="info" hide-text>Button With An Icon</ks-button>
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

