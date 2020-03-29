# c-button



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type                           | Default     |
| ------------ | ------------- | ----------- | ------------------------------ | ----------- |
| `headerText` | `header-text` |             | `string`                       | `undefined` |
| `name`       | `name`        |             | `string`                       | `undefined` |
| `position`   | `position`    |             | `"left" \| "right"`            | `'left'`    |
| `size`       | `size`        |             | `"lg" \| "md" \| "sm" \| "xl"` | `'sm'`      |


## Methods

### `hide() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `show() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [c-overlay](../overlay)
- [c-button](../button)

### Graph
```mermaid
graph TD;
  c-side-drawer --> c-overlay
  c-side-drawer --> c-button
  c-button --> c-loading-overlay
  c-loading-overlay --> c-overlay
  c-loading-overlay --> c-loading
  style c-side-drawer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
