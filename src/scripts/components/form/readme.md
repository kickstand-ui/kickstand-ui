# ks-icon



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type                                                                           | Default                                                                                  |
| -------------- | --------------- | ----------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| `action`       | `action`        |             | `string`                                                                       | `undefined`                                                                              |
| `enctype`      | `enctype`       |             | `"application/x-www-form-urlencoded" \| "multipart/form-data" \| "text/plain"` | `undefined`                                                                              |
| `errorMessage` | `error-message` |             | `string`                                                                       | `'One or more of the from fields are not valid. Please, review the form and try again.'` |
| `invalid`      | `invalid`       |             | `boolean`                                                                      | `false`                                                                                  |
| `method`       | `method`        |             | `"get" \| "post"`                                                              | `undefined`                                                                              |
| `target`       | `target`        |             | `"_blank" \| "_parent" \| "_self" \| "_top"`                                   | `undefined`                                                                              |


## Events

| Event       | Description | Type                     |
| ----------- | ----------- | ------------------------ |
| `submitted` |             | `CustomEvent<IFormData>` |


## Dependencies

### Depends on

- [ks-alert](../alert)
- [ks-icon](../icon)

### Graph
```mermaid
graph TD;
  ks-form --> ks-alert
  ks-form --> ks-icon
  ks-alert --> ks-button
  ks-alert --> ks-icon
  ks-button --> ks-icon
  ks-button --> ks-loading-overlay
  ks-loading-overlay --> ks-overlay
  ks-loading-overlay --> ks-loading
  style ks-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
