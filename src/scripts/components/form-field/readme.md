# c-button



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type                                                                                                            | Default      |
| -------------- | --------------- | ----------- | --------------------------------------------------------------------------------------------------------------- | ------------ |
| `disabled`     | `disabled`      |             | `boolean`                                                                                                       | `undefined`  |
| `errorMessage` | `error-message` |             | `string`                                                                                                        | `undefined`  |
| `helpText`     | `help-text`     |             | `string`                                                                                                        | `undefined`  |
| `invalid`      | `invalid`       |             | `boolean`                                                                                                       | `false`      |
| `label`        | `label`         |             | `string`                                                                                                        | `undefined`  |
| `max`          | `max`           |             | `number`                                                                                                        | `undefined`  |
| `min`          | `min`           |             | `number`                                                                                                        | `undefined`  |
| `placeholder`  | `placeholder`   |             | `string`                                                                                                        | `undefined`  |
| `required`     | `required`      |             | `boolean`                                                                                                       | `undefined`  |
| `requiredText` | `required-text` |             | `string`                                                                                                        | `'Required'` |
| `step`         | `step`          |             | `number`                                                                                                        | `undefined`  |
| `tooltipText`  | `tooltip-text`  |             | `string`                                                                                                        | `undefined`  |
| `type`         | `type`          |             | `"date" \| "email" \| "hidden" \| "number" \| "password" \| "search" \| "spin-box" \| "tel" \| "text" \| "url"` | `'text'`     |
| `value`        | `value`         |             | `number \| string`                                                                                              | `''`         |


## Events

| Event     | Description | Type               |
| --------- | ----------- | ------------------ |
| `updated` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [c-tooltip](../tooltip)
- [c-spin-box](../spin-box)

### Graph
```mermaid
graph TD;
  c-form-field --> c-tooltip
  c-form-field --> c-spin-box
  c-spin-box --> c-button
  c-button --> c-loading-overlay
  c-loading-overlay --> c-overlay
  c-loading-overlay --> c-loading
  style c-form-field fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
