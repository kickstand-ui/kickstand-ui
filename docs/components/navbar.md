# Navbar

Kickstand UI's navbar component is designed to provide a responsive navigation header for your application.

<div class="my-xl">
    <ks-navbar>
        <ks-navbar-item>
            <a href="#">Home</a>
        </ks-navbar-item>
        <ks-navbar-item>
            <a href="#">About</a>
        </ks-navbar-item>
        <ks-navbar-item>
            <a href="#">Contact Us</a>
        </ks-navbar-item>
    </ks-navbar-item>
</div>

## Properties

### `<ks-navbar>`

| Property | Attribute | Type   | Default | Description |
| -------- | --------- | ------ | ------- | ----------- |
| `altText`  | `alt-text`   | `string` | `undefined` | the alt text for the logo           |
| `collapse` | `collapse`  | `'xxs'`, `'xs'`, `'sm'`, `'md'`, `'lg'`, or `'xl'`   | `'sm'` | the breakpoint at which the menu will collapse at for mobile            |
| `color`  | `color`   | `"danger"`, `"dark"`, `"info"`, `"light"`, `"link"`, `"primary"`, `"secondary"`, `"success"`, or `"warning"` | `'primary'` | the background color of the menu based on the theme color palette           |
| `inverted`  | `inverted`   | `boolean` | `false` | this inverts the background and link colors           |
| `logoUrl`  | `logo-url`   | `string` | `undefined` | the url to your logo           |
| `tagline`  | `tagline`   | `string` | `undefined` | the text that will accompany your logo           |

### `<ks-navbar-row>`

There are not custom properties for this component.

### `<ks-navbar-group>`

| Property | Attribute | Type   | Default | Description |
| -------- | --------- | ------ | ------- | ----------- |
| `position`  | `position`   | `'left'` or `'right'` | `'right'` | the alignment of the group           |

### `<ks-navbar-item>`

There are not custom properties for this component.
