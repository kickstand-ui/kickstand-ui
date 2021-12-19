# ks-alert



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type                                                                                            | Default     |
| ------------- | ------------- | ----------- | ----------------------------------------------------------------------------------------------- | ----------- |
| `closeText`   | `close-text`  |             | `string`                                                                                        | `'Close'`   |
| `color`       | `color`       |             | `"danger" \| "dark" \| "info" \| "light" \| "primary" \| "secondary" \| "success" \| "warning"` | `'primary'` |
| `dismissible` | `dismissible` |             | `boolean`                                                                                       | `false`     |
| `display`     | `display`     |             | `boolean`                                                                                       | `false`     |
| `heading`     | `heading`     |             | `string`                                                                                        | `undefined` |
| `hideIcon`    | `hide-icon`   |             | `boolean`                                                                                       | `false`     |
| `icon`        | `icon`        |             | `string`                                                                                        | `'warning'` |
| `note`        | `note`        |             | `boolean`                                                                                       | `false`     |


## Events

| Event    | Description | Type               |
| -------- | ----------- | ------------------ |
| `hidden` |             | `CustomEvent<any>` |
| `shown`  |             | `CustomEvent<any>` |


## Methods

### `hide() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `show() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [ks-form](../form)

### Depends on

- [ks-icon](../icon)
- [ks-button](../button)

### Graph
```mermaid
graph TD;
  ks-alert --> ks-icon
  ks-alert --> ks-button
  ks-button --> ks-loading-overlay
  ks-loading-overlay --> ks-overlay
  ks-loading-overlay --> ks-loading
  ks-loading --> ks-icon
  ks-form --> ks-alert
  style ks-alert fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
