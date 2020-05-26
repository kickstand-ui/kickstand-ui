# Ember

## Adding Styles

Adding the Kickstand UI styles to your Ember app is fairly straight forward thanks to the `ember-cli-sass` package. If you haven't already configured your project for SASS run the following command to install the required packages:

```bash
ember install ember-cli-sass
```

Change the file name `app/styles/app.css` to `app/styles/app.scss` and import the Kickstand UI styles into your `app.scss` file:

```css
@import 'kickstand-ui/src/scss/styles';
```

_Alternately_, you can specify the path to the source in the include paths in your `ember-cli-build.js`:

```js
var app = new EmberApp({
    sassOptions: {
        extension: 'scss',
        includePaths: [
            'node_modules/kickstand-ui/src/scss'
        ]
    }
});
```

## Adding Components

::: tip Note
This is an adaptation from the [Stencil documentation](https://stenciljs.com/docs/ember).
:::

Working with Kickstand UI in Ember is really easy thanks to the `ember-cli-stencil` addon. It handles:

- Importing the required files into your `vendor.js`
- Copying the component definitions into your `assets` directory
- Optionally generating a wrapper component for improved compatibility with older Ember versions

Start off by installing the Ember addon

```bash
ember install ember-cli-stencil
```

Now, when you build your application, Stencil collections in your dependencies will automatically be discovered and pulled into your application. You can just start using the custom elements in your `hbs` files with no further work needed. For more information, check out the [`ember-cli-stencil` documentation](https://github.com/alexlafroscia/ember-cli-stencil).