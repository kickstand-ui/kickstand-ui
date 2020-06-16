# Menu Bar

Kickstand UI's menu component is designed to provide a responsive navigation header for your application.

<div class="my-xl">
    <ks-menu-bar tagline="Basic Menu">
        <ks-menu-row>
            <ks-menu-item>
                <a href="#">Home</a>
            </ks-menu-item>
            <ks-menu-item>
                <a href="#">About</a>
            </ks-menu-item>
            <ks-menu-item>
                <ks-button color="secondary" size="sm" href="#">Shop Now</ks-button>
            </ks-menu-item>
        </ks-menu-row>
    </ks-menu-bar>
</div>

```html
<ks-menu-bar tagline="Basic Menu">
    <ks-menu-row>
        <ks-menu-item>
            <a href="#">Home</a>
        </ks-menu-item>
        <ks-menu-item>
            <a href="#">About</a>
        </ks-menu-item>
        <ks-menu-item>
            <ks-button color="secondary" size="sm" href="#">Shop Now</ks-button>
        </ks-menu-item>
    </ks-menu-row>
</ks-menu-bar>
```

## Properties

### `<ks-menu>`

| Property | Attribute | Type   | Default | Description |
| -------- | --------- | ------ | ------- | ----------- |
| `altText`  | `alt-text`   | `string` | `undefined` | the alt text for the logo           |
| `collapse` | `collapse`  | `'xxs'`, `'xs'`, `'sm'`, `'md'`, `'lg'`, or `'xl'`   | `'sm'` | the breakpoint at which the menu will collapse at for mobile            |
| `color`  | `color`   | `"danger"`, `"dark"`, `"info"`, `"light"`, `"link"`, `"primary"`, `"secondary"`, `"success"`, or `"warning"` | `'primary'` | the background color of the menu based on the theme color palette           |
| `inverted`  | `inverted`   | `boolean` | `false` | this inverts the background and link colors           |
| `logoUrl`  | `logo-url`   | `string` | `undefined` | the url to your logo           |
| `tagline`  | `tagline`   | `string` | `undefined` | the text that will accompany your logo           |

### `<ks-menu-row>`

There are not custom properties for this component.

### `<ks-menu-group>`

| Property | Attribute | Type   | Default | Description |
| -------- | --------- | ------ | ------- | ----------- |
| `position`  | `position`   | `'left'` or `'right'` | `'right'` | the alignment of the group           |

### `<ks-menu-item>`

There are not custom properties for this component.
