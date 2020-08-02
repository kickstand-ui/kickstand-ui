# Alert

Alerts are designed to provide the user with contextual feedback based on a their actions.

<div class="my-lg">
    <ks-alert color="primary" class="mb-md">
        This is a <b>primary</b> alert.
    </ks-alert>
    <ks-alert color="secondary" class="mb-md">
        This is a <b>secondary</b> alert.
    </ks-alert>
    <ks-alert color="success" class="mb-md">
        This is a <b>success</b> alert.
    </ks-alert>
    <ks-alert color="info" class="mb-md">
        This is a <b>info</b> alert.
    </ks-alert>
    <ks-alert color="warning" class="mb-md">
        This is a <b>warning</b> alert.
    </ks-alert>
    <ks-alert color="danger" class="mb-md">
        This is a <b>danger</b> alert.
    </ks-alert>
    <ks-alert color="light" class="mb-md">
        This is a <b>light</b> alert.
    </ks-alert>
    <ks-alert color="dark">
        This is a <b>dark</b> alert.
    </ks-alert>
</div>

```html
<ks-alert color="primary">
    This is a <b>primary</b> alert.
</ks-alert>

<ks-alert color="secondary">
    This is a <b>secondary</b> alert.
</ks-alert>

<ks-alert color="success">
    This is a <b>success</b> alert.
</ks-alert>

<ks-alert color="info">
    This is a <b>info</b> alert.
</ks-alert>

<ks-alert color="warning">
    This is a <b>warning</b> alert.
</ks-alert>

<ks-alert color="danger">
    This is a <b>danger</b> alert.
</ks-alert>

<ks-alert color="light">
    This is a <b>light</b> alert.
</ks-alert>

<ks-alert color="dark">
    This is a <b>dark</b> alert.
</ks-alert>
```

## Notes

Notes are used for fixed messages that are always visible and used to call out important information the user should be aware of or warned about.

<div class="my-lg">
    <ks-alert color="primary" note class="mb-md">
        This is a <b>primary</b> alert.
    </ks-alert>
    <ks-alert color="secondary" note class="mb-md">
        This is a <b>secondary</b> alert.
    </ks-alert>
    <ks-alert color="success" note class="mb-md">
        This is a <b>success</b> alert.
    </ks-alert>
    <ks-alert color="info" note class="mb-md">
        This is a <b>info</b> alert.
    </ks-alert>
    <ks-alert color="warning" note class="mb-md">
        This is a <b>warning</b> alert.
    </ks-alert>
    <ks-alert color="danger" note class="mb-md">
        This is a <b>danger</b> alert.
    </ks-alert>
    <ks-alert color="light" note class="mb-md">
        This is a <b>light</b> alert.
    </ks-alert>
    <ks-alert color="dark" note>
        This is a <b>dark</b> alert.
    </ks-alert>
</div>

```html
<ks-alert color="primary" note>
    This is a <b>primary</b> note.
</ks-alert>

<ks-alert color="secondary" note>
    This is a <b>secondary</b> note.
</ks-alert>

<ks-alert color="success" note>
    This is a <b>success</b> note.
</ks-alert>

<ks-alert color="info" note>
    This is a <b>info</b> note.
</ks-alert>

<ks-alert color="warning" note>
    This is a <b>warning</b> note.
</ks-alert>

<ks-alert color="danger" note>
    This is a <b>danger</b> note.
</ks-alert>

<ks-alert color="light" note>
    This is a <b>light</b> note.
</ks-alert>

<ks-alert color="dark" note>
    This is a <b>dark</b> note.
</ks-alert>
```

## Headings

You can add some more structure to your alerts by adding a heading to your using the `header` property.

<div class="my-xl">
    <ks-alert header="Alert Heading" class="mb-xl">This is an alert with a heading.</ks-alert>
    <ks-alert header="Note Heading" note>This is an note with a heading.</ks-alert>
</div>

```html
<ks-alert header="Alert Heading">This is an alert with a heading.</ks-alert>
<ks-alert header="Note Heading" note>This is a note with a heading.</ks-alert>
```

## Accessibility

Alerts have `role="alert"` on the container to signal to assistive technology that they require the user’s immediate attention.

Depending on the color assigned to the warning, it will also change the politeness of the message to screen reader using the `aria-live` attribute:

| Color                  | Politeness    |
| ---------------------- | ------------- |
| `danger` and `warning` | `"assertive"` |
| all others             | `"polite"`    |

### Accessibility for Notes

Since notes are static containers for calling out important information, `role="alert"` and `aria-live` attributes are not set when the `note` property is `true`.

## Properties

| Property | Attribute | Type   | Default | Description |
| -------- | --------- | ------ | ------- | ----------- |
| `color`  | `color`   | `"danger"`, `"dark"`, `"info"`, `"light"`, `"link"`, `"primary"`, `"secondary"`, `"success"`, or `"warning"` | `'primary'` | the color of the button based on the theme color palette           |
| `header` | `header`  | `string`   | `undefined` | the header text for the alert            |
| `note`   | `note`    | `boolean`  | `undefined` | display alert as a note            |
