# Form Field

## Properties

| Property       | Attribute       | Description | Type                                                                                                            | Default      |
| -------------- | --------------- | ----------- | --------------------------------------------------------------------------------------------------------------- | ------------ |
| `disabled`     | `disabled`      | disable form fields            | `boolean`                                                                                                       | `undefined`  |
| `errorMessage` | `error-message` | the message that displays when `invalid` is `true`             | `string`                                                                                                        | `undefined`  |
| `helpText`     | `help-text`     | additional information that displays below the form label            | `string`                                                                                                        | `undefined`  |
| `invalid`      | `invalid`       | toggles whether the form is valid or not            | `boolean`                                                                                                       | `false`      |
| `label`        | `label`         | the form field label            | `string`                                                                                                        | `undefined`  |
| `max`          | `max`           | the max value for `number` and `spin-box` input types            | `number`                                                                                                        | `undefined`  |
| `min`          | `min`           | the min value for `number` and `spin-box` input types            | `number`                                                                                                        | `undefined`  |
| `placeholder`  | `placeholder`   | placeholder text that will display within the form field            | `string`                                                                                                        | `undefined`  |
| `required`     | `required`      | toggles whether the form is required            | `boolean`                                                                                                       | `undefined`  |
| `requiredText` | `required-text` | the text that will display when the required indicator is hovered or screen readers read the indicator            | `string`                                                                                                        | `'Required'` |
| `step`         | `step`          | when using a `spin-box` the amount it will increment/decrement            | `number`                                                                                                        | `undefined`  |
| `tooltipText`  | `tooltip-text`  | if set, an indicatory will appear and when hovered/focused on will display this content in a tooltip (supports HTML)           | `string`                                                                                                        | `undefined`  |
| `type`         | `type`          | the input type            | `"date"`, `"email"`, `"hidden"`, `"number"`, `"password"`, `"search"`, `"spin-box"`, `"tel"`, `"text"`, or `"url"` | `'text'`     |
| `value`        | `value`         | the input value            | `number` or `string`                                                                                              | `''`         |


## Events

| Event     | Description | Type               |
| --------- | ----------- | ------------------ |
| `updated` | this event will execute each time the value is updated            | `CustomEvent<any>` |

