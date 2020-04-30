# c-button



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

 - [c-dropdown](../dropdown)
 - [c-modal](../modal)
 - [c-side-drawer](../side-drawer)
 - [c-spin-box](../spin-box)

### Depends on

- [c-loading-overlay](../loading)

### Graph
```mermaid
graph TD;
  c-button --> c-loading-overlay
  c-loading-overlay --> c-overlay
  c-loading-overlay --> c-loading
  c-dropdown --> c-button
  c-modal --> c-button
  c-side-drawer --> c-button
  c-spin-box --> c-button
  style c-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
