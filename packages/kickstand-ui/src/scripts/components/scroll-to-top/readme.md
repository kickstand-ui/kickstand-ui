# ks-badge



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type                                                                                            | Default     |
| ----------- | ----------- | ----------- | ----------------------------------------------------------------------------------------------- | ----------- |
| `color`     | `color`     |             | `"danger" \| "dark" \| "info" \| "light" \| "primary" \| "secondary" \| "success" \| "warning"` | `'primary'` |
| `display`   | `display`   |             | `"clear" \| "hollow" \| "link" \| "solid"`                                                      | `'solid'`   |
| `size`      | `size`      |             | `"lg" \| "md" \| "sm" \| "xl" \| "xs"`                                                          | `'md'`      |
| `threshold` | `threshold` |             | `number`                                                                                        | `100`       |


## Dependencies

### Depends on

- [ks-button](../button)

### Graph
```mermaid
graph TD;
  ks-scroll-to-top --> ks-button
  ks-button --> ks-loading-overlay
  ks-loading-overlay --> ks-overlay
  ks-loading-overlay --> ks-loading
  ks-loading --> ks-icon
  style ks-scroll-to-top fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
