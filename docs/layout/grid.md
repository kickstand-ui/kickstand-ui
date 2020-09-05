---
{
    "description": "Kickstand UI's grid provides a responsive layout system for your user interfaces.",
    "meta": [
        {
            "property": "og:title",
            "content": "Grid Layout - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/grid.png"
        },
        {
            "property": "og:description",
            "content": "Kickstand UI's grid provides a responsive layout system for your user interfaces."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/grid.png"
        }
    ]
}
---


# Grid

Kickstand UI's grid provides a responsive layout system for your user interfaces.

<div class="my-xl">
    <ks-row>
        <ks-column>
            <div class="bg-light border border-light-darker">Column 1</div>
        </ks-column>
        <ks-column>
            <div class="bg-light border border-light-darker">Column 2</div>
        </ks-column>
        <ks-column>
            <div class="bg-light border border-light-darker">Column 3</div>
        </ks-column>
    </ks-row>
</div>

```html
<ks-row>
    <ks-column>Column 1</ks-column>
    <ks-column>Column 2</ks-column>
    <ks-column>Column 3</ks-column>
</ks-row>
```

## Column Sizes

The default behavior is that each of the columns will be evenly distributed across the row. If you would like to change the width you can do so using classes on the columns.

<div class="my-xl">
    <ks-row>
        <ks-column class="col-6">
            <div class="bg-light border border-light-darker">col-6</div>
        </ks-column>
        <ks-column>
            <div class="bg-light border border-light-darker">col-3 (automatically)</div>
        </ks-column>
        <ks-column>
            <div class="bg-light border border-light-darker">col-3 (automatically)</div>
        </ks-column>
    </ks-row>
</div>

```html
<ks-row>
    <ks-column class="col-6">
        <span>col-6</span>
    </ks-column>
    <ks-column>
        <span>col-3 (automatically)</span>
    </ks-column>
    <ks-column>
        <span>col-3 (automatically)</span>
    </ks-column>
</ks-row>
```

The grid is based on a 12 column system so column sizes can be set using a class prefixed with `col-` and the size of the column you would like. `1` would be the smallest size and `12` would be the full width.

<div class="my-xl">
    <ks-row>
        <ks-column class="col-2">
            <div class="bg-light border border-light-darker">col-2</div>
        </ks-column>
        <ks-column class="col-7">
            <div class="bg-light border border-light-darker">col-7</div>
        </ks-column>
        <ks-column class="col-3">
            <div class="bg-light border border-light-darker">col-3</div>
        </ks-column>
    </ks-row>
</div>

```html
<ks-row>
    <ks-column class="col-2">
        col-2
    </ks-column>
    <ks-column class="col-7">
        col-7
    </ks-column>
    <ks-column class="col-3">
        col-3
    </ks-column>
</ks-row>
```

## Responsiveness

Based on the user's screen size you may want the layout to display differently. You can control it by prefixing the column size with the targeted screen size.

<div class="my-xl">
    <ks-row>
        <ks-column class="col-2 md:col-6 sm:col-12">
            <div class="bg-light border border-light-darker">
                col-2<br>
                md:col-6<br>
                sm:col-12
            </div>
        </ks-column>
        <ks-column class="col-7 md:col-6 sm:col-12">
            <div class="bg-light border border-light-darker">
                col-7<br>
                md:col-6<br>
                sm:col-12
            </div>
        </ks-column>
        <ks-column class="col-3 md:col-12">
            <div class="bg-light border border-light-darker">
                col-3<br>
                md:col-12<br><br>
            </div>
        </ks-column>
    </ks-row>
</div>

```html
<ks-row>
    <ks-column class="col-2 md:col-6 sm:col-12">
        col-2
        md:col-6
        sm:col-12
    </ks-column>
    <ks-column class="col-7 md:col-6 sm:col-12">
        col-7
        md:col-6
        sm:col-12
    </ks-column>
    <ks-column class="col-3 md:col-12">
        col-3
        md:col-12
    </ks-column>
</ks-row>
```

## Alignment

There are two ways to vertically position content within the grid system - on the row and on the column. They each use the same syntax, but give you the flexibility of how content gets positioned.

<div class="my-xl">
    <ks-row position="end" style="height:150px;">
        <ks-column>
            <div class="bg-light border border-light-darker">I do what the row says</div>
        </ks-column>
        <ks-column>
            <div class="bg-light border border-light-darker">I do what the row says</div>
        </ks-column>
        <ks-column position="start">
            <div class="bg-light border border-light-darker">I do what I want!</div>
        </ks-column>
    </ks-row>
</div>

```html
<ks-row position="end" style="height:150px;">
    <ks-column>
        I do what the row says
    </ks-column>
    <ks-column>
        I do what the row says
    </ks-column>
    <ks-column position="start">
        I do what I want!
    </ks-column>
</ks-row>
```

### Options

<div class="my-xl">
    <ks-row style="height:150px;">
        <ks-column position="start">
            <div class="bg-light border border-light-darker">Start</div>
        </ks-column>
        <ks-column position="center">
            <div class="bg-light border border-light-darker">Center</div>
        </ks-column>
        <ks-column position="end">
            <div class="bg-light border border-light-darker">End</div>
        </ks-column>
        <ks-column position="stretch">
            <div class="bg-light border border-light-darker h-100">Stretch</div>
        </ks-column>
    </ks-row>
</div>

```html
<ks-row position="end" style="height:150px;">
    <ks-column position="start">
        Start
    </ks-column>
    <ks-column position="center">
        Center
    </ks-column>
    <ks-column position="end">
        End
    </ks-column>
    <ks-column position="stretch">
        Stretch
    </ks-column>
</ks-row>
```

## Gutters

You have the ability to control the width of the gutters. The sizes are based on the [$spacing-sizes](/theming/design-tokens.html#spacing) values (`none`, `xxxs`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, and `xxxl`).

<div class="my-xl">
    <ks-row gutter="xl">
        <ks-column>
            <div class="bg-light border border-light-darker">Column 1</div>
        </ks-column>
        <ks-column>
            <div class="bg-light border border-light-darker">Column 2</div>
        </ks-column>
        <ks-column>
            <div class="bg-light border border-light-darker">Column 3</div>
        </ks-column>
    </ks-row>
</div>

```html
<ks-row gutter="xl">
    <ks-column>
        Column 1
    </ks-column>
    <ks-column>
        Column 2
    </ks-column>
    <ks-column>
        Column 3
    </ks-column>
</ks-row>
```

### No Gutters

<div class="my-xl">
    <ks-row gutter="none">
        <ks-column>
            <div class="bg-light border border-light-darker">Column 1</div>
        </ks-column>
        <ks-column>
            <div class="bg-light border border-light-darker">Column 2</div>
        </ks-column>
        <ks-column>
            <div class="bg-light border border-light-darker">Column 3</div>
        </ks-column>
    </ks-row>
</div>

```html
<ks-row gutter="none">
    <ks-column>
        Column 1
    </ks-column>
    <ks-column>
        Column 2
    </ks-column>
    <ks-column>
        Column 3
    </ks-column>
</ks-row>
```


## Properties

### `<ks-row>`

| Property   | Attribute   | Description                  | Type                                         | Default     |
| ---------- | ----------- | ---------------------------- | -------------------------------------------- | ----------- |
| `position` | `position`  | vertically aligns content    | `"center"`, `"end"`, `"start"`, or `stretch` | `'start'`   |
| `gutter`   | `gutter`   | controls the space between columns | `none`, `xxxs`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, or `xxxl`                                   | `sm` |

### `<ks-column>`

| Property   | Attribute  | Description               | Type                                         | Default   |
| ---------- | ---------- | ------------------------- | -------------------------------------------- | --------- |
| `position` | `position` | vertically aligns content | `"center"`, `"end"`, `"start"`, or `stretch` | `'start'` |
