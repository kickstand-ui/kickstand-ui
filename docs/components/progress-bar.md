---
{
    "description": "The Kickstand UI progress bar can be used to show a user how far along they are in a process.",
    "meta": [
        {
            "property": "og:title",
            "content": "Progress Bar Component - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/progress-bar.png"
        },
        {
            "property": "og:description",
            "content": "The Kickstand UI progress bar can be used to show a user how far along they are in a process."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/progress-bar.png"
        }
    ]
}
---

# Progress Bar

The Kickstand UI progress bar can be used to show a user how far along they are in a process.

<div class="my-xl">
    <ks-progress-bar value="25" />
</div>

```html
<ks-progress-bar value="25" />
```

## Labeling

### Description

<div class="my-xl">
    <ks-progress-bar description="Uploading files..." value="25" />
</div>

```html
<ks-progress-bar description="Uploading files..." value="25" />
```

### Progress Label

<div class="my-xl">
    <ks-progress-bar progress-label="Amount completed" value="25" />
</div>

```html
<ks-progress-bar progress-label="Amount completed" value="25" />
```

:::tip Note
Both the `description` and `progress-label` can be hidden using the `hide-description` and `hide-progress-label` properties.
:::

## Sizes

You can control the size of the actual progress bar using the `size` property.

<div class="my-xl">
    <ks-progress-bar
        description="'xs' Progress Bar"
        size="xs"
        value="25"
        /><br>
    <ks-progress-bar
        description="'sm' Progress Bar"
        size="sm"
        value="25"
        /><br>
    <ks-progress-bar
        description="'md' Progress Bar"
        size="md"
        value="25"
        /><br>
    <ks-progress-bar
        description="'lg' Progress Bar"
        size="lg"
        value="25"
        />
</div>

```html
<ks-progress-bar
    description="'xs' Progress Bar"
    size="xs"
    value="25"
    />
<ks-progress-bar
    description="'sm' Progress Bar"
    size="sm"
    value="25"
    />
<ks-progress-bar
    description="'md' Progress Bar"
    size="md"
    value="25"
    />
<ks-progress-bar
    description="'lg' Progress Bar"
    size="lg"
    value="25"
    />
```

## Colors

You can control the color of the progress bar to help convey statuses.

<div class="my-xl">
    <ks-progress-bar
        description="Primary Progress Bar"
        color="primary"
        value="25"
        /><br>
    <ks-progress-bar
        description="Secondary Progress Bar"
        color="secondary"
        value="25"
        /><br>
    <ks-progress-bar
        description="Light Progress Bar"
        color="light"
        value="25"
        /><br>
    <ks-progress-bar
        description="Dark Progress Bar"
        color="dark"
        value="25"
        /><br>
    <ks-progress-bar
        description="Info Progress Bar"
        color="info"
        value="25"
        /><br>
    <ks-progress-bar
        description="Warning Progress Bar"
        color="warning"
        value="25"
        /><br>
    <ks-progress-bar
        description="Danger Progress Bar"
        color="danger"
        value="25"
        />
</div>

```html
<ks-progress-bar
    description="XS Progress Bar"
    size="xs"
    value="25"
    />
<ks-progress-bar
    description="SM Progress Bar"
    size="sm"
    value="25"
    />
<ks-progress-bar
    description="md Progress Bar"
    size="md"
    value="25"
    />
<ks-progress-bar
    description="LG Progress Bar"
    size="lg"
    value="25"
    />
```

## Accessibility

The progress bar component has several attributes added to it to provide assistive technologies the necessary information to give the user relevant context:

- The component uses `role="progressbar"` to indicate that the user's request has been received and the application is making progress toward completing the requested action.
- The attributes `aria-valuemin`, `aria-valuemax`, and `aria-valuenow` have been added to provide the context of their progress.

## Properties

| Property            | Attribute             | Description | Type                                                                                                      | Default        |
| ------------------- | --------------------- | ----------- | --------------------------------------------------------------------------------------------------------- | -------------- |
| `description`       | `description`         | The label for the progress bar            | `string`                                                                                                  | `'Loading...'` |
| `hideDescription`   | `hide-description`    | Toggles the the visibility of the description            | `boolean`                                                                                                 | `undefined`    |
| `hideProgressLabel` | `hide-progress-label` | Toggles the the visibility of the progress label and percentage            | `boolean`                                                                                                 | `undefined`    |
| `progressLabel`     | `progress-label`      | The label that accompanies the progress percentage            | `string`                                                                                                  | `'Progress'`   |
| `size`              | `size`                | The size of the actual progress bar            | `'xs'`, `'sm'`, `'md'`, or `'lg'` | `'md'`         |
| `color`              | `color`                | The color or the progress bar            | `"danger"`, `"dark"`, `"info"`, `"light"`, `"link"`, `"primary"`, `"secondary"`, `"success"`, or `"warning"` | `'primary'`    |
| `value`             | `value`               | The amount complete (between 0 and 100)           | `number` | `0`            |
