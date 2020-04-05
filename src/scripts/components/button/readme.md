# c-button



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type                                                                                                      | Default     |
| --------------- | ---------------- | ----------- | --------------------------------------------------------------------------------------------------------- | ----------- |
| `clear`         | `clear`          |             | `boolean`                                                                                                 | `undefined` |
| `color`         | `color`          |             | `"danger" \| "dark" \| "info" \| "light" \| "link" \| "primary" \| "secondary" \| "success" \| "warning"` | `'primary'` |
| `controls`      | `controls`       |             | `string`                                                                                                  | `undefined` |
| `cssClass`      | `css-class`      |             | `string`                                                                                                  | `''`        |
| `describedBy`   | `described-by`   |             | `string`                                                                                                  | `undefined` |
| `disabled`      | `disabled`       |             | `boolean`                                                                                                 | `undefined` |
| `expanded`      | `expanded`       |             | `boolean`                                                                                                 | `undefined` |
| `haspopup`      | `haspopup`       |             | `boolean`                                                                                                 | `undefined` |
| `hideText`      | `hide-text`      |             | `boolean`                                                                                                 | `false`     |
| `hollow`        | `hollow`         |             | `boolean`                                                                                                 | `undefined` |
| `href`          | `href`           |             | `string`                                                                                                  | `undefined` |
| `icon`          | `icon`           |             | `string`                                                                                                  | `''`        |
| `iconDirection` | `icon-direction` |             | `"left" \| "right"`                                                                                       | `'left'`    |
| `loading`       | `loading`        |             | `boolean`                                                                                                 | `undefined` |
| `size`          | `size`           |             | `"large" \| "medium" \| "small" \| "xlarge" \| "xsmall"`                                                  | `'medium'`  |
| `type`          | `type`           |             | `"button" \| "reset" \| "submit"`                                                                         | `'button'`  |


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
