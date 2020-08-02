# Menu Bar

Kickstand UI's menu component is designed to provide a responsive navigation header for your applications.

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
                <ks-dropdown text="Account" display="link" position="right">
                    <ks-dropdown-item prevent-close><span>Welcome, Agent Michael Scarn!</span></ks-dropdown-item>
                    <ks-dropdown-item>
                        <a href="#">Order History</a>
                    </ks-dropdown-item>
                    <ks-dropdown-item>
                        <a href="#">Account Settings</a>
                    </ks-dropdown-item>
                    <ks-dropdown-item>
                        <a href="#">Wish Lists</a>
                    </ks-dropdown-item>
                    <ks-dropdown-item>
                        <ks-button>Sign Out</ks-button>
                    </ks-dropdown-item>
                </ks-dropdown>
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

## Logos

Add additional branding to your site by including your logo using the `logo-url` and `alt-text` properties.

<div class="my-xl">
    <ks-menu-bar tagline="Menu With Logo" logo-url="/images/kickstand_icon.png" alt-text="kickstand ui logo">
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
<ks-menu-bar
    tagline="Menu With Logo"
    logo-url="/images/kickstand_icon.png"
    alt-text="kickstand ui logo"
    >
    ...
</ks-menu-bar>
```

## Colors

Each of the colors in the theme palette are available for styling your menu bar.

<div class="my-xl">
    <ks-menu-bar tagline="Primary Menu" color="primary"></ks-menu-bar><br>
    <ks-menu-bar tagline="Secondary Menu" color="secondary"></ks-menu-bar><br>
    <ks-menu-bar tagline="Light Menu" color="light"></ks-menu-bar><br>
    <ks-menu-bar tagline="Dark Menu" color="dark"></ks-menu-bar><br>
    <ks-menu-bar tagline="Info Menu" color="info"></ks-menu-bar><br>
    <ks-menu-bar tagline="Success Menu" color="success"></ks-menu-bar><br>
    <ks-menu-bar tagline="Warning Menu" color="warning"></ks-menu-bar><br>
    <ks-menu-bar tagline="Danger Menu" color="danger"></ks-menu-bar>
</div>

```html
<ks-menu-bar tagline="Primary Menu" color="primary"></ks-menu-bar>
<ks-menu-bar tagline="Secondary Menu" color="secondary"></ks-menu-bar>
<ks-menu-bar tagline="Light Menu" color="light"></ks-menu-bar>
<ks-menu-bar tagline="Dark Menu" color="dark"></ks-menu-bar>
<ks-menu-bar tagline="Info Menu" color="info"></ks-menu-bar>
<ks-menu-bar tagline="Success Menu" color="success"></ks-menu-bar>
<ks-menu-bar tagline="Warning Menu" color="warning"></ks-menu-bar>
<ks-menu-bar tagline="Danger Menu" color="danger"></ks-menu-bar>
```

## Inverted

By adding the `inverted` property to your menu bar component, you can set the background color to white and the link text to the selected `color`.

<div class="my-xl">
    <ks-menu-bar tagline="Inverted Menu" inverted>
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
<ks-menu-bar tagline="Inverted Menu" inverted>
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

:::warning Accessibility
Please ensure that the text color has a sufficient contrast ratio before you implement it.
:::

## Collapse

Menus can can contain varying amounts of content which can make displaying on different device sizes difficult. Using the `collapse` property you can control the responsiveness of your menus - when the menu collapses. Options range from `xxs`-`xl` screen sizes.

<div class="my-xl">
    <ks-menu-bar tagline="Collapse at XL" collapse="xl">
        <ks-menu-row>
            <ks-menu-item>
                <a href="#">Home</a>
            </ks-menu-item>
            <ks-menu-item>
                <ks-button color="secondary" size="sm" href="#">Shop Now</ks-button>
            </ks-menu-item>
        </ks-menu-row>
    </ks-menu-bar>
    <br>
    <ks-menu-bar tagline="Collapse at LG" collapse="lg">
        <ks-menu-row>
            <ks-menu-item>
                <a href="#">Home</a>
            </ks-menu-item>
            <ks-menu-item>
                <ks-button color="secondary" size="sm" href="#">Shop Now</ks-button>
            </ks-menu-item>
        </ks-menu-row>
    </ks-menu-bar>
    <br>
    <ks-menu-bar tagline="Collapse at MD" collapse="md">
        <ks-menu-row>
            <ks-menu-item>
                <a href="#">Home</a>
            </ks-menu-item>
            <ks-menu-item>
                <ks-button color="secondary" size="sm" href="#">Shop Now</ks-button>
            </ks-menu-item>
        </ks-menu-row>
    </ks-menu-bar>
    <br>
    <ks-menu-bar tagline="Collapse at SM" collapse="sm">
        <ks-menu-row>
            <ks-menu-item>
                <a href="#">Home</a>
            </ks-menu-item>
            <ks-menu-item>
                <ks-button color="secondary" size="sm" href="#">Shop Now</ks-button>
            </ks-menu-item>
        </ks-menu-row>
    </ks-menu-bar>
    <br>
    <ks-menu-bar tagline="Collapse at XS" collapse="xs">
        <ks-menu-row>
            <ks-menu-item>
                <a href="#">Home</a>
            </ks-menu-item>
            <ks-menu-item>
                <ks-button color="secondary" size="sm" href="#">Shop Now</ks-button>
            </ks-menu-item>
        </ks-menu-row>
    </ks-menu-bar>
    <br>
    <ks-menu-bar tagline="Collapse at XXS" collapse="xxs">
        <ks-menu-row>
            <ks-menu-item>
                <a href="#">Home</a>
            </ks-menu-item>
            <ks-menu-item>
                <ks-button color="secondary" size="sm" href="#">Shop Now</ks-button>
            </ks-menu-item>
        </ks-menu-row>
    </ks-menu-bar>
</div>

```html
<ks-menu-bar tagline="Collapse at XL" collapse="xl">
    ...
</ks-menu-bar>
<ks-menu-bar tagline="Collapse at LG" collapse="lg">
    ...
</ks-menu-bar>
<ks-menu-bar tagline="Collapse at MD" collapse="md">
    ...
</ks-menu-bar>
<ks-menu-bar tagline="Collapse at SM" collapse="sm">
    ...
</ks-menu-bar>
<ks-menu-bar tagline="Collapse at XS" collapse="xs">
    ...
</ks-menu-bar>
<ks-menu-bar tagline="Collapse at XXS" collapse="xxs">
    ...
</ks-menu-bar>
```

## Multiple Rows

If you need a menu with multiple rows of items, you can easily add rows of menu options using the `<ks-menu-row>` component.

<div class="my-xl">
    <ks-menu-bar
        tagline="Multiple Rows"
        logo-url="/images/kickstand_icon.png"
        alt-text="kickstand ui logo"
        >
        <ks-menu-row>
            <ks-menu-item>
                <a href="#">Settings</a>
            </ks-menu-item>
            <ks-menu-item>
                <a href="#">Sign In</a>
            </ks-menu-item>
        </ks-menu-row>
        <ks-menu-row>
            <ks-menu-item>
                <a href="#">Home</a>
            </ks-menu-item>
            <ks-menu-item>
                <a href="#">About</a>
            </ks-menu-item>
            <ks-menu-item>
                <ks-button color="secondary" size="xs" href="#">Shop Now</ks-button>
            </ks-menu-item>
        </ks-menu-row>
    </ks-menu-bar>
</div>

```html
<ks-menu-bar
    tagline="Multiple Rows"
    logo-url="/images/kickstand_icon.png"
    alt-text="kickstand ui logo"
    >
    <ks-menu-row>
        <ks-menu-item>
            <a href="#">Settings</a>
        </ks-menu-item>
        <ks-menu-item>
            <a href="#">Sign In</a>
        </ks-menu-item>
    </ks-menu-row>
    <ks-menu-row>
        <ks-menu-item>
            <a href="#">Home</a>
        </ks-menu-item>
        <ks-menu-item>
            <a href="#">About</a>
        </ks-menu-item>
        <ks-menu-item>
            <ks-button color="secondary" size="xs" href="#">Shop Now</ks-button>
        </ks-menu-item>
    </ks-menu-row>
</ks-menu-bar>
```

## Row Groups

If you need to split up row items and align them separately, you can do so using a `<ks-menu-group>` and aligning the contents using the `position` property. By default, the group will be aligned to the `right`.

<div class="my-xl">
    <ks-menu-bar tagline="Row Groups" collapse="md">
        <ks-menu-row>
            <ks-menu-group position="left">
                <ks-menu-item>
                    <a href="#">Left 1</a>
                </ks-menu-item>
                <ks-menu-item>
                    <a href="#">Left 2</a>
                </ks-menu-item>
            </ks-menu-group>
            <ks-menu-group>
                <ks-menu-item>
                    <a href="#">Right 1</a>
                </ks-menu-item>
                <ks-menu-item>
                    <a href="#">Right 2</a>
                </ks-menu-item>
                <ks-menu-item>
                    <ks-button color="secondary" size="sm" href="#">Right 3</ks-button>
                </ks-menu-item>
            </ks-menu-group>
        </ks-menu-row>
    </ks-menu-bar>
</div>

```html
<ks-menu-bar tagline="Row Groups" collapse="md">
    <ks-menu-row>
        <ks-menu-group position="left">
            <ks-menu-item>
                <a href="#">Left 1</a>
            </ks-menu-item>
            <ks-menu-item>
                <a href="#">Left 2</a>
            </ks-menu-item>
        </ks-menu-group>
        <ks-menu-group>
            <ks-menu-item>
                <a href="#">Right 1</a>
            </ks-menu-item>
            <ks-menu-item>
                <a href="#">Right 2</a>
            </ks-menu-item>
            <ks-menu-item>
                <ks-button color="secondary" size="sm" href="#">Right 3</ks-button>
            </ks-menu-item>
        </ks-menu-group>
    </ks-menu-row>
</ks-menu-bar>
```

## Menu Item

A menu item doesn't have any unique properties that you can set, but it does provide consistent spacing as well as provide styling for active pages. If the page you are on corresponds with the link in menu item, an `active` class will be added to the container and the `aria-current="page"` attribute will be added to the link.

<div class="my-xl">
    <ks-menu-bar tagline="Menu Item">
        <ks-menu-row>
            <ks-menu-item>
                <a href="/components/menu-bar.html">Active Item</a>
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
<ks-menu-bar tagline="Inverted Menu" inverted>
    <ks-menu-row>
        <ks-menu-item>
            <a href="/components/menu-bar.html">Active Item</a>
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

## Accessibility

In order for assistive technologies to identify this as a navigational landmark, the menu uses the `role="navigation"` attribute.

For the menu bar colors, basic background and text color contrast is built-in to promote readability and meet the WCAG 2.0 standard, but when using the `inverted` color option, please test to ensure that sufficient color contrast standards are met.

The mobile menu toggle button uses the `aria-haspopup` and `aria-controls` attributes to provide assistive technologies with the information on how to interact with the menu as well as the `aria-expanded` attribute to indicate whether the menu is opened or closed.

The `<ks-menu-item>` also has a built-in feature for identifying if the current page is one of the menu items. If so, the menu item will be assigned the `active` class, but the link item will also the `aria-current="page"` attribute assigned to it to notify assistive technologies that they are currently on that page.

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
