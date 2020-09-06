---
{
    "description": "Kickstand UI's drop-down menu is a great way to display a list of contextual actions, links, or content.",
    "meta": [
        {
            "property": "og:title",
            "content": "Drop-Down Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/dropdown.png"
        },
        {
            "property": "og:description",
            "content": "Kickstand UI's drop-down menu is a great way to display a list of contextual actions, links, or content."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/dropdown.png"
        }
    ]
}
---

# Drop-Down

Kickstand UI's drop-down menu is a great way to display a list of contextual actions, links, or content.

<div class="my-xl">
    <ks-dropdown text="Account">
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
</div>

```html
<ks-dropdown text="Account">
    <ks-dropdown-item prevent-close>
        <span>Welcome, Agent Michael Scarn!</span>
    </ks-dropdown-item>
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
```

## Position

Depending on where the drop-down is placed on the page, you may want to have the portion align differently to ensure visibility. Having the menus align to the `left` or `right` should provide you with that flexibility.

<div class="my-xxl display-flex space-between">
    <ks-dropdown text="Left Aligned" position="left">
        <ks-dropdown-item prevent-close>
            <span>Welcome, Agent Michael Scarn!</span>
        </ks-dropdown-item>
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
    <ks-dropdown text="Right Aligned" position="right">
        <ks-dropdown-item prevent-close>
            <span>Welcome, Agent Michael Scarn!</span>
        </ks-dropdown-item>
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
</div>

```html
<div class="display-flex space-between">
    <ks-dropdown text="Left Aligned" position="left">
        ...
    </ks-dropdown>
    <ks-dropdown text="Right Aligned" position="right">
        ...
    </ks-dropdown>
</div>
```

## Mega Menu

Drop-down menus are great for displaying a list of available actions, however mega menus are a popular way to provide collapsible rich-text content. They are popular to use within a main menu to provide media-rich interactions, but their use can extend well beyond that. By default, the mega menu will expand the full width of the viewport.

<div class="my-xl">
    <ks-dropdown text="Catalogs" mega-menu>
        <ks-row class="align-center">
            <ks-column>
                <a href="#" class="text-center w-100">
                    <img class="w-50" src="/images/demo/dunder_mifflin_logo.jpg" alt="dunder mifflin logo" />
                </a>
            </ks-column>
            <ks-column>
                <a href="#" class="text-center w-100">
                    <img class="w-50" src="/images/demo/sabre-corp_logo.jpg" alt="sabre logo" />
                </a>
            </ks-column>
            <ks-column>
                <a href="#" class="text-xxl text-center w-100">The Pyramid</a>
            </ks-column>
        </ks-row>
    </ks-dropdown>
</div>

```html
<ks-dropdown text="Catalogs" mega-menu>
    <!-- Kickstand UI Grid -->
    <ks-row class="align-center">
        <ks-column>
            <a href="#" class="text-center">
                <img class="w-50" src="/images/demo/dunder_mifflin_logo.jpg" alt="dunder mifflin logo" />
            </a>
        </ks-column>
        <ks-column>
            <a href="#" class="text-center">
                <img class="w-50" src="/images/demo/sabre-corp_logo.jpg" alt="sabre logo" />
            </a>
        </ks-column>
        <ks-column>
            <a href="#" class="text-xxl text-center">The Pyramid</a>
        </ks-column>
    </ks-row>
</ks-dropdown>
```

## Prevent Close

The `prevent-close` is the only custom property on the `<ks-dropdown-item>` element. By default, when the element or any of its contents are clicked, the drop-down will automatically close. Because `<ks-dropdown-item>` elements can contain more than just links or buttons (such as forms), this may not be the desired behavior. To prevent this from happening, set `prevent-close` to `true`.  Users will still be able to use the `esc` key or click outside of the drop-down to close the menu but it won't close when clicking within the drop-down item.

<div class="my-xl">
    <ks-dropdown text="Prevent Close">
        <ks-dropdown-item>
            <ks-button color="secondary">I will close when you click me!</ks-button>
        </ks-dropdown-item>
        <ks-dropdown-item prevent-close>
            <ks-button>I will not close when you click me!</ks-button>
        </ks-dropdown-item>
    </ks-dropdown>
</div>

```html
<ks-dropdown text="Prevent Close">
    <ks-dropdown-item>
        <ks-button color="secondary">I will close when you click me!</ks-button>
    </ks-dropdown-item>
    <ks-dropdown-item prevent-close>
        <ks-button>I will not close when you click me!</ks-button>
    </ks-dropdown-item>
</ks-dropdown>
```

### `.prevent-dropdown-close`

There may be an occasion where you need prevent the drop-down from closing when an element _outside_ of the drop-down is clicked. Some custom `<select>` or autocomplete inputs will add the options overlay to the bottom of the page and position them relatively to the input when they are activated. Because these options are outside of the drop-down, it may cause the drop-down to prematurely close before the user has completed a their task. To prevent this from happening, you can add the `prevent-dropdown-close` class to the element to prevent the drop-down from closing.

<div class="my-xl display-flex space-between">
    <ks-dropdown text="Drop-Down">
        <ks-dropdown-item>
            <ks-button display="clear">Drop-Down Option 1</ks-button>
        </ks-dropdown-item>
        <ks-dropdown-item>
            <ks-button display="clear">Drop-Down Option 2</ks-button>
        </ks-dropdown-item>
        <ks-dropdown-item>
            <ks-button display="clear">Drop-Down Option 3</ks-button>
        </ks-dropdown-item>
    </ks-dropdown>
    <div class="p-xl bg-light prevent-dropdown-close">
        Click here and the drop-down won't close
    </div>
</div>

```html
<div class="my-xl display-flex space-between">
    <ks-dropdown text="Drop-Down">
        ...
    </ks-dropdown>
    <div class="p-xl bg-light prevent-dropdown-close">
        Click here and the drop-down won't close.
    </div>
</div>
```

## Accessibility

The dropdown button itself has a number of accessibility features to provide users with the information they need to interact with the component such as `aria-haspopup` (to identify that the control has hidden content), `aria-expanded` (to signify if the dropdown content is displayed), and `aria-controls` (to associate the button with the dropdown content).

Once the dropdown is expanded the focus will be set on the first selectable element. The dropdown can also be close using the `esc` key. If it is used, the focus will be set back on the dropdown button.

If a standard dropdown is used (not a mega-menu), then the dropdown items have the attribute `role="listitem"` so that the user knows they are presented with a list of options.

## Properties

### `<ks-dropdown>`

| Property        | Attribute        | Type              | Default     | Description |
| --------------- | ---------------- | ----------------- | ----------- | ----------- |
| `text`          | `text`           | `string`          | `undefined` | the drop-down button text            |
| `position`      | `position`       | `left` or `right` | `left`      | toggles the alignment of the drop-down menu            |
| `icon`          | `icon`           | `string`          | `undefined` | adds an icon to the drop-down button            |
| `color`         | `color`          | `"danger"`, `"dark"`, `"info"`, `"light"`, `"primary"`, `"secondary"`, `"success"`, or `"warning"`         | `undefined` | controls the color of the drop-down button            |
| `display`       | `display`        | `"clear"`, `"hollow"`, `"link"`, or `"solid"` | `'solid'` | controls how the drop-down button will display            |
| `hideText`      | `hide-text`      | `boolean`          | `false` | toggles drop-down button visibility (if `true`, it will still be visible to screen readers)            |
| `hideIndicator` | `hide-indicator` | `boolean`          | `false` | toggles whether the drop-down button indicator (chevron) is displayed            |
| `megaMenu`      | `mega-menu`      | `boolean`          | `false` | controls whether the menu displays as a mega menu |
| `collapse`      | `collapse`       | `xxs`, `xs`, `sm`, `md`, `lg`, or `xl`         | `xs` | controls when the dropdown contents will adjust to fit the viewport for smaller screen sizes |

#### Methods

##### `close() => Promise<void>`

If you are using the `prevent-close` property on a drop-down item, you may want to close the menu when a specific event occurs. This is very useful for drop-downs with embedded forms.

### `<ks-dropdown-item>`

| Property       | Attribute       | Type      | Default | Description |
| -------------- | --------------- | --------- | ------- | ----------- |
| `preventClose` | `prevent-close` | `boolean` | `false` | prevents the drop-down menu from closing if the contents are clicked            |
