# Images

The biggest advantage the Kickstand UI image component brings is the ability to lazy-load off-screen images and control when they get loaded. This example is above the fold so it will load right away because it is already above the fold, but the image at the bottom of this page will be lazy-loaded.

<div class="my-xl text-center">
    <ks-img
        src="/images/demo/superstitious.jpg"
        alt="Michael Scott"
        class="w-75"
        lazy
        />
</div>

```html
<ks-img
    src="/images/demo/superstitious.jpg"
    alt="Michael Scott"
    lazy
    />
```

## Properties

| Property    | Attribute   | Description                                                        | Type      | Default     |
| ----------- | ----------- | ------------------------------------------------------------------ | --------- | ----------- |
| `alt`       | `alt`       | alternate text for image                                           | `string`  | `undefined` |
| `lazy`      | `lazy`      | toggles whether an image will be lazy loaded                       | `boolean` | `undefined` |
| `src`       | `src`       | url to image                                                       | `string`  | `undefined` |
| `threshold` | `threshold` | distance from the bottom of the viewport a lazy image will display | `number`  | `300`       |

<div class="my-xl text-center">
    <ks-img
        src="/images/demo/michael_scott.jpg"
        alt="Michael Scott"
        class="w-50"
        lazy
        />
</div>

```html
<ks-img
    src="/images/demo/michael_scott.jpg"
    alt="Michael Scott"
    lazy
    />
```
