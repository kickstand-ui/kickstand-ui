# Grid

Kickstand UI's grid provides a responsive layout system for you user interfaces.

<div class="my-xl">
    <ks-row>
        <ks-column class="bg-light border border-light-darker">
            Column 1
        </ks-column>
        <ks-column class="bg-light border border-light-darker">
            Column 2
        </ks-column>
        <ks-column class="bg-light border border-light-darker">
            Column 3
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

:::tip Note
You may notice that the grid above is wider than the rest of the content. That is because the row has a negative margin. This is for 2 reasons:

1. To ensure that the content inside and outside the grid are still positioned properly.
2. To prevent the gutters (spacing between columns) from causing alignment issues when your layouts take advantage of the responsive features

Don't worry, your user's won't even know they are there. You see it now because there is a background color and border to the grid.
:::

## Column Sizes

The default behavior is that each of the columns will be evenly distributed across the row. If you would like to change the width you can do so using classes on the columns.

<div class="my-xl">
    <ks-row>
        <ks-column class="bg-light border border-light-darker col-6">
            <span>col-6</span>
        </ks-column>
        <ks-column class="bg-light border border-light-darker">
            <span>col-3 (automatically)</span>
        </ks-column>
        <ks-column class="bg-light border border-light-darker">
            <span>col-3 (automatically)</span>
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
        <ks-column class="bg-light border border-light-darker col-2">
            col-2
        </ks-column>
        <ks-column class="bg-light border border-light-darker col-7">
            col-7
        </ks-column>
        <ks-column class="bg-light border border-light-darker col-3">
            col-3
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
        <ks-column class="bg-light border border-light-darker col-2 md:col-6 sm:col-12">
            col-2<br>
            md:col-6<br>
            sm:col-12
        </ks-column>
        <ks-column class="bg-light border border-light-darker col-7 md:col-6 sm:col-12">
            col-7<br>
            md:col-6<br>
            sm:col-12
        </ks-column>
        <ks-column class="bg-light border border-light-darker col-3 md:col-12">
            col-3<br>
            md:col-12
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
    <ks-row position="end" style="height:200px;">
        <ks-column class="bg-light border border-light-darker">
            I do what the row says
        </ks-column>
        <ks-column class="bg-light border border-light-darker">
            I do what the row says
        </ks-column>
        <ks-column class="bg-light border border-light-darker" position="start">
            I do what I want!
        </ks-column>
    </ks-row>
</div>

```html
<ks-row position="end" style="height:200px;">
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
    <ks-row style="height:200px;">
        <ks-column position="start" class="bg-light border border-light-darker">
            Start
        </ks-column>
        <ks-column position="center" class="bg-light border border-light-darker">
            Center
        </ks-column>
        <ks-column position="end" class="bg-light border border-light-darker">
            End
        </ks-column>
        <ks-column position="stretch" class="bg-light border border-light-darker">
            Stretch
        </ks-column>
    </ks-row>
</div>

```html
<ks-row position="end" style="height:200px;">
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

## No Gutters

You have the ability to remove gutters from the layout using the `no-gutters` property. If `true` then, the left and right padding in the columns will be removed.

<div class="my-xl">
    <ks-row no-gutter>
        <ks-column class="bg-light border border-light-darker">
            Column 1
        </ks-column>
        <ks-column class="bg-light border border-light-darker">
            Column 2
        </ks-column>
        <ks-column class="bg-light border border-light-darker">
            Column 3
        </ks-column>
    </ks-row>
</div>

```html
<ks-row no-gutter>
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

| Property   | Attribute   | Description | Type                           | Default     |
| ---------- | ----------- | ----------- | ------------------------------ | ----------- |
| `position` | `position`  | vertically aligns content            | `"center"`, `"end"`, `"start"`, or `stretch` | `'start'`   |
| `noGutter` | `no-gutter` | removes patting from columns            | `boolean`                      | `undefined` |

### `<ks-column>`

| Property   | Attribute   | Description | Type                           | Default     |
| ---------- | ----------- | ----------- | ------------------------------ | ----------- |
| `position` | `position`  | vertically aligns content            | `"center"`, `"end"`, `"start"`, or `stretch` | `'start'`   |
