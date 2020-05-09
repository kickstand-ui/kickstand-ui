# ks-button



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type                                                                                            | Default     |
| --------------- | ---------------- | ----------- | ----------------------------------------------------------------------------------------------- | ----------- |
| `color`         | `color`          |             | `"danger" \| "dark" \| "info" \| "light" \| "primary" \| "secondary" \| "success" \| "warning"` | `'primary'` |
| `controls`      | `controls`       |             | `string`                                                                                        | `undefined` |
| `cssClass`      | `css-class`      |             | `string`                                                                                        | `''`        |
| `describedBy`   | `described-by`   |             | `string`                                                                                        | `undefined` |
| `disabled`      | `disabled`       |             | `boolean`                                                                                       | `undefined` |
| `display`       | `display`        |             | `"clear" \| "hollow" \| "link" \| "solid"`                                                      | `'solid'`   |
| `expanded`      | `expanded`       |             | `boolean`                                                                                       | `false`     |
| `haspopup`      | `haspopup`       |             | `boolean`                                                                                       | `false`     |
| `hideText`      | `hide-text`      |             | `boolean`                                                                                       | `false`     |
| `href`          | `href`           |             | `string`                                                                                        | `undefined` |
| `icon`          | `icon`           |             | `string`                                                                                        | `''`        |
| `iconDirection` | `icon-direction` |             | `"left" \| "right"`                                                                             | `'left'`    |
| `loading`       | `loading`        |             | `boolean`                                                                                       | `undefined` |
| `size`          | `size`           |             | `"large" \| "medium" \| "small" \| "xlarge" \| "xsmall"`                                        | `'medium'`  |
| `tabIndex`      | `tab-index`      |             | `number`                                                                                        | `undefined` |
| `type`          | `type`           |             | `"button" \| "reset" \| "submit"`                                                               | `'button'`  |


## Dependencies

### Used by

 - [ks-dropdown](../dropdown)
 - [ks-modal](../modal)
 - [ks-side-drawer](../side-drawer)
 - [ks-spin-box](../spin-box)

### Depends on

- [ks-loading-overlay](../loading)

### Graph
```mermaid
graph TD;
  ks-button --> ks-loading-overlay
  ks-loading-overlay --> ks-overlay
  ks-loading-overlay --> ks-loading
  ks-dropdown --> ks-button
  ks-modal --> ks-button
  ks-side-drawer --> ks-button
  ks-spin-box --> ks-button
  style ks-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
