# ks-overlay



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute     | Description | Type     | Default     |
| ----------- | ------------- | ----------- | -------- | ----------- |
| `labelId`   | `label-id`    |             | `string` | `undefined` |
| `max`       | `max`         |             | `number` | `undefined` |
| `min`       | `min`         |             | `number` | `0`         |
| `spinBoxId` | `spin-box-id` |             | `string` | `undefined` |
| `step`      | `step`        |             | `number` | `1`         |
| `value`     | `value`       |             | `number` | `0`         |


## Events

| Event     | Description | Type               |
| --------- | ----------- | ------------------ |
| `updated` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [ks-form-field](../form-field)

### Depends on

- [ks-button](../button)

### Graph
```mermaid
graph TD;
  ks-spin-box --> ks-button
  ks-button --> ks-icon
  ks-button --> ks-loading-overlay
  ks-loading-overlay --> ks-overlay
  ks-loading-overlay --> ks-loading
  ks-form-field --> ks-spin-box
  style ks-spin-box fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
