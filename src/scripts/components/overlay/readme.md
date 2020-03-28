# c-overlay



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type                | Default     |
| ------------- | ------------- | ----------- | ------------------- | ----------- |
| `absolute`    | `absolute`    |             | `boolean`           | `undefined` |
| `dismissible` | `dismissible` |             | `boolean`           | `true`      |
| `theme`       | `theme`       |             | `"dark" \| "light"` | `'dark'`    |
| `titleId`     | `title-id`    |             | `string`            | `undefined` |


## Methods

### `hide() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `show() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [c-loading](../loading)
 - [c-modal](../modal)
 - [c-side-drawer](../side-drawer)

### Graph
```mermaid
graph TD;
  c-loading --> c-overlay
  c-modal --> c-overlay
  c-side-drawer --> c-overlay
  style c-overlay fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
