# Design Tokens

Design tokens are a set of values that you reuse throughout your application to create visual consistency throughout your applications. As you will see, there are many different types of design tokens available including typography, spacing units, and color.

## Containers

This is the `max-width` of your main content. You can also use the `content-width` utility class on elements to maintain consistency.

```scss
$content-width: 660px !default;
```

## Fonts

### Base Size

The will be the default base font size applied to the `body` element.

```scss
$font-size-base: 16px !default;
```

### Font Families

There are 3 default font types set up to start out with (`accent`, `base`, and `monospace`). This should usually be more than enough for a website or application. If you feel like you need more font families in your project than this, feel free to add them, but do so carefully. Having all of those fancy fonts on your site may look nice, but they come at a cost (both for performance and usability).

For performance reasons, the default values that have been set for these variables are system fonts. For further reading on this, check out Marcin Wichary's excellent [Smashing Magazine article](https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/).

| Type | Description |
|---|---|
| Accent | This is primarily used for things like headings or blockquotes. This should help those pieces of your design stand out from the rest of your content.
| Base | This is the default font for your site. If it is not text that should stand out more than other text, it should be using this font. This font should be simple and easy to read at both large and small font sizes. |
| Monospace | If you are creating a tutorial site that has code snippets or special call-out text, this font is an excellent way to help highlight those parts of your application. |

```scss
$fonts: (
    accent: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    base: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    monospace: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
) !default;
```

#### Usage

```scss
body {
    @include font(base);
}
```

### Font Sizes

The default font sizes are `xxs-xxl`. They use `rem`'s for the unit of measure. This is to provide proper scaling when the user's browser default font size is increased or they zoom in and out or adjust their default font size.

```scss
$font-sizes: (
    xxs: 0.75rem, // 12px
    xs: 0.875rem, // 14px
    sm: 1rem,     // 16px
    md: 1.25rem,  // 30px
    lg: 1.5rem,   // 24px
    xl: 2rem,     // 32px
    xxl: 3rem     // 48px
) !default;
```

## Spacing

### Line Height

The `$line-height-base` is a way to globally set the line-height (space between each line of text) property. For readability purposes, it has been defaulted to `1.5`. Mozilla (MDN) provides some excellent documentation on [line-height and how to use it](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height).

```scss
$line-height-base: 1.5 !default;
```

### Sizes

The spacing variables control things like padding and margins for your site. At first you may think that globally restricting these properties is extremely limiting, but it actually makes development so much simpler when you're not always pixel counting or doing math to get things to line up properly. It's also nice to know that because they are using `rem`'s for their units, it will scale with your other content as users zoom or adjust their font sizes.

```scss
$spacing-sizes: (
    auto: auto,
    none: 0,
    xxxs: 0.0625rem, // 1px
    xxs: 0.125rem,   // 2px
    xs: 0.25rem,     // 4px
    sm: 0.5rem,      // 8px
    md: 0.75rem,     // 12px
    lg: 1rem,        // 16px
    xl: 1.25rem,     // 20px
    xxl: 1.5rem,     // 24px
    xxxl: 2rem       // 32px
) !default;
```

:::tip Note
For accessibility reasons, it is usually not a good idea to go below `16px` for your regular font size (for most font families), so the `xxs` and `xs` font sizes should be used sparingly. If you are setting up heading styles, you may be happy to know that the `xs-xxl` match very nicely with the `h6-h1` tags, respectively.
:::

### Usage

You can take advantage of these values both as [utility classes](/utilities/spacing.html) and as [mixins](https://projectclarion.com/framework/documentation/mixins/spacing.html).

## Colors

### Theme Colors

Colors are easily one of the most complex things about your site. Trying to capture your brand and make sure it is well represented in your design, you are using the right colors to convey the right message (because colors have meaning), and your site is accessible to all users are just some of the considerations that need to be made when choosing colors.

```scss
$theme-colors: (
    'primary': #2c5374,
    'secondary': #ac3f00,
    'success': #669c1f,
    'info': #509BCE,
    'warning': #e1a900,
    'danger': #c70000,
    'light': #e5e5e5,
    'dark': #494949
) !default;
```

#### Usage

You can take advantage of these values both as [utility classes](/utilities/colors.html) and as [mixins and functions](https://projectclarion.com/framework/documentation/functions/colors.html).

### Variation

The color variation value determines the difference between the variations of each color (`lighter`, `light`, `dark`, and `darker`). If you would like the lights to be lighter and the darks to be darker, increase that number or do the opposite to have the reverse effect.

```scss
$color-variation: 8% !default;
```

## Media Queries

These values are used to help you make your site responsive. Having consistency in these values will help provide a sense of stability in your site and simplify your development experience.

These are also the values used to create the responsive utility classes.

```scss
$media-queries: (
    xxs: 20rem,  // 320px
    xs: 30rem,   // 480px
    sm: 48rem,   // 768px
    md: 62rem,   // 992px
    lg: 75rem,   // 1200px
    xl: 90rem,   // 1440px
    light-mode: light,
    dark-mode: dark,
    print: print
) !default;
```

#### Usage

In your style sheets:

```scss
.my-component {
    width: 25%;

    @include mq(md) {
        width: 50%;
    }

    @include mq(xs) {
        width: 100%;
    }

    @include mq(print) {
        display: none;
    }
}
```

In your markup:

```html
<div class="my-component w-25 md:w-50 xs:w-100 print:hide">
    ...
</div>
```

## Z-Index

This is usually on of the most obvious and yet most comical implementations to talk about. When asking developers how they handle z-indexes in their application, the most common answer is to set the value to `9999`. If that doesn't work, continue adding a `9` on the end until it does. Having a repeatable pattern and process for this should help remove this behavior as well as some of the unpredictability of your application.

To take advantage of these values there is a [z-index mixin](https://projectclarion.com/framework/documentation/mixins/z-index.html).

```scss
$z-indexes: (
    sub: -1,
    none: 0,
    xxs: 1,
    xs: 10,
    sm: 50,
    md: 100,
    lg: 200,
    xl: 500,
    trump: 99999
) !default;
```

## Borders

### Default Border

The default border variable is a little unique from the other variables in that it uses values from other variables. For example, the `size` uses values from the [`$spacing-sizes`](#spacing) variable and the `color` variable uses values from the [`$theme-colors`](#colors) variable.

```scss
$border: (
    style: solid,
    size: xxxs,    // from $spacing-sizes
    color: light lighter
) !default;
```

### Border Radiuses

These are pretty straight forward. This is a way to keep your rounded corners consistent throughout your application.

```scss
$border-radiuses: (
    none: 0,
    sm: 0.25rem,  // 4px
    md: 0.5rem,   // 8px
    lg: 0.75rem,  // 12px
    pill: 10rem,  // 160px
    circle: 50%
) !default;
```

#### Usage

Use the border radius [mixins](https://projectclarion.com/framework/documentation/mixins/border-radius.html) to take advantage of these values.

## Shadows

Shadows can add very attractive depth and interaction to your design. Keeping them consistent from one component to another can be a little frustrating. They can also create a great deal of clutter in your code. Abstracting them into a reusable place and using them with the `shadow()` mixin will keep your UI consistent and your code clean.

```scss
$shadows: (
    none: none,
    inner: "inset 1px 2px 4px rgba(0, 0, 0, 0.10)",
    outline: "0 0 0 3px rgba(0, 0, 0, 0.5)",
    xs: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
    sm: "0 3px 5px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)",
    md: "0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.10)",
    lg: "0 15px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 40px rgba(0, 0, 0, 0.20)"
) !default;
```

## Transitions

This set of values is where you can keep track of your transition speeds for your application. Having consistent transitions throughout you application can really give it a polished look and feel.

```scss
$transitions: (
    xslow: 2s,
    slow: 1s,
    med: .5s,
    fast: .3s,
    xfast: .1s
) !default;
```

## Customizing

As you can see, all of these variables are decorated with the `!default` attribute. This means you can easily override them with your own values. When you create a custom theme:

- Create a separate file for all of your reusable values
- Make sure your customizations do not have the `!default` attribute
- Compile your SASS. When the SASS compiler builds your CSS file, it will pick up your custom values and override the default values.

That's it!
