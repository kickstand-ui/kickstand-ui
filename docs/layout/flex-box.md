# Flex Layouts

There are a number of utility classes available for creating flex layouts. These classes are designed to create simple layouts without writing any custom styles. For more advanced layouts, check out Kickstand UI's [grid system](/layout/grid.html).

:::tip
For additional information on _flexbox_ check out this great guide on [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background). Also check out [Flexbox Zombies](https://geddski.teachable.com/p/flexbox-zombies) for a fun way to learn more about using flexbox.
:::

<div class="my-xl display-flex p-sm bg-primary">
    <div class="p-sm bg-light border border-dark">Item 1</div>
    <div class="p-sm bg-light border border-dark">Item 2</div>
    <div class="p-sm bg-light border border-dark">Item 3</div>
</div>

<div class="my-xl display-flex flex-column p-sm bg-primary" style="height: 250px;">
    <div class="p-sm bg-light border border-dark">Item 1</div>
    <div class="p-sm bg-light border border-dark">Item 2</div>
    <div class="p-sm bg-light border border-dark">Item 3</div>
</div>

```html
<!-- row -->
<div class="display-flex p-sm bg-primary">
    <div class="p-sm bg-light border border-dark">Item 1</div>
    <div class="p-sm bg-light border border-dark">Item 2</div>
    <div class="p-sm bg-light border border-dark">Item 3</div>
</div>

<!-- column -->
<div class="display-flex flex-column p-sm bg-primary" style="height: 250px;">
    <div class="p-sm bg-light border border-dark">Item 1</div>
    <div class="p-sm bg-light border border-dark">Item 2</div>
    <div class="p-sm bg-light border border-dark">Item 3</div>
</div>
```

## Spacing

### Space Between

<div class="my-xl display-flex space-between p-sm bg-primary">
    <div class="p-sm bg-light border border-dark">Item 1</div>
    <div class="p-sm bg-light border border-dark">Item 2</div>
    <div class="p-sm bg-light border border-dark">Item 3</div>
</div>

<div class="my-xl display-flex flex-column space-between p-sm bg-primary" style="height: 250px;">
    <div class="p-sm bg-light border border-dark">Item 1</div>
    <div class="p-sm bg-light border border-dark">Item 2</div>
    <div class="p-sm bg-light border border-dark">Item 3</div>
</div>

```html
<!-- row -->
<div class="display-flex p-sm bg-primary">
    ...
</div>

<!-- column -->
<div class="display-flex flex-column p-sm bg-primary" style="height: 250px;">
    ...
</div>
```

### Space Around

<div class="my-xl display-flex space-around p-sm bg-primary">
    <div class="p-sm bg-light border border-dark">Item 1</div>
    <div class="p-sm bg-light border border-dark">Item 2</div>
    <div class="p-sm bg-light border border-dark">Item 3</div>
</div>

<div class="my-xl display-flex flex-column space-around p-sm bg-primary" style="height: 250px;">
    <div class="p-sm bg-light border border-dark">Item 1</div>
    <div class="p-sm bg-light border border-dark">Item 2</div>
    <div class="p-sm bg-light border border-dark">Item 3</div>
</div>

```html
<!-- row -->
<div class="display-flex space-around p-sm bg-primary">
    ...
</div>

<!-- column -->
<div class="display-flex flex-column space-around p-sm bg-primary" style="height: 250px;">
    ...
</div>
```

### Space Evenly

<div class="my-xl display-flex space-evenly p-sm bg-primary">
    <div class="p-sm bg-light border border-dark">Item 1</div>
    <div class="p-sm bg-light border border-dark">Item 2</div>
    <div class="p-sm bg-light border border-dark">Item 3</div>
</div>

<div class="my-xl display-flex flex-column space-evenly p-sm bg-primary" style="height: 250px;">
    <div class="p-sm bg-light border border-dark">Item 1</div>
    <div class="p-sm bg-light border border-dark">Item 2</div>
    <div class="p-sm bg-light border border-dark">Item 3</div>
</div>

```html
<!-- row -->
<div class="display-flex space-evenly p-sm bg-primary">
    ...
</div>

<!-- column -->
<div class="display-flex flex-column space-evenly p-sm bg-primary" style="height: 250px;">
    ...
</div>
```

## Justification

### Justify Start

<div class="my-xl display-flex justify-start p-sm bg-primary">
    <div class="p-sm bg-light border border-dark">Item 1</div>
    <div class="p-sm bg-light border border-dark">Item 2</div>
    <div class="p-sm bg-light border border-dark">Item 3</div>
</div>

<div class="my-xl display-flex flex-column justify-start p-sm bg-primary" style="height: 250px;">
    <div class="p-sm bg-light border border-dark">Item 1</div>
    <div class="p-sm bg-light border border-dark">Item 2</div>
    <div class="p-sm bg-light border border-dark">Item 3</div>
</div>

```html
<!-- row -->
<div class="display-flex justify-start p-sm bg-primary">
    ...
</div>

<!-- column -->
<div class="display-flex flex-column justify-start p-sm bg-primary" style="height: 250px;">
    ...
</div>
```

### Justify Center

<div class="my-xl display-flex justify-center p-sm bg-primary">
    <div class="p-sm bg-light border border-dark">Item 1</div>
    <div class="p-sm bg-light border border-dark">Item 2</div>
    <div class="p-sm bg-light border border-dark">Item 3</div>
</div>

<div class="my-xl display-flex flex-column justify-center p-sm bg-primary" style="height: 250px;">
    <div class="p-sm bg-light border border-dark">Item 1</div>
    <div class="p-sm bg-light border border-dark">Item 2</div>
    <div class="p-sm bg-light border border-dark">Item 3</div>
</div>

```html
<!-- row -->
<div class="display-flex justify-center p-sm bg-primary">
    ...
</div>

<!-- column -->
<div class="display-flex flex-column justify-center p-sm bg-primary" style="height: 250px;">
    ...
</div>
```

### Justify End

<div class="my-xl display-flex justify-end p-sm bg-primary">
    <div class="p-sm bg-light border border-dark">Item 1</div>
    <div class="p-sm bg-light border border-dark">Item 2</div>
    <div class="p-sm bg-light border border-dark">Item 3</div>
</div>

<div class="my-xl display-flex flex-column justify-end p-sm bg-primary" style="height: 250px;">
    <div class="p-sm bg-light border border-dark">Item 1</div>
    <div class="p-sm bg-light border border-dark">Item 2</div>
    <div class="p-sm bg-light border border-dark">Item 3</div>
</div>

```html
<!-- row -->
<div class="display-flex justify-end p-sm bg-primary">
    ...
</div>

<!-- column -->
<div class="display-flex flex-column justify-end p-sm bg-primary" style="height: 250px;">
    ...
</div>
```

## Alignment

### Align Start

<div class="my-xl display-flex align-start p-sm bg-primary" style="height: 100px;">
    <div class="p-sm bg-light border border-dark">Item 1</div>
    <div class="p-sm bg-light border border-dark">Item 2</div>
    <div class="p-sm bg-light border border-dark">Item 3</div>
</div>

<div class="my-xl display-flex flex-column align-start p-sm bg-primary" style="height: 150px;">
    <div class="p-sm bg-light border border-dark">Item 1</div>
    <div class="p-sm bg-light border border-dark">Item 2</div>
    <div class="p-sm bg-light border border-dark">Item 3</div>
</div>

```html
<!-- row -->
<div class="display-flex align-start p-sm bg-primary" style="height: 100px;">
    ...
</div>

<!-- column -->
<div class="display-flex flex-column align-start p-sm bg-primary" style="height: 150px;">
    ...
</div>
```

### Align Center

<div class="my-xl display-flex align-center p-sm bg-primary" style="height: 100px;">
    <div class="p-sm bg-light border border-dark">Item 1</div>
    <div class="p-sm bg-light border border-dark">Item 2</div>
    <div class="p-sm bg-light border border-dark">Item 3</div>
</div>

<div class="my-xl display-flex flex-column align-center p-sm bg-primary" style="height: 150px;">
    <div class="p-sm bg-light border border-dark">Item 1</div>
    <div class="p-sm bg-light border border-dark">Item 2</div>
    <div class="p-sm bg-light border border-dark">Item 3</div>
</div>

```html
<!-- row -->
<div class="display-flex align-center p-sm bg-primary" style="height: 100px;">
    ...
</div>

<!-- column -->
<div class="display-flex flex-column align-center p-sm bg-primary" style="height: 150px;">
    ...
</div>
```

### Align End

<div class="my-xl display-flex align-end p-sm bg-primary" style="height: 100px;">
    <div class="p-sm bg-light border border-dark">Item 1</div>
    <div class="p-sm bg-light border border-dark">Item 2</div>
    <div class="p-sm bg-light border border-dark">Item 3</div>
</div>

<div class="my-xl display-flex flex-column align-end p-sm bg-primary" style="height: 150px;">
    <div class="p-sm bg-light border border-dark">Item 1</div>
    <div class="p-sm bg-light border border-dark">Item 2</div>
    <div class="p-sm bg-light border border-dark">Item 3</div>
</div>

```html
<!-- row -->
<div class="display-flex align-end p-sm bg-primary" style="height: 100px;">
    ...
</div>

<!-- column -->
<div class="display-flex flex-column align-end p-sm bg-primary" style="height: 150px;">
    ...
</div>
```

### Align Stretch

<div class="my-xl display-flex align-stretch p-sm bg-primary" style="height: 100px;">
    <div class="p-sm bg-light border border-dark">Item 1</div>
    <div class="p-sm bg-light border border-dark">Item 2</div>
    <div class="p-sm bg-light border border-dark">Item 3</div>
</div>

<div class="my-xl display-flex flex-column align-stretch p-sm bg-primary" style="height: 150px;">
    <div class="p-sm bg-light border border-dark">Item 1</div>
    <div class="p-sm bg-light border border-dark">Item 2</div>
    <div class="p-sm bg-light border border-dark">Item 3</div>
</div>

```html
<!-- row -->
<div class="display-flex align-stretch p-sm bg-primary" style="height: 100px;">
    ...
</div>

<!-- column -->
<div class="display-flex flex-column align-stretch p-sm bg-primary" style="height: 150px;">
    ...
</div>
```

## Responsive

All of the flexbox utility classes have responsive capabilities as well. If you prefix any of these classes with a responsive identifier (`xxs`-`xl`), you can modify the layout based on the user's screen size.

<div class="my-xl display-flex space-between align-start md:flex-column md:justify-start p-sm bg-primary" style="height: 250px;">
    <div class="p-sm bg-light border border-dark">Item 1</div>
    <div class="p-sm bg-light border border-dark">Item 2</div>
    <div class="p-sm bg-light border border-dark">Item 3</div>
</div>

```html
<div class="display-flex space-between md:flex-column md:justify-start" style="height: 250px;">
    ...
</div>
```

## Available Classes

| Class                 | CSS Rule                            |
| --------------------- | ----------------------------------- |
| `display-flex`        | `display: flex;`                    |
| `flex-wrap`           | `flex-wrap: wrap;`                  |
| `flex-nowrap`         | `flex-wrap: nowrap;`                |
| `flex-row`            | `flex-direction: row;`              |
| `flex-row-reverse`    | `flex-direction: row-reverse;`      |
| `flex-column`         | `flex-direction: column;`           |
| `flex-column-reverse` | `flex-direction: column-reverse;`   |
| `space-between`       | `justify-content: space-between;`   |
| `space-around`        | `justify-content: space-around;`    |
| `space-evenly`        | `justify-content: space-evenly;`    |
| `justify-center`      | `justify-content: center;`          |
| `justify-start`       | `justify-content: flex-start;`      |
| `justify-end`         | `justify-content: flex-end;`        |
| `align-start`         | `align-items: flex-start;`          |
| `align-end`           | `align-items: flex-end;`            |
| `align-center`        | `align-items: center;`              |
| `align-stretch`       | `align-items: stretch;`             |
