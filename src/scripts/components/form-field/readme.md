# c-button



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type                                                                                              | Default      |
| -------------- | --------------- | ----------- | ------------------------------------------------------------------------------------------------- | ------------ |
| `disabled`     | `disabled`      |             | `boolean`                                                                                         | `undefined`  |
| `errorMessage` | `error-message` |             | `string`                                                                                          | `undefined`  |
| `helpText`     | `help-text`     |             | `string`                                                                                          | `undefined`  |
| `invalid`      | `invalid`       |             | `boolean`                                                                                         | `false`      |
| `label`        | `label`         |             | `string`                                                                                          | `undefined`  |
| `placeholder`  | `placeholder`   |             | `string`                                                                                          | `undefined`  |
| `required`     | `required`      |             | `boolean`                                                                                         | `undefined`  |
| `requiredText` | `required-text` |             | `string`                                                                                          | `'Required'` |
| `tooltipText`  | `tooltip-text`  |             | `string`                                                                                          | `undefined`  |
| `type`         | `type`          |             | `"date" \| "email" \| "hidden" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "url"` | `'text'`     |
| `value`        | `value`         |             | `number \| string`                                                                                | `''`         |


## Events

| Event       | Description | Type               |
| ----------- | ----------- | ------------------ |
| `cOnChange` |             | `CustomEvent<any>` |
| `cOnInput`  |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [c-tooltip](../tooltip)

### Graph
```mermaid
graph TD;
  c-form-field --> c-tooltip
  style c-form-field fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
