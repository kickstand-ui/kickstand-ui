# ks-overlay



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type                                                     | Default        |
| ------------- | -------------- | ----------- | -------------------------------------------------------- | -------------- |
| `absolute`    | `absolute`     |             | `boolean`                                                | `false`        |
| `icon`        | `icon`         |             | `string`                                                 | `undefined`    |
| `message`     | `message`      |             | `string`                                                 | `'Loading...'` |
| `showMessage` | `show-message` |             | `boolean`                                                | `false`        |
| `size`        | `size`         |             | `"lg" \| "md" \| "sm" \| "xl" \| "xs" \| "xxl" \| "xxs"` | `'sm'`         |
| `theme`       | `theme`        |             | `"dark" \| "light"`                                      | `'light'`      |


## Methods

### `hide() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `show() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [ks-button](../button)

### Depends on

- [ks-overlay](../overlay)
- [ks-loading](.)

### Graph
```mermaid
graph TD;
  ks-loading-overlay --> ks-overlay
  ks-loading-overlay --> ks-loading
  ks-loading --> ks-icon
  ks-button --> ks-loading-overlay
  style ks-loading-overlay fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
