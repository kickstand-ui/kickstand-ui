# ks-form-field



<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                 | Description | Type                                                                                                                                                                                                                                 | Default                                                                                 |
| ----------------------- | ------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| `autocomplete`          | `autocomplete`            |             | `string`                                                                                                                                                                                                                             | `undefined`                                                                             |
| `badInputErrorMessage`  | `bad-input-error-message` |             | `string`                                                                                                                                                                                                                             | `'There was a problem processing the value.'`                                           |
| `checked`               | `checked`                 |             | `boolean`                                                                                                                                                                                                                            | `false`                                                                                 |
| `datalist`              | `datalist`                |             | `boolean`                                                                                                                                                                                                                            | `false`                                                                                 |
| `debounce`              | `debounce`                |             | `number`                                                                                                                                                                                                                             | `0`                                                                                     |
| `defaultErrorMessage`   | `default-error-message`   |             | `string`                                                                                                                                                                                                                             | `'The value entered is not valid.'`                                                     |
| `disabled`              | `disabled`                |             | `boolean`                                                                                                                                                                                                                            | `undefined`                                                                             |
| `helpText`              | `help-text`               |             | `string`                                                                                                                                                                                                                             | `undefined`                                                                             |
| `inline`                | `inline`                  |             | `boolean`                                                                                                                                                                                                                            | `false`                                                                                 |
| `invalid`               | `invalid`                 |             | `boolean`                                                                                                                                                                                                                            | `false`                                                                                 |
| `label`                 | `label`                   |             | `string`                                                                                                                                                                                                                             | `undefined`                                                                             |
| `max`                   | `max`                     |             | `number`                                                                                                                                                                                                                             | `Number()`                                                                              |
| `maxErrorMessage`       | `max-error-message`       |             | `string`                                                                                                                                                                                                                             | ``Your value must be no greater than ${this.max}.``                                     |
| `maxlength`             | `maxlength`               |             | `number`                                                                                                                                                                                                                             | `Number()`                                                                              |
| `maxlengthErrorMessage` | `maxlength-error-message` |             | `string`                                                                                                                                                                                                                             | ``Your value must be no more than ${this.maxlength} characters.``                       |
| `min`                   | `min`                     |             | `number`                                                                                                                                                                                                                             | `0`                                                                                     |
| `minErrorMessage`       | `min-error-message`       |             | `string`                                                                                                                                                                                                                             | ``Your value must be no less than ${this.min}.``                                        |
| `minlength`             | `minlength`               |             | `number`                                                                                                                                                                                                                             | `0`                                                                                     |
| `minlengthErrorMessage` | `minlength-error-message` |             | `string`                                                                                                                                                                                                                             | ``Your value must be at least ${this.minlength} characters.``                           |
| `name`                  | `name`                    |             | `string`                                                                                                                                                                                                                             | `undefined`                                                                             |
| `pattern`               | `pattern`                 |             | `string`                                                                                                                                                                                                                             | `undefined`                                                                             |
| `patternErrorMessage`   | `pattern-error-message`   |             | `string`                                                                                                                                                                                                                             | `'The value was not in the right format.'`                                              |
| `placeholder`           | `placeholder`             |             | `string`                                                                                                                                                                                                                             | `undefined`                                                                             |
| `required`              | `required`                |             | `boolean`                                                                                                                                                                                                                            | `undefined`                                                                             |
| `requiredErrorMessage`  | `required-error-message`  |             | `string`                                                                                                                                                                                                                             | ``This field is required.``                                                             |
| `requiredText`          | `required-text`           |             | `string`                                                                                                                                                                                                                             | `'Required'`                                                                            |
| `step`                  | `step`                    |             | `number`                                                                                                                                                                                                                             | `1`                                                                                     |
| `stepErrorMessage`      | `step-error-message`      |             | `string`                                                                                                                                                                                                                             | ``Your value must be divisible by ${this.step \|\| 1}.``                                |
| `tooltipText`           | `tooltip-text`            |             | `string`                                                                                                                                                                                                                             | `undefined`                                                                             |
| `type`                  | `type`                    |             | `"autocomplete" \| "checkbox" \| "checklist" \| "color" \| "date" \| "email" \| "file" \| "hidden" \| "month" \| "number" \| "password" \| "radiolist" \| "range" \| "search" \| "select" \| "tel" \| "text" \| "textarea" \| "url"` | `'text'`                                                                                |
| `typeErrorMessage`      | `type-error-message`      |             | `string`                                                                                                                                                                                                                             | ``Your value must be a valid ${this.type === 'tel' ? 'telephone number' : this.type}.`` |
| `validateOnInput`       | `validate-on-input`       |             | `boolean`                                                                                                                                                                                                                            | `false`                                                                                 |
| `value`                 | `value`                   |             | `any[] \| boolean \| number \| string`                                                                                                                                                                                               | `''`                                                                                    |


## Events

| Event     | Description | Type                          |
| --------- | ----------- | ----------------------------- |
| `blurred` |             | `CustomEvent<any>`            |
| `updated` |             | `CustomEvent<IFormFieldData>` |


## Methods

### `validate() => Promise<IFormFieldData>`



#### Returns

Type: `Promise<IFormFieldData>`




## Dependencies

### Depends on

- [ks-icon](../icon)
- [ks-autocomplete](autocomplete)
- [ks-button](../button)
- [ks-checkbox](checkbox)
- [ks-checklist](checklist)
- [ks-tooltip](../tooltip)

### Graph
```mermaid
graph TD;
  ks-form-field --> ks-icon
  ks-form-field --> ks-autocomplete
  ks-form-field --> ks-button
  ks-form-field --> ks-checkbox
  ks-form-field --> ks-checklist
  ks-form-field --> ks-tooltip
  ks-autocomplete --> ks-button
  ks-autocomplete --> ks-icon
  ks-button --> ks-icon
  ks-button --> ks-loading-overlay
  ks-loading-overlay --> ks-overlay
  ks-loading-overlay --> ks-loading
  ks-loading --> ks-icon
  ks-checkbox --> ks-tooltip
  ks-checkbox --> ks-icon
  ks-checklist --> ks-tooltip
  ks-checklist --> ks-icon
  ks-checklist --> ks-checkbox
  ks-checklist --> ks-radio
  style ks-form-field fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
