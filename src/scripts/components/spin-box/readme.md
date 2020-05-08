# c-overlay



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

 - [c-form-field](../form-field)

### Depends on

- [c-button](../button)

### Graph
```mermaid
graph TD;
  c-spin-box --> c-button
  c-button --> c-loading-overlay
  c-loading-overlay --> c-overlay
  c-loading-overlay --> c-loading
  c-form-field --> c-spin-box
  style c-spin-box fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
