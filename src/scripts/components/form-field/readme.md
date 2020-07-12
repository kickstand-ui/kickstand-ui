# ks-form-field



<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                 | Description | Type                                                                                                                                                                   | Default                                                                                 |
| ----------------------- | ------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `autocomplete`          | `autocomplete`            |             | `string`                                                                                                                                                               | `undefined`                                                                             |
| `badInputErrorMessage`  | `bad-input-error-message` |             | `string`                                                                                                                                                               | `'There was a problem processing the value.'`                                           |
| `datalist`              | `datalist`                |             | `boolean`                                                                                                                                                              | `false`                                                                                 |
| `debounce`              | `debounce`                |             | `number`                                                                                                                                                               | `0`                                                                                     |
| `defaultErrorMessage`   | `default-error-message`   |             | `string`                                                                                                                                                               | `'The value entered is not valid.'`                                                     |
| `disabled`              | `disabled`                |             | `boolean`                                                                                                                                                              | `undefined`                                                                             |
| `helpText`              | `help-text`               |             | `string`                                                                                                                                                               | `undefined`                                                                             |
| `invalid`               | `invalid`                 |             | `boolean`                                                                                                                                                              | `false`                                                                                 |
| `label`                 | `label`                   |             | `string`                                                                                                                                                               | `undefined`                                                                             |
| `max`                   | `max`                     |             | `number`                                                                                                                                                               | `undefined`                                                                             |
| `maxErrorMessage`       | `max-error-message`       |             | `string`                                                                                                                                                               | ``Your value must be no greater than ${this.max}.``                                     |
| `maxlength`             | `maxlength`               |             | `number`                                                                                                                                                               | `undefined`                                                                             |
| `maxlengthErrorMessage` | `maxlength-error-message` |             | `string`                                                                                                                                                               | ``Your value must be no more than ${this.maxlength} characters.``                       |
| `min`                   | `min`                     |             | `number`                                                                                                                                                               | `undefined`                                                                             |
| `minErrorMessage`       | `min-error-message`       |             | `string`                                                                                                                                                               | ``Your value must be no less than ${this.min}.``                                        |
| `minlength`             | `minlength`               |             | `number`                                                                                                                                                               | `undefined`                                                                             |
| `minlengthErrorMessage` | `minlength-error-message` |             | `string`                                                                                                                                                               | ``Your value must be at least ${this.minlength} characters.``                           |
| `name`                  | `name`                    |             | `string`                                                                                                                                                               | `undefined`                                                                             |
| `pattern`               | `pattern`                 |             | `string`                                                                                                                                                               | `undefined`                                                                             |
| `patternErrorMessage`   | `pattern-error-message`   |             | `string`                                                                                                                                                               | `'There was a problem processing the value.'`                                           |
| `placeholder`           | `placeholder`             |             | `string`                                                                                                                                                               | `undefined`                                                                             |
| `required`              | `required`                |             | `boolean`                                                                                                                                                              | `undefined`                                                                             |
| `requiredErrorMessage`  | `required-error-message`  |             | `string`                                                                                                                                                               | ``This field is required.``                                                             |
| `requiredText`          | `required-text`           |             | `string`                                                                                                                                                               | `'Required'`                                                                            |
| `step`                  | `step`                    |             | `number`                                                                                                                                                               | `undefined`                                                                             |
| `stepErrorMessage`      | `step-error-message`      |             | `string`                                                                                                                                                               | ``Your value must be divisible by ${this.step}.``                                       |
| `tooltipText`           | `tooltip-text`            |             | `string`                                                                                                                                                               | `undefined`                                                                             |
| `type`                  | `type`                    |             | `"color" \| "date" \| "email" \| "file" \| "hidden" \| "month" \| "number" \| "password" \| "range" \| "search" \| "select" \| "tel" \| "text" \| "textarea" \| "url"` | `'text'`                                                                                |
| `typeErrorMessage`      | `type-error-message`      |             | `string`                                                                                                                                                               | ``Your value must be a valid ${this.type === 'tel' ? 'telephone number' : this.type}.`` |
| `validateOnInput`       | `validate-on-input`       |             | `boolean`                                                                                                                                                              | `false`                                                                                 |
| `value`                 | `value`                   |             | `number \| string`                                                                                                                                                     | `''`                                                                                    |


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

- [ks-tooltip](../tooltip)
- [ks-icon](../icon)

### Graph
```mermaid
graph TD;
  ks-form-field --> ks-tooltip
  ks-form-field --> ks-icon
  style ks-form-field fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
