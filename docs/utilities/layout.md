---
{
    "description": "Kickstand UI's layout utility classes consist of width and height utilities to quickly manage responsive layouts.",
    "meta": [
        {
            "property": "og:title",
            "content": "Layout Utilities - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/layout.png"
        },
        {
            "property": "og:description",
            "content": "Kickstand UI's layout utility classes consist of width and height utilities to quickly manage responsive layouts."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/layout.png"
        }
    ]
}
---

# Layout

Kickstand UI's layout utility classes consist of width and height utilities to quickly manage responsive layouts.

## Widths

<div class="my-xxl">
    <div class="my-md p-sm bg-light w-10">w-10</div>
    <div class="my-md p-sm bg-light w-20">w-20</div>
    <div class="my-md p-sm bg-light w-25">w-25</div>
    <div class="my-md p-sm bg-light w-30">w-30</div>
    <div class="my-md p-sm bg-light w-33">w-33</div>
    <div class="my-md p-sm bg-light w-40">w-40</div>
    <div class="my-md p-sm bg-light w-50">w-50</div>
    <div class="my-md p-sm bg-light w-60">w-60</div>
    <div class="my-md p-sm bg-light w-66">w-66</div>
    <div class="my-md p-sm bg-light w-70">w-70</div>
    <div class="my-md p-sm bg-light w-75">w-75</div>
    <div class="my-md p-sm bg-light w-80">w-80</div>
    <div class="my-md p-sm bg-light w-90">w-90</div>
    <div class="my-md p-sm bg-light w-100">w-100</div>
</div>

```html
<div class="w-10">w-10</div>
<div class="w-20">w-20</div>
<div class="w-25">w-25</div>
<div class="w-30">w-30</div>
<div class="w-33">w-33</div>
<div class="w-40">w-40</div>
<div class="w-50">w-50</div>
<div class="w-60">w-60</div>
<div class="w-66">w-66</div>
<div class="w-70">w-70</div>
<div class="w-75">w-75</div>
<div class="w-80">w-80</div>
<div class="w-90">w-90</div>
<div class="w-100">w-100</div>
```

## Heights

<div class="my-xl">
    <ks-row class="bg-light" style="height: 300px;">
        <ks-column class="mx-md p-sm bg-primary-light h-25">h-25</ks-column>
        <ks-column class="mx-md p-sm bg-primary-light h-50">h-50</ks-column>
        <ks-column class="mx-md p-sm bg-primary-light h-75">h-75</ks-column>
        <ks-column class="mx-md p-sm bg-primary-light h-100">h-100</ks-column>
    </ks-row>
</div>

```html
<ks-row class="bg-light" style="height: 300px;">
    <ks-column class="h-25">h-25</ks-column>
    <ks-column class="h-50">h-50</ks-column>
    <ks-column class="h-75">h-75</ks-column>
    <ks-column class="h-100">h-100</ks-column>
</ks-row>
```

## Responsive Classes

You can also change the layout based on the user's screen size using the responsive variations of each class. By prefixing the class with the desired screen size (`xxs`-`xl`), you can adjust the behavior.

<div class="my-xl">
    <div class="bg-light p-sm w-50 md:w-100">I will be 50% width until a medium screen.</div>
</div>

```html
<div class="w-50 md:w-100">I will be 50% width until a medium screen.</div>
```