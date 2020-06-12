# Form Field

Forms are some of the most complex user interactions in modern application design. The Kickstand UI form field component is design to abstract away some of that complexity and provide a consistent user experience as well as some features to improve usability.

<div class="my-xl">
    <ks-form-field label="Username" />
</div>

```html
<ks-form-field label="Username" />
```

## Label

The `label` property is pretty straight forward in that it provides the label for your form field. Every form field _must_ have a label and `placeholder` text is not a suitable replacement for a label.

## Help Text

The `help-text` is additional information provided for the user to increase input accuracy. Developers have commonly used `placeholder` text for this information in the past, but this results in some usability issues such as the loss of that information when a value is input into the field.

<div class="my-xl">
    <ks-form-field
        label="Password"
        type="password"
        help-text="Must contain 8 characters and one special character"
        />
</div>

```html
<ks-form-field
    label="Password"
    type="password"
    help-text="Must contain 8 characters and one special character"
    />
```

## Tooltip Text

If you need to provide the user with additional information that may not need to be displayed every time a user interacts with the form, you can display it in a tooltip.

<div class="my-xl">
    <ks-form-field
        label="Phone Number"
        type="tel"
        tooltip-text="Used for password recovery"
        />
</div>

```html
<ks-form-field
    label="Password"
    type="password"
    help-text="Must contain 8 characters and one special character"
    />
```

## Properties

| Property       | Attribute       | Description | Type                                                                                                            | Default      |
| -------------- | --------------- | ----------- | --------------------------------------------------------------------------------------------------------------- | ------------ |
| `autocomplete`          | `autocomplete`            | read [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#Values) for more information on available values and features            | `string`                                                                                          | `on`                                                                             |
| `badInputErrorMessage`  | `bad-input-error-message` | the message that displays when the `badInput` validation is `true`            | `string`                                                                                          | `There was a problem processing your value.`                                           |
| `defaultErrorMessage`   | `default-error-message`   | the message that will display if `invalid` is set to `true`            | `string`                                                                                          | `The value entered is not valid.`                                                     |
| `disabled`     | `disabled`      | disable form fields            | `boolean`                                                                                                       | `undefined`  |
| `helpText`     | `help-text`     | additional information that displays below the form label            | `string`                                                                                                        | `undefined`  |
| `invalid`      | `invalid`       | toggles whether the form is valid or not            | `boolean`                                                                                                       | `false`      |
| `label`        | `label`         | the form field label            | `string`                                                                                                        | `undefined`  |
| `max`          | `max`           | the max value for `number` and `spin-box` input types            | `number`                                                                                                        | `undefined`  |
| `maxErrorMessage`       | `max-error-message`       | the error message that will display if the `max` value has been exceeded            | `string`                                                                                          | `Your value must be no greater than {max}.`                                     |
| `maxlength`             | `maxlength`               | the maximum number of characters a field will allow            | `number`                                                                                          | `undefined`                                                                             |
| `maxlengthErrorMessage` | `maxlength-error-message` | the error message that will display if the `maxlength` value is exceeded            | `string`                                                                                          | `Your value must be less than {maxlength} characters.`                          |
| `min`          | `min`           | the min value for `number` and `spin-box` input types            | `number`                                                                                                        | `undefined`  |
| `minErrorMessage`       | `min-error-message`       | the error message that will display if the value is less than the `min`            | `string`                                                                                          | `Your value must be no less than {min}.`                                        |
| `minlength`             | `minlength`               | the minimum number of characters the value must be            | `number`                                                                                          | `undefined`                                                                             |
| `minlengthErrorMessage` | `minlength-error-message` | the error message that is displayed if the value length is less than the `minlength`            | `string`                                                                                          | `Your value must be greater than {minlength} characters.`    |
| `pattern`               | `pattern`                 | a regular expression used validate the value            | `string`                                                                                          | `undefined`                                                                             |
| `patternErrorMessage`   | `pattern-error-message`   | the error message displayed if the value does not match the `pattern`            | `string`                                                                                          | `There was a problem processing the value.`                                           |
| `placeholder`  | `placeholder`   | placeholder text that will display within the form field            | `string`                                                                                                        | `undefined`  |
| `required`     | `required`      | toggles whether the form is required            | `boolean`                                                                                                       | `undefined`  |
| `requiredErrorMessage`  | `required-error-message`  | the error message displayed if `required` is `true` and is missing a value            | `string`                                                                                          | `This field is required.`                                                            |
| `requiredText` | `required-text` | the text that will display when the required indicator is hovered or screen readers read the indicator            | `string`                                                                                                        | `'Required'` |
| `step`         | `step`          | when using a `spin-box` the amount it will increment/decrement            | `number`                                                                                                        | `undefined`  |
| `stepErrorMessage`  | `step-error-message`  | the error message that will display if the value is not divisible by the `step` value            | `string`                                                                                          | `This field is required.`                                                            |
| `tooltipText`  | `tooltip-text`  | if set, an indicatory will appear and when hovered/focused on will display this content in a tooltip (supports HTML)           | `string`                                                                                                        | `undefined`  |
| `type`         | `type`          | the input type            | `"date"`, `"email"`, `"hidden"`, `"number"`, `"password"`, `"search"`, `"spin-box"`, `"tel"`, `"text"`, or `"url"` | `'text'`     |
| `typeErrorMessage`      | `type-error-message`      | the error message that will display if the value does not match the input `type`            | `string`                                                                                          | `Your value must be a valid {type}.` |
| `value`        | `value`         | the input value            | `number` or `string`                                                                                              | `''`         |

## Events

| Event     | Description | Type               |
| --------- | ----------- | ------------------ |
| `updated` | this event will execute each time the value is updated            | `CustomEvent<any>` |
