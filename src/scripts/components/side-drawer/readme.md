# ks-button



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type                           | Default     |
| ------------ | ------------- | ----------- | ------------------------------ | ----------- |
| `headerText` | `header-text` |             | `string`                       | `undefined` |
| `position`   | `position`    |             | `"left" \| "right"`            | `'left'`    |
| `size`       | `size`        |             | `"lg" \| "md" \| "sm" \| "xl"` | `'sm'`      |


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

### Depends on

- [ks-overlay](../overlay)
- [ks-button](../button)
- [ks-icon](../icon)

### Graph
```mermaid
graph TD;
  ks-side-drawer --> ks-overlay
  ks-side-drawer --> ks-button
  ks-side-drawer --> ks-icon
  ks-button --> ks-loading-overlay
  ks-loading-overlay --> ks-overlay
  ks-loading-overlay --> ks-loading
  ks-loading --> ks-icon
  style ks-side-drawer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
