# Alert

Alerts are designed to provide the user with contextual feedback based on a their actions.

<div class="my-lg">
    <ks-alert header="The Facts of Life by Michael Scott">
        “People will never be replaced by machines. In the end, life and business are about human connections. And computers are about trying to murder you in a lake. And to me the choice is easy.”
        <br>
        <br>
        Michael Scott
    </ks-alert>
</div>

```html
<ks-alert header="The Facts of Life by Michael Scott">
    “People will never be replaced by machines. In the end, life and business are about human connections. And computers are about trying to murder you in a lake. And to me the choice is easy.”
    <br>
    <br>
    Michael Scott
</ks-alert>
```

## Properties

| Property | Attribute | Type   | Default | Description |
| -------- | --------- | ------ | ------- | ----------- |
| `color`  | `color`   | `"danger"`, `"dark"`, `"info"`, `"light"`, `"link"`, `"primary"`, `"secondary"`, `"success"`, or `"warning"` | `'primary'` | the color of the button based on the theme color palette           |
| `header` | `header`  | `string`   | `undefined` | the header text for the alert            |
| `note`   | `note`    | `boolean`  | `undefined` | display alert as a note            |

### Notes

Notes are used for fixed messages that are always visible and used to call out important information the user should be aware of or warned about.

<div class="my-lg">
    <ks-alert color="danger" note>
        "'R' is among the most menacing of sounds. That's why they call it 'murder' and not 'mukduk'."
        <br>
        <br>
        Dwight Schrute
    </ks-alert>
</div>

```html
<ks-alert color="danger" note>
    "'R' is among the most menacing of sounds. That's why they call it 'murder' and not 'mukduk'."
    <br>
    <br>
    Dwight Schrute
</ks-alert>
```
