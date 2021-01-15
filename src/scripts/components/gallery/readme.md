# ks-switch



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description | Type                                                                                   | Default          |
| ---------------- | ------------------ | ----------- | -------------------------------------------------------------------------------------- | ---------------- |
| `gutter`         | `gutter`           |             | `"lg" \| "md" \| "none" \| "sm" \| "xl" \| "xs" \| "xxl" \| "xxs" \| "xxxl" \| "xxxs"` | `'md'`           |
| `heading`        | `heading`          |             | `string`                                                                               | `undefined`      |
| `href`           | `href`             |             | `string`                                                                               | `undefined`      |
| `hrefProp`       | `href-prop`        |             | `string`                                                                               | `'href'`         |
| `itemWidth`      | `item-width`       |             | `string`                                                                               | `undefined`      |
| `linkTag`        | `link-tag`         |             | `string`                                                                               | `'a'`            |
| `nextButtonText` | `next-button-text` |             | `string`                                                                               | `'scroll right'` |
| `prevButtonText` | `prev-button-text` |             | `string`                                                                               | `'scroll left'`  |


## Dependencies

### Depends on

- [ks-button](../button)
- [ks-icon](../icon)

### Graph
```mermaid
graph TD;
  ks-gallery --> ks-button
  ks-gallery --> ks-icon
  ks-button --> ks-loading-overlay
  ks-loading-overlay --> ks-overlay
  ks-loading-overlay --> ks-loading
  ks-loading --> ks-icon
  style ks-gallery fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
