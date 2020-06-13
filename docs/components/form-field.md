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

The `help-text` is additional information provided for the user to increase input accuracy. Developers have commonly used `placeholder` text for this information in the past, but this results in some usability issues such as the loss of that information when a value is input into the field. Also, to improve usability, the help text is displayed above the form field and is actually part of the `<label>`.

::: tip Note
Clicking a label automatically sets the focus on associated input field, so having your help text as part of your label provides a larger target to interact with the form field - especially for touch-enabled devices. Having the text above the form field also means that it won't be covered up on mobile devices when the keyboard is displayed.
:::

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
        label="Email"
        type="email"
        tooltip-text="Used for password recovery"
        />
</div>

```html
<ks-form-field
    label="Email"
    type="email"
    tooltip-text="Used for password recovery"
    />
```

## Error Messages

In order to provide clear error messages to you users, invalid input fields will be bordered in red and the error message will also be display in red to help it stand out from the label and help text. For those users that may not be able to distinguish between the colors, an "alert" icon has been added to call attention to the invalid field and message.

:::tip Note
The error message is also included in the `<label>` to provide better usability.
:::

## Validation

With implementation of HTML 5, there are a number of great validation tools that come out-of-the-box for form fields. Kickstand UI takes advantage of those capabilities and provides some additional features for custom validation.

### Validation Properties

Each fo the validation properties has a corresponding error message you can easily customize.

| Validation  | Error Message             | Usage          |
| ----------- | ------------------------- | -------------- |
| `value`     | `bad-input-error-message` | This error will display if the user has provided input that the browser is unable to convert. |
| `invalid`   | `default-error-message`   | Provides the ability to manually toggle the input's validity. |
| `max`       | `max-error-message`       | Specifies the maximum value of numerical input types |
| `maxlength` | `maxlength-error-message` | Specifies the maximum length of textual data (strings) |
| `min`       | `min-error-message`       | Specifies the minimum value of numerical input types |
| `minlength` | `minlength-error-message` | Specifies the minimum length of textual data (strings) |
| `pattern`   | `pattern-error-message`   | Specifies a regular expression that defines a pattern the entered data needs to follow. |
| `required`  | `required-error-message`  | Specifies whether a form field needs to be filled in before the form can be submitted. |
| `step`      | `step-error-message`      | Specifies what increment the value will go up or down by when the input controls are used (such as the up and down number buttons). |
| `type`      | `type-error-message`      | Specifies whether the data needs to be a number, an email address, or some other specific preset type. |

:::tip
To find out more about HTML5 form validation check out this [documentation from MDN](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation).
:::

## Data Binding

Kickstand UI's components focus on one-way data binding so that data flows in a single direction. What that means is that the variable you bind to the `value` property will not be updated whenever a user enters new content. In order to provide you with the new value, each component wil emit and `updated` event.

### Adding Event Listeners

<div class="my-xl">
    <ks-form-field label="Name" id="binding-test" class="mb-md" />
    <b>Bound Value: </b><span id="value"></span>
    <script>
        let formField = document.getElementById('binding-test');
        let value = document.getElementById('value');
        formField.addEventListener('updated', (e) => {
            value.innerText = e.detail.value;
        });
    </script>
</div>

```html
<ks-form-field label="Name" id="binding-test" class="mb-md" />
<b>Bound Value: </b><span id="value"></span>
<script>
    let formField = document.getElementById('binding-test');
    let value = document.getElementById('value');
    formField.addEventListener('updated', (e) => {
        value.innerText = e.detail.value;
    });
</script>
```

:::tip
Many JavaScript frameworks come with built-in event handling to help simplify your code.
:::

#### Vue.js

```html
<ks-form-field label="Name" id="binding-test" @updated="(e) => myMethod(e)" />
```

#### React

```html
<ks-form-field label="Name" id="binding-test" onUpdated="(e) => onUpdatedHandler(e)" />
```

### Event Detail

Event details emit much more that just the value. If you take a look, you will se that it not only emits the value of the field, but also the [ValidityState](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState). This should provide you with more information to manage form validation. 

```json
{
    validity: {
        badInput: false
        customError: false
        patternMismatch: false
        rangeOverflow: false
        rangeUnderflow: false
        stepMismatch: false
        tooLong: false
        tooShort: false
        typeMismatch: false
        valid: true
        valueMissing: false
    },
    value: ""
}
```

## Properties

| Property                | Attribute                 | Description | Type                                                                                                            | Default      |
| ----------------------- | ------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------- | ------------ |
| `autocomplete`          | `autocomplete`            | read [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#Values) for more information on available values and features            | `string`                                                                                          | `on`                                                                             |
| `badInputErrorMessage`  | `bad-input-error-message` | the message that displays when the `badInput` validation is `true`            | `string`                                                                                          | `There was a problem processing your value.`                                           |
| `defaultErrorMessage`   | `default-error-message`   | the message that will display if `invalid` is set to `true`            | `string`                                                                                          | `The value entered is not valid.`                                                     |
| `disabled`              | `disabled`                | disable form fields            | `boolean`                                                                                                       | `undefined`  |
| `helpText`              | `help-text`               | additional information that displays below the form label            | `string`                                                                                                        | `undefined`  |
| `invalid`               | `invalid`                 | toggles whether the form is valid or not            | `boolean`                                                                                                       | `false`      |
| `label`                 | `label`                   | the form field label            | `string`                                                                                                        | `undefined`  |
| `max`                   | `max`                     | the max value for `number` and `spin-box` input types            | `number`                                                                                                        | `undefined`  |
| `maxErrorMessage`       | `max-error-message`       | the error message that will display if the `max` value has been exceeded            | `string`                                                                                          | `Your value must be no greater than {max}.`                                     |
| `maxlength`             | `maxlength`               | the maximum number of characters a field will allow            | `number`                                                                                          | `undefined`                                                                             |
| `maxlengthErrorMessage` | `maxlength-error-message` | the error message that will display if the `maxlength` value is exceeded            | `string`                                                                                          | `Your value must be less than {maxlength} characters.`                          |
| `min`                   | `min`                     | the min value for `number` and `spin-box` input types            | `number`                                                                                                        | `undefined`  |
| `minErrorMessage`       | `min-error-message`       | the error message that will display if the value is less than the `min`            | `string`                                                                                          | `Your value must be no less than {min}.`                                        |
| `minlength`             | `minlength`               | the minimum number of characters the value must be            | `number`                                                                                          | `undefined`                                                                             |
| `minlengthErrorMessage` | `minlength-error-message` | the error message that is displayed if the value length is less than the `minlength`            | `string`                                                                                          | `Your value must be greater than {minlength} characters.`    |
| `pattern`               | `pattern`                 | a regular expression used validate the value            | `string`                                                                                          | `undefined`                                                                             |
| `patternErrorMessage`   | `pattern-error-message`   | the error message displayed if the value does not match the `pattern`            | `string`                                                                                          | `There was a problem processing the value.`                                           |
| `placeholder`           | `placeholder`             | placeholder text that will display within the form field            | `string`                                                                                                        | `undefined`  |
| `required`              | `required`                | toggles whether the form is required            | `boolean`                                                                                                       | `undefined`  |
| `requiredErrorMessage`  | `required-error-message`  | the error message displayed if `required` is `true` and is missing a value            | `string`                                                                                          | `This field is required.`                                                            |
| `requiredText`          | `required-text`           | the text that will display when the required indicator is hovered or screen readers read the indicator            | `string`                                                                                                        | `'Required'` |
| `step`                  | `step`                    | when using a `spin-box` the amount it will increment/decrement            | `number`                                                                                                        | `undefined`  |
| `stepErrorMessage`      | `step-error-message`      | the error message that will display if the value is not divisible by the `step` value            | `string`                                                                                          | `This field is required.`                                                            |
| `tooltipText`           | `tooltip-text`            | if set, an indicatory will appear and when hovered/focused on will display this content in a tooltip (supports HTML)           | `string`                                                                                                        | `undefined`  |
| `type`                  | `type`                    | the input type            | `"date"`, `"email"`, `"hidden"`, `"number"`, `"password"`, `"search"`, `"spin-box"`, `"tel"`, `"text"`, or `"url"` | `'text'`     |
| `typeErrorMessage`      | `type-error-message`      | the error message that will display if the value does not match the input `type`            | `string`                                                                                          | `Your value must be a valid {type}.` |
| `value`                 | `value`                   | the input value            | `number` or `string`                                                                                              | `''`         |

## Events

| Event     | Description | Type               |
| --------- | ----------- | ------------------ |
| `updated` | this event will execute each time the value is updated            | `CustomEvent<{ validity: ValidityState; value: string \| number; }>` |
