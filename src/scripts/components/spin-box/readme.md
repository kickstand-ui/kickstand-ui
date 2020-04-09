# c-overlay



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type      | Default     |
| ----------- | ------------ | ----------- | --------- | ----------- |
| `hideLabel` | `hide-label` |             | `boolean` | `undefined` |
| `label`     | `label`      |             | `string`  | `undefined` |
| `max`       | `max`        |             | `number`  | `undefined` |
| `min`       | `min`        |             | `number`  | `0`         |
| `step`      | `step`       |             | `number`  | `1`         |
| `value`     | `value`      |             | `number`  | `0`         |


## Dependencies

### Depends on

- [c-button](../button)

### Graph
```mermaid
graph TD;
  c-spin-box --> c-button
  c-button --> c-loading-overlay
  c-loading-overlay --> c-overlay
  c-loading-overlay --> c-loading
  style c-spin-box fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*