# ks-autocomplete



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type                                   | Default     |
| ---------- | ---------- | ----------- | -------------------------------------- | ----------- |
| `debounce` | `debounce` |             | `number`                               | `0`         |
| `disabled` | `disabled` |             | `boolean`                              | `undefined` |
| `inputId`  | `input-id` |             | `string`                               | `undefined` |
| `name`     | `name`     |             | `string`                               | `undefined` |
| `required` | `required` |             | `boolean`                              | `undefined` |
| `value`    | `value`    |             | `any[] \| boolean \| number \| string` | `''`        |


## Events

| Event     | Description | Type                          |
| --------- | ----------- | ----------------------------- |
| `changed` |             | `CustomEvent<IFormFieldData>` |


## Methods

### `validate() => Promise<IFormFieldData>`



#### Returns

Type: `Promise<IFormFieldData>`




## Dependencies

### Used by

 - [ks-form-field](..)

### Depends on

- [ks-icon](../../icon)

### Graph
```mermaid
graph TD;
  ks-autocomplete --> ks-icon
  ks-form-field --> ks-autocomplete
  style ks-autocomplete fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*