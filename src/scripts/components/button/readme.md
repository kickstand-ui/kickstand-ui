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
| `hides`         | `hides`          |             | `string`                                                                                        | `undefined` |
| `href`          | `href`           |             | `string`                                                                                        | `undefined` |
| `icon`          | `icon`           |             | `string`                                                                                        | `''`        |
| `iconDirection` | `icon-direction` |             | `"left" \| "right"`                                                                             | `'left'`    |
| `loading`       | `loading`        |             | `boolean`                                                                                       | `undefined` |
| `shows`         | `shows`          |             | `string`                                                                                        | `undefined` |
| `size`          | `size`           |             | `"lg" \| "md" \| "sm" \| "xl" \| "xs"`                                                          | `'md'`      |
| `tabIndex`      | `tab-index`      |             | `number`                                                                                        | `undefined` |
| `target`        | `target`         |             | `string`                                                                                        | `undefined` |
| `type`          | `type`           |             | `"button" \| "reset" \| "submit"`                                                               | `'button'`  |


## Dependencies

### Used by

 - [ks-alert](../alert)
 - [ks-carousel](../carousel)
 - [ks-dropdown](../dropdown)
 - [ks-modal](../modal)
 - [ks-side-drawer](../side-drawer)
 - [ks-spin-box](../spin-box)

### Depends on

- [ks-icon](../icon)
- [ks-loading-overlay](../loading)

### Graph
```mermaid
graph TD;
  ks-button --> ks-icon
  ks-button --> ks-loading-overlay
  ks-loading-overlay --> ks-overlay
  ks-loading-overlay --> ks-loading
  ks-alert --> ks-button
  ks-carousel --> ks-button
  ks-dropdown --> ks-button
  ks-modal --> ks-button
  ks-side-drawer --> ks-button
  ks-spin-box --> ks-button
  style ks-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
