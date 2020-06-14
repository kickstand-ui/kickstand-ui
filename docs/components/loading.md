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
